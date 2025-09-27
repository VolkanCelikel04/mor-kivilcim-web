import { API_CONFIG, ApiResponse, PaginatedResponse, ApiError, getAuthHeaders, buildApiUrl } from '../config/api';

// Generic API Request Function
const apiRequest = async <T = any>(
  endpoint: string,
  options: RequestInit = {},
  params?: Record<string, string>
): Promise<ApiResponse<T>> => {
  const url = buildApiUrl(endpoint, params);
  
  const config: RequestInit = {
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP Error: ${response.status}`,
        response.status,
        errorData
      );
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(
      error instanceof Error ? error.message : 'Network Error',
      0,
      error
    );
  }
};

// Authenticated API Request Function
export const authenticatedRequest = async <T = any>(
  endpoint: string,
  token: string,
  options: RequestInit = {},
  params?: Record<string, string>
): Promise<ApiResponse<T>> => {
  const url = buildApiUrl(endpoint, params);
  
  const config: RequestInit = {
    ...options,
    headers: {
      ...getAuthHeaders(token),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      if (response.status === 401) {
        // Token expired or invalid
        throw new ApiError('Unauthorized - Token expired', 401);
      }
      
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP Error: ${response.status}`,
        response.status,
        errorData
      );
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(
      error instanceof Error ? error.message : 'Network Error',
      0,
      error
    );
  }
};

// Authentication Service (DailyPositive API)
export const authService = {
  login: async (email: string, password: string): Promise<ApiResponse<{ token: string; user: any }>> => {
    return apiRequest(API_CONFIG.ENDPOINTS.LOGIN, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  register: async (userData: any): Promise<ApiResponse<{ token: string; user: any }>> => {
    return apiRequest(API_CONFIG.ENDPOINTS.REGISTER, {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  getProfile: async (token: string): Promise<ApiResponse<any>> => {
    return authenticatedRequest(API_CONFIG.ENDPOINTS.PROFILE, token, {
      method: 'GET',
    });
  },
};

// Support System Service
export const supportService = {
  getTickets: async (
    token: string,
    params?: {
      status?: string;
      priority?: string;
      page?: number;
      pageSize?: number;
    }
  ): Promise<ApiResponse<PaginatedResponse<any>>> => {
    const queryParams: Record<string, string> = {};
    if (params) {
      if (params.status && params.status !== 'all') queryParams.status = params.status;
      if (params.priority && params.priority !== 'all') queryParams.priority = params.priority;
      if (params.page) queryParams.page = params.page.toString();
      if (params.pageSize) queryParams.pageSize = params.pageSize.toString();
    }
    
    return authenticatedRequest(API_CONFIG.ENDPOINTS.SUPPORT_TICKETS, token, {
      method: 'GET',
    }, queryParams);
  },

  getCategories: async (): Promise<ApiResponse<any[]>> => {
    return apiRequest(API_CONFIG.ENDPOINTS.SUPPORT_CATEGORY_LIST, {
      method: 'GET',
    });
  },

  getStatistics: async (token: string): Promise<ApiResponse<any>> => {
    return authenticatedRequest(API_CONFIG.ENDPOINTS.SUPPORT_STATISTICS, token, {
      method: 'GET',
    });
  },

  sendMessage: async (
    token: string,
    ticketId: string,
    message: string,
    isInternal: boolean = false
  ): Promise<ApiResponse> => {
    return authenticatedRequest(`${API_CONFIG.ENDPOINTS.SUPPORT_MESSAGES}/${ticketId}/messages`, token, {
      method: 'POST',
      body: JSON.stringify({
        body: message,
        isInternal,
      }),
    });
  },

  updateTicketStatus: async (
    token: string,
    ticketId: string,
    status: number
  ): Promise<ApiResponse> => {
    return authenticatedRequest(`${API_CONFIG.ENDPOINTS.SUPPORT_MESSAGES}/${ticketId}`, token, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  },

  getTicketDetails: async (
    token: string,
    ticketId: string
  ): Promise<ApiResponse<any>> => {
    return authenticatedRequest(`${API_CONFIG.ENDPOINTS.SUPPORT_MESSAGES}/${ticketId}`, token, {
      method: 'GET',
    });
  },
};

// Export default apiRequest for custom requests
export default apiRequest;

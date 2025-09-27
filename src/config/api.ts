// Azure API Konfigürasyonu - DailyPositive API
export const API_CONFIG = {
  // Azure API Base URL - DailyPositive ile kullandığınız endpoint
  BASE_URL: process.env.REACT_APP_API_URL || 'https://mor-kivilcim-server-c7dggnb6ccdbb9ds.canadacentral-01.azurewebsites.net',
  
  // API Endpoints - DailyPositive API
  ENDPOINTS: {
    // Authentication (DailyPositive AuthController)
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    PROFILE: '/api/auth/profile',
    
    // Support System (DailyPositive AdminSupportController)
    SUPPORT_TICKETS: '/api/admin/support/tickets',
    SUPPORT_CATEGORIES: '/api/categories', // DailyPositive CategoriesController
    SUPPORT_MESSAGES: '/api/admin/support/tickets',
    SUPPORT_STATISTICS: '/api/admin/support/statistics',
    
    // Support Categories (DailyPositive SupportCategoryController)
    SUPPORT_CATEGORY_LIST: '/api/support/categories',
    
    // Test endpoints
    HEALTH_CHECK: '/api/test/health',
  },
  
  // Request Timeout (milliseconds)
  TIMEOUT: 10000,
  
  // Retry Configuration
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000,
};

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

// Error Types
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public response?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Request Headers Helper
export const getAuthHeaders = (token?: string) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return headers;
};

// API URL Helper
export const buildApiUrl = (endpoint: string, params?: Record<string, string>) => {
  const url = new URL(`${API_CONFIG.BASE_URL}${endpoint}`);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.append(key, value);
      }
    });
  }
  
  return url.toString();
};

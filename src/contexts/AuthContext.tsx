import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { adminAuthService } from '../services/apiService';

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  user: any | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing token in localStorage on app load
    const savedToken = localStorage.getItem('admin_token');
    const savedUser = localStorage.getItem('admin_user');
    
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (error) {
          console.error('Error parsing saved user:', error);
        }
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await adminAuthService.login(email, password);

      if (response.success && response.data) {
        const payload = response.data as {
          token?: string;
          user?: { id?: string; email?: string; name?: string; isAdmin?: boolean };
        };
        const newToken = payload.token;
        const userData = payload.user;

        if (!newToken || !userData || userData.isAdmin !== true) {
          return false;
        }

        setToken(newToken);
        setUser(userData);
        setIsAuthenticated(true);

        localStorage.setItem('admin_token', newToken);
        localStorage.setItem('admin_user', JSON.stringify(userData));

        return true;
      }

      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
  };

  const value: AuthContextType = {
    isAuthenticated,
    token,
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

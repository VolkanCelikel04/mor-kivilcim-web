import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface SecureAdminRouteProps {
  children: React.ReactNode;
}

const SecureAdminRoute: React.FC<SecureAdminRouteProps> = ({ children }) => {
  const { token, user } = useAuth();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        // IP kontrolü (opsiyonel)
        const allowedIPs = process.env.REACT_APP_ALLOWED_IPS?.split(',') || [];
        const currentIP = await getCurrentIP();
        
        // Admin kullanıcı kontrolü
        const isAdmin = user?.role === 'admin' || user?.email?.includes('admin');
        
        // Token geçerlilik kontrolü
        const isTokenValid = token && token.length > 10;
        
        // Tüm kontrolleri geçmeli
        const authorized = isAdmin && isTokenValid && (
          allowedIPs.length === 0 || allowedIPs.includes(currentIP)
        );
        
        setIsAuthorized(authorized);
      } catch (error) {
        console.error('Authorization check failed:', error);
        setIsAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthorization();
  }, [token, user]);

  // IP adresini almak için basit bir servis
  const getCurrentIP = async (): Promise<string> => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch {
      return 'unknown';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Güvenlik kontrolü yapılıyor...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Erişim Reddedildi</h1>
          <p className="text-gray-600 mb-4">Bu sayfaya erişim yetkiniz bulunmamaktadır.</p>
          <Navigate to="/" replace />
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default SecureAdminRoute;

import { useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';

export const useSessionTimeout = () => {
  const { logout } = useAuth();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const timeout = process.env.REACT_APP_SESSION_TIMEOUT 
        ? parseInt(process.env.REACT_APP_SESSION_TIMEOUT) 
        : 3600000; // 1 saat default

      timeoutRef.current = setTimeout(() => {
        console.warn('Session timeout - logging out');
        logout();
      }, timeout);
    };

    // Event listeners for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    events.forEach(event => {
      document.addEventListener(event, resetTimeout, true);
    });

    // Initial timeout
    resetTimeout();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      events.forEach(event => {
        document.removeEventListener(event, resetTimeout, true);
      });
    };
  }, [logout]);
};

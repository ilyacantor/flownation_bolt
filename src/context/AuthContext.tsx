import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isRegistered: boolean;
  toggleMode: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isRegistered, setIsRegistered] = useState(() => {
    const stored = localStorage.getItem('userMode');
    return stored === 'registered';
  });

  useEffect(() => {
    localStorage.setItem('userMode', isRegistered ? 'registered' : 'guest');
  }, [isRegistered]);

  const toggleMode = () => {
    setIsRegistered(prev => !prev);
  };

  return (
    <AuthContext.Provider value={{ isRegistered, toggleMode }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

import React, { ReactNode } from 'react';
import GlobalLayout from '../GlobalLayout';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <GlobalLayout>
      <div className="ir-auth-layout">{children}</div>
    </GlobalLayout>
  );
};

export default AuthLayout;

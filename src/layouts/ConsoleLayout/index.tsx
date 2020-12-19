import React, { ReactNode } from 'react';
import GlobalLayout from '../GlobalLayout';

interface ConsoleLayoutProps {
  children: ReactNode;
}

const ConsoleLayout = ({ children }: ConsoleLayoutProps) => {
  return (
    <GlobalLayout>
      <div className="ir-console-layout">{children}</div>
    </GlobalLayout>
  );
};

export default ConsoleLayout;

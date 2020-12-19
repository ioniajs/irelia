import React, { ReactNode, useEffect } from 'react';
import configs from '@/configs';

interface GlobalLayoutProps {
  children: ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  useEffect(() => {
    console.log(configs);
  }, []);

  return <div className="ir-global-layout">{children}</div>;
};

export default GlobalLayout;

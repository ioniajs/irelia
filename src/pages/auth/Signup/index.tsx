import AuthLayout from '@/layouts/AuthLayout';
import { Button } from 'antd';
import React from 'react';

export default () => {
  return (
    <AuthLayout>
      <Button type="primary">注册</Button>
    </AuthLayout>
  );
};

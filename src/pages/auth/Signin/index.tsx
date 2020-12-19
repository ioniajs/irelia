import AuthLayout from '@/layouts/AuthLayout';
import { Button } from 'antd';
import React from 'react';
import { useModel } from 'umi';

export default () => {
  const { signin } = useModel('user');
  return (
    <AuthLayout>
      <Button type="primary" onClick={signin}>
        登录
      </Button>
    </AuthLayout>
  );
};

import { request } from 'umi';

export const getCurrentUser = async () => {
  return request('/api/v1/user/test', {
    method: 'GET',
  });
};

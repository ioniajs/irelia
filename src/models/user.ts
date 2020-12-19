import { useState, useCallback } from 'react';
import { history } from 'umi';

export default function useUserModel() {
  const [user, setUser] = useState({});

  const signin = useCallback(() => {
    history.replace('/');
  }, []);

  const signout = useCallback(() => {
    history.replace('/auth/signin');
  }, []);

  return {
    user,
    signin,
    signout,
  };
}

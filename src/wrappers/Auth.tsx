import React, { ReactNode } from 'react';
import { Redirect, useModel } from 'umi';

const Auth = ({ children, match, route, location: { pathname } }) => {
  const { user } = useModel('user');

  console.log(route, match, pathname);

  if (user) {
    return (
      <div>
        <h1>Auth</h1>
        {children}
      </div>
    );
  } else {
    return <Redirect to="/auth/signin" />;
  }
};

export default Auth;

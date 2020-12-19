import React from 'react';
import { useModel } from 'umi';

const RightContent = () => {
  const { signout } = useModel('user');
  return (
    <div>
      <a onClick={signout}>退出</a>
    </div>
  );
};

export default RightContent;

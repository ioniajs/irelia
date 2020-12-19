import React from 'react';
import { useAccess, Access } from 'umi';

export default () => {
  const access = useAccess();

  return (
    <div>
      <h1>Role</h1>
      <ul>
        <Access
          accessible={access.canDeleteRole()}
          fallback={<div>Can not delete R1.</div>}
        >
          <li>R1</li>
        </Access>
        <li>R2</li>
        <li>R3</li>
      </ul>
    </div>
  );
};

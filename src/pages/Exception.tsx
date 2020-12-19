import React from 'react';

const Exception = props => {
  const errorCode = props.location.query.errorCode ?? 404;
  const errorMessage = props.location.query.errorMessage ?? '页面走丢了';
  return (
    <div>
      <h1>
        Exception: {errorCode} {errorMessage}
      </h1>
    </div>
  );
};

export default Exception;

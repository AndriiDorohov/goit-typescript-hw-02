import type { FC } from 'react';

const ErrorMessage: FC = () => {
  return (
    <p style={{ color: 'red', textAlign: 'center' }}>
      Something went wrong! Please try again later.
    </p>
  );
};

export default ErrorMessage;

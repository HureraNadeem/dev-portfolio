import React, { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Wrapper: FC<Props> = ({ children }) => {
  return (
    <div className="wrapper bg-main-bg-color py-8 sm:px-7 sm:pt-4 md:px-9 md:pt-4 lg:px-14 xl:px-16 2xl:px-24">
      {children}
    </div>
  );
};

export default Wrapper;

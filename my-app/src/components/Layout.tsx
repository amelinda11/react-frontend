import React, { FC } from 'react';

const Layout = (props: any) => {
  const { children } = props;

  return (
    <div className="w-full px-4 max-w-[85.375rem] mx-auto z-50 font-sans md:px-[4.5rem]">
      {children}
    </div>
  );
};

export default Layout;

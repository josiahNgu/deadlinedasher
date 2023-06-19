import React from 'react';
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }): React.ReactElement => {
  return <div className="h-100 flex justify-center flex-col">{children}</div>;
};
export default Layout;

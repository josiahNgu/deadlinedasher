import React from 'react';
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }): React.ReactElement => {
  return <div className="h-100 justify-center flex-col grid">{children}</div>;
};
export default Layout;

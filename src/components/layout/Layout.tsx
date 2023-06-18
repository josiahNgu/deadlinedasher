import React from 'react'
interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }): React.ReactElement => {
  return <div className="">{children}</div>
}

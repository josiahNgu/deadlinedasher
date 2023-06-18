import React from 'react'
interface Props {
  title: string
}

export const Header: React.FC<Props> = ({ title }): React.ReactElement => {
  return (
    <div className="">
      <h2>{title}</h2>
    </div>
  )
}

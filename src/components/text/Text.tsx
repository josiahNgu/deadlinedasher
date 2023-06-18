import React from 'react'
interface Props {
  content: string
}

export const Text: React.FC<Props> = ({ content }): React.ReactElement => {
  return (
    <div className="">
      <p>{content}</p>
    </div>
  )
}

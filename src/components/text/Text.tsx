import React from 'react';
interface Props {
  content: string;
}

const Text: React.FC<Props> = ({ content }): React.ReactElement => {
  return <p>{content}</p>;
};
export default Text;

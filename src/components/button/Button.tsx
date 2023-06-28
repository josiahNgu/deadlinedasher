import React, { ReactNode } from 'react';
interface Props {
  text: string;
  onClick?: () => void;
  children?: ReactNode;
  type?: 'default' | 'timer' | 'pill';
  disabled?: boolean;
}
const buttonClasses = {
  default:
    'bg-white max-w-max hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow',
  timer: 'border-solid border-2 border-black rounded-full',
  pill: 'text-sm rounded-full bg-violet-600 min-w-[60px] text-center text-white pointer-events-none p-1',
};
const Button: React.FC<Props> = ({
  text,
  onClick,
  type,
  children,
  disabled,
}): React.ReactElement => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses[type || 'default']}
    >
      {text}
      {children}
    </button>
  );
};
export default Button;

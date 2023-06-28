import classNames from 'classnames';
import React, { ReactNode } from 'react';
interface Props {
  text: string;
  onClick?: () => void;
  children?: ReactNode;
  type?: 'default' | 'timer' | 'pill' | 'secondary';
  disabled?: boolean;
  className?: string;
}
const buttonClasses = {
  default:
    'bg-white max-w-max hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow',
  timer: 'border-solid border-2 border-black rounded-full',
  pill: 'text-sm rounded-full bg-blue w-min h-min box-border text-center text-white pointer-events-none p-1 h-[20px]',
  secondary: 'bg-blue box-border rounded min-w-[60px] p-2',
};
const Button: React.FC<Props> = ({
  text,
  onClick,
  type,
  children,
  disabled,
  className,
}): React.ReactElement => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(className, buttonClasses[type || 'default'])}
    >
      {text}
      {children}
    </button>
  );
};
export default Button;

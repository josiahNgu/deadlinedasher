import React from 'react';
import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import classNames from 'classnames';

interface Props {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  name: string;
  validation: RegisterOptions;
  min?: number;
  max?: number;
}
const Input: React.FC<Props> = ({
  label,
  type,
  id,
  placeholder,
  validation,
  min,
  max,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const findInputError = (
    errors: FieldErrors<FieldValues>,
    name: string,
  ): FieldErrors<FieldValues> => {
    const filtered: FieldErrors<FieldValues> = Object.keys(errors)
      .filter((key) => key.includes(name))
      .reduce((cur, key) => {
        return Object.assign(cur, { error: errors[key] });
      }, {});
    return filtered;
  };
  const isFormInvalid = (err: FieldErrors<FieldValues>) => {
    if (Object.keys(err).length > 0) return true;
    return false;
  };
  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label || ''}
        </label>
        {isInvalid && (
          <InputError
            message={inputError.error?.message as string}
            key={inputError?.error?.message as string}
          />
        )}
      </div>
      <input
        id={id}
        type={type}
        className="w-full px-4 py-3 rounded-md bg-gray-300 text-violet-500 placeholder-skyblue-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent border-slate-300 placeholder:opacity-60 placeholder-violet-500"
        placeholder={placeholder}
        {...register(label, { ...validation })}
        min={min}
        max={max}
      />
    </div>
  );
};
const InputError: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
      {message}
    </div>
  );
};
export default Input;

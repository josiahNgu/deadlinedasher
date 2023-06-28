import { RegisterOptions } from 'react-hook-form';

export const numberInputValidation = ({
  name,
  min,
  max,
  message,
}: {
  name: string;
  min: number;
  max: number;
  message: string;
}): RegisterOptions => {
  return {
    required: message, // Set the required field validation with the provided error message
    min: {
      value: min,
      message: `Value must be greater than or equal to ${min}`, // Provide a custom error message for min validation
    },
    max: {
      value: max,
      message: `Value must be less than or equal to ${max}`, // Provide a custom error message for max validation
    },
  };
};

import { InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type UseFormReturn<TFieldValues extends FieldValues = FieldValues> = {
  register: UseFormRegister<any>;
  errors: FieldErrors<TFieldValues>;
};

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> &
  UseFormReturn & {
    labelClassName: string;
    icon?: React.JSX.Element;
  };

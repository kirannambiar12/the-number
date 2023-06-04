import React from "react";
import { InputFieldProps } from "./type";

const Textarea = ({
  name = "",
  disabled,
  errors,
  register,
  id,
  placeholder,
  icon,
  className,
  labelClassName,
}: InputFieldProps) => {
  return (
    <>
      <textarea
        className={className}
        id={id}
        placeholder=" "
        {...register(name, { required: true })}
        disabled={disabled}
        rows={5}
        cols={50}
      />
      {placeholder && (
        <label htmlFor={id} className={labelClassName}>
          <div className="flex">
            {icon} <span className="ml-3">{placeholder}</span>
          </div>
        </label>
      )}
      {errors?.[name] && (
        <span className="text-red-600 text-xs">
          {errors?.[name]?.message as string}
        </span>
      )}
    </>
  );
};

export default Textarea;

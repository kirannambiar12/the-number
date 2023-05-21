import React from "react";
import { InputFieldProps } from "./type";

const Textfield = ({
  name = "",
  type,
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
      <input
        type={type}
        className={className}
        id={id}
        placeholder=" "
        {...register(name, { required: true })}
        disabled={disabled}
      />
      <label htmlFor={id} className={labelClassName}>
        <div className="flex">
          {icon} <span className="ml-3">{placeholder}</span>
        </div>
      </label>
      {errors?.[name] && (
        <span className="text-red-600 text-xs">
          {errors?.[name]?.message as string}
        </span>
      )}
    </>
  );
};

export default Textfield;

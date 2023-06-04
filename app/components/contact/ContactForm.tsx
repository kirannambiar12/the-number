import EmailIcon from "@/app/global/assets/svgs/EmailIcon";
import Name from "@/app/global/assets/svgs/Name";
import Subject from "@/app/global/assets/svgs/Subject";
import Textarea from "@/app/global/components/fields/Textarea";
import Textfield from "@/app/global/components/fields/Textfield";
import { getSVGComponent } from "@/app/global/utils";
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    // resolver: yupResolver(loginValidationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = () => {};

  return (
    <form
      className="max-w-lg mx-auto flex flex-col relative px-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative mb-3">
        <Textfield
          type="text"
          name="name"
          className={`caret-white peer border-b-2 m-0 block h-[58px] w-full rounded bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-gray-200 transition duration-200 ease-linear focus:border-primary ${
            errors?.name
              ? "dark:border-red-600 animate-error-shake"
              : "focus:border-blue-700"
          } focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-gray-300 focus:outline-none peer-focus:text-primary dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]`}
          labelClassName="pointer-events-none absolute left-0 top-0 origin-[0_0] border-transparent px-3 pt-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-3 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:peer-focus:text-primary"
          id="name"
          placeholder="Full Name"
          register={register}
          icon={getSVGComponent(<Name />)}
          errors={errors}
        />
      </div>
      <div className="relative mb-3">
        <Textfield
          type="text"
          name="email"
          className={`caret-white peer border-b-2 m-0 block h-[58px] w-full rounded bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-gray-200 transition duration-200 ease-linear focus:border-primary ${
            errors?.email
              ? "dark:border-red-600 animate-error-shake"
              : "focus:border-blue-700"
          } focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-gray-300 focus:outline-none peer-focus:text-primary dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]`}
          labelClassName="pointer-events-none absolute left-0 top-0 origin-[0_0] border-transparent px-3 pt-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-3 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:peer-focus:text-primary"
          id="email"
          placeholder="Email Address"
          register={register}
          icon={getSVGComponent(<EmailIcon />)}
          errors={errors}
        />
      </div>
      <div className="relative mb-3">
        <Textarea
          type="text"
          name="message"
          className={`caret-white peer border-b-2 m-0 block h-[58px] w-full rounded bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-gray-200 transition duration-200 ease-linear focus:border-primary ${
            errors?.message
              ? "dark:border-red-600 animate-error-shake"
              : "focus:border-blue-700"
          } focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-gray-300 focus:outline-none peer-focus:text-primary dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] h-56`}
          labelClassName="pointer-events-none absolute left-0 top-0 origin-[0_0] border-transparent px-3 pt-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-3 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:peer-focus:text-primary"
          id="message"
          placeholder="Enter your message here..."
          register={register}
          icon={getSVGComponent(<Subject />)}
          errors={errors}
        />
      </div>
      <div>
        <button
          type="submit"
          className="flex mt-14 w-1/2 justify-center m-auto max-w-md rounded-full border-2 border-blue-600 bg-black transition ease-in-out delay-100 duration-300 hover:text-white text-blue-600 hover:bg-blue-600 p-3 text-center"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

import React from "react";
import { toastActions } from "@/app/store/Toast/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectToastInfo } from "@/app/store/Toast/selector";
import { typeToColorMapper, typeToIconMapper } from "./helper";

const Toast = () => {
  const dispatch = useDispatch();
  const toast = useSelector(selectToastInfo);

  const onClose = () => {
    dispatch(toastActions.closeToast());
  };

  return (
    <div
      id="toast-top-left"
      className={`flex items-center w-full max-w-md p-4 mb-4 text-${
        typeToColorMapper?.[toast?.type]
      }-500 bg-white rounded-lg shadow dark:text-${
        typeToColorMapper?.[toast?.type]
      }-400 dark:bg-${
        typeToColorMapper?.[toast?.type]
      }-800 fixed top-5 right-0 z-10 ml-auto mr-5 ${
        !toast?.message && "hidden"
      }`}
      role="alert"
    >
      <div
        className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-${
          typeToColorMapper?.[toast?.type]
        }-500 bg-${typeToColorMapper?.[toast?.type]}-100 rounded-lg dark:bg-${
          typeToColorMapper?.[toast?.type]
        }-800 dark:text-${typeToColorMapper?.[toast?.type]}-200`}
      >
        {typeToIconMapper?.[toast?.type]}
        <span className="sr-only">Check icon</span>
      </div>
      <div
        className={`ml-3 text-sm font-normal text-${
          typeToColorMapper?.[toast?.type]
        }-700 dark:text-${typeToColorMapper?.[toast?.type]}-400 `}
      >
        {toast?.message}
      </div>
      <button
        type="button"
        onClick={onClose}
        className={`ml-auto -mx-1.5 -my-1.5 bg-white text-${
          typeToColorMapper?.[toast?.type]
        }-400 hover:text-${
          typeToColorMapper?.[toast?.type]
        }-900 rounded-lg focus:ring-2 focus:ring-${
          typeToColorMapper?.[toast?.type]
        }-300 p-1.5 hover:bg-${
          typeToColorMapper?.[toast?.type]
        }-100 inline-flex h-8 w-8 dark:text-${
          typeToColorMapper?.[toast?.type]
        }-800 dark:hover:text-${typeToColorMapper?.[toast?.type]}-800 dark:bg-${
          typeToColorMapper?.[toast?.type]
        }-800 dark:hover:bg-${typeToColorMapper?.[toast?.type]}-700`}
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Toast;

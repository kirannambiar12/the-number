import { useRouter } from "next/router";
import React from "react";

const AlertModal = () => {
  const { push } = useRouter();

  const onClose = () => {
    push("/");
  };

  return (
    <>
      <div
        id="popup-modal"
        tabIndex={-1}
        className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
      >
        <div className="relative w-full max-w-2xl max-h-full m-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="p-6 text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                We are currently in the process of building this page to enhance
                your experience. While we work diligently on it, we encourage
                you to explore other sections of our website and take advantage
                of the features available there. We apologize for any
                inconvenience caused and appreciate your patience. Feel free to
                navigate through different pages to discover more about our
                services, products, or any other information you may be
                interested in. Thank you for your understanding as we strive to
                deliver the best possible user experience.
              </h3>
              <button
                onClick={onClose}
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 w-1/2 text-center focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm flex flex-col justify-center m-auto items-center px-5 py-2.5"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertModal;

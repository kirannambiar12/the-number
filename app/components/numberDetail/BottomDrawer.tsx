import React from "react";

const BottomDrawer = ({ isClosed, setIsClosed }: any) => {
  return (
    <div
      id="drawer-bottom-example"
      className={`fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 rounded-t-3xl pb-10 transform ease-in-out ${
        isClosed
          ? "transition-all duration-500 translate-y-full"
          : "transition-all duration-500 translate-y-0"
      }`}
      tabIndex={-1}
      aria-labelledby="drawer-bottom-label"
    >
      <div className="w-3/4 mx-auto relative">
        <input
          autoFocus
          type="text"
          name="comment"
          className={`mb-8 caret-white w-full peer border-2 m-0 block rounded bg-transparent bg-clip-padding px-3 text-base font-normal leading-tight text-gray-200 transition duration-200 ease-linear focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-gray-300 focus:outline-none peer-focus:text-primary dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] h-20`}
          id="comment"
          placeholder={"Enter your comment here..."}
        />
        <div className="flex">
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-800 w-36 text-center focus:outline-none font-medium rounded-lg text-sm items-center px-5 py-2.5"
          >
            Comment
          </button>
          <button
            onClick={() => setIsClosed(true)}
            type="button"
            className="text-white bg-gray-600 hover:bg-gray-700 w-36 text-center focus:outline-none focus:ring-gray-800 dark:focus:ring-gray-800 font-medium rounded-lg text-sm items-center px-5 py-2.5 ml-10"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomDrawer;

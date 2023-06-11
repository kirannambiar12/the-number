import Image from "next/image";
import React from "react";
import avatar from "@/app/global/assets/images/avatar.png";
import { convertToDate } from "@/app/global/utils";

const IndividualComment = ({ user, isReply }: any) => {
  // const onReplyClick = () => {
  //   setCommentData({
  //     firstName: "Anonymous",
  //     lastName: "Anonymous",
  //     type: "REPLY",
  //     ...(user?.parentCommentId && { parentCommentId: user?.parentCommentId }),
  //     nid: nid,
  //   });
  //   setIsClosed(false);
  // };
  return (
    <>
      <div
        className={`flex rounded-sm border border-white ${isReply && "ml-14"}`}
      >
        <Image
          className="rounded-full border border-blue-600 p-[2px] bg-white self-center relative -left-5"
          src={avatar}
          width={35}
          height={35}
          alt="User Avatar"
        />
        <div className="flex ml-2 justify-between w-full">
          <div className="flex items-center">
            <span>{`${user?.firstName} ${user?.lastName}`}</span>
          </div>
          {/* <div className="mr-5 flex items-center">
            <span
              onClick={onReplyClick}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Reply
            </span>
          </div> */}
          <div className="mr-5 flex items-center">
            <p className="text-xs text-gray-500 ml-5">
              {user?.updatedAt && convertToDate(user?.updatedAt)}
            </p>
          </div>
        </div>
      </div>
      <p className="ml-12 my-5">{user?.msg}</p>
    </>
  );
};

export default IndividualComment;

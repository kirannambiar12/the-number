import Image from "next/image";
import React from "react";
import avatar from "@/app/global/assets/images/avatar.png";

const IndividualComment = ({
  user,
  isReply,
  setIsClosed,
  setCommentData,
  nid,
}: any) => {
  const onReplyClick = () => {
    setCommentData({
      firstName: "Anonymous",
      lastName: "Anonymous",
      type: "REPLY",
      ...(user?.parentCommentId && { parentCommentId: user?.parentCommentId }),
      nid: nid,
    });
    setIsClosed(false);
  };

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
            <span>{`${user.firstName} ${user.lastName}`}</span>
            <p className="text-xs text-gray-500 ml-5">{user?.createdAt}</p>
          </div>
          <div className="mr-5 flex items-center">
            <span
              onClick={onReplyClick}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Reply
            </span>
          </div>
        </div>
      </div>
      <p className="ml-12 my-5">{user.message}</p>
    </>
  );
};

export default IndividualComment;

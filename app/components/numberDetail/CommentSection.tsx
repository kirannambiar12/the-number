import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import avatar from "@/app/global/assets/images/avatar.png";
import { getComments } from "./util";

const CommentSection = ({ uid }: { uid: string }) => {
  const { data } = useQuery(
    ["user-comments", uid],
    async () => await getComments(uid),
    {
      select: (resp) => resp?.userComments,
    }
  );

  const date = new Date().toDateString();

  return (
    <div
      className="m-auto bg-neutral-900 pt-44 pb-14 h-screen"
      id="commentSection"
    >
      <div className="container m-auto px-36">
        <h4 className="font-[Electronic] text-3xl mb-12 uppercase mt-10 -ml-5">
          Comments
        </h4>
      </div>
      <div className="container m-auto px-36">
        {data?.map((user: any) => (
          <div key={user.uid}>
            <div className="flex rounded-sm border border-white">
              <Image
                className="rounded-full border border-blue-600 p-[2px] bg-white self-center relative -left-5"
                src={avatar}
                width={35}
                height={35}
                alt="User Avatar"
              />
              <div className="flex ml-2 items-center">
                <span>{`${user.firstName} ${user.lastName}`}</span>
                <p className="text-xs text-gray-500 ml-5">{date}</p>
              </div>
            </div>
            <p className="ml-12 mt-5">{user.message}</p>
            {user?.comment?.map((data: any) => (
              <div key={data.uid} className="ml-12 mt-5">
                <div className="flex rounded-sm border border-white">
                  <Image
                    className="rounded-full border border-blue-600 p-[2px] bg-white self-center relative -left-5"
                    src={avatar}
                    width={35}
                    height={35}
                    alt="User Avatar"
                  />
                  <div className="flex ml-2 items-center">
                    <span>{`${user.firstName} ${user.lastName}`}</span>
                    <p className="text-xs text-gray-500 ml-5">{date}</p>
                  </div>
                </div>
                <p className="ml-12 mt-5">{data.message}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;

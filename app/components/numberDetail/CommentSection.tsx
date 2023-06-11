import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getComments } from "./util";
import layeredBg from "@/app/global/assets/svgs/hexagons.svg";
import IndividualComment from "./IndividualComment";
import BottomDrawer from "@/app/components/numberDetail/BottomDrawer";
import { auth } from "@/app/global/configStore/firebase";

type CommentDocTypes = {
  firstName: string;
  lastName: string;
  message: string;
  type: "REPLY" | "COMMENT";
  parentCommentId?: string;
  number?: string;
} | null;
const CommentSection = ({ number }: { number: string }) => {
  const [isClosed, setIsClosed] = useState<boolean>(true);
  const [commentData, setCommentData] = useState<CommentDocTypes>(null);

  const { data } = useQuery(
    ["user-comments", number],
    async () => await getComments(number),
    {
      select: (resp) => resp?.details,
    }
  );

  const onAddComment = () => {
    const user = auth?.currentUser?.displayName;
    const name = user?.split(" ");
    setCommentData({
      firstName: name?.[0] ?? "Anonymous",
      lastName: name?.[1] ?? "Anonymous",
      type: "COMMENT",
      number: number,
    } as any);
    setIsClosed(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${layeredBg.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "2% 50px",
      }}
      className="m-auto bg-neutral-900 pt-44 pb-14 h-screen"
      id="commentSection"
    >
      <div className="container m-auto px-36">
        <h4 className="font-[Electronic] text-3xl mb-12 uppercase mt-10 -ml-5">
          Comments
        </h4>
      </div>
      <div className="container m-auto px-36">
        <h5 className="mb-10 cursor-pointer" onClick={onAddComment}>
          Add a comment
        </h5>
        <div>
          {data?.comments?.map((user: any) => (
            <>
              <IndividualComment user={user} />
            </>
          ))}
        </div>
      </div>
      <BottomDrawer
        setIsClosed={setIsClosed}
        isClosed={isClosed}
        addCommentObj={commentData}
      />
    </div>
  );
};

export default CommentSection;

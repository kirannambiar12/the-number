import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getComments } from "./util";
import layeredBg from "@/app/global/assets/svgs/hexagons.svg";
import IndividualComment from "./IndividualComment";
import BottomDrawer from "@/app/components/numberDetail/BottomDrawer";

type CommentDocTypes = {
  firstName: string;
  lastName: string;
  message: string;
  parentCommentId: string;
  type: "REPLY" | "COMMENT";
} | null;
const CommentSection = ({ uid }: { uid: string }) => {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const [commentData, setCommentData] = useState<CommentDocTypes>(null);

  const { data } = useQuery(
    ["user-comments", uid],
    async () => await getComments(uid),
    {
      select: (resp) => resp?.userComments,
    }
  );

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
        {data?.comment?.map((user: any) => (
          <div key={user.uid}>
            <IndividualComment
              user={user}
              setIsClosed={setIsClosed}
              setCommentData={setCommentData}
            />
            {user?.comment?.map((data: any) => (
              <IndividualComment
                key={data.uid}
                user={{ ...data, userId: user?.userId }}
                isReply
                setIsClosed={setIsClosed}
                setCommentData={setCommentData}
              />
            ))}
          </div>
        ))}
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

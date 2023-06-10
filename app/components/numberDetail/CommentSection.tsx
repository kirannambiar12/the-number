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
  type: "REPLY" | "COMMENT";
  parentCommentId?: string;
  nid?: string;
} | null;
const CommentSection = ({ nid }: { nid: string }) => {
  const [isClosed, setIsClosed] = useState<boolean>(true);
  const [commentData, setCommentData] = useState<CommentDocTypes>(null);

  const { data } = useQuery(
    ["user-comments", nid],
    async () => await getComments(nid),
    {
      select: (resp) => resp?.userComments,
    }
  );

  const onAddComment = () => {
    setCommentData({
      firstName: "Anonymous",
      lastName: "Anonymous",
      type: "COMMENT",
      nid: nid,
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
        {data?.replies?.map((user: any) => (
          <div key={user.uid}>
            <IndividualComment
              nid={nid}
              user={user}
              setIsClosed={setIsClosed}
              setCommentData={setCommentData}
            />
            {user?.replies?.map((data: any) => (
              <IndividualComment
                key={data.uid}
                nid={nid}
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

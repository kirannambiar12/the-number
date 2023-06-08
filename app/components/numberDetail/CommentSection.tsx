import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getComments } from "./util";
import layeredBg from "@/app/global/assets/svgs/hexagons.svg";
import IndividualComment from "./IndividualComment";
import BottomDrawer from "@/app/components/numberDetail/BottomDrawer";

const CommentSection = ({ uid }: { uid: string }) => {
  const [isClosed, setIsClosed] = useState<boolean>(true);
  const [userName, setUserId] = useState(null);

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
        {data?.map((user: any) => (
          <div key={user.uid}>
            <IndividualComment
              user={user}
              setIsClosed={setIsClosed}
              setUserId={setUserId}
            />
            {user?.comment?.map((data: any) => (
              <IndividualComment
                key={data.uid}
                user={data}
                isReply
                setIsClosed={setIsClosed}
                setUserId={setUserId}
              />
            ))}
          </div>
        ))}
      </div>
      <BottomDrawer
        setIsClosed={setIsClosed}
        isClosed={isClosed}
        userName={userName}
      />
    </div>
  );
};

export default CommentSection;

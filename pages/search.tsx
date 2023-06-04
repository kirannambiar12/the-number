import { useRouter } from "next/router";
import { useState } from "react";
import {
  formatPhoneNumber,
  getIsMaintenanceMode,
  isNumber,
} from "@/app/global/utils";
import layeredBg from "@/app/global/assets/svgs/topography.svg";
import { useQuery } from "@tanstack/react-query";
import AlertModal from "@/app/global/components/modal/AlertModal";

export default function SearchPage() {
  const { push } = useRouter();
  const [query, setQuery] = useState<string>("");
  const isTenDigits = query.length === 12;

  const { data } = useQuery(
    ["maintenance-mode"],
    async () => await getIsMaintenanceMode()
  );

  if (data?.isInMaintainanceMode) return <AlertModal />;

  return (
    <div
      style={{
        backgroundColor: "#000000",
        backgroundImage: `url(${layeredBg.src})`,
      }}
      className="container-sm h-screen flex flex-col justify-center"
    >
      <div className="flex flex-col justify-center">
        <input
          type="string"
          placeholder="9XXX-XXX-XXX"
          className={`${
            isTenDigits &&
            "transform -translate-y-10 transition duration-700 ease-in-out"
          } block mx-auto w-1/3 h-16 rounded-full border-blue-600 border-4 outline-none text-3xl text-white text-center bg-black`}
          value={query}
          onChange={async (e) => {
            if (!isNumber(e.target.value)) return;
            setQuery(formatPhoneNumber(e.target.value));
          }}
        />
        {isTenDigits && (
          <button
            onClick={() => push(`number/${query.replace(/-/g, "")}`)}
            type="submit"
            className={
              "flex w-full justify-center m-auto mt-10 max-w-xs rounded-full border-2 border-blue-600 text-white bg-blue-600 p-3 text-center"
            }
          >
            Search
          </button>
        )}
      </div>
    </div>
  );
}

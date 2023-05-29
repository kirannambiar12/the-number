import { useRouter } from "next/router";
import { useState } from "react";
import search from "@/app/global/assets/svgs/search.svg";
import { formatPhoneNumber, isNumber } from "@/app/global/utils";
// import useAlgoliaSearch from "algoliasearch";
// import { useMutation } from "react-query";

export default function SearchPage() {
  const { push } = useRouter();
  const [query, setQuery] = useState<string>("");
  // const algolia = useAlgoliaSearch(
  //   "RT064VFTVB",
  //   "b831573080fd05573839f38a79a1bcdc"
  // );

  // const { mutate, data } = useMutation((query: string) =>
  //   algolia.search([
  //     {
  //       indexName: "numbers",
  //       query: query,
  //     },
  //   ])
  // );

  const isTenDigits = query.length === 12;

  return (
    <div className="container-sm h-screen flex flex-col justify-center">
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
            onClick={() => push(query.replace(/-/g, ""))}
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

import { useRouter } from "next/router";
import { useState } from "react";
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

  return (
    <div className="container-sm mt-28">
      <input
        type="number"
        placeholder="Search..."
        className="block mx-auto"
        value={query}
        max={10}
        min={10}
        onChange={async (e) => {
          setQuery(e.target.value);
        }}
      />
      {query?.length === 10 && (
        <button onClick={() => push(query)}>Search</button>
      )}
    </div>
  );
}

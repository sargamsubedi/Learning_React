import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function Search() {
  const [query, setQuery] = useState("hello");

  const debouncedQuery = useDebounce(query,1000);

  useEffect(() => {
        //    alert(debouncedQuery);

           console.log(debouncedQuery);
           

  }, [debouncedQuery]);

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
export default Search;
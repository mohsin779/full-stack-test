"use client";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, useRouter } from "next/navigation";
import { getProductByName } from "@/lib/products";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(null);
  const handleSearch = useDebouncedCallback(async (value) => {
    if (value) {
      const { products } = await getProductByName(value);
      const queryString = encodeURIComponent(JSON.stringify(products));
      router.push(`/searchResults?data=${queryString}`);
    } else {
      router.push("/");
    }
  }, 1000);
  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
        onChange={(e) => {
          setValue(e.target.value);
          handleSearch(e.target.value);
        }}
        value={value}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default Search;

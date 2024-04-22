"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { useSearchParams } from "next/navigation";
const page = () => {
  const searchParams = useSearchParams();
  const received = searchParams.get("data");
  const jsonData = JSON.parse(received);
  const [priceFilter, setPriceFilter] = useState("");
  const [searchResults, setSearchResults] = useState(jsonData);

  useEffect(() => {
    const receivedData = searchParams.get("data");
    const newData = receivedData ? JSON.parse(receivedData) : [];
    setSearchResults(newData);
  }, [searchParams]);

  const handleSelectPriceFilter = (e) => {
    const selectedValue = e.target.value;
    setPriceFilter(selectedValue);
    console.log("i am called");
  };

  const sortResults = async () => {
    console.log("price:", priceFilter);
    console.log("beefore sort:", searchResults);
    let sortedData;
    if (priceFilter === "Descending") {
      sortedData = [...searchResults].sort((a, b) => b.price - a.price);
    } else if (priceFilter === "Ascending") {
      sortedData = [...searchResults].sort((a, b) => a.price - b.price);
    }
    console.log("after sort:", sortedData);
    setSearchResults(sortedData);
  };

  useEffect(() => {
    console.log("hehe");
    console.log("searchResults:", searchResults);
    if (priceFilter != "") {
      sortResults();
    }
  }, [priceFilter]);
  return (
    <>
      <div className="flex flex-row justify-end m-5">
        <select
          className="select select-bordered w-full max-w-xs mr-5"
          value={priceFilter}
          onChange={handleSelectPriceFilter}
        >
          <option disabled selected>
            Price
          </option>
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </div>
      <div className="flex flex-row flex-wrap">
        {searchResults.length > 0 ? (
          searchResults.map((product) => <ProductCard product={product} />)
        ) : (
          <div className="flex items-center justify-cente">
            No results found
          </div>
        )}
      </div>
    </>
  );
};

export default page;

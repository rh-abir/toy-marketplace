import React, { useEffect, useState } from "react";
import AllToyDetails from "../AllToyDetails/AllToyDetails";
import Banners from "../Shared/Banners/Banners";
import useTitle from "../../customHook/useTitle";

const AllToys = () => {
  const [alltoys, setAlltoys] = useState([]);
  useEffect(() => {
    fetch("https://animal-toys-server-rosy.vercel.app/alltoysData")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 20) {
          // console.log(data.length)
          let miniData = data.slice(0, 20);
          setAlltoys(miniData);
        }

        setAlltoys(data);
      });
  }, []);

  // toySearchByName

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    fetch(`https://animal-toys-server-rosy.vercel.app/toySearchByName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlltoys(data);
      });
  };

  useTitle("Alltoy-page");

  return (
    <div className="">
      <Banners></Banners>
      <div className="form-control">
        <div className="input-group flex items-center justify-center">
          <input
            type="text"
            placeholder="Search Toy name..."
            className="input input-bordered"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch} className="btn btn-square btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* end search */}

      <div className="overflow-x-auto max-w-7xl mx-auto my-20">
        <table className="table  table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {alltoys.map((alltoy, indx) => (
              <AllToyDetails
                key={alltoy._id}
                alltoy={alltoy}
                indx={indx}
              ></AllToyDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

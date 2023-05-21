import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthPorviders";
import MyToyTr from "./MyToyTr";
import Swal from "sweetalert2";
import useTitle from "../../customHook/useTitle";
import Banners from "../Shared/Banners/Banners";

const MyToy = () => {
  const { user } = useContext(AuthContext);

  const [myToys, setMyToy] = useState([]);
  //   console.log(user);

  const url = `https://animal-toys-server-rosy.vercel.app/mytoys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setMyToy(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    console.log("click btn", id);

    // deletedCount

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        fetch(`https://animal-toys-server-rosy.vercel.app/deletetoy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const restdata = myToys.filter((tydata) => tydata._id !== id);
              setMyToy(restdata);
            }
          });
      }
    });
  };

  useTitle("Mytoy-page");

  return (
    <>
      <div>
        <Banners></Banners>
      </div>
      <div className="flex items-center justify-end max-w-7xl space-x-5">
        <h2>Sort By Price :</h2>
        <div>
          <button className="btn btn-sm btn-outline btn-warning mr-4">
            Descending{" "}
          </button>
          <button className="btn btn-sm  btn-outline btn-primary">
            Ascending{" "}
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mb-20">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <tbody>
              {/* row 1 */}
              {myToys.map((toydata) => (
                <MyToyTr
                  key={toydata._id}
                  toydata={toydata}
                  handleDelete={handleDelete}
                ></MyToyTr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyToy;

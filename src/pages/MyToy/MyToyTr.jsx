import React from "react";
import { Link } from "react-router-dom";

const MyToyTr = ({ handleDelete, toydata }) => {
//   console.log(toydata);

  const { description, photoUrl, quantity, toyName, _id, priceNum } = toydata;

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={photoUrl}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{toyName}</div>
            </div>
          </div>
        </td>
        <td>Price: ${priceNum}</td>
        <td>
          <span className="badge badge-ghost badge-sm">
            {description}
          </span>
        </td>
        <td> Quantity: {quantity}</td>
        <th>
          <button className="btn btn-xs btn-outline btn-info mr-3"><Link to={`/toyupdate/${_id}`}>Update</Link></button>
          <button onClick={() => handleDelete(_id)} className="btn  btn-xs btn-outline btn-error">Delete</button>
        </th>
      </tr>
    </>
  );
};

export default MyToyTr;

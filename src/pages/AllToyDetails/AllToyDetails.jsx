import React from "react";
import { Link } from "react-router-dom";

const AllToyDetails = ({ alltoy, indx }) => {
//   console.log(alltoy);
  const { sellerName, toyName, category, Price, _id, quantity} = alltoy;
  return (
    <>
      <tr>
        <th>{indx + 1}</th>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{category}</td>
        <td>${Price}</td>
        <td>${quantity}</td>
        <td><button className="btn btn-xs btn-outline btn-primary"><Link to={`/toydetails/${_id}`}>View Details</Link></button></td>
      </tr>
    </>
  );
};

export default AllToyDetails;

import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";

const ToyDetails = () => {
  // const id = useParams()
  // console.log(id)
  const loadeData = useLoaderData();
  console.log(loadeData);

  const {
    Price,
    category,
    description,
    photoUrl,
    quantity,
    rating,
    sellerEmail,
    sellerName,
    toyName,
  } = loadeData;

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1>This is Toy Details page </h1>

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img src={photoUrl} className="rounded-lg shadow-2xl w-[600px] h-[500px]" />
          <div className="space-y-4	">
            <h1 className="text-5xl font-bold">{description}</h1>
            <p className="text-2xl">Toy Name: {toyName}</p>
            <p className="">Seller Name: {sellerName}</p>
            <p className="">Seller Email: {sellerEmail}</p>

            <div className="flex gap-4">
              <p className="font-semibold">Price: ${Price}</p>
              <p className="font-semibold">Category : {category}</p>
              <p className="font-semibold">Quantity: {quantity}</p>
              <p className="text-yellow-700">
                <Rating
                  initialRating={rating}
                  readonly
                  emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                  fullSymbol={<FaStar></FaStar>}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;

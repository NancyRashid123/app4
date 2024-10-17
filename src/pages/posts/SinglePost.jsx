import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const { id } = useParams();
  const [counter, setCounter] = useState(0);
  const{data} = useQuery({
    queryKey: ['posts'],
    queryFn: () =>  axios.get(`https://fakestoreapi.com/products/${id}`),
})
console.log(data);

  return (
    <div className="container">
      <div className="singlePost">
        <div className="singlePost-image">
          <img src={data?.data?.image} alt="" />
        </div>
        <div className="singlePost-content">
          <h2>{data?.data?.title}</h2>
          <p>{data?.data?.description}</p>
          <span>Price: {data?.data?.price} $ </span>
          <div className="singlePost-counter">
            <span>{counter}</span>
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

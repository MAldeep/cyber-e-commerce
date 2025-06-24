import React from "react";

export default function AddToCart({className}) {
  return (
    <button 
    onClick={(e)=>{
      e.stopPropagation()
    }}
    className={className}>
      Add To Cart
    </button>
  );
}

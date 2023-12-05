import React from "react";
import { incrementBasket, decrementBasket, removeItem } from "../redux/features/basketslice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Product = ({ name, amount, price, image }) => {
    const count = useSelector((state) => state.basket.product.amount)
    const dispatch=useDispatch()
    // console.log(count); 
  return (
    <div className="flex justify-between mt-8">
      <img src={image} alt="" className="w-40" />
      <div className="flex  items-center gap-2">
        <p>{name}</p>
        <p>${price}</p>
        <button onClick={()=> dispatch(removeItem(name))} className="bg-red-600 px-2 rounded-lg text-white">
          Remove
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={()=> dispatch(decrementBasket(name))}  className="border p-2">-</button>
        <p className="text-2xl">{amount}</p>
        <button onClick={()=> dispatch(incrementBasket(name))} className="border p-2">+</button>
      </div>
    </div>
  );
};

export default Product;

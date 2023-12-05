import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const BasketProduct = () => {
  const { product, total } = useSelector((store) => store.basket);
  console.log(product);

  return (
    <div className="">
      <h1 className="text-center mt-8 text-3xl">
        {product.length == 0 ? "No item left bro!" : ""}
      </h1>
      {product.map((item) => {
        const { name, price, image, amount } = item;
        return (
          <Product
            className=""
            key={new Date().getTime() + Math.random()}
            name={name}
            price={price}
            image={image}
            amount={amount}
          />
        );
      })}
      <hr />
      <div className="mt-4 text-3xl flex justify-between ">
        <h1 className="">{product.length == 0 ? "" : "Total:"}</h1>
        <h1 className="">
          {product.length == 0 ? "" : `$${total.toFixed(2)}`}
        </h1>
      </div>
    </div>
  );
};

export default BasketProduct;

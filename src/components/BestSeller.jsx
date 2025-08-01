import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    const onlyBestSellers = products.filter((product) => product.bestseller);
    setBestSellers(onlyBestSellers.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          The people have spoken — these are the must-haves everyone’s rocking.
          Don’t miss your chance to get in on the hype.
        </p>
      </div>

      {/* Rendering best sellers */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellers.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

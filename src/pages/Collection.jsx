import React, { useContext, useState } from "react";

import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { products } = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="Dropdown Icon"
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="accent-accent-color w-3"
                type="checkbox"
                name="category"
                id="category"
                value={"Men"}
              />
              Men
            </p>

            <p className="flex gap-2">
              <input
                className="accent-accent-color w-3"
                type="checkbox"
                name="category"
                id="category"
                value={"Women"}
              />
              Women
            </p>

            <p className="flex gap-2">
              <input
                className="accent-accent-color w-3"
                type="checkbox"
                name="category"
                id="category"
                value={"Kids"}
              />
              Kids
            </p>
          </div>
        </div>
        {/* Sub-category */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="accent-accent-color w-3"
                type="checkbox"
                name="category"
                id="category"
                value={"Topwear"}
              />
              Topwear
            </p>

            <p className="flex gap-2">
              <input
                className="accent-accent-color w-3"
                type="checkbox"
                name="category"
                id="category"
                value={"Bottomwear"}
              />
              Bottomwear
            </p>

            <p className="flex gap-2">
              <input
                className="accent-accent-color w-3"
                type="checkbox"
                name="category"
                id="category"
                value={"Winterwear"}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

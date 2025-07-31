import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="text-3xl font-medium">
        NEFO<span className="text-accent-color">SHOP</span>
      </Link>
    </div>
  );
};

export default Logo;

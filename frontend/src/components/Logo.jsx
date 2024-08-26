import React from "react";
import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <Link
      to={"/"} // depends on authStatus
      className={`${className} h-[70px] w-[70px] overflow-hidden rounded-xl`}
    >
      <img src="./logo2.png" alt="" className="h-full w-full object-contain" />
    </Link>
  );
}

export default Logo;

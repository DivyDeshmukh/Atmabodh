import React from "react";

function Container({ children, className }) {
  return (
    <div className={`${className} overflow-x-hidden mx-auto`}>{children}</div>
  );
}

export default Container;

import React from "react";

function Toast({ text, className }) {
  return (
    <div
      className={`absolute left-[-1000px] bottom-[150px] p-2 px-8 rounded-lg ${className} transition-all duration-200`}
    >
      <h3 className="text-sm">{text}</h3>
    </div>
  );
}

export default Toast;

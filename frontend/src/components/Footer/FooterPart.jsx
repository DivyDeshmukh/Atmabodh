import React from "react";

function FooterPart({ title, links }) {
  return (
    <div className="flex flex-col gap-2 w-fit text-left overflow-x-hidden">
      <h1 className="font-semibold text-white">{title}</h1>
      <ul className="flex flex-col gap-2 text-slate-400 font-light">
        {links.map((link, index) => (
          <li className="text-[11px]" key={index}>
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterPart;

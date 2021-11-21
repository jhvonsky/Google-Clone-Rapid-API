import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/images", text: "📸 Images" },
];

function Links() {
  return (
    <div className="flex sm:justify-around justify betwee items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          className="m-2 mb-0"
          activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb2"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
}

export default Links;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../context/ResultContextProvider";
import Loading from "./Loading";

function Results() {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const { pathname } = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, pathname]);

  if (isLoading) return <Loading />;

  switch (pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.map(({ link, title }, index) => (
            <div className="md:w-2/5 w-full" key={index}>
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.kength > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.map(({ links, title, id, source }) => (
            <div className="md:w-2/5 w-full" key={id}>
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <div className="flex gap-4">
                  <a href={source?.href} target="_blank" rel="noreferrer">
                    {source?.href}
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a
              className="sm:p-3 p-5"
              href={href}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
    default:
      return "Error";
  }
}

export default Results;

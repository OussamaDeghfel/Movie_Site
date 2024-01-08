import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const SlideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const SlideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={SlideLeft}
          className="bg-white left-0 absolute rounded-full opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block"
          size={35}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={SlideRight}
          className="bg-white right-0 absolute rounded-full opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block"
          size={35}
        />
      </div>
    </>
  );
};

export default Row;

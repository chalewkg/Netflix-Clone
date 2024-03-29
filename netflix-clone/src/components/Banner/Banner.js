import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import { containerClasses } from "@mui/material";
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(requests.fetchNetflixOriginals);
        // console.log(request);
        const randomIndex = Math.floor(
          Math.random() * request.data.results.length
        );
        //console.log(randomIndex);
        const randomMovie = request.data.results[randomIndex];
        setMovie(randomMovie);
        // console.log(randomMovie);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    // Check if the string exists and its length is greater than n
    return str?.length > n
      ? // If true, truncate the string and append "..."
        str.substr(0, n - 1) + "..."
      : // If false, return the original string
        str;
  }

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //   height: "100vh",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <h1 className="banner__description">
              {truncate(movie?.overview, 150)}
            </h1>
            <button className="banner__button play">Play</button>
            <button className="banner__button">My List</button>
          </div>
        </div>
        <div className="banner__fadeBottom" />
      </div>
    </>
  );
};

export default Banner;

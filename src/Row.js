import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [filmes, setFilmes] = useState([]);

  // acontece quando carregar as Rows
  useEffect(() => {
    // Pegando os objetos
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213

      console.log(request.data.results);
      setFilmes(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (filme) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(filme?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* row__posters */}

        {filmes.map((filme) => (
          <img
            key={filme.id}
            onClick={() => handleClick(filme)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? filme.poster_path : filme.backdrop_path
            }`}
            alt={filme.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

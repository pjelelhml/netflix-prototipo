import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

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

  console.table(filmes);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* row__posters */}

        {filmes.map((filme) => (
          <img
            key={filme.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? filme.poster_path : filme.backdrop_path
            }`}
            alt={filme.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

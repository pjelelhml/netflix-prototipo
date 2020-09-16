import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>paulohml</h1>
      <Row
        title="Originais NETFLIX"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Ação" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romances" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentários" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comédia" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;

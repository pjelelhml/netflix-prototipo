import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./requests";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      {}

      <Banner />

      <Row
        title="Originais NETFLIX"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
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

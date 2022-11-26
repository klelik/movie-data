import "./App.css";
import React, { useState } from "react";

let movieDataExport = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

function App() {
  const [movieData, setMovieData] = useState(movieDataExport);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [plot, setPlot] = useState("");
  const [cast, setCast] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [runtime, setRuntime] = useState("");

  const deleteItem = (movieName) => {
    setMovieData((current) => {
      const copy = { ...current }; // create a copy of state object
      delete copy[movieName];
      return copy;
    });
  };

  const submitMovie = () => {
    const newMovie = {
      rating,
      runtime,
      year,
      plot,
      cast,
    };

    setMovieData((current) => {
      let copy = { ...current };
      copy = { ...current, [title]: newMovie };
      setIsModalOpen(false);
      return copy;
    });
  };

  return (
    <div className="App">
      <div className={`modal ${isModalOpen && "is-active"}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <p className="title is-4 has-text-white">Enter new movie data</p>
          <div className="field">
            <label className="label has-text-white">Title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label has-text-white">title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter plot"
                value={plot}
                onChange={(e) => setPlot(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label has-text-white">Cast</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter cast"
                value={cast}
                onChange={(e) => setCast(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label has-text-white">Year</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label has-text-white">Rating</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label has-text-white">Runtime</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter runtime"
                value={runtime}
                onChange={(e) => setRuntime(e.target.value)}
              />
            </div>
          </div>
          <button
            className="button is-button is-info"
            onClick={() => submitMovie()}
          >
            Submit
          </button>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setIsModalOpen(false)}
        ></button>
      </div>
      <div className="column">
        <button
          className="button is-primary"
          onClick={() => setIsModalOpen(true)}
        >
          Add new Movie
        </button>
      </div>
      <div className="movie-list columns is-multiline">
        {Object.keys(movieData).map((x, i) => {
          return (
            <div className="movie-container column is-4 is-flex" key={i}>
              <div className="box">
                <button
                  className="button delete is-danger"
                  onClick={() => deleteItem(x)}
                ></button>
                <div className="movie-info">
                  <p className="title is-title is-4 has-text-centered">{x}</p>
                  <p className="rating is-subtitle is-4">
                    <b>Rating:</b> {movieData[x].rating}
                  </p>
                  <p className="runtime is-subtitle is-4">
                    <b>Runtime:</b> {movieData[x].runtime}
                  </p>
                  <p className="year is-subtitle is-4">
                    <b>Year:</b> {movieData[x].year}
                  </p>
                  <p className="plot is-subtitle is-4">
                    <b>Plot:</b> {movieData[x].plot}
                  </p>
                  <p className="cast is-subtitle is-4">
                    <b>Cast:</b> {movieData[x].cast}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;

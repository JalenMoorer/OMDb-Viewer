import React from 'react';

const DropDown = (props) => {
  const { movies, onMovieChange } = props;

  const movieList = movies.map((movie, i) => (
    <option key={movie.imdbID} id={movie.imdbID}>{movie.Title}</option>
  ));

  return (
    <div className="col-6">
      <div className="input-group-prepend">
        <select onChange={onMovieChange} className="form-control">
          {movieList}
        </select>
      </div>
  </div>

  );
}

export default DropDown;

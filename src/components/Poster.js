import React from 'react';

const Poster = (props) => {
  const {  title, year, poster } = props;

  return (
    <div className="col-6">
      <div className="card" style={{width: "18rem", height: "10rem"}}>
        <div className="card-block">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{year}</p>
          <div>
          <img className="card-img" src={poster} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poster;

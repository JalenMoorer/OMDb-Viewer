import React from 'react';

const Search = (props) => {
  const { search, onSubmit, onChange } = props;

  return (
    <div className="row">
     <div className="col-10">
       <input className="form-control"
         id="inlineFormInput"
         type="text"
         value={search}
         placeholder="Enter a Movie Name"
         onChange={onChange}
         name="search"
       />
   </div>
   <div className="col-2">
     <button
       type="submit"
       name="submit"
       onClick={onSubmit}
       className="btn btn-outline-primary form-control">
       Search
     </button>
   </div>
  </div>

  );
}

export default Search;

import React, { Component } from 'react';

import DropDown from '../components/DropDown';

class DropDownContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.onMovieChange();
  }

  render() {
    const { movies, onMovieChange } = this.props;
    return (
      <DropDown
        movies={movies}
        onMovieChange={onMovieChange}
      />
    );
  }
}

export default DropDownContainer;

import React, { Component } from 'react';
import { API_KEY } from './config.js';
import axios from 'axios';

import Search from './components/Search';
import DropDown from './components/DropDown';
import DropDownContainer from './containers/DropDownContainer';
import Poster from './components/Poster';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      search: '',
      loading: false,
      movies: null,
      currentMovie: {
        title: null,
        year: null,
        poster: null
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleMovieChange = this.handleMovieChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSearch(search) {
    console.log('Search Called' + search);
    try {
        const getMovies = axios(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);

          const movies = await getMovies;
          console.log('Search Done');

        this.setState({ movies: movies.data.Search, loading: false });
    }
    catch (e) {
      alert('Movie could not be found');
      this.setState({ loading: false});
    }
  }

  handleChange(e) {
     this.setState({[e.target.name]: e.target.value});
   }

  handleMovieChange(e) {
    const { movies } = this.state;
    console.log('handle movie changed called');
    let title;

    if (typeof e === 'undefined')
      title = movies[0].Title
    else
      title = e.target.value

    title = movies.find(movie => movie.Title === title);


    this.setState({ currentMovie: {
        title: title.Title,
        year: title.Year,
        poster: title.Poster
      }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('Submit clicked');
    this.setState({loading: true});
    this.handleSearch(this.state.search);
  }


  render() {

    return (
      <div className="container">
        <Search
          search={this.state.search}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <div className="container-fluid">
            { this.state.movies ?
            <div className="row">
              <DropDownContainer
                movies={this.state.movies}
                onMovieChange={this.handleMovieChange}
              />
              <Poster
                title={this.state.currentMovie.title}
                year={this.state.currentMovie.year}
                poster={this.state.currentMovie.poster}
              />
            </div>
              : ''
            }
        </div>
      </div>
    );
  }
}

export default App;

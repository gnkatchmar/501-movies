import React, { Component } from 'react';
import './App.css';
import Details from './Details';

// http://www.omdbapi.com/?apikey=[yourkey]&
const API_KEY = '3db77742';
const url = `http://www.omdbapi.com/?apikey=${API_KEY}&`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      movies: [],
      selectedId: null,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    
        fetch(`${url}s='Star Wars'&plot=short&r=json`)
          .then(res => res.json())
          .then(movies => {
            return Promise.all(movies.Search.map(movie => {
              return fetch(`${url}i=${movie.imdbID}&plot=short&r=json`)
                    .then(res => res.json());
            }));
          })
          .then(movies => {
            this.setState({ movies: movies, loading: false });
          });
  }

  clear = () => {
    this.setState({
      selectedId: null,
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.loading && <div>Loading...</div>}
        {this.state.error &&
          <div>
            {this.state.error}
          </div>}

        {!this.state.selectedId && this.state.movies.map(({ imdbID, Poster, Title, Director }) => {
          return (
            <div key={imdbID} onClick={() => this.setState({selectedID: imdbID})}>
              <img src={`${Poster}`} />
              <div>
              <a href={Title} target="">
                {Title}
                </a>
                <br />
                Directed by: {Director}
                <hr />
              </div>
            </div>
          );
        })}
        
        {
          this.state.selectedId && <Details imdbID={this.state.selectedId} onClear={this.clear} />
        }
      </div>
    );
  }
}

export default App;

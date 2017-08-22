import React, { Component } from "react";

// http://www.omdbapi.com/?apikey=[yourkey]&
const API_KEY = '3db77742';
const url = `http://www.omdbapi.com/?apikey=${API_KEY}&`

class Details extends Component {

  state = {
    loading: true,
    error: true,
    data: {},
  };

  mount = false;

  componentDidMount() {
    this.mount = true;

    return fetch(`${url}s='Star Wars'&plot=short&r=json`).then(res => res.json()).then(
      movies => {
        if (!this.mount) return;

        this.setState({
          loading: false,
          data: movies[this.props.imdID],
        });
      },
      e => {
        if (!this.mount) return;

        this.setState({
          loading: false,
          error: "Failed to load data " + e.message,
        });
      },
    );
  }

  componentWillUnmount() {
    this.mount = false;
  }

   render() {
    return (
      <div>
        sssssssssssssssss
      
      
        <button onClick={this.props.onClear}>Clear</button>
      </div>
    );
  }
  debugger;
}

export default Details;
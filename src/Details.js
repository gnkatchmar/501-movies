import React, { Component } from "react";

// http://www.omdbapi.com/?apikey=[yourkey]&
const API_KEY = '3db77742';
const url = `http://www.omdbapi.com/?apikey=${API_KEY}&`

const wrapImage = RenderComponent => {
  class WrappedRenderComponent extends Component {
    state = {
      loading: true,
      error: true,
      data: {},
    };

    mount = false;

    componentDidMount() {
      this.mount = true;

      return fetch(url + "s='Star Wars'&plot=short&r=json").then(res => res.json()).then(
        movies => {
          if (!this.mount) return;

          this.setState({
            loading: false,
            data: movies[this.props.imdbID],
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
        <RenderComponent
          {...this.props}
          {...this.state}
        />
      );
    }
  }
  return WrappedRenderComponent;
};

class Details extends Component {
  componentDidMount() {
    
  }
  
  render() {
    if (this.props.loading) return <div>Loading Details</div>;

    return (
      <div>
        
      
        <button onClick={this.props.onClear}>Clear</button>
      </div>
    );
  }
}

const NewWrappedComponenet = wrapImage(Details);

export default NewWrappedComponenet;
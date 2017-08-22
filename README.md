<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Let's Go to the Movies
===

## Description

Create an app that shows movie data from http://www.omdbapi.com/. (For example, Star Wars movies:

```js

const API_KEY = '3db77742';
const url = `http://www.omdbapi.com/?apikey=${API_KEY}&`

fetch(url)
 .then(res => res.json())
 .then(movies => {
     ...
 });
```
 
You are free to query the data for a genre, actor, whatever that you want.

* Use `create-react-app` to create your react app project

* Your need to manage state for:
  * `loading` - indicates app should display "loading" info
  * `movies` - the list of movies to display
 
* Decompose into meaningful components (logical parts). Use multiple modules when it makes sense
* Use `key` to track list items (goes on top-level component tag or element under `map(` operation

* Load data in `componentDidMount`.
* `onClick` change out from one component showing all listings to single component showing movie data
* Specific movie data should be loaded again in `componentDidMount` of second component
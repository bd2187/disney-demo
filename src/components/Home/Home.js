import React, { Component } from 'react';
import API_KEY from '../../config/api';
import JumboCarousel from './JumboCarousel/JumboCarousel';
import CategoryCarousel from './CategoryCarousel/CategoryCarousel';

function endpoint(listID) {
  return `https://api.themoviedb.org/4/list/${listID}?page=1&api_key=${API_KEY}`;
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      newAndUpcoming: [],
      animalKingdom: []
    };
  }
  componentDidMount() {
    fetch(endpoint(31509))
      .then(results => results.json())
      .then(json => this.setState({ animalKingdom: json.results }));

    fetch(endpoint(31508))
      .then(results => results.json())
      .then(json => this.setState({ newAndUpcoming: json.results }));

    fetch(endpoint(31506))
      .then(results => results.json())
      .then(json => this.setState({ favorites: json.results }));
  }
  render() {
    return (
      <div>
        <JumboCarousel />
        <CategoryCarousel
          category={'Animal Kingdom'}
          films={this.state.animalKingdom}
        />
        <CategoryCarousel
          category={'New and Upcoming'}
          films={this.state.newAndUpcoming}
        />
        <CategoryCarousel
          category={'All Time Favorites'}
          films={this.state.favorites}
        />
      </div>
    );
  }
}

export default Home;

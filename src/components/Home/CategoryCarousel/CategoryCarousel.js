import React from 'react';
import Coverflow from 'react-coverflow';
import './CategoryCarousel.css';

function renderFilms(arr) {
  return arr.map(function(film) {
    return (
      <img
        key={film.id}
        src={`https://image.tmdb.org/t/p/w342//${film.poster_path}`}
        alt=""
      />
    );
  });
}

function CategoryCarousel({ category, films }) {
  return (
    <div className="category-carousel">
      <h4 style={{ margin: '.5em 0' }}>
        {category}
      </h4>
      <Coverflow
        width="100%"
        height="500"
        displayQuantityOfSide={2}
        navigation={true}
        enableScroll={false}
        clickable={true}
        active={0}
      >
        {renderFilms(films)}
      </Coverflow>
    </div>
  );
}

export default CategoryCarousel;

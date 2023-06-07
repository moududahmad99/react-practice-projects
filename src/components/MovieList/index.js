import React, { useState } from 'react';
import './Style.css';

const moviesData = [
    {
        title: 'The Hulk',
        genre: 'Action',
        description: 'Description of The Hulk',
        poster: './assets/movieList3.jpg',
    },
    {
        title: 'John Wick IV',
        genre: 'Action',
        description: 'Description of John Wick IV',
        poster: './assets/movieList1.jpg',
    },
    {
        title: 'How I Met Your Mother',
        genre: 'Comedy',
        description: 'Description of How I Met Your Mother',
        poster: './assets/movieList4.jpg',
    },
    {
        title: 'Intersteller',
        genre: 'Fiction',
        description: 'Description of Intersteller',
        poster: './assets/movieList5.jpg',
    },
    {
        title: 'Inception',
        genre: 'Action',
        description: 'Description of Inception',
        poster: './assets/movieList6.jpg',
    },
    {
        title: 'Captain America',
        genre: 'Drama',
        description: 'Description of Captain America',
        poster: './assets/movieList2.jpg',
    },
    {
        title: 'The Lord Of the Rings',
        genre: 'Drama',
        description: 'Description of The Lord Of the Rings',
        poster: './assets/movieList8.jpg',
    },
    {
        title: 'The Dark Night',
        genre: 'Drama',
        description: 'Description of The Dark Night',
        poster: './assets/movieList7.jpg',
    },
    {
        title: 'John Wick IV',
        genre: 'Action',
        description: 'Description of John Wick IV',
        poster: './assets/movieList1.jpg',
    },
    {
        title: 'The Hulk',
        genre: 'Action',
        description: 'Description of The Hulk',
        poster: './assets/movieList3.jpg',
    },
    {
        title: 'How I Met Your Mother',
        genre: 'Comedy',
        description: 'Description of How I Met Your Mother',
        poster: './assets/movieList4.jpg',
    },
    {
        title: 'Captain America',
        genre: 'Drama',
        description: 'Description of Captain America',
        poster: './assets/movieList2.jpg',
    },
    {
        title: 'Inception',
        genre: 'Action',
        description: 'Description of Inception',
        poster: './assets/movieList6.jpg',
    },
    {
        title: 'Intersteller',
        genre: 'Fiction',
        description: 'Description of Intersteller',
        poster: './assets/movieList5.jpg',
    },
    {
        title: 'The Lord Of the Rings',
        genre: 'Drama',
        description: 'Description of The Lord Of the Rings',
        poster: './assets/movieList8.jpg',
    },
    {
        title: 'The Dark Night',
        genre: 'Drama',
        description: 'Description of The Dark Night',
        poster: './assets/movieList7.jpg',
    },
];

const MovieList = () => {
    const [genreFilter, setGenreFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleGenreFilterChange = (event) => {
        setGenreFilter(event.target.value);
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredMovies = moviesData.filter((movie) => {
        const genreMatch = genreFilter === '' || movie.genre === genreFilter;
        const titleMatch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
        return genreMatch && titleMatch;
    });

    return (
        <React.Fragment>
            <div className="movie-list-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="movie-list--filter">
                                <div className="movie-list-filter--inner">
                                    <label htmlFor="genre-filter">Filter by Genre:</label>
                                    <select id="genre-filter" value={genreFilter} onChange={handleGenreFilterChange}>
                                        <option value="">All</option>
                                        <option value="Action">Action</option>
                                        <option value="Drama">Drama</option>
                                        <option value="Comedy">Comedy</option>
                                        <option value="Fiction">Fiction</option>
                                    </select>
                                </div>
                                <div className="movie-list-filter--inner">
                                    <label htmlFor="search-input" id='search-label'>Search by Title:</label>
                                    <input type="text" id="search-input" value={searchTerm} onChange={handleSearchTermChange} />
                                </div>
                            </div>
                            <ul className='movie-list--items'>
                                {filteredMovies.map((movie) => (
                                    <li key={movie.title} className="movie-item">
                                        <h3 className="movie-title">{movie.title}</h3>
                                        <img src={movie.poster} alt={movie.title} className="movie-poster" />
                                        <p className="movie-description">{movie.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MovieList;

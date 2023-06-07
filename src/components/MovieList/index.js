import React, { useState } from 'react';
import './Style.css';

const moviesData = [
    {
        title: 'John Wick IV',
        genre: 'Action',
        description: 'Description of Movie 2',
        poster: './assets/movieList1.jpg',
    },
    {
        title: 'Captain America',
        genre: 'Action',
        description: 'Description of Movie 2',
        poster: './assets/movieList2.jpg',
    },
    {
        title: 'The Hulk',
        genre: 'Action',
        description: 'Description of Movie 2',
        poster: './assets/movieList3.jpg',
    },
    {
        title: 'The Lord Of the Rings',
        genre: 'Drama',
        description: 'Description of Movie 2',
        poster: './assets/movieList8.jpeg',
    },
    {
        title: 'Intersteller',
        genre: 'Fiction',
        description: 'Description of Movie 1',
        poster: './assets/movieList5.jpg',
    },
    {
        title: 'The Hulk',
        genre: 'Action',
        description: 'Description of Movie 2',
        poster: './assets/movieList3.jpg',
    },
    {
        title: 'The Lord Of the Rings',
        genre: 'Drama',
        description: 'Description of Movie 2',
        poster: './assets/movieList8.jpeg',
    },
    {
        title: 'How I Met Your Mother',
        genre: 'Comedy',
        description: 'Description of Movie 5',
        poster: './assets/movieList4.jpg',
    },
    {
        title: 'Inception',
        genre: 'Action',
        description: 'Description of Movie 2',
        poster: './assets/movieList6.jpg',
    },
    {
        title: 'The Hulk',
        genre: 'Action',
        description: 'Description of Movie 2',
        poster: './assets/movieList3.jpg',
    },
    {
        title: 'The Dark Night',
        genre: 'Action',
        description: 'Description of Movie 2',
        poster: './assets/movieList7.jpg',
    },
    {
        title: 'The Lord Of the Rings',
        genre: 'Drama',
        description: 'Description of Movie 2',
        poster: './assets/movieList8.jpeg',
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
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="movie-list-wrapper">
                            <div className="movie-list--filter">
                                <div>
                                    <label htmlFor="genre-filter">Filter by Genre:</label>
                                    <select id="genre-filter" value={genreFilter} onChange={handleGenreFilterChange}>
                                        <option value="">All</option>
                                        <option value="Action">Action</option>
                                        <option value="Drama">Drama</option>
                                        <option value="Comedy">Comedy</option>
                                        <option value="Fiction">Fiction</option>
                                    </select>
                                </div>
                                <div>
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


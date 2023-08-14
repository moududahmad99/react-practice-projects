
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { SiGooglehome } from 'react-icons/si'
import './Styles.css'

function GitHubSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [repositories, setRepositories] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchRepositories = async () => {
        try {
            const response = await fetch(`https://api.github.com/search/repositories?q=${searchTerm}`);
            const data = await response.json();
            setRepositories(data.items);
        } catch (error) {
            console.error('Error fetching repositories:', error);
        }
    };

    return (
        <div className="github-search">
            <h1>GitHub Search App</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search repositories"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button onClick={searchRepositories}>Search</button>
            </div>
            <div>
                <h2>Search Results</h2>
                <ul>
                    {repositories.map((repo) => (
                        <li key={repo.id}>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                {repo.full_name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Home Button */}
            <Link to='/' className='goBack'> <SiGooglehome /></Link>
        </div>
    );
}

export default GitHubSearch;

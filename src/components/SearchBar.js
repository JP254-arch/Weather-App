import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
            setCity('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center mb-5">
            <input 
                type="text"
                className="rounded-l-md p-2 w-64 border border-gray-300 focus:outline-none"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 text-white px-4 rounded-r-md">
                Search
            </button>
        </form>
    );
};

export default SearchBar;

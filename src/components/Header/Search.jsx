import React, { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState("");

    const onSearch = (event) => {
        event.preventDefault();
        if (query.trim() !== "") {
            window.location.href = process.env.REACT_APP_HOST_URL + '/search?q=' + query;
        }
    };

    return (
        <div className="flex space-x-4">
            <form onSubmit={onSearch} className="w-full flex">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar..."
                    className="text-rgx-text rounded-l-lg px-3 py-2 text-sm font-medium w-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-rgx-blue hover:outline-none hover:ring-1 hover:ring-rgx-blue"
                />
                <button
                    type="submit"
                    className="px-2 text-rgx-blue border border-gray-300 rounded-r-lg cursor-pointer focus:outline-none focus:ring-1 focus:ring-rgx-blue hover:ring-1 hover:ring-rgx-blue"
                >
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                </button>
            </form>
        </div>
    );
};

export default Search;

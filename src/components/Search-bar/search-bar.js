import React from 'react';

const SearchBar = () => (
    <form
        className="d-flex justify-content-center"
        style={{ width: '300px' }}
        onSubmit={(event) => event.preventDefault()}
    >
        <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
        />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
        </button>
    </form>
);

export default SearchBar;

import React, { useState } from 'react';
import { withRouter } from 'react-router';

function SearchBar(props) {
    const [term, setTerm] = useState("");

    const onInputChange = event => {
        setTerm(event.target.value);
    }

    const onSubmit = event => {
        event.preventDefault();
        let country = term.toLocaleLowerCase().replace(new RegExp(" ", "g"), "_");
        props.history.push(`/country/${country}`);
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <input
                    className="searchbar"
                    name="country"
                    placeholder="Search a country"
                    value={term}
                    onChange={onInputChange} />
            </form>
        </div>
    )
}

export default withRouter(SearchBar);

import React, { useContext } from 'react';
import { AppContext } from '../../contex/contex';
import Alert from '../Alert/Alert';
import Container from './Search.styles';

const Search = () => {
    const { handelSearch, theme } = useContext(AppContext);
    console.log(theme);
    return (
        <>
            {theme && <Alert />}
            <Container>
                <h2>Search Your Tech News</h2>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="e:g: react..."
                    onChange={(e) => handelSearch(e.target.value)}
                />
            </Container>
        </>
    );
};

export default Search;

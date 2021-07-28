import React, { useCallback, useEffect, useReducer } from 'react';
import reducer from '../reducer/reducer';

const AppContext = React.createContext();

const initialState = {
    isLoding: true,
    news: [],
    page: 0,
    search: '',
    numberOfPages: 0,
    theme: false,
};

// @TODO: Sorted by relevance, then points, then number of comments
const API_URL = 'https://hn.algolia.com/api/v1/search?page=';

// @TODO: Sorted by date, more recent first
// const API_URL = 'https://hn.algolia.com/api/v1/search_by_date?page=';

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // console.log(state.isLoding);
    // console.log(state.theme);

    const fetchData = useCallback(async () => {
        // console.log('loding.........');
        dispatch({ type: 'LODING' });
        try {
            const res = await fetch(`${API_URL}${state.page}&query=${state.search}`);
            const data = await res.json();
            // console.log(data);
            dispatch({ type: 'SET_DATA', payload: data });
        } catch (error) {
            console.log(error);
        }
    }, [state.page, state.search]);

    const nextPage = () => {
        dispatch({ type: 'NEXT_PAGE' });
    };

    const prePage = () => {
        dispatch({ type: 'PRE_PAGE' });
    };

    const removeItem = (id) => {
        // console.log('remove', id);
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };

    const handelSearch = (searchValue) => {
        dispatch({ type: 'SEARCH_ITEM', payload: searchValue });
    };

    const handelTheme = () => {
        dispatch({ type: 'SET_THEME' });
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <AppContext.Provider
            value={{
                ...state,
                nextPage,
                prePage,
                removeItem,
                handelSearch,
                handelTheme,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
// eslint-disable-next-line prettier/prettier


const reducer = (state, action) => {
    switch (action.type) {
        case 'LODING': {
            return {
                ...state,
                isLoding: true,
            };
        }

        case 'SET_DATA': {
            const { hits, page, nbPages } = action.payload;
            return {
                ...state,
                isLoding: false,
                news: hits,
                page,
                numberOfPages: nbPages,
            };
        }

        case 'NEXT_PAGE': {
            const nextPage = state.page + 1;

            return {
                ...state,
                page: nextPage < state.numberOfPages ? nextPage : 0,
            };
        }

        case 'PRE_PAGE': {
            const prePage = state.page - 1;

            return {
                ...state,
                page: prePage < 0 ? 0 : prePage,
            };
        }

        case 'REMOVE_ITEM': {
            const updateNews = state.news.filter((item) => item.objectID !== action.payload);
            // console.log(action.payload);

            return {
                ...state,
                news: updateNews,
            };
        }

        case 'SEARCH_ITEM': {
            const searchItem = action.payload;
            console.log(searchItem);

            return {
                ...state,
                search: searchItem,
            };
        }

        case 'SET_THEME': {
            return {
                ...state,
                theme: !state.theme,
            };
        }

        default:
            return state;
    }
};

export default reducer;

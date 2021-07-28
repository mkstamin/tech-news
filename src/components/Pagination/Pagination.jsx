import React, { useContext } from 'react';
import { AppContext } from '../../contex/contex';
import Container from './Pagination.styles';

const Pagination = () => {
    const { page, numberOfPages, prePage, nextPage } = useContext(AppContext);
    return (
        <Container>
            <div className="pagination">
                <button type="button" onClick={() => prePage()}>
                    {' '}
                    &#10094;{' '}
                </button>
                <span>
                    {' '}
                    {page}/{numberOfPages}{' '}
                </span>
                <button type="button" onClick={() => nextPage()}>
                    {' '}
                    &#10095;{' '}
                </button>
            </div>
        </Container>
    );
};

export default Pagination;

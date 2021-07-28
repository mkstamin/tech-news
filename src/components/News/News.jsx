import React, { useContext } from 'react';
import { AppContext } from '../../contex/contex';
import Loding from '../Loding/Loding';
import Container from './News.styles';

const News = () => {
    const { news, isLoding, removeItem } = useContext(AppContext);

    if (isLoding) return <Loding />;

    return (
        <Container>
            {news.map((one) => {
                const { objectID, author, title, url, num_comments } = one;
                return (
                    <div className="card" key={one.objectID}>
                        <div className="card__header">
                            <h3>{title || 'The news has no Title'}</h3>
                        </div>
                        <div className="card__body">
                            <p>
                                writen by - <i>{author}</i> |{' '}
                                <span>comments : {num_comments || 'NO COMMENTS'}</span>
                            </p>
                        </div>
                        <div className="card__footer">
                            <a href={url} rel="noreferrer" target="_blank">
                                {url !== null ? 'read more' : 'Not Found'}
                            </a>
                            <button type="button" onClick={() => removeItem(objectID)}>
                                Remove
                            </button>
                        </div>
                    </div>
                );
            })}
            <div />
        </Container>
    );
};

export default News;

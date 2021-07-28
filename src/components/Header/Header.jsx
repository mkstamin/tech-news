import React, { useContext } from 'react';
import { AppContext } from '../../contex/contex';
import Container from './Heder.styles';

const Header = () => {
    const { handelTheme } = useContext(AppContext);
    return (
        <Container>
            <div className="logo">
                <h2>Mks Tamin/Teach News</h2>
            </div>

            <label className="btn" htmlFor="demo">
                <input type="checkbox" id="demo" onClick={handelTheme} />
                <span className="btn--switch" />
            </label>
        </Container>
    );
};

export default Header;

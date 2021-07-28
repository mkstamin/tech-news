import Styled from 'styled-components';

const Container = Styled.div`
    position: relative;
    height: 100%;

    .loding-text {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, 100%);
        font-size: 3rem;
    }
`;

export default Container;

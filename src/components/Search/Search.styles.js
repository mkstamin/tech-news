import styled from 'styled-components';

const Container = styled.div`
    margin: 5% 10%;

    h2 {
        color: gray;
    }

    input[type='text'] {
        width: 30%;
        padding: 12px 20px;
        border: 1px solid #555;
        font-size: 18px;
        outline: none;
    }

    input[type='text']:focus {
        background-color: lightblue;
    }

    @media only screen and (max-width: 667px) {
        & input[type='text'] {
            width: 70%;
        }
    }
`;

export default Container;

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    background-color: #00000017;
    color: gray;
    padding: 1%;

    .logo {
        h2 {
            padding: 0;
            margin: 0;
        }
    }

    .btn {
        position: relative;
        display: inline-block;
        width: 55px;
        height: 30px;

        &--switch {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgb(241, 241, 241);
            transition: 0.4s;

            &:before {
                position: absolute;
                content: '';
                height: 26px;
                width: 45%;
                left: 2px;
                bottom: 2px;
                background-color: #0c0c0ced;
                transition: 0.4s;
            }
        }

        input {
            opacity: 0;
            width: 0;
            height: 0;

            &:checked + .btn--switch {
                background-color: #0c0c0ced;
            }

            &:checked + .btn--switch:before {
                background-color: rgb(241, 241, 241);
            }

            &:checked + .btn--switch:before {
                transform: translateX(100%);
            }
        }
    }

    @media only screen and (max-width: 667px) {
        & .logo h2 {
            font-size: small;
        }
    }
`;

export default Container;

import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    grid-gap: 2rem;
    margin: 0 10% 2%;

    & .card {
        color: white;
        padding: 3%;
        border: 1px solid gray;
        background-color: gray;
        box-shadow: 0px 2px 5px 0px black;

        &__header {
            h3 {
                margin: 0;
                font-weight: bolder;
                font-size: x-large;
            }
        }

        &__footer {
            a {
                text-decoration: none;
                color: #ff9c1c;
                margin-right: 1%;
            }
        }
    }

    @media only screen and (max-width: 667px) {
        & {
            grid-template-columns: 1fr;

            .card__header {
                h3 {
                    font-size: medium;
                }
            }
        }
    }
`;

export default Container;

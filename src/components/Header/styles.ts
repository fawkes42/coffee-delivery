import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        gap: 0.75rem;

        a {
            height: 3rem;
            padding: 1rem;
            border-radius: 6px;

            display: flex;
            align-items: center;
            justify-content: center;

            text-decoration: none;

            &:first-child{
                color: ${props => props.theme.colors.purple};
                background-color: ${props => props.theme.colors["purple-light"]};
            }

            &:nth-child(2){
                color: ${props => props.theme.colors["yellow-dark"]};
                background: ${props => props.theme.colors["yellow-light"]};
            }

            &:nth-child(3){
                color: ${props => props.theme.colors["yellow-dark"]};
                background: ${props => props.theme.colors["yellow-light"]};
            }
        }
    }

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        margin: 0 2rem;
    }
`
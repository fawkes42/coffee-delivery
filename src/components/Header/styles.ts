import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    width: ${props => props.theme.sizes.container};

    padding: 0 10rem;

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

            transition: all 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
            
            &:first-child{
                color: ${props => props.theme.colors.purple};
                background: ${props => props.theme.colors["purple-light"]};
            }

            &:nth-child(2){
                color: ${props => props.theme.colors["yellow-dark"]};
                background: ${props => props.theme.colors["yellow-light"]};
            }
        }
    }

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        width: 100%;
        padding: 0 2rem;
    }
`
import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.375rem;

    overflow-x: hidden;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        padding: 0 2rem;
    }
`;

export const ProductsTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.subtitle};

    @media (max-width: ${props => props.theme.breakpoints.xl}) {
        text-align: center;
        margin-top: 4rem;
    }
`;

export const ProductsList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    gap: 2.5rem;

    @media (max-width: ${props => props.theme.breakpoints.xxl}) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${props => props.theme.breakpoints.xl}) {
        margin: 0 auto;
    }

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
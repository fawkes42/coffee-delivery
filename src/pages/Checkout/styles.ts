import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    margin-top: 5rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        width: 100%;
        padding: 0 2rem;
    }
`;

export const CheckoutContent = styled.div`
    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`;
import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1rem;

    width: ${props => props.theme.sizes.container};

    padding: 0 10rem;
    margin-top: 5rem;

    @media (max-width: ${props => props.theme.breakpoints.xxl}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        padding: 0 2rem;
    }

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        padding: 0 3rem;
        width: 100vw;
    }
`;

export const CheckoutContent = styled.div`
    display: flex;
    flex-direction: column;

    max-width: ${props => props.theme.sizes.container};
`;

export const CheckoutCard = styled.div`
    display: flex;
    flex-direction: column;

    max-width: ${props => props.theme.sizes.container};
    width: 40rem;

    padding: 2.5rem;
    margin-top: 1rem;

    background: ${props => props.theme.colors.card};
    border-radius: 6px;
`;

export const CheckoutTitle = styled.div`
    display: flex;
    gap: 0.5rem;

    margin-bottom: 2rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        h3 {
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 1rem;
        }
    }


`

export const CheckoutFormContent = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 0.75rem;
`;

export const AddressInput = styled.input`
    width: ${props => props.width + 'rem'};
    padding: 1rem;
    border: 1px solid ${props => props.theme.colors.button};
    border-radius: 4px;

    background: ${props => props.theme.colors.input};

    font-size: 0.875rem;
`;

export const CheckoutPaymentTypeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
`;

export const CheckoutPaymentType = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    width: 11.125rem;
    height: 3.188rem;

    border-radius: 6px;

    background: ${props => props.theme.colors.button};

    cursor: pointer;

    span {
        font-size: 0.75rem;
        font-weight: 500;
        color: ${props => props.theme.colors.text};
    }
`;
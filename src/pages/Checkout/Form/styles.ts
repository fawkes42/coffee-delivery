import styled from "styled-components";

export const CheckoutCard = styled.div`
    max-width: 40rem;
    width: 100%;

    padding: 2.5rem;
    margin-top: 1rem;

    background: ${props => props.theme.colors.card};
    border-radius: 6px;
`;

export const CheckoutCardHeader = styled.div`
    display: flex;
    gap: 0.5rem;

    margin-bottom: 2rem;
`

export const CheckoutCardHeaderTitle = styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        h3 {
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 1rem;
        }

        p {
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 0.875rem;
            color: ${props => props.theme.colors.text};
        }
`

export const CheckoutFormContent = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 0.75rem;
`;

export const AddressInput = styled.input`
    max-width: ${props => props.width + 'rem'};
    width: 100%;
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
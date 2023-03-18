import styled from "styled-components";

export const CheckoutProductContainer = styled.div`
    display: flex;
    gap: 1rem;

    max-height: 5rem;
    width: 100%;

    padding: 0.25rem 0rem;
`;

export const CheckoutProductImage = styled.img`
    max-width: 5rem;
    max-height: 5rem;
`;

export const CheckoutProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    max-height: 5rem;
    width: 100%;
`;

export const CheckoutProductInfo = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
`;

export const BaseTextInfo = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
`;

export const CheckoutProductTitle = styled(BaseTextInfo)`
`;

export const CheckoutProductPrice = styled(BaseTextInfo)`
`;


export const CheckoutProductActions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-height: 2rem;
`;

export const RemoveFromCartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    width: 5.688rem;
    height: 2rem;

    font-size: 0.75rem;
    font-weight: 500;

    border: none;
    border-radius: 6px;

    background: ${props => props.theme.colors.button};

    cursor: pointer;

    span {
        font-size: 0.75rem;
        font-weight: 500;
        color: ${props => props.theme.colors.text};
    }
`;
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;

    min-width: 28rem;
    max-width: 28rem;
    width: 100%;

    padding: 2.5rem;
    margin-top: 1rem;

    background: ${props => props.theme.colors.card};

    border-top-left-radius: 6px;
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
    border-bottom-right-radius: 6px;
`

export const CartContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const CartContentDivider = styled.div`
    width: 100%;
    height: 1px;

    background: ${props => props.theme.colors.button};
`;

export const CartFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CartTotal = styled.div`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;

    p {
        font-size: 0.875rem;
        font-weight: 500;
        width: 50%;
        color: ${props => props.theme.colors.text};
    }

    strong {
        font-size: 1rem;
        font-weight: 500;
    }

    &:first-child {
        margin-top: 1rem;
    }

    p:last-of-type, strong:last-of-type {
        font-size: 1.25rem;
        font-weight: 800;
    }
`;

export const CartButton = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem 0;
    
    max-height: 2.875rem;

    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    color: ${props => props.theme.colors.yellow};

    background: ${props => props.theme.colors["yellow-light"]};

    border: none;
    border-radius: 6px;
`;

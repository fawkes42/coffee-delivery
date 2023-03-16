import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    max-width: 16rem;

    padding: 1.25rem;
    padding-top: 0;

    background: ${props => props.theme.colors.card};

    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 6px;
`;

export const ProductImage = styled.img`
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.25rem;
`;

export const ProductTagsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    gap: 0.5rem;
`;

export const ProductTag = styled.div`
    padding: 0.3rem 0.5rem;

    background: ${props => props.theme.colors["yellow-light"]};
    border-radius: 100px;

    font-size: 0.625rem;
    font-weight: 800;
    color: ${props => props.theme.colors["yellow-dark"]};
`;

export const ProductTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: ${props => props.theme.colors.title};
`;

export const ProductDescription = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    color: ${props => props.theme.colors.label};
`;

export const ProductPriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    height: 2.375rem;
`;

export const ProductPrice = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Baloo 2', cursive;
    color: ${props => props.theme.colors.text};

    display: inline-flex;
    align-items: center;
    gap: 0.2rem;

    & > span:first-child {
        font-size: 0.875rem;
    }
`;

export const ProductAddToCartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.375rem;
    height: 100%;

    border: 0;
    border-radius: 6px;
    padding: 0.5rem;

    color: ${props => props.theme.colors.purple};
    background-color: ${props => props.theme.colors["purple-light"]};

    cursor: pointer;
`;
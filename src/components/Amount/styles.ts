import styled from "styled-components";

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    background: ${props => props.theme.colors.button};

    border-radius: 6px;
    padding: 0.5rem;

    max-height: 100%;
    max-width: 4.5rem;


    & > button {
        border: none;
        background: none;
        cursor: pointer;
        font-size: 1.5rem;
        color: ${props => props.theme.colors.purple};

        &:hover {
            -moz-backdrop-filter: none !important; 
            -webkit-backdrop-filter: none !important; 
            backdrop-filter: none !important;
        }
    }

    & > input[type='number'] {
        background: none;
        border: none;
        text-align: center;

        max-width: 1.5rem;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: textfield;

        margin: 0;

        &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    }
`;
import styled from 'styled-components';

export const LayoutContainer = styled.div`
    max-width: 90rem;
    margin: 2.5rem auto;

    background: ${props => props.theme.colors.background};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
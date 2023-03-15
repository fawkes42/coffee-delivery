import styled from 'styled-components';

export const LayoutContainer = styled.div`
    max-width: calc(100vw - 20rem);
    margin: 0 auto;
    padding:  2rem;

    background: ${props => props.theme.colors['gray-800']};

    display: flex;
    flex-direction: column;
`
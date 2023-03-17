import styled from 'styled-components';

export const LayoutContainer = styled.div`
    max-width: ${props => props.theme.sizes.container};
    margin: 2.5rem auto;

    background: ${props => props.theme.colors.background};
`
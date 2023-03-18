import styled from "styled-components";

type ColorVariant = "yellow" | "yellow-dark" | "purple";

interface SuccessInfoItemProps {
    variant: ColorVariant;
}

export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    margin-top: 5rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        width: 100%;
        padding: 0 2rem;
    }
`;

export const SuccessHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        margin: 0 2rem;
        align-items: center;
    }
`;

export const SuccessTitle = styled.h1`
    font-size: 2rem;
    color: ${props => props.theme.colors["yellow-dark"]};
`;

export const SuccessSubtitle = styled.p`
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text};
`;

export const SuccessContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        justify-content: center;
    }
`;

export const SuccessInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    max-width: 32.875rem;
    width: 100%;

    padding: 2.5rem;

    position: relative;

    background: ${props => props.theme.colors.background};

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        border: 1px solid transparent;
        border-top-left-radius: 6px;
        border-top-right-radius: 36px;
        border-bottom-left-radius: 36px;
        border-bottom-right-radius: 6px;

        --yellow: ${props => props.theme.colors.yellow};
        --purple: ${props => props.theme.colors.purple};
        background: linear-gradient(to right, var(--yellow), var(--purple)) border-box;
        -webkit-mask:
            linear-gradient(#fff 0 0) padding-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
    }
`;

export const SuccessInfoItem = styled.div<SuccessInfoItemProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;


    svg {
        width: 2rem;
        height: 2rem;

        padding: 0.3rem;
        border: 0;
        border-radius: 50%;

        background: ${props => props.theme.colors[props.variant]};

        & > * {
            color: ${props => props.theme.colors.background};
        }
    }

    span {
        display: flex;
        flex-direction: column;

        p {
            font-size: 1rem;
            color: ${props => props.theme.colors.text};
            strong {
                font-family: inherit;
            }
        }
    }
`;

export const SuccessImg = styled.img`
    max-width: 30.75rem;
    max-height: 18.313rem;
`;

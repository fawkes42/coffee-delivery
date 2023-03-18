import styled from "styled-components";

type ColorVariant = "yellow" | "yellow-dark" | "purple" | "text";

interface IntroBenefitItemProps {
    variant: ColorVariant;
}

interface IntroProps {
    img: string;
}

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const IntroContainer = styled.div<IntroProps>`
    width: 100vw;
    margin-top: 1rem;

    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    ${props => props.theme.variant === "dark" ? `
        box-shadow: inset 100px 1px 100px 100px ${props.theme.colors.background};
    `
        : `
        box-shadow: inset 0 0 40px 10px ${props.theme.colors.background};
    `}
`;

export const IntroContent = styled.div`
    max-width: ${props => props.theme.sizes.container};
    min-height: 34rem;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        max-width: 50%;
        width: 29.75rem;
        height: 22.5rem;
    }

    @media (max-width: ${props => props.theme.breakpoints.xxl}) {
        margin-top: 3rem;
    }

    @media (max-width: ${props => props.theme.breakpoints.xl}) {
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        padding: 0 2rem;
    }

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        img {
            max-width: 100%;
            width: 100%;
            height: 100%;
        }
    }
`;

export const IntroInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    max-width: 36.75rem;

    h1 {
        font-size: 3rem;
    }

    p {
        margin-top: 1rem;
        font-size: 1.5rem;
        line-height: 1.5;
        color: ${props => props.theme.colors.subtitle};
    }

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        align-items: center;
        text-align: center;
    }
`;

export const IntroBenefits = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1.25rem;

    margin: 4.125rem 0;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        align-items: center;
        justify-content: center;
    }

    @media (max-width: ${props => props.theme.breakpoints.xl}) {
        width: 100%;
    }

`;

export const IntroBenefitItem = styled.div<IntroBenefitItemProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    svg {
        width: 1.5rem;
        height: 1.5rem;

        padding: 0.3rem;
        border: 0;
        border-radius: 50%;

        background: ${props => props.theme.colors[props.variant]};

        & > * {
            color: ${props => props.theme.colors.background};
        }
    }

    p {
        margin: 0;
        font-size: 0.875rem;
        color: ${props => props.theme.colors.text};
    }
`; 
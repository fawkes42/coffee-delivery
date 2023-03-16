import { HeaderContainer } from "./styles";
import Logo from "../../assets/logo.svg";
import LogoDark from "../../assets/logo-dark.svg";
import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export function Header() {
    const themeContext = useContext(ThemeContext)
    return (
        <HeaderContainer>
            <img src={themeContext.variant === 'default' ? Logo : LogoDark} alt="Logo" />
            <nav>
                <NavLink to="/" title="Locale">
                    <MapPin size={24} weight="fill" />
                    São Paulo, SP
                </NavLink>
                <NavLink to="/" title="Cart">
                    <ShoppingCart size={24} weight="fill" />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}
import { HeaderContainer } from "./styles";
import Logo from "../../assets/logo.svg";
import LogoDark from "../../assets/logo-dark.svg";
import { ShoppingCart, MapPin, Sun, Moon } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { useTheme } from "styled-components";
import { ToggleThemeContext } from "../../Contexts/ToggleTheme";

export function Header() {
    const theme = useTheme()
    const { toggleTheme } = useContext(ToggleThemeContext)
    return (
        <HeaderContainer>
            <img src={theme.variant === 'default' ? Logo : LogoDark} alt="Logo" />
            <nav>
                <NavLink to="/" title="Locale">
                    <MapPin size={24} weight="fill" />
                    São Paulo, SP
                </NavLink>
                <NavLink to="/checkout" title="Cart">
                    <ShoppingCart size={24} weight="fill" />
                </NavLink>
                <a title="Switch Theme" onClick={toggleTheme}>
                    {
                        theme.variant === 'default' ? (
                            <Moon size={24} weight="fill" />
                        ) : (
                            <Sun size={24} weight="fill" />
                        )
                    }
                </a>
            </nav>
        </HeaderContainer>
    )
}
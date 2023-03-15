import { HeaderContainer } from "./styles";
import Logo from "../../assets/logo.svg";
import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} alt="Logo" />
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
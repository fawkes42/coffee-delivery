import { CheckoutProductActions, CheckoutProductContainer, CheckoutProductDetails, CheckoutProductImage, CheckoutProductInfo, CheckoutProductPrice, CheckoutProductTitle, RemoveFromCartButton } from "./styles";
import Expresso from "../../assets/expresso.svg";
import { Amount } from "../Amount/Index";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";

export function CheckoutProduct() {
    const theme = useTheme();
    return (
        <CheckoutProductContainer>
            <CheckoutProductImage src={Expresso} alt="Product" />
            <CheckoutProductDetails>
                <CheckoutProductInfo>
                    <CheckoutProductTitle>Expresso</CheckoutProductTitle>
                    <CheckoutProductPrice>R$ 10,00</CheckoutProductPrice>
                </CheckoutProductInfo>
                <CheckoutProductActions>
                    <Amount />
                    <RemoveFromCartButton>
                        <Trash size={16} color={theme.colors.purple} />
                        Remover
                    </RemoveFromCartButton>
                </CheckoutProductActions>
            </CheckoutProductDetails>
        </CheckoutProductContainer>
    )
}
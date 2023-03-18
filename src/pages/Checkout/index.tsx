import { Cart } from "./Cart";
import { Form } from "./Form";
import {
    CheckoutContainer,
    CheckoutContent,
} from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer>
            <CheckoutContent>
                <Form />
            </CheckoutContent>
            <CheckoutContent>
                <h3>Resumo do pedido</h3>
                <Cart />
            </CheckoutContent>
        </CheckoutContainer>
    )
}
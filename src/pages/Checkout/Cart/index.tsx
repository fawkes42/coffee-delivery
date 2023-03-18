import { CheckoutProduct } from "../../../components/CheckoutProduct";
import {
    CartButton,
    CartContainer,
    CartContent,
    CartContentDivider,
    CartFooter,
    CartTotal,
} from "./styles";

export function Cart() {
    return (
        <CartContainer>
            <CartContent>
                <CheckoutProduct />
                <CartContentDivider />
                <CheckoutProduct />
                <CartContentDivider />
            </CartContent>
            <CartFooter>
                <CartTotal>
                    <p>Total de itens</p>
                    <strong>R$ 10,00</strong>
                    <p>Entrega</p>
                    <strong>R$ 5,00</strong>
                    <p>Total</p>
                    <strong>R$ 15,00</strong>
                </CartTotal>
                <CartButton
                    to="/success"
                    title="Confirmar pedido"
                >
                    CONFIRMAR PEDIDO
                </CartButton>
            </CartFooter>
        </CartContainer>
    )
}
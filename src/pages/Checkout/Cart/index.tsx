import {
    CartButton,
    CartContainer,
    CartContent,
    CartFooter,
    CartTotal,
} from "./styles";

export function Cart() {
    return (
        <CartContainer>
            <CartContent>
                <span>PRODUTO</span>
                <span>PRODUTO</span>
                <span>PRODUTO</span>
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
                <CartButton>CONFIRMAR PEDIDO</CartButton>
            </CartFooter>
        </CartContainer>
    )
}
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { AddressInput, CheckoutCard, CheckoutCardHeader, CheckoutCardHeaderTitle, CheckoutFormContent, CheckoutPaymentType, CheckoutPaymentTypeContainer } from "./styles";

export function Form() {
    const theme = useTheme();
    return (
        <>
            <form action="">
                <h3>Complete seu pedido</h3>
                <CheckoutCard>
                    <CheckoutCardHeader>
                        <MapPinLine
                            size={22}
                            color={theme.colors.yellow}
                        />
                        <CheckoutCardHeaderTitle>
                            <h3>Endereço de entrega</h3>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </CheckoutCardHeaderTitle>
                    </CheckoutCardHeader>
                    <CheckoutFormContent>
                        <AddressInput
                            type="text"
                            placeholder="CEP"
                            width={12.5}
                        />
                        <AddressInput
                            type="text"
                            placeholder="Endereço"
                            width={35}
                        />
                        <AddressInput
                            type="text"
                            placeholder="Número"
                            width={12.5}
                        />
                        <AddressInput
                            type="text"
                            placeholder="Complemento"
                            width={21.75}
                        />
                        <AddressInput
                            type="text"
                            placeholder="Bairro"
                            width={12.5}
                        />
                        <AddressInput
                            type="text"
                            placeholder="Cidade"
                            width={17.25}
                        />
                        <AddressInput
                            type="text"
                            placeholder="UF"
                            minLength={2}
                            maxLength={2}
                            width={3.75}
                        />
                    </CheckoutFormContent>
                </CheckoutCard>
            </form>
            <CheckoutCard>
                <CheckoutCardHeader>
                    <CurrencyDollar
                        size={22}
                        color={theme.colors.purple}
                    />
                    <CheckoutCardHeaderTitle>
                        <h3>Forma de pagamento</h3>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </CheckoutCardHeaderTitle>
                </CheckoutCardHeader>
                <CheckoutPaymentTypeContainer>
                    <CheckoutPaymentType>
                        <CreditCard size={16} color={theme.colors.purple} />
                        <span>CARTÃO DE CRÉDITO</span>
                    </CheckoutPaymentType>
                    <CheckoutPaymentType>
                        <Bank size={16} color={theme.colors.purple} />
                        <span>CARTÃO DE DÉBITO</span>
                    </CheckoutPaymentType>
                    <CheckoutPaymentType>
                        <Money size={16} color={theme.colors.purple} />
                        <span>DINHEIRO</span>
                    </CheckoutPaymentType>

                </CheckoutPaymentTypeContainer>
            </CheckoutCard>
        </>
    )
}
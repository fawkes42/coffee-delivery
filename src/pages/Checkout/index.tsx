import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useTheme } from "styled-components";
import {
    CheckoutContainer,
    AddressInput,
    CheckoutCard,
    CheckoutFormContent,
    CheckoutTitle,
    CheckoutPaymentTypeContainer,
    CheckoutPaymentType,
    CheckoutContent,
} from "./styles";

export function Checkout() {
    const theme = useTheme();
    return (
        <CheckoutContainer>
            <CheckoutContent>
                <h3>Complete seu pedido</h3>
                <form action="">
                    <CheckoutCard>
                        <CheckoutTitle>
                            <MapPinLine
                                size={22}
                                color={theme.colors.yellow}
                            />
                            <div>
                                <h3>Endereço de entrega</h3>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </CheckoutTitle>
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
                    <CheckoutTitle>
                        <CurrencyDollar
                            size={22}
                            color={theme.colors.purple}
                        />
                        <div>
                            <h3>Forma de pagamento</h3>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </CheckoutTitle>
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
            </CheckoutContent>
            <CheckoutContent>
                <h3>Resumo do pedido</h3>
                <CheckoutCard>
                    <CheckoutTitle>
                        <CurrencyDollar
                            size={22}
                            color={theme.colors.purple}
                        />
                        <div>
                            <h3>Forma de pagamento</h3>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </CheckoutTitle>
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
            </CheckoutContent>

        </CheckoutContainer>
    )
}
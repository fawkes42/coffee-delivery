import {
    SuccessContainer,
    SuccessContent,
    SuccessHeader,
    SuccessImg,
    SuccessInfo,
    SuccessInfoItem,
    SuccessSubtitle,
    SuccessTitle
} from "./styles";
import DeliveryDriver from "../../assets/delivery-driver.svg";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";

export function Success() {
    return (
        <SuccessContainer>
            <SuccessHeader>
                <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
                <SuccessSubtitle>Agora é só aguardar que logo o café chegará até você</SuccessSubtitle>
            </SuccessHeader>
            <SuccessContent>
                <SuccessInfo>
                    <SuccessInfoItem variant="purple">
                        <MapPin size={32} weight="fill" />
                        <span>
                            <p>
                                Entrega em <strong>Rua dos Mulekes Trevosos, 420</strong>
                            </p>
                            <p>Centro - Rio de Janeiro</p>
                        </span>
                    </SuccessInfoItem>
                    <SuccessInfoItem variant="yellow">
                        <Clock size={32} weight="fill" />
                        <span>
                            <p>Previsão de entrega</p>
                            <p><strong>20 min - 30 min</strong></p>
                        </span>
                    </SuccessInfoItem>
                    <SuccessInfoItem variant="yellow-dark">
                        <CurrencyDollar size={32} weight="fill" />
                        <span>
                            <p>Pagamento na entrega</p>
                            <p><strong>Cartão de Crédito</strong></p>
                        </span>
                    </SuccessInfoItem>
                </SuccessInfo>
                <SuccessImg src={DeliveryDriver} alt="Success" />
            </SuccessContent>

        </SuccessContainer>
    )
}
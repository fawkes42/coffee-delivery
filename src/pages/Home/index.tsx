import {
    HomeContainer,
    IntroBenefitItem,
    IntroBenefits,
    IntroContainer,
    IntroContent,
    IntroInfo
} from "./styles";
import BackgroundIntro from "../../assets/background-intro.svg";
import CoffeeIntro from "../../assets/coffee-intro.svg";
import {
    Coffee,
    Package,
    ShoppingCart,
    Timer
} from "phosphor-react";
import { Products } from "./Products";

export function Home() {
    return (
        <HomeContainer>
            <IntroContainer img={BackgroundIntro}>
                <IntroContent>
                    <IntroInfo>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                        <IntroBenefits>
                            <IntroBenefitItem variant="yellow-dark">
                                <ShoppingCart size={16} weight="fill" />
                                <p>Compra simples e segura</p>
                            </IntroBenefitItem>
                            <IntroBenefitItem variant="text">
                                <Package size={16} weight="fill" />
                                <p>Embalagem mantém o café intacto</p>
                            </IntroBenefitItem>
                            <IntroBenefitItem variant="yellow">
                                <Timer size={16} weight="fill" />
                                <p>Compra simples e segura</p>
                            </IntroBenefitItem>
                            <IntroBenefitItem variant="purple">
                                <Coffee size={16} weight="fill" />
                                <p>O café chega fresquinho até você</p>
                            </IntroBenefitItem>
                        </IntroBenefits>
                    </IntroInfo>
                    <img src={CoffeeIntro} alt="A cup of coffee and some grain of coffee" />
                </IntroContent>
            </IntroContainer>
            <Products />
        </HomeContainer>
    )
}
import {
    ProductAddToCartButton,
    ProductContainer,
    ProductDescription,
    ProductImage,
    ProductPrice,
    ProductPriceContainer,
    ProductTag,
    ProductTagsContainer,
    ProductTitle
} from "./styles";
import Coffe from "../../assets/expresso.svg";
import { Amount } from "../Amount/Index";
import { ShoppingCart } from "phosphor-react";

export function Product() {
    return (
        <ProductContainer>
            <ProductImage src={Coffe} alt="Café" />
            <ProductTagsContainer>
                <ProductTag>TRADICIONAL</ProductTag>
                <ProductTag>TRADICIONAL</ProductTag>
                <ProductTag>TRADICIONAL</ProductTag>
            </ProductTagsContainer>
            <ProductTitle>Café do dia</ProductTitle>
            <ProductDescription>O tradicional café feito com água quente e grãos moídos</ProductDescription>
            <ProductPriceContainer>
                <ProductPrice>R$ 10,00</ProductPrice>
                <Amount />
                <ProductAddToCartButton>
                    <ShoppingCart size={22} weight="fill" />
                </ProductAddToCartButton>
            </ProductPriceContainer>
        </ProductContainer>
    )
}
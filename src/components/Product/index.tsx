import {
    ProductContainer,
    ProductDescription,
    ProductImage,
    ProductPrice,
    ProductTag,
    ProductTagsContainer,
    ProductTitle
} from "./styles";
import Coffe from "../../assets/expresso.svg";

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
            <ProductPrice>R$ 10,00</ProductPrice>
        </ProductContainer>
    )
}
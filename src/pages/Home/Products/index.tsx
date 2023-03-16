import { Product } from "../../../components/Product";
import { ProductsContainer, ProductsList, ProductsTitle } from "./styles";

export function Products() {
    return (
        <ProductsContainer>
            <ProductsTitle>Nossos cafés</ProductsTitle>
            <ProductsList>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </ProductsList>
        </ProductsContainer>
    )
}
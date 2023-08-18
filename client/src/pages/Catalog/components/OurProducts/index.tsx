import { useEffect } from "react";
import { TitleText } from "../../../../components/Typography";
import { ProductList, OurProductsContainer } from "./styles";
import LoadingComponent from "../../../../components/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../../../store/configureStore";
import { fetchProductsAsync, productSelectors } from "../../catalogSlice";
import { ProductCard } from "../ProductCard";

export function OurProducts() {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, status } = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch])

  if (status.includes('pending')) return <LoadingComponent />

  return (
    <OurProductsContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Produtos
      </TitleText>

      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </OurProductsContainer>
  );
}

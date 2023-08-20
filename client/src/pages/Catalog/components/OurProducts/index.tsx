import { useEffect } from "react";
import { TitleText } from "../../../../components/Typography";
import { ProductList, OurProductsContainer, ProductFilter, ProductFilterContainer, ProductListContainer } from "./styles";
import LoadingComponent from "../../../../components/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../../../store/configureStore";
import { fetchFilters, fetchProductsAsync, productSelectors, setProductParams } from "../../catalogSlice";
import { ProductCard } from "../ProductCard";
import { Box, Pagination, Typography } from "@mui/material";
import ProductSearch from "../ProductSearch";
import RadioButtonGroup from "../RadioButtonGroup";
import CheckboxButtons from "../CheckboxButtons";

const sortOptions = [
  { value: 'name', label: 'A - Z' },
  { value: 'priceDesc', label: 'Preço - Maior para Menor' },
  { value: 'price', label: 'Preço - Menor para Maior' },
]

export function OurProducts() {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, status, filtersLoaded, brands, types, productParams } = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [dispatch, productsLoaded])

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [dispatch, filtersLoaded])

  if (status.includes('pending')) return <LoadingComponent />

  return (
    <OurProductsContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Produtos
      </TitleText>

      <div>
        <ProductFilterContainer>
          <ProductFilter style={{ display: 'flex', justifyContent: 'center' }}>
            <ProductSearch />
          </ProductFilter>

          <ProductFilter>
            <RadioButtonGroup
              selectedValue={productParams.orderBy}
              options={sortOptions}
              onChange={(e) => dispatch(setProductParams({ orderBy: e.target.value }))}
            />
          </ProductFilter>

          <ProductFilter>
            <CheckboxButtons
              items={brands}
              checked={productParams.brands}
              onChange={(checkedItems: string[]) => dispatch(setProductParams({ brands: checkedItems }))}
            />
          </ProductFilter>

          <ProductFilter>
            <CheckboxButtons
              items={types}
              checked={productParams.types}
              onChange={(checkedItems: string[]) => dispatch(setProductParams({ types: checkedItems }))}
            />
          </ProductFilter>

        </ProductFilterContainer>

        <ProductListContainer>
          <ProductList>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductList>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography>Mostrando 1-6 de 20 itens</Typography>
            <Pagination count={10} page={2} color="secondary" />
          </Box>
        </ProductListContainer>
      </div>
    </OurProductsContainer>
  );
}

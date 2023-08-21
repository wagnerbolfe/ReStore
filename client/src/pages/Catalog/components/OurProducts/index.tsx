import { useEffect } from "react";
import { TitleText } from "../../../../components/Typography";
import { ProductList, OurProductsContainer, ProductFilter, ProductFilterContainer, ProductListContainer } from "./styles";
import LoadingComponent from "../../../../components/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../../../store/configureStore";
import { fetchFilters, fetchProductsAsync, productSelectors, setProductParams, setPageNumber } from "../../catalogSlice";
import { ProductCard } from "../ProductCard";
import ProductSearch from "../ProductSearch";
import RadioButtonGroup from "../RadioButtonGroup";
import CheckboxButtons from "../CheckboxButtons";
import AppPagination from "../AppPagination";
import ProductCardSkeleton from "../ProductCardSkeleton";

const sortOptions = [
  { value: 'name', label: 'A - Z' },
  { value: 'priceDesc', label: 'Preço - Maior para Menor' },
  { value: 'price', label: 'Preço - Menor para Maior' },
]

export function OurProducts() {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, filtersLoaded, brands, types, productParams, metaData } = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [dispatch, productsLoaded])

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [dispatch, filtersLoaded])

  if (!filtersLoaded) return <LoadingComponent />

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
              !productsLoaded ? (<ProductCardSkeleton key={product.id} />) : (<ProductCard key={product.id} product={product} />)
            ))}
          </ProductList>
          {metaData &&
            <AppPagination
              metaData={metaData}
              onPageChange={(page: number) => dispatch(setPageNumber({ pageNumber: page }))}
            />}
        </ProductListContainer>
      </div>
    </OurProductsContainer>
  );
}

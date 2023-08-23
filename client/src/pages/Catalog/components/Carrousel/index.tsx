import { useEffect } from "react";
import { ProductList, CarrouselContainer } from "./styles";
import LoadingComponent from "../../../../components/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../../../store/configureStore";
import { fetchFilters, fetchProductsAsync, productSelectors } from "../../catalogSlice";
import { ProductCard } from "../ProductCard";
import ProductCardSkeleton from "../ProductCardSkeleton";
import { CarrouselCard } from "../CarrouselCard";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export function Carrousel() {
  const { user } = useAppSelector(state => state.account);
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded } = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 12
    }
  });

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [dispatch, productsLoaded])

  if (!productsLoaded) return <LoadingComponent />

  return (
    <CarrouselContainer className="container">
      {user ? (
        <ProductList>
          {products.map((product) => (
            !productsLoaded ? (<ProductCardSkeleton key={product.id} />) : (<ProductCard key={product.id} product={product} />)
          ))}
        </ProductList>
      ) : (
        <ProductList ref={sliderRef} className="keen-slider">
          {products.map((product) => (
            !productsLoaded ? (<ProductCardSkeleton key={product.id} />) : (<div key={product.id} className="keen-slider__slide"><CarrouselCard key={product.id} product={product} /></div>)
          ))}
        </ProductList>
      )}
    </CarrouselContainer>
  );
}

import { useEffect, useState } from "react";
import { TitleText } from "../../../../components/Typography";

import { Product, ProductCard } from "../ProductCard";
import { ProductList, OurProductsContainer } from "./styles";

export function OurProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
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

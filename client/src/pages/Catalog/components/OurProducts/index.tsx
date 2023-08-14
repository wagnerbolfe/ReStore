import { useEffect, useState } from "react";
import { TitleText } from "../../../../components/Typography";

import { Product, ProductCard } from "../ProductCard";
import { ProductList, OurProductsContainer } from "./styles";
import agent from "../../../../api/agent";
import LoadingComponent from "../../../../components/LoadingComponent";

export function OurProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    agent.Catalog.list()
      .then(products => setProducts(products))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <LoadingComponent />

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

import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ProductContent,
  ProductDetailsContainer,
  ProductDetailsInfo,
  ProductPhotoInfo,
  ProductTitle
} from "./styles";
import { useTheme } from "styled-components";
import { RegularText } from "../../../../components/Typography";
import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Button } from "../../../../components/Button";
import agent from "../../../../api/agent";
import { Product } from "../ProductCard";
import NotFound from "../../../NotFound";
import LoadingComponent from "../../../../components/LoadingComponent";

export default function ProductDetails() {
  const { colors } = useTheme();
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    id && agent.Catalog.details(parseInt(id))
      .then(response => setProduct(response))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <LoadingComponent />

  if (!product) return <NotFound />

  return (
    <ProductDetailsContainer>
      <ProductContent className="container">
        <div>
          <section>
            <ProductTitle size="xl">
              {product.name}
            </ProductTitle>
            <RegularText as="h3" size="l" color="subtitle">
              {product.description}
            </RegularText>
          </section>

          <ProductDetailsInfo>
            <InfoWithIcon
              iconbg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text={`R$ ${product.price}`}
            />
            <InfoWithIcon
              iconbg={colors["base-text"]}
              icon={<Package weight="fill" />}
              text={product.brand}
            />
            <InfoWithIcon
              iconbg={colors["brand-yellow"]}
              icon={<Timer weight="fill" />}
              text={product.tag}
            />
            <InfoWithIcon
              iconbg={colors["brand-purple"]}
              icon={<Coffee weight="fill" />}
              text={product.type}
            />
          </ProductDetailsInfo>
          <div className="back-button">
            <NavLink to="/">
              <Button text="Voltar" />
            </NavLink>
          </div>
        </div>
        <ProductPhotoInfo className="side-b">
          <img src={`/products/${product.pictureUrl}`} />
        </ProductPhotoInfo>
      </ProductContent>
    </ProductDetailsContainer>
  )
}
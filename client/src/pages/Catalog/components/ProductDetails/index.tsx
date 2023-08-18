import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  ProductContent,
  ProductDetailsContainer,
  ProductDetailsInfo,
  ProductEachDetail,
  ProductPhotoInfo,
  ProductTitle
} from "./styles";
import { useTheme } from "styled-components";
import { RegularText } from "../../../../components/Typography";
import { CurrencyDollar, AngularLogo, Dna } from "@phosphor-icons/react";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Button } from "../../../../components/Button";
import NotFound from "../../../NotFound";
import LoadingComponent from "../../../../components/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../../../store/configureStore";
import { fetchProductAsync, productSelectors } from "../../catalogSlice";
import { IntroTitle } from "../Intro/styles";

export default function ProductDetails() {
  const { colors } = useTheme();
  const { status } = useAppSelector(state => state.catalog);
  const { id } = useParams<{ id: string }>()
  const product = useAppSelector(state => productSelectors.selectById(state, id!));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!product && id) dispatch(fetchProductAsync(parseInt(id)))
  }, [id, dispatch, product])

  if (status.includes('pending')) return <LoadingComponent />

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

            <ProductEachDetail>
              <IntroTitle size="s" >Preço</IntroTitle>
              <InfoWithIcon
                iconbg={colors["brand-yellow-dark"]}
                icon={<CurrencyDollar size={24} weight="regular" />}
                text={`R$ ${product.price}`}
              />
            </ProductEachDetail>

            <ProductEachDetail>
              <IntroTitle size="s" >Marca</IntroTitle>
              <InfoWithIcon
                iconbg={colors["brand-yellow-dark"]}
                icon={<AngularLogo size={24} weight="regular" />}
                text={product.brand}
              />
            </ProductEachDetail>

            <ProductEachDetail>
              <IntroTitle size="s" >Categoria</IntroTitle>
              <InfoWithIcon
                iconbg={colors["brand-yellow-dark"]}
                icon={<Dna size={24} weight="regular" />}
                text={product.type}
              />
            </ProductEachDetail>

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
import { TitleText } from "../../../../components/Typography";
import { ProductCartCard } from "../ProductCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedProductsContainer } from "./styles";
import { useAppSelector } from "../../../../store/configureStore";

export function SelectedProducts() {
  const { basket } = useAppSelector(state => state.basket);

  return (
    <SelectedProductsContainer>
      <TitleText size="m" color="subtitle">
        Produtos selecionados
      </TitleText>

      <DetailsContainer>
        {basket?.items.map((item) => (
          <ProductCartCard isBasket={false} key={item.productId} product={item} />
        ))}

        <ConfirmationSection isBasket={false} />
      </DetailsContainer>
    </SelectedProductsContainer>
  );
}

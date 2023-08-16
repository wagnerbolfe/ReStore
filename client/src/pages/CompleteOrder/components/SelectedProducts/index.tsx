import { TitleText } from "../../../../components/Typography";
import { ProductCartCard } from "../ProductCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedProductsContainer } from "./styles";
import { useAppSelector } from "../../../../store/configureStore";

export function SelectedProducts() {
  const { basket } = useAppSelector(state => state.basket);

  return (
    <SelectedProductsContainer>
      <TitleText size="xs" color="subtitle">
        Produtos selecionados
      </TitleText>

      <DetailsContainer>
        {basket?.items.map((item) => (
          <ProductCartCard key={item.productId} product={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedProductsContainer>
  );
}

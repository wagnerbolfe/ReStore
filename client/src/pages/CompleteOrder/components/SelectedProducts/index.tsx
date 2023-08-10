import { useCart } from "../../../../hooks/useCart";
import { TitleText } from "../../../../components/Typography";
import { ProductCartCard } from "../ProductCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedProductsContainer } from "./styles";

export function SelectedProducts() {
  const { cartItems } = useCart();

  return (
    <SelectedProductsContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <ProductCartCard key={item.id} product={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedProductsContainer>
  );
}

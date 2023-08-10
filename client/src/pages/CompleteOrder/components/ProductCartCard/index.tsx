import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, ProductCartCardContainer, RemoveButton } from "./styles";
import { Trash } from "phosphor-react";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";

interface ProductCartCardProps {
  product: CartItem;
}

export function ProductCartCard({ product }: ProductCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(product.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(product.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(product.id);
  }

  const productTotal = product.price * product.quantity;

  const formattedPrice = formatMoney(productTotal);

  return (
    <ProductCartCardContainer>
      <div>
        <img src={`/products/${product.pictureUrl}`} />
        <div>
          <RegularText color="subtitle">{product.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={product.quantity}
              size="small"
            />
            <RemoveButton type="button" onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </ProductCartCardContainer>
  );
}

import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, ProductCartCardContainer, ProductInfoContainer, RemoveButton } from "./styles";
import { Trash } from "@phosphor-icons/react";
import { formatMoney } from "../../../../utils/formatMoney";
import { useState } from "react";
import agent from "../../../../api/agent";
import { Hypnosis } from "react-cssfx-loading";
import { useAppDispatch } from "../../../../store/configureStore";
import { removeItem, setBasket } from "../../basketSlice";
import { BasketItem } from "../..";

interface ProductCartCardProps {
  product: BasketItem;
}

export function ProductCartCard({ product }: ProductCartCardProps) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  function handleAddItem(productId: number) {
    setLoading(true)
    agent.Basket.addItem(productId)
      .then(basket => dispatch(setBasket(basket)))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }

  function handleRemoveItem(productId: number, quantity = 1) {
    setLoading(true)
    agent.Basket.removeItem(productId, quantity)
      .then(() => dispatch(removeItem({ productId, quantity })))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }

  return (
    <ProductCartCardContainer key={product.productId}>
      <div>
        <img src={`/products/${product.pictureUrl}`} />
        <ProductInfoContainer>
          <RegularText color="subtitle">{product.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              onIncrease={() => handleAddItem(product.productId)}
              onDecrease={() => handleRemoveItem(product.productId)}
              quantity={product.quantity}
              size="small"
            />
            <RemoveButton type="button" onClick={() => handleRemoveItem(product.productId, product.quantity)}>
              <Trash size={16} />
            </RemoveButton>
            {loading && <Hypnosis width={22} height={22} />}
          </ActionsContainer>
        </ProductInfoContainer>
      </div>

      <p>R$ {formatMoney(product.price * product.quantity)}</p>
    </ProductCartCardContainer>
  );
}

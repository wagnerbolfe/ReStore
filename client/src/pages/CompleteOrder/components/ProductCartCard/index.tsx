import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, ProductCartCardContainer, ProductInfoContainer, RemoveButton } from "./styles";
import { Trash } from "@phosphor-icons/react";
import { formatMoney } from "../../../../utils/formatMoney";
import { Hypnosis } from "react-cssfx-loading";
import { useAppDispatch, useAppSelector } from "../../../../store/configureStore";
import { BasketItem } from "../..";
import { addBasketItemAsync, removeBasketItemAsync } from "../../basketSlice";

interface ProductCartCardProps {
  product: BasketItem;
  isBasket: boolean;
}

export function ProductCartCard({ product, isBasket }: ProductCartCardProps) {
  const { status } = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();

  return (
    <ProductCartCardContainer key={product.productId}>
      <div>
        <img src={`/products/${product.pictureUrl}`} />
        <ProductInfoContainer>
          <RegularText color="subtitle">{product.name}</RegularText>
          {!isBasket ? (
            <ActionsContainer>
              <QuantityInput
                onIncrease={() => dispatch(addBasketItemAsync({ productId: product.productId }))}
                onDecrease={() => dispatch(removeBasketItemAsync({ productId: product.productId, quantity: 1, name: 'rem' }))}
                quantity={product.quantity}
                size="small"
              />
              <RemoveButton
                type="button"
                onClick={() => dispatch(removeBasketItemAsync({
                  productId: product.productId,
                  quantity: product.quantity,
                  name: 'del'
                }))}>
                <Trash size={16} />
              </RemoveButton>
              {status === 'pendingAddItem' + product.productId && <Hypnosis width={22} height={22} />}
              {status === 'pendingRemoveItem' + product.productId + 'rem' && <Hypnosis width={22} height={22} />}
              {status === 'pendingRemoveItem' + product.productId + 'del' && <Hypnosis width={22} height={22} />}
            </ActionsContainer>
          ) : (
            <h4>{product.quantity} un</h4>
          )}
        </ProductInfoContainer>
      </div>

      <p>R$ {formatMoney(product.price * product.quantity)}</p>
    </ProductCartCardContainer >
  );
}

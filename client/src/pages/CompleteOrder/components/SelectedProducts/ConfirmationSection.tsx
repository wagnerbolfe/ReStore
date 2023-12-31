import { ConfirmationSectionContainer } from "./styles";
import { RegularText } from "../../../../components/Typography";
import { Button } from "../../../../components/Button";
import { formatMoney } from "../../../../utils/formatMoney";
import { useAppSelector } from "../../../../store/configureStore";
import { useNavigate } from "react-router-dom";

interface Props {
  isBasket: boolean;
  subtotal?: number;
  orderItemCount?: number;
}

export function ConfirmationSection({ isBasket, subtotal, orderItemCount }: Props) {
  const { basket } = useAppSelector(state => state.basket);
  const navigate = useNavigate();
  const subTotal = basket?.items.reduce((sum, item) => sum + (item.quantity * item.price), 0) || subtotal;
  const deliveryFee = subTotal! > 50 ? 0 : 15;
  const formattedDeliveryFee = formatMoney(deliveryFee);
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0) || orderItemCount;
  const cartTotal = deliveryFee + subTotal!;

  const formattedItemsTotal = formatMoney(subTotal || 0);
  const formattedCartTotal = formatMoney(cartTotal || 0);

  function handleCheckout() {
    navigate('/checkout');
  }

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>{formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">
          Entrega
          <span style={{ fontSize: '10px', color: '#ff0000' }} >(Acima de R$ 50, frete grátis)</span>
        </RegularText>
        <RegularText>{itemCount ? formattedDeliveryFee : 0}</RegularText>
      </div>
      <div>
        <RegularText $weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText $weight="700" color="subtitle" size="l">
          {itemCount ? formattedCartTotal : 0}
        </RegularText>
      </div>

      {!isBasket && <Button
        text="Confirmar Pedido"
        disabled={itemCount! <= 0}
        onClick={handleCheckout}
      />}
    </ConfirmationSectionContainer>
  );
}

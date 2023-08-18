import { ConfirmationSectionContainer } from "./styles";
import { RegularText } from "../../../../components/Typography";
import { Button } from "../../../../components/Button";
import { formatMoney } from "../../../../utils/formatMoney";
import { useAppSelector } from "../../../../store/configureStore";

const DELIVERY_PRICE = 25;

export function ConfirmationSection() {
  const { basket } = useAppSelector(state => state.basket);
  const subTotal = basket?.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  const itemCount = basket!.items.reduce((sum, item) => sum + item.quantity, 0);
  const formattedDeliveryPrice = itemCount > 5 ? 0 : parseInt(formatMoney(DELIVERY_PRICE));
  const cartTotal = formattedDeliveryPrice + subTotal!;

  const formattedItemsTotal = formatMoney(subTotal || 0);
  const formattedCartTotal = formatMoney(cartTotal || 0);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">
          Entrega
          <span style={{ fontSize: '10px', color: '#ff0000' }} >(Acima de 5un, frete grátis)</span>
        </RegularText>
        <RegularText>R$ {itemCount ? formattedDeliveryPrice : 0}</RegularText>
      </div>
      <div>
        <RegularText $weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText $weight="700" color="subtitle" size="l">
          R$ {itemCount ? formattedCartTotal : 0}
        </RegularText>
      </div>

      <Button
        text="Confirmar Pedido"
        disabled={itemCount! <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  );
}

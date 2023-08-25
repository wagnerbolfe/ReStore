import { Typography, Grid } from '@mui/material';
import { useAppSelector } from "../../../../store/configureStore";
import { ProductCartCard } from "../../../CompleteOrder/components/ProductCartCard";
import { ConfirmationSection } from "../../../CompleteOrder/components/SelectedProducts/ConfirmationSection";
import { DetailsContainer, SelectedProductsContainer } from "../../../CompleteOrder/components/SelectedProducts/styles";

export default function Review() {
  const { basket } = useAppSelector(state => state.basket);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <DetailsContainer>
        {basket?.items.map((item) => (
          <ProductCartCard isBasket={true} key={item.productId} product={item} />
        ))}

        <ConfirmationSection isBasket={true} />
      </DetailsContainer>
    </>
  );
}
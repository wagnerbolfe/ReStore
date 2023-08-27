import { Alert, AlertTitle, Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Order } from "../../../../models/order";
import { BasketItem } from "../../../CompleteOrder";
import { ProductCartCard } from "../../../CompleteOrder/components/ProductCartCard";
import { ConfirmationSection } from "../../../CompleteOrder/components/SelectedProducts/ConfirmationSection";
import { OrdersDetailedContainer, OrdersDetailedInfo } from "./styles";
import { Header } from "../../../../components/Header";
import { TitleText } from "../../../../components/Typography";

interface Props {
  order: Order;
  setSelectedOrder: (id: number) => void;
}

export default function OrderDetailed({ order, setSelectedOrder }: Props) {
  const subtotal = order.orderItems.reduce((sum, item) => sum + (item.quantity * item.price), 0) ?? 0;
  const orderItemCount = order.orderItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <Header />
      <OrdersDetailedContainer>
        <TitleText size="l" color="subtitle">
          Detalhes
        </TitleText>
        <OrdersDetailedInfo>
          <Box display='flex' justifyContent='space-between' alignItems='center'>

            {order.orderStatus === 'PaymentFailed' && <Alert variant="outlined" severity="error">
              <AlertTitle>Pedido {order.id}</AlertTitle>
              Problema no Pagamento
            </Alert>}
            {order.orderStatus === 'Pending' && <Alert variant="outlined" severity="warning">
              <AlertTitle>Pedido {order.id}</AlertTitle>
              Pagamento Pendente
            </Alert>}
            {order.orderStatus === 'PaymentReceived' && <Alert variant="outlined" severity="success">
              <AlertTitle>Pedido {order.id}</AlertTitle>
              Pagamento Recebido
            </Alert>}

            <Button onClick={() => setSelectedOrder(0)} sx={{ m: 2 }} size='large' variant='contained'>Ver ordens</Button>
          </Box>
          <Divider variant="fullWidth" style={{ margin: '1rem 0' }} />
          {order.orderItems.map((item) => (
            <ProductCartCard product={item as BasketItem} key={item.productId} isBasket={true} />
          ))}
          <Grid container>
            <Grid item xs={6} />
            <Grid item xs={6}>
              <ConfirmationSection orderItemCount={orderItemCount} subtotal={subtotal} isBasket={true} />
            </Grid>
          </Grid>
        </OrdersDetailedInfo>
      </OrdersDetailedContainer>
    </>
  )
}
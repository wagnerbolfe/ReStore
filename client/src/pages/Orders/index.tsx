/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Alert, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../api/agent";
import { Order } from "../../models/order";
import LoadingComponent from "../../components/LoadingComponent";
import { OrdersContainer, OrdersInfo } from "./styles";
import OrderDetailed from "./components/OrderDetailed";
import { formatMoney } from "../../utils/formatMoney";
import { Header } from "../../components/Header";
import { TitleText } from "../../components/Typography";
import { formatDate } from "../../utils/formatDate";

export default function Orders() {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedOrderNumber, setSelectedOrderNumber] = useState(0);

  useEffect(() => {
    agent.Orders.list()
      .then(orders => setOrders(orders))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, []);

  if (loading) return <LoadingComponent />

  if (selectedOrderNumber > 0) return (
    <OrderDetailed
      order={orders?.find(o => o.id === selectedOrderNumber)!}
      setSelectedOrder={setSelectedOrderNumber}
    />
  )

  return (
    <>
      <Header />
      <OrdersContainer>
        <TitleText size="l" color="subtitle">
          Pedidos
        </TitleText>
        <OrdersInfo>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Pedido</TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="center">Data Pedido</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders?.map((order) => (
                <TableRow
                  key={order.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row"><h3>{order.id}</h3></TableCell>
                  <TableCell align="center"><h3>{formatMoney(order.total)}</h3></TableCell>
                  <TableCell align="center">{formatDate(order.orderDate)}</TableCell>
                  <TableCell align="center">
                    {order.orderStatus === 'PaymentFailed' && <Chip variant="outlined" label="Problema no Pagamento" color="error" />}
                    {order.orderStatus === 'Pending' && <Chip variant="outlined" label="Pendente" color="warning" />}
                    {order.orderStatus === 'PaymentReceived' && <Chip variant="outlined" label="Pagamento Recebido" color="success" />}
                  </TableCell>
                  <TableCell align="center">
                    <Button onClick={() => setSelectedOrderNumber(order.id)}>
                      Detalhes
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </OrdersInfo>
      </OrdersContainer>
    </>
  )
}
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
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
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Pedido</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Data Pedido</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders?.map((order) => (
                <TableRow
                  key={order.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.id}
                  </TableCell>
                  <TableCell align="right">R$ {formatMoney(order.total)}</TableCell>
                  <TableCell align="right">{formatDate(order.orderDate)}</TableCell>
                  <TableCell align="right">{order.orderStatus}</TableCell>
                  <TableCell align="right">
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
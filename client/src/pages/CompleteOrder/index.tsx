import { SelectedProducts } from "./components/SelectedProducts";
import { CompleteOrderContainer } from "./styles";
import { Header } from "../../components/Header";

export interface Basket {
  id: number;
  buyerId: string;
  items: BasketItem[];
  paymentIntentId?: string;
  clientSecret?: string;
}

export interface BasketItem {
  productId: number;
  name: string;
  price: number;
  pictureUrl: string;
  brand: string;
  type: string;
  quantity: number;
  tag: string;
}

export function CompleteOrderPage() {

  return (
    <>
      <Header />
      <CompleteOrderContainer className="container">
        <SelectedProducts />
      </CompleteOrderContainer>
    </>
  );
}

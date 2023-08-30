import { Basket } from "../pages/CompleteOrder";

export interface User {
  email: string;
  token: string;
  basket?: Basket;
  roles?: string[];
}
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { ProductCardContainer, Tags, Name, Description, CardFooter, AddCartWrapper } from "./styles";
import { Info, ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import { formatMoney } from "../../../../utils/formatMoney";
import { NavLink } from "react-router-dom";
import agent from "../../../../api/agent";
import { Hypnosis } from "react-cssfx-loading";
import { useAppDispatch } from "../../../../store/configureStore";
import { setBasket } from "../../../CompleteOrder/basketSlice";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  type: string,
  brand: string,
  quantityInStock: number,
  tag: string;
}

interface ProductProps {
  product: Product;
}

export function ProductCard({ product }: ProductProps) {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddToCart() {
    const productToAdd = {
      ...product,
      quantity,
    };
    handleAddItem(productToAdd.id, quantity);
  }

  function handleAddItem(productId: number, quantity: number) {
    setLoading(true)
    agent.Basket.addItem(productId, quantity)
      .then(basket => dispatch(setBasket(basket)))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }

  const formattedPrice = formatMoney(product.price);

  return (
    <ProductCardContainer>
      <img src={`/products/${product.pictureUrl}`} />

      <NavLink to={`/product/${product.id}`} title="Detalhes do produto">
        <Info size={30} className="icon-card" />
      </NavLink>

      <Tags>
        <span key={`${product.id}${product.tag}`}>{product.tag}</span>
      </Tags>

      <Name>{product.name}</Name>
      <Description>{product.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            {loading ? <Hypnosis width={20} height={20} color="#fff" /> : <ShoppingCart weight="fill" size={22} />}
          </button>
        </AddCartWrapper>
      </CardFooter>
    </ProductCardContainer>
  );
}

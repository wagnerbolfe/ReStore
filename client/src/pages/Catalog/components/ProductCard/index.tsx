import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { ProductCardContainer, Tags, Name, Description, CardFooter, AddCartWrapper } from "./styles";
import { Info, ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { NavLink } from "react-router-dom";

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
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  const { addProductToCart } = useCart();

  function handleAddToCart() {
    const productToAdd = {
      ...product,
      quantity,
    };
    addProductToCart(productToAdd);
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
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </ProductCardContainer>
  );
}

import { TitleText } from "../../../../components/Typography";
import { Tags, Name, Description, CardFooter, CarrouselCardContainer } from "./styles";
import { formatMoney } from "../../../../utils/formatMoney";
import { Product } from "../ProductCard";

interface ProductProps {
  product: Product;
}

export function CarrouselCard({ product }: ProductProps) {
  const formattedPrice = formatMoney(product.price);
  return (
    <CarrouselCardContainer>
      <img src={product.pictureUrl} />

      <Tags>
        <span key={`${product.id}${product.type}`}>{product.type}</span>
      </Tags>

      <Name>{product.name}</Name>
      <Description>{product.description}</Description>

      <CardFooter>
        <div>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>
      </CardFooter>
    </CarrouselCardContainer>
  );
}

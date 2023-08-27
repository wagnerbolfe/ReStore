import { RegularText, TitleText } from "../../../../components/Typography";
import { Tags, Name, Description, CardFooter, CarrouselCardContainer } from "./styles";
import { formatMoney } from "../../../../utils/formatMoney";

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

export interface ProductParams {
  orderBy: string;
  searchTerm?: string;
  types: string[];
  brands: string[];
  pageNumber: number;
  pageSize: number;
}

interface ProductProps {
  product: Product;
}

export function CarrouselCard({ product }: ProductProps) {
  const formattedPrice = formatMoney(product.price);
  return (
    <CarrouselCardContainer>
      <img src={`/products/${product.pictureUrl}`} />

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
      </CardFooter>
    </CarrouselCardContainer>
  );
}

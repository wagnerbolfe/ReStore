import styled from "styled-components";

export const CarrouselContainer = styled.section`
  width: 100%;
`;

export const ProductList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.75rem;
  margin: 1.75rem 0;
`;

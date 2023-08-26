import styled from "styled-components";


export const OurProductsContainer = styled.section`
  width: 100%;
  margin-top: 2rem;

  > div {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  }
`;

export const ProductFilterContainer = styled.section`
  display: flex;
  flex-direction: column;

`;

export const ProductFilter = styled.section`
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  margin-top: 1.75rem;
  padding: 1rem;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.1);
`;

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


export const ProductList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 2.75rem;
  margin: 1.75rem 0;
`;

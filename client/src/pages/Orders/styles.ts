import styled from "styled-components";

export const OrdersContainer = styled.div`
  width: 75rem;
  margin: 2rem auto;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.1);
  padding: 2rem;

  h1 {
    margin-bottom: 1rem;
  }
`;

export const OrdersInfo = styled.div`
  width: 50rem;
  margin: 2rem auto;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.1);
  padding: 2rem;

  h1 {
    margin-bottom: 1rem;
  }
`;
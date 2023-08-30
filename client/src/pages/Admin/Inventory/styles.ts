import styled from "styled-components";

export const InventoryContainer = styled.div`
  width: 60rem;
  margin: 2rem auto;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.1);
  padding: 2rem;

  h1 {
    margin-bottom: 1rem;
  }

  .buttons {
    margin-left: 1rem;
    margin-top: 2rem;
  }
`;
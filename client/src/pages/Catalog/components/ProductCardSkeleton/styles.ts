import styled from "styled-components";

export const ProductCardSkeletonContainer = styled.div`
  width: 100%;
  min-width: 270px;
  position: relative;
  min-height: 372px;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.1);

`;

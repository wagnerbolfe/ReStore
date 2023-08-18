import styled from "styled-components";

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  background: linear-gradient(135deg, rgba(214,94,94,1) 0%, rgba(46,183,245,1) 100%);
  color: ${({ theme }) => theme.colors["base-white"]};

  display: flex;
  align-items: center;
  justify-content: center;
`;

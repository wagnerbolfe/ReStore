import styled from "styled-components";

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface IconsContainerProps {
  iconbg: string;
}

export const IconContainer = styled.div<IconsContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: linear-gradient(135deg, rgba(32,194,255,1) 0%, rgba(170,22,255,1) 100%);
  color: ${({ theme }) => theme.colors["base-white"]};

  display: flex;
  align-items: center;
  justify-content: center;
`;

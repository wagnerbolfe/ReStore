import styled from "styled-components";
import introBackgroundImg from "../../../../assets/intro-background.png";
import { TitleText } from "../../../../components/Typography";
import { rgba } from "polished";

export const ProductDetailsContainer = styled.section`
  width: 100%;
  height: 40rem;

  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  
  .back-button {
    margin-top: 3rem;
  }
`;

export const ProductPhotoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 75%;
  }
`;

export const ProductTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const ProductDetailsInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

`;

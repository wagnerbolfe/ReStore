import styled from "styled-components";
import introBackgroundImg from "../../assets/intro-background.png";
import { rgba } from "polished";

export const AboutPageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 5rem 0 10rem 0;
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;
`;

export const ButtonErrorGroup = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

export const MessageError = styled.div`
  background-color: #fd5b5b;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 8px;
  color: #ffffff
`;

export const ListError = styled.div`
  margin: 10px;
`;

export const ListErrorText = styled.p`
  font-size: large;
`;
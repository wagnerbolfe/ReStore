import styled from "styled-components";
import introBackgroundImg from "../../assets/intro-background.png";
import { rgba } from "polished";


export const HomeContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 8px;
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;
`;

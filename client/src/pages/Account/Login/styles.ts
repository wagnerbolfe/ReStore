import styled from "styled-components";
import introBackgroundImg from "../../../assets/intro-background.png";
import introImg from "../../../assets/introImage.jpg";
import { rgba, shade, lighten } from "polished";

export const LoginContainer = styled.div`
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  height: 100vh;
  background-size: cover;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #dffcff;
      border-radius: 10px;
      border: 2px solid #dffcff;
      padding: 16px;
      width: 100%;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      align-items: center;
      display: flex;
      justify-content: center;

      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')}
      }

      &:disabled {
        background: ${shade(0.2, '#dffcff')};
        cursor: not-allowed;
      }
    }

    a {
      color: #312e38;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.2, '#312e38')}
      }
    }
  }

  > a {
      color: #312e38;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.2, '#312e38')}
      }

      display: flex;
      align-items: center;

      svg {
        margin-right: 16px;
      }
    }
`;


export const Background = styled.div`
  flex: 1;
  background: url(${introImg}) no-repeat center;
  background-size: cover;
`;
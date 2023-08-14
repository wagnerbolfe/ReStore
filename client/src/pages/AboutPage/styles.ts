import styled from "styled-components";

export const AboutPageContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 5rem auto;
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
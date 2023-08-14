import styled from "styled-components";

export const ServerErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

export const ErrorField = styled.div`
  width: 1000px;
  padding: 1rem;
  background-color: #ff7a7a;
  box-shadow: 0px 0px 15px 3px rgba(140,140,140,1);
`;

export const ErrorFieldMessage = styled.p`
  font-size: medium;
  color: white;
  margin-top: 1rem;
  line-height: 20px;
`;
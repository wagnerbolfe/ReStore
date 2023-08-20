import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.1);
`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      display: flex;
      flex-direction: column;
    }
  }
`;

import styled from "styled-components";
import introBackgroundImg from "../../../../assets/intro-background.png";
import { TitleText } from "../../../../components/Typography";
import { rgba } from "polished";

export const IntroContainer = styled.section`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroContent = styled.div`
  width: 75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  img {
    width: 30%;
  }
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;

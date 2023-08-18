import { InfoWithIconContainer, IconContainer } from "./styles";
import { ReactNode } from "react";

interface BenefitItemProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconbg: string;
}

export function InfoWithIcon({ icon, text }: BenefitItemProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer>{icon}</IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  );
}

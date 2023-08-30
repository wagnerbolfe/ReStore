import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from "./styles";
import introImg from "../../../../assets/intro-img.png";
import { ShoppingCart, Package, Timer, CheckFat } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText as="h3" size="l" color="subtitle">
              Com Coffee Shop você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconbg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart size={22} weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconbg={colors["base-text"]}
              icon={<Package size={22} weight="fill" />}
              text="Embalagem mantém o café fresco"
            />
            <InfoWithIcon
              iconbg={colors["brand-yellow"]}
              icon={<Timer size={22} weight="fill" />}
              text="Entrega rápida e confiável"
            />
            <InfoWithIcon
              iconbg={colors["brand-purple"]}
              icon={<CheckFat size={22} />}
              text="O café chega de acordo até você"
            />
          </BenefitsContainer>
        </div>

        <img src={introImg} />
      </IntroContent>
    </IntroContainer>
  );
}

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
              Encontre o produto perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText as="h3" size="l" color="subtitle">
              Com o Produto Delivery você recebe seu produto onde estiver, a
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
              text="Embalagem mantém o produto intacto"
            />
            <InfoWithIcon
              iconbg={colors["brand-yellow"]}
              icon={<Timer size={22} weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconbg={colors["brand-purple"]}
              icon={<CheckFat size={22} />}
              text="O produto chega de acordo até você"
            />
          </BenefitsContainer>
        </div>

        <img src={introImg} />
      </IntroContent>
    </IntroContainer>
  );
}

import { NavLink } from "react-router-dom";
import { IntroTitle } from "../Catalog/components/Intro/styles";
import { NotFoundContainer } from "./styles";
import { Button } from "../../components/Button";
import { Divider } from "@mui/material";
import { Header } from "../../components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <NotFoundContainer>
        <IntroTitle>
          Oops - Não podemos encontrar o que você está procurando!
        </IntroTitle>
        <Divider />
        <NavLink to="/">
          <Button text="Voltar" />
        </NavLink>
      </NotFoundContainer>
    </>
  )
}
import { Header } from "../../components/Header";
import { Carrousel } from "./components/Carrousel";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

export function HomePage() {

  return (
    <HomeContainer>
      <Header />
      <Intro />
      <Carrousel />
    </HomeContainer>
  );
}

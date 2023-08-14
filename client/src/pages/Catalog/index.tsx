import { Intro } from "./components/Intro";
import { OurProducts } from "./components/OurProducts";
import { HomeContainer } from "./styles";

export function HomePage() {

  return (
    <HomeContainer>
      <Intro />

      <OurProducts />
    </HomeContainer>
  );
}

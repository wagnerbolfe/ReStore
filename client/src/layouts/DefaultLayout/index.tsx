import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";
import App from "../../App";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <App />
    </LayoutContainer>
  );
}

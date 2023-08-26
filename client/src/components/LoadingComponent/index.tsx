import { Hypnosis } from "react-cssfx-loading";
import { LoadingContainer } from "./styles";

export default function LoadingComponent() {
  return (
    <LoadingContainer>
      <Hypnosis color="#574F4D" width="60px" height="60px" />
      <p style={{ fontFamily: 'Ubuntu', fontSize: '20px', color: '#574F4D' }}>Carregando...</p>
    </LoadingContainer>
  )
}
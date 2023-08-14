import { Hypnosis } from "react-cssfx-loading";
import { LoadingContainer } from "./styles";

export default function LoadingComponent() {
  return (
    <LoadingContainer>
      <Hypnosis color="#3996f2" width="60px" height="60px" />
    </LoadingContainer>
  )
}
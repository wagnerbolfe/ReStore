import { useLocation } from "react-router-dom";
import { IntroTitle } from "../Catalog/components/Intro/styles";
import { ErrorField, ErrorFieldMessage, ServerErrorContainer } from "./styles";
import { Divider } from "@mui/material";

export default function ServerError() {
  const { state } = useLocation();

  return (
    <>
      <ServerErrorContainer>
        {state?.error ? (

          <ErrorField>
            <IntroTitle size="xl" style={{ color: '#fff' }}>
              {state.error.title}
            </IntroTitle>
            <Divider color="white" />
            <ErrorFieldMessage>{state.error.detail}</ErrorFieldMessage>
          </ErrorField>

        ) : (
          <ErrorField>
            <IntroTitle size="xl" color="text">
              Erro de servidor
            </IntroTitle>
          </ErrorField>
        )}
      </ServerErrorContainer>

    </>
  )
}
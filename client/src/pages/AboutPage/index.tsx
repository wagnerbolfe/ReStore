import { useState } from "react";
import agent from "../../api/agent";
import { Button } from "../../components/Button";
import { IntroTitle } from "../Catalog/components/Intro/styles";
import { Siren } from '@phosphor-icons/react'
import { AboutPageContainer, ButtonErrorGroup, MessageError, ListError, ListErrorText } from "./styles";
import { Header } from "../../components/Header";

export default function AboutPage() {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  function getValidationErrors() {
    agent.TestErrors.getValidationError()
      .then(() => console.log('should not see this'))
      .catch(error => setValidationErrors(error))
  }

  return (
    <>
      <Header />
      <AboutPageContainer>
        <IntroTitle size="xl" color="text">
          Erros para teste
        </IntroTitle>

        <ButtonErrorGroup>
          <Button text="Erro 400" onClick={() => agent.TestErrors.get400Error().catch(error => console.log(error))} />
          <Button text="Erro 401" onClick={() => agent.TestErrors.get401Error().catch(error => console.log(error))} />
          <Button text="Erro 404" onClick={() => agent.TestErrors.get404Error().catch(error => console.log(error))} />
          <Button text="Erro 500" onClick={() => agent.TestErrors.get500Error().catch(error => console.log(error))} />
          <Button text="Erro de Validação" onClick={getValidationErrors} />
        </ButtonErrorGroup>

        {validationErrors.length > 0 &&
          <MessageError>
            <Siren size={32} />
            {validationErrors.map(error => (
              <ListError key={error}>
                <ListErrorText>{error}</ListErrorText>
              </ListError>
            ))}
          </MessageError>
        }

      </AboutPageContainer>
    </>
  )
}
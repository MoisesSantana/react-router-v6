import { useRouteError } from "react-router-dom"
import { ErrorContainer } from "./styles";

export function ErrorMessage() {
  const error = useRouteError();

  return (
    <ErrorContainer>
      <span>
        {error}
        {' '}
        😢
      </span>
    </ErrorContainer>
  );
}
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

function ErrorScreen() {
  const error = useRouteError();
  return <div>{isRouteErrorResponse(error) && error.statusText}</div>;
}

export default ErrorScreen;

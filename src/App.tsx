import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorScreen, GameScreen, GameSettings, PlayerRating } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GameSettings />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/game',
    element: <GameScreen />,
  },
  {
    path: '/rating',
    element: <PlayerRating />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

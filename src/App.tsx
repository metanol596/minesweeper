import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorScreen, GameScreen, GameSettings, PlayerRating } from './pages';

function App() {
  const [minesCount, setMinesCount] = useState<number>(10);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <GameSettings setMinesCount={setMinesCount} />,
      errorElement: <ErrorScreen />,
    },
    {
      path: '/game',
      element: <GameScreen minesCount={minesCount} />,
    },
    {
      path: '/rating',
      element: <PlayerRating />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

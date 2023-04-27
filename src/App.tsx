import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorScreen, GameScreen, GameSettings, PlayerRating } from './pages';

export interface Level {
  level: string;
  cells: number;
  field: string;
  mines: number;
}

const GAME_LEVELS: Level[] = [
  { level: 'Простой', cells: 8 * 8, field: '8x8', mines: 10 },
  { level: 'Средний', cells: 16 * 16, field: '16x16', mines: 40 },
  { level: 'Сложный', cells: 32 * 16, field: '32x16', mines: 100 },
];

function App() {
  const [currentLevel, setCurrentLevel] = useState<Level>(GAME_LEVELS[0]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <GameSettings
          levels={GAME_LEVELS}
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
        />
      ),
      errorElement: <ErrorScreen />,
    },
    {
      path: '/game',
      element: <GameScreen minesCount={currentLevel.mines} cellsCount={currentLevel.cells} />,
    },
    {
      path: '/rating',
      element: <PlayerRating />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

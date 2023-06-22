import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorScreen, GameScreen, GameSettings, PlayerRating } from './pages';

export interface Level {
  level: string;
  fieldSize: { cols: number; rows: number };
  field: string;
  mines: number;
}

const FIELD_SIZES = {
  small: { cols: 8, rows: 8 },
  medium: { cols: 16, rows: 16 },
  large: { cols: 32, rows: 16 },
};

const GAME_LEVELS: Level[] = [
  {
    level: 'Простой',
    fieldSize: FIELD_SIZES.small,
    field: '8x8',
    mines: 10,
  },
  {
    level: 'Средний',
    fieldSize: FIELD_SIZES.medium,
    field: '16x16',
    mines: 40,
  },
  {
    level: 'Сложный',
    fieldSize: FIELD_SIZES.large,
    field: '32x16',
    mines: 100,
  },
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
      element: <GameScreen currentLevel={currentLevel} />,
    },
    {
      path: '/rating',
      element: <PlayerRating />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

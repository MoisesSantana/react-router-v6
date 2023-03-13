import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ErrorMessage } from '../components';
import { RootLayout } from '../layout/RootLayout';
import { Characters, charactersLoader } from '../pages/Characters';
import { Episodes, episodesLoader } from '../pages/Episodes';
import { Home } from '../pages/Home';
import { Locations, locationsLoader } from '../pages/Locations';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<ErrorMessage />}
    >
      <Route
        index
        element={<Home />}
      />
      <Route
        path='characters'
        element={<Characters />}
        loader={charactersLoader}
      />
      <Route
        path='locations'
        element={<Locations />}
        loader={locationsLoader}

      />
      <Route
        path='episodes'
        element={<Episodes />}
        loader={episodesLoader}
      />
    </Route>
  )
);
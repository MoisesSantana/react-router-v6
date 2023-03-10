import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ErrorMessage } from '../components';
import { RootLayout } from '../layout/RootLayout';
import { Characters, charactersLoader } from '../page/Characters';
import { Episodes, episodesLoader } from '../page/Episodes';
import { Home } from '../page/Home';
import { Locations, locationsLoader } from '../page/Locations';

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
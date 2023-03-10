import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}

export default App

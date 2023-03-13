import { BrowserRouter } from "react-router-dom"
import { RootLayout } from "./layout/RootLayout"
import { Routes } from "./Routes"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RootLayout />
    </BrowserRouter>
  )
}

export default App

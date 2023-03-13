import { Header } from "../components";
import { Routes } from "../Routes";
import { MainContainer } from "./styles";

export function RootLayout() {
  return (
    <>
      <Header />
      <MainContainer>
        <Routes />
      </MainContainer>
    </>
  )
}
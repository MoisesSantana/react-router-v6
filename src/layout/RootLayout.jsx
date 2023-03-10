import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { MainContainer } from "./styles";

export function RootLayout() {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  )
}
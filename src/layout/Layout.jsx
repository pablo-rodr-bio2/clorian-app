import { Outlet } from "react-router-dom"
import { Container } from "@mui/material"

import Header from "./components/Header"

const Layout = () => {
  return (
    <Container maxWidth="lg">
      <Header />

      <main>
        <Outlet />
      </main>
    </Container>
  )
}

export default Layout
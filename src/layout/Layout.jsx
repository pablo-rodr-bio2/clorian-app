import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Container from '@mui/material/Container';


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
import { Outlet } from "react-router-dom";

// Components, pages
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Container } from "./LayoutStyled";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

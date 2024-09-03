import Menu from "../common/components/Menu";
import Footer from "../common/components/Footer";

const MainLayout = ({children}) => {
  return (
    <>
      <Menu />
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;

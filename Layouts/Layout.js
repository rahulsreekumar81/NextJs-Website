import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = ({ childern }) => {
  return (
    <div>
      <Header />
      {childern}
      <Footer />
    </div>
  );
};
export default Layout;

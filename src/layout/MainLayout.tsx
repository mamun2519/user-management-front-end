import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

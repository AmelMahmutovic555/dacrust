import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import MenuPage from "@/components/MenuPage/MenuPage";
export default function Order() {
  return (
    <>
      <Navbar />
      <Header
        header1={"ORDER ONLINE"}
        btnStyle={{ backgroundColor: "transparent" }}
        h1Style1={{ fontSize: "100px", fontWeight: "900" }}
      />
      <MenuPage />
      <Contact />
      <Footer />
    </>
  );
}

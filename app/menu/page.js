import Contact from "@/components/Contact/Contact";
import Foods from "@/components/Foods/Foods";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
// import MenuPage from "@/components/MenuPage/MenuPage";
import Navbar from "@/components/Navbar/Navbar";

export default function Menu() {
  return (
    <>
      <Navbar />
      <Header
        header1={"MENU"}
        btnStyle={{ backgroundColor: "transparent" }}
        h1Style1={{ fontSize: "100px", fontWeight: "900" }}
      />
      <Foods />
      <Contact />
      <Footer />
    </>
  );
}

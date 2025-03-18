import Contact from "../Contact/Contact";
import DeliverSection from "../DeliverSection/DeliverSection";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import SectionFavorites from "../SectionFavorites/SectionFavorites";
import SectionRecipe from "../SectionRecipe/SectionRecipe";
import SectionSpecial from "../SectionSpecial/SectionSpecial";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header
        header1={"OPEN FOR DELIVERY & PICK UP"}
        header2={"GET IT WHILE IT'S HOT"}
        btn={"Order Online"}
        h1Style1={{ textAlign: "center" }}
      />
      <SectionRecipe />
      <SectionFavorites />
      <SectionSpecial />
      <DeliverSection />
      <Contact />
      <Footer />
    </>
  );
}

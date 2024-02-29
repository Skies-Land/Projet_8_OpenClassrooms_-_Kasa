import Banner from "../../layout/banner/Banner.jsx";
import Gallery from "../../components/gallery/Gallery.jsx";
import Logement from "../2_Logement_page/Logement.jsx";

function HomePage() {
  return (
    <>
      <Banner />
      <Gallery path= "logement/:id" element={<Logement/>} />
    </>
  );
};

export default HomePage;



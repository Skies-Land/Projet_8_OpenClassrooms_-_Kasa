// "rfce" pour créé un composant react avec l'extension "ES7 React"

import Header from "./components/header/Header.jsx";
import Banner from "./components/banner/Banner.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Main_content from "./pages/1_home/Main_content.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <Main_content>
        <Banner />
        <Gallery />
      </Main_content>
      <Footer />
    </div>
  );
};

export default App;



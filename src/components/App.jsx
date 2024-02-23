// "rfce" pour créé un composant react avec l'extension "ES7 React"

import Header from "./Header";
import Banner from "./Banner";
import Housing_gallery from "./Housing_gallery";
import Main_content from "./Main_content.jsx";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Main_content>
        <Banner />
        <Housing_gallery />
      </Main_content>
      <Footer />
    </div>
  );
};

export default App;



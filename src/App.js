import "./App.scss";
import DetailSection from "./components/detail-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import ImageList from "./components/image-list";
import Logo from "./components/logo";

function App() {
  return <div className="App">
    <HeroSection />
    <section className="centered-line">
      <ImageList />
      <DetailSection />
    </section>
    <section className="logo-container">
      <Logo />
    </section>
    <Footer />
  </div >;
}

export default App;

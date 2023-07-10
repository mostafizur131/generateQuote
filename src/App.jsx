import Content from "./componets/Content";
import Footer from "./componets/Footer";
import Header from "./componets/Header";


const App = () => {
  return (
    <div>
      <Header title={"Generate Quote"} />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
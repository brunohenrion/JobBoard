import "./App.css";

import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header name="The Job Board" />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;

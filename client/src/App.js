import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import CardGrid from "./components/cardGrid";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardGrid />
      <Footer />
    </div>
  );
}

export default App;

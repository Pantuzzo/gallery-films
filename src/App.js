import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Description from "./Pages/InfoMovie";
import { FilmProvider } from "./FilmContext";

function App() {
  return (
    <FilmProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} /> {/* Ajuste aqui */}
            <Route path="/Description" element={<Description />} />{" "}
            {/* Ajuste aqui */}
          </Routes>
        </div>
      </Router>
    </FilmProvider>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Description from "./Pages/InfoMovie";

function App() {
  return (
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
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './adaptive.css';

import { Home } from "./pages/Home";
import { Information } from "./pages/Information";
import { Game } from "./pages/Game";

import { ColorBlast } from "./pages/ColorBlast";
import { DinoDi } from "./pages/DinoDi";
import { SnakePy } from "./pages/SnakePy";






const App = () => {
  return (
    <div className="App">

      <Router>

        <Routes>
                      {/* pages sites */}
          <Route path="https://k-maksimovich.github.io/deputies-of-nazarbayev/" element={<Home />} />
          <Route path="/info" element={<Information />} />
          <Route path="/games" element={<Game />} />

          <Route path="/games/color-blast" element={<ColorBlast />} />
          <Route path="/games/DinoDi" element={< DinoDi />} />
          <Route path="/games/SnalePy" element={<SnakePy />} />
        </Routes>

      
      </Router>

    </div>
  );
}

export default App;

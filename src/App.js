import {Routes, Route} from "react-router-dom";

import './adaptive.css';

import { Home } from "./pages/Home";
import { Information } from "./pages/Information";
import { Game } from "./pages/Game";

import { ColorBlast } from "./pages/ColorBlast";
import { DinoDi } from "./pages/DinoDi";
import { SnakePy } from "./pages/SnakePy";






const App = () => {
  return (
    

      <Routes>
                      {/* pages sites */}
        <Route path="/" element={<Home />} />
        <Route path="/deputies-of-nazarbayev/info" element={<Information />} />
        <Route path="/games" element={<Game />} />

        <Route path="/games/color-blast" element={<ColorBlast />} />
        <Route path="/games/DinoDi" element={< DinoDi />} />
        <Route path="/games/SnalePy" element={<SnakePy />} />
      </Routes>

      
    

  );
}

export default App;

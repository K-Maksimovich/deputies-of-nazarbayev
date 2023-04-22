import { Routes, Route} from "react-router-dom";

import './adaptive.css';

import { Home } from "./pages/Home";
import { Information } from "./pages/Information";
import { Game } from "./pages/Game";

import { LogIn } from './pages/LogIn'
import { Register } from './pages/Register'

import { ColorBlast } from "./pages/ColorBlast";
import { DinoDi } from "./pages/DinoDi";
import { SnakePy } from "./pages/SnakePy";






const App = () => {
  return (
    <>

      <Routes>
                      {/* pages sites */}
        <Route path="https://K-Maksimovich.github.io/deputies-of-nazarbayev/" element={<Home />} />
        <Route path="/info" element={<Information />} />
        <Route path="/games" element={<Game />} />

        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />

        <Route path="/games/color-blast" element={<ColorBlast />} />
        <Route path="/games/DinoDi" element={< DinoDi />} />
        <Route path="/games/SnalePy" element={<SnakePy />} />
      </Routes>

    </>
    

  );
}

export default App;

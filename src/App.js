
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/heading/Header';
import Home from './components/home/Home';
import About from "./pages/about/About";

function App() {
  return (
    <div className="app">
     <BrowserRouter>
     <Header />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about"  element={<About />} />
      
    </Routes>
  </BrowserRouter>
    </div>

  );
}

export default App;

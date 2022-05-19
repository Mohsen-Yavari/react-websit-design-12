
import Header from './components/heading/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
     <BrowserRouter>
     <Header />
    <Routes>
   
    </Routes>
  </BrowserRouter>
    </div>

  );
}

export default App;

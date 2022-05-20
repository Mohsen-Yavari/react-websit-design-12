
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/heading/Header';
import Home from './components/home/Home';
import About from "./pages/about/About";
import CourseHome from "./pages/allCourses/CourseHome";

function App() {
  return (
    <div className="app">
     <BrowserRouter>
     <Header />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about"  element={<About />} />
      <Route path="/courses"  element={<CourseHome />} />
      
    </Routes>
  </BrowserRouter>
    </div>

  );
}

export default App;

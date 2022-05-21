
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/heading/Header';
import Home from './components/home/Home';
import About from "./pages/about/About";
import CourseHome from "./pages/allCourses/CourseHome";
import Team from "./pages/team/Team";
import Price from "./pages/pricing/Price";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="app">
     <BrowserRouter>
     <Header />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about"  element={<About />} />
      <Route path="/courses"  element={<CourseHome />} />
      <Route path="/team"  element={<Team />} />
      <Route path="/pricing"  element={<Price />} />
      <Route path="/journal"  element={<Blog />} />
      <Route path="/contact"  element={<Contact />} />
      
    </Routes>
  </BrowserRouter>
    </div>

  );
}

export default App;

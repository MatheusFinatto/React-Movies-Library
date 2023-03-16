import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/movies-library/" element={<Home />} />
          <Route path="/movies-library/movie/:id" element={<Movie />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Header from "./component/Header";
import Aside from "./component/Aside";
import Section from "./component/Section";

function App() {
  return (
    <>
      <div className="dark:bg-black dark:text-white">
        <Navbar />
        <Header />
        <Aside />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;

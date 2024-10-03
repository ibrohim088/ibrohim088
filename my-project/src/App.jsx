import { Routes, Route } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Explor from "./pages/Explor";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Bookmarks from "./Bookmarks";

function App() {
  return (
    <>
      <div className="container">
        <div className="flex mx-80">
          <SideMenu />
          <div className="p-16 w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/explor" element={<Explor />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

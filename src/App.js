import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VehicleLogs from "./pages/VehicleLogs";
import TollList from "./pages/TollList";
import PageNotFound from "./pages/PageNotFound";
import Resume from "./pages/Resume";
import Dummy from "./pages/Dummy";
import { DataProvider } from "./contexts/DataContext";

function App() {
  localStorage.setItem("a", "b");
  console.log(localStorage.getItem("a"));
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dummy />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/tollList" element={<TollList />} />
          <Route exact path="/vehicleLogs" element={<VehicleLogs />} />
          <Route exact path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;

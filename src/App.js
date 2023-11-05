import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import S3StaticWebpage from "./pages/S3StaticWebpage";
import VehicleLogs from "./pages/VehicleLogs";
import TollList from "./pages/TollList";
import PageNotFound from "./pages/PageNotFound";
import Resume from "./pages/Resume";
import Dummy from "./pages/Dummy";
import DashBoard from "./pages/DashBoard";
import Transactions from "./pages/Transactions";
import { DataProvider } from "./contexts/DataContext";
import Header from "./components/expenseTracker/Header";

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
          <Route exact path="/s3StaticWebpage" element={<S3StaticWebpage />} />
          <Route
            exact
            path="/expenseTracker"
            element={
              <>
                <Header />
                <div className="container">
                  <DashBoard />
                  <Transactions />
                </div>
              </>
            }
          />
          <Route exact path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;

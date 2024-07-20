import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import S3StaticWebpage from "./pages/S3StaticWebpage";
import VehicleLogs from "./pages/VehicleLogs";
import TollList from "./pages/TollList";
import PageNotFound from "./pages/PageNotFound";
import Resume from "./pages/Resume";
import Dummy from "./pages/Dummy";
import HomePage from "./pages/HomePage";
import Photo from "./pages/Photo";
import DashBoard from "./pages/DashBoard";
import Transactions from "./pages/Transactions";
import AwsAPIandLambda from "./pages/AwsAPIandLambda";
import AwsS3TextFile from "./pages/AwsS3TextFile";
import SendingAPIrequest from "./pages/SendingAPIrequest";
import ProcessingAPIrequest from "./pages/ProcessingAPIrequest";
import MiniGames from "./pages/MiniGames";
import ThreeRadio from "./pages/ThreeRadio";
import { DataProvider } from "./contexts/DataContext";
import Header from "./components/expenseTracker/Header";

function App() {
  localStorage.setItem("a", "b");
  console.log(localStorage.getItem("a"));
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/others" element={<Dummy />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/tollList" element={<TollList />} />
          <Route exact path="/vehicleLogs" element={<VehicleLogs />} />
          <Route exact path="/s3StaticWebpage" element={<S3StaticWebpage />} />
          <Route exact path="/photo" element={<Photo />} />
          <Route exact path="/awsAPIandLambda" element={<AwsAPIandLambda />} />
          <Route exact path="/awsS3TextFile" element={<AwsS3TextFile />} />
          <Route
            exact
            path="/sendingAPIrequest"
            element={<SendingAPIrequest />}
          />
          <Route
            exact
            path="/processingAPIrequest"
            element={<ProcessingAPIrequest />}
          />
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
          <Route exact path="/miniGames" element={<MiniGames />} />
          <Route exact path="/threeRadio" element={<ThreeRadio />} />
          <Route exact path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;

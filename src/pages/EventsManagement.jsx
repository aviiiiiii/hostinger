
import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { DataProvider } from "../contexts/DataContext";
import HomePage from '../components/eventsManagement/HomePage';
import EventsPage from '../components/eventsManagement/EventsPage';
import FeedbackPage from '../components/eventsManagement/FeedbackPage';
import AdminPage from '../components/eventsManagement/AdminPage';

function EventsManagement() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route exact path="/eventsManagement" element={<HomePage />} />
          <Route exact path="/eventsEventsPage" element={<EventsPage />} />
          <Route exact path="/eventsFeedbackPage" element={<FeedbackPage />} />
          <Route exact path="/eventsAdminPage" element={<AdminPage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default EventsManagement;

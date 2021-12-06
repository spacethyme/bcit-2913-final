import './App.css';
//import { useState } from "react";
import { Router, Outlet, ReactLocation } from "react-location"; // "Link" will be used in the 2 components; "useMatch" will be used by ProfilePage only
import IntakeForm from './IntakeForm';
import ProfilePage from './ProfilePage';

const location = new ReactLocation(); // needed for Router Component

export default function App() {

  const routes = [
    {
      path: "/",
      element: <IntakeForm />
    },
    {
      path: "profile",
      element: <ProfilePage formData={""} /> // blank formData for now, just to test page
    }
  ]

  return (
    <Router routes={routes} location={location}>
      <div className="App">
        <Outlet />
      </div>
    </Router>
  );
}

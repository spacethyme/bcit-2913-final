import './App.css';
import { useState } from "react";
import { Router, Outlet, ReactLocation } from "react-location"; // "Link" will be used in the 2 components; "useMatch" will be used by ProfilePage only
import IntakeForm from './IntakeForm';
import ProfilePage from './ProfilePage';

const location = new ReactLocation(); // needed for Router Component

export default function App() {

  const [aboutMe, setAboutMe] = useState("defaultAboutMe");

  const routes = [
    {
      path: "/",
      element: <IntakeForm aboutMe={aboutMe} setAboutMe={setAboutMe} />
    },
    {
      path: "/:id",
      element: <ProfilePage />
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

import './App.css';
import { useState } from "react";
import { Router, Outlet, ReactLocation } from "react-location"; // "Link" will be used in the 2 components; "useMatch" will be used by ProfilePage only
import IntakeForm from './IntakeForm';
import ProfilePage from './ProfilePage';

const location = new ReactLocation(); // needed for Router Component

export default function App() {

  const [formData, setFormData] = useState ({
    fullname: "",
    aboutme: "",
    urlgit: "",
    urltwit: "",
    books: "",
    html: false,
    css: false,
    sass: false,
    js: false,
    git: false,
    react: false,
    nodejs: false,
    php: false,
});

  const routes = [
    {
      path: "/",
      element: <IntakeForm formData={formData} setFormData={setFormData} />
    },
    {
      path: "profile",
      element: <ProfilePage formData={formData} />
    }
  ];

  return (
    <Router routes={routes} location={location}>
      <div className="App">
        <Outlet />
      </div>
    </Router>
  );
}

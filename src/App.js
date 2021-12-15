import './App.css';
import { useState } from "react";
import { Router, Outlet, ReactLocation } from "react-location"; // "Link" will be used in the 2 components; "useMatch" will be used by ProfilePage only
import IntakeForm from './IntakeForm';
import ProfilePage from './ProfilePage';

const location = new ReactLocation(); // needed for Router Component

export default function App() {

  const [database, setDatabase] = useState ( // database is an object
    {
      "users": [ // formData contains a property with the name "users" which contains an array
        {
          id: 0,
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
        }
      ]
    }
  );

  const routes = [
    {
      path: "/",
      element: <IntakeForm database={database} setDatabase={setDatabase} />
    },
    {
      path: "/profile/:id", // this has to go first, check if there is an ID provided
      element: <ProfilePage formData={database} />
    },
    {
      path: "profile", // here as a backup, in case no ID is provided
      element: <ProfilePage formData={database} />
    },
  ];

  return (
    <Router routes={routes} location={location}>
      <div className="App">
        <Outlet />
      </div>
    </Router>
  );
}

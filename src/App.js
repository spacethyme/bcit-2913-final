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
        },
        {   
          id: 1,
          fullname: "test user",
          aboutme: "about me. there should only be 6 buttons in the technologies section (no sass/php).",
          urlgit: "https://www.github.com",
          urltwit: "https://www.twitter.com",
          books: "book1, book2, book3",
          html: true,
          css: true,
          sass: false,
          js: true,
          git: true,
          react: true,
          nodejs: true,
          php: false,
        }
      ]
    }
  );

  const routes = [
    {
      path: "/",
      element: <IntakeForm userTemplate={database.users[0]} setDatabase={setDatabase} />
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
        <p>{JSON.stringify(database)}</p>
        <Outlet />
      </div>
    </Router>
  );
}

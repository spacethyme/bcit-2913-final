import './App.css';
import { useState } from "react";
import { Router, Outlet, ReactLocation } from "react-location"; // "Link" will be used in the 2 components; "useMatch" will be used by ProfilePage only
import IntakeForm from './IntakeForm';
import ProfilePage from './ProfilePage';

const location = new ReactLocation(); // needed for Router Component

export default function App() {

  const [formData, setFormData] = useState (
    {
      "users": [
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
      element: <IntakeForm formData={formData.users[0]} setFormData={setFormData} />
    },
    {
      path: "/profile/:id", // this has to go first, check if there is an ID provided
      element: <ProfilePage formData={formData} />
    },
    {
      path: "profile", // here as a backup, in case no ID is provided
      element: <ProfilePage formData={formData} />
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

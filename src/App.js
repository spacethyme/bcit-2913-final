import './App.css';
import { Router, Outlet, ReactLocation, Link, useMatch } from "react-location";
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

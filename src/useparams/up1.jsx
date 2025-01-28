import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";  

///useParams is used to get the parameters from the url



// Component to display user profile
const UserProfile = () => {
  // Extract userId parameter from URL
  const { userId } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Viewing details for User ID: {userId}</p>
    </div>
  );
};

// Main component demonstrating useParams
export const Up1 = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>useParams Demo</h1>

        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/user/1">View User 1</Link>
            </li>
            <li>
              <Link to="/user/2">View User 2</Link>
            </li>
            <li>
              <Link to="/user/3">View User 3</Link>
            </li>
          </ul>
        </nav>

        {/* Route Configuration */}
        <Routes>
          <Route path="/user/:userId" element={<UserProfile />} />
          <Route
            path="/"
            element={<h2>Select a user to view their profile</h2>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

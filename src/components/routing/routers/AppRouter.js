import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {GameGuard} from "../routeProtectors/GameGuard";
import GameRouter from "./GameRouter";
import {LoginGuard} from "../routeProtectors/LoginGuard";
import Login from "../../views/Login";
import Registration from "../../views/Registration";
import Profile from "../../views/Profile";
import {ProfileGuard} from "../routeProtectors/ProfileGuard";
import EditProfile from "../../views/EditProfile";
import {EditProfileGuard} from "../routeProtectors/EditProfileGuard";

/**
 * Main router of your application.
 * In the following class, different routes are rendered. In our case, there is a Login Route with matches the path "/login"
 * and another Router that matches the route "/game".
 * The main difference between these two routes is the following:
 * /login renders another component without any sub-route
 * /game renders a Router that contains other sub-routes that render in turn other react components
 * Documentation about routing in React: https://reactrouter.com/en/main/start/tutorial 
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/game/*" element={<GameGuard />}>
          <Route path="/game/*" element={<GameRouter base="/game"/>} />
        </Route>

        <Route path="/profile/:userId" element={<ProfileGuard/>}>
          <Route path="/profile/:userId" element={<Profile/>} />
        </Route>

        <Route path="/editProfile" element={<EditProfileGuard/>}>
          <Route path="/editProfile" element={<EditProfile/>} />
        </Route>

        <Route path="/login" element={<LoginGuard />}>
          <Route path="/login" element={<Login/>} />
        </Route>
        
        <Route path="/registration" element={<Registration/>} />

        <Route path="/" element={
          <Navigate to="/game" replace />
        }/>

      </Routes>
    </BrowserRouter>
  );
};

/*
* Don't forget to export your component!
 */
export default AppRouter;

import React from "react";
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AdminAssigned from "./Components/AdminAssigned/AdminAssigned";
import Dashboard from "./Components/Dashboard/Dashboard";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Components/Login/Login";
import LogOut from "./Components/Login/LogOut";
import People from "./Components/People/People";
import MyProfile from "./Components/Myprofile/MyProfile";
import Signup from "./Components/Signup/Signup";
import Settings from "./Components/Settings/Settings";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import Unsubscribe from "./Components/Unsubscribe/Unsubscribe";
import Theme from "./Components/Theme/Theme";
import ListOfJd from "./Components/ListOfJd/ListOfJd";
import MyworkSpace from "./Components/MyWorkSpace/MyWorkSpace";
import Reports from "./Components/Reports/Reports";
import Profile from "./Components/Myprofile/Profile";
import DasboardThisMonth from "./Components/Dashboard/DasboardThisMonth";
import DasboardLastmonth from "./Components/Dashboard/DashboardLastmonth";
import DasboardThisweek from "./Components/Dashboard/DashboardThisweek";
import DasboardThisquarter from "./Components/Dashboard/DashboardThisquarter";
import DashboardLastyear from "./Components/Dashboard/DashboardLastyear";
import Listofjd2 from "./Components/ListOfJd/Listofjd2";

function App() {

  return (
    <>
    <div>
      <BrowserRouter>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashbaord" element={<Dashboard />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/People" element={<People />} />
      <Route path="/MyProfile" element={<MyProfile/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Admin-Assigned-Information" element={<AdminAssigned />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/ChangePassword" element={<ChangePassword />}/>
      <Route path="/Unsubscribe" element={<Unsubscribe />} />
      <Route path="/Theme" element={<Theme />}/>
      <Route path="/List-of-JDs" element={<ListOfJd />} />
      <Route path="/My-Work-Space" element={<MyworkSpace />} />
      <Route path="/Reports" element={<Reports />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Dashbaord/thismonth" element={<DasboardThisMonth />} />
      <Route path="/Dashbaord/lastmonth" element={<DasboardLastmonth />} />
      <Route path="/Dashbaord/thisweek" element={<DasboardThisweek />} />
      <Route path="/Dashbaord/lastquarter" element={<DasboardThisquarter/>} />
      <Route path="/Dashbaord/lastyear" element={<DashboardLastyear/>} />
      <Route path="/jdlist2" element={<Listofjd2/>} />
    </Routes>
  </BrowserRouter>
  </div>
    </>
  );
};

export default App;
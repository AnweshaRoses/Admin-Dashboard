import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UserList";
import "./app.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";


function App() {
  return (
    <Router >
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/ >
        <Route path="/users" element={<UserList/>}/ >
        <Route path="/user/:userId" element={<User/>}/ >
        <Route path="/newuser" element={<NewUser/>}/ >
          
      </Routes>
      </div>
    </Router>
  );
}

export default App;

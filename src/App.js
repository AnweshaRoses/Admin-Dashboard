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


function App() {
  return (
    <Router >
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/ >
        <Route path="/users" element={<UserList/>}/ >
          
      </Routes>
      </div>
    </Router>
  );
}

export default App;

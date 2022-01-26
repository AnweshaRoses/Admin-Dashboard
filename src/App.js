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
import Products from "./pages/products/Products";
import ProductList from "./pages/productlist/ProductList";


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
        <Route path="/products" element={<Products/>}/ >
        <Route path="/product/:productsID" element={<ProductList/>}/ >
        <Route path="/newproducts" element={<Products/>}/ >
          
      </Routes>
      </div>
    </Router>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { EcommerceGen } from "./component/EcommerceGen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DiscoverUs } from "./component/DiscoverUs";
import { Header } from "./component/Header";
import { SignUp } from "./component/SignUp";
import { Login } from "./component/Login";
import { SuccessSignUp } from "./component/SuccessSignUp";
import { ShowProduct } from "./component/ShowProduct";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<EcommerceGen />} />
          <Route path="/DicoverUs" element={<DiscoverUs />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:product" element={<ShowProduct />} />
          <Route path="/SuccessSignUp" element={<SuccessSignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

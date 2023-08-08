import { Route, Routes } from "react-router-dom";
import MainPage from "../views/MainPage";
import ListUser from "../views/ListUser";
import SingpleUser from "../views/SingpleUser";
import Login from "../views/Login";
import Reginster from "../views/Reginster";

export default function APPRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ListUser" element={<ListUser />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Reginster" element={<Reginster />} />
        <Route path="/SingpleUser" element={<SingpleUser />} />
      </Routes>
    </div>
  );
}

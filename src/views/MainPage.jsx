import { Link } from "react-router-dom";
import "../styles/MainPage.scss";

export default function MainPage() {
  return (
    <div className="containerMainPage">
      <Link to="ListUser">ListUser </Link>
      <Link to="SingpleUser">SingpleUser </Link>
      <Link to="Login">Login </Link>
      <Link to="Reginster">Reginster </Link>
    </div>
  );
}

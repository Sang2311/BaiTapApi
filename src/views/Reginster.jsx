import "../styles/Login.scss";
import "../styles/Reginster.scss";
export default function Reginster() {
  return (
    <div>
      <div className="login">
        <div className="containerLogin">
          <h1>Đăng Ký</h1>
          <div className="from-control">
            <input type="text" placeholder="email" />
          </div>
          <div className="from-control">
            <input type="text" placeholder="user name" />
          </div>
          <div className="from-control">
            <input type="text" placeholder="password" />
          </div>
          <div className="resginter">
            <button className="LoginDangNhap">Đăng Ký</button>
          </div>
        </div>
      </div>
    </div>
  );
}

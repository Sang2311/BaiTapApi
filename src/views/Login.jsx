import "../styles/Login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="containerLogin">
        <h1>Login</h1>
        <div className="from-control">
          <input type="text" placeholder="user name" />
        </div>
        <div className="from-control">
          <input type="text" placeholder="password" />
        </div>
        <button className="LoginDangNhap">Đăng Nhập</button>
      </div>
    </div>
  );
}

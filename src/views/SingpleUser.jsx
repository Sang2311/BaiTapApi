import { useState } from "react";
import { getProduct } from "../api/getListUser";
import "../styles/SingpleUser.scss";
import { Link } from "react-router-dom";
export default function SingpleUser() {
  const [list, setList] = useState({});
  const [search, setSeacrh] = useState("");
  const [error, setError] = useState("");
  // useEffect(() => {
  //   getProduct("/api/users/").then((data) => console.log(data.data));
  // }, []);
  console.log(list && list);
  const handleChange = (event) => {
    console.log(event.target.value);
    setSeacrh(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getProduct(`/api/users/${search}`)
      .then((data) => setList(data?.data.data))
      .catch((error) => setError(error));
    setSeacrh("");
  };
  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            placeholder="Nhập id"
            onChange={(e) => handleChange(e)}
            value={search}
          />
          <button type="submit">Lấy data</button>
        </form>
        {list && (
          <div className="containerSingpleUser">
            <div className="singpleUserItem">
              <p>ID: {list.id}</p>
              <p>Email: {list.email}</p>
              <p>FirstName: {list.first_name}</p>
              <p>LastName: {list.last_name}</p>
            </div>
            <div className="singpleUserAvatar">
              <img style={{ borderRadius: "50%" }} src={list.avatar} alt="" />
            </div>
          </div>
        )}
        {error && (
          <p style={{ color: "red", fontWeight: "800" }}>{error.message}</p>
        )}
      </div>
      <Link style={{ margin: "20px" }} to="/">
        Quay Về
      </Link>
    </div>
  );
}

import { useEffect, useState } from "react";
import { getProduct } from "../api/getListUser";
import "../styles/ListUser.scss";
import { Link } from "react-router-dom";

export default function ListUser() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getProduct("/api/users").then((data) => setList(data?.data));
  }, []);

  console.log(list && list);
  return (
    <div>
      {list &&
        list.data &&
        list.data.map((item) => {
          return (
            <div className="container" key={item.id}>
              <div className="item">
                <p>ID: {item.id}</p>
                <p>Email:{item.email} </p>
                <p>FirstName:{item.first_name} </p>
                <p> LastName :{item.last_name}</p>
              </div>
              <div className="item-img">
                <img src={item.avatar} alt="" />
              </div>
            </div>
          );
        })}
      <Link to="/">Quay Về</Link>
    </div>
  );
}

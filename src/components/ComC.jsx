import { React, useState, useEffect } from "react";
import { Button } from "./Button";
import axios from "axios";

export const ComC = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    loastUser();
  }, []);

  const loastUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    console.log(result);
    setusers(result.data);
  };
  return (
    <div className="container">
      <Button />
      <table className="common_table">
        <thead className="row_header blue">
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {users.map((curElem, id) => (
            <tr key={id}>
              <td>{curElem.username}</td>
              <td>{curElem.email}</td>
              <td>{curElem.active}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

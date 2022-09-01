import { React, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useEffect } from "react";
export const ComA = () => {
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
        <thead className="row_header red">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {users.map((curElem, id) => (
            <tr key={id}>
              <td>{curElem.name}</td>
              <td>{curElem.age}</td>
              <td>{curElem.occupaction}</td>
              <td>{curElem.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

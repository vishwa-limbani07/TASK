import { React, useState, useEffect } from "react";
import { Button } from "./Button";
import axios from "axios";
export const ComB = () => {
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
        <thead className="row_header green">
          <tr>
            <th>Product</th>
            <th>UnitPrice</th>
            <th>Quantity</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((curElem, id) => (
            <tr key={id}>
              <td>{curElem.product}</td>
              <td>{curElem.unitprice}</td>
              <td>{curElem.quantity}</td>
              <td>{curElem.datesold}</td>
              <td>{curElem.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

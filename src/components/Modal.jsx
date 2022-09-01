import { React, useState } from "react";
import axios from "axios";
export const Modal = ({ closeModal }) => {
  const [user, setuser] = useState({
    id: new Date().getTime().toString(),
    name: "",
    age: "",
    occupaction: "",
    location: "",
  });
  const { name, age, occupaction, location } = user;
  const handleFormChange = (e) => {
    e.preventDefault();
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const handleAddFormsubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
  };
  return (
    <div>
      <div className="cancle_btn">
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className="modal_container">
        <form onSubmit={(e) => handleAddFormsubmit(e)}>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter Your Name"
            onChange={handleFormChange}
            required
          />
          <br />
          <input
            type="text"
            name="age"
            value={age}
            placeholder="Enter Your age"
            onChange={handleFormChange}
            required
          />
          <br />
          <input
            type="text"
            name="occupaction"
            value={occupaction}
            placeholder="Enter Your occupation"
            onChange={handleFormChange}
            required
          />
          <br />
          <input
            type="text"
            name="location"
            value={location}
            placeholder="Enter Your Loaction"
            onChange={handleFormChange}
            required
          />
          <br />
          <button type="submit">Submit</button>
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

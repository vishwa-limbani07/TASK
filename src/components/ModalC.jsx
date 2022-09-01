import { React, useState } from "react";
import axios from "axios";
export const ModalC = ({ closeModal }) => {
  const [user, setuser] = useState({
    id: new Date().getTime().toString(),
    username: "",
    email: "",
    active: "",
  });
  const { username, email, active } = user;
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
            name="username"
            value={username}
            placeholder="Enter Your username"
            onChange={handleFormChange}
            required
          />
          <br />
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter Your email"
            onChange={handleFormChange}
            required
          />
          <br />
          <input
            type="text"
            name="active"
            value={active}
            placeholder="Enter Your active"
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

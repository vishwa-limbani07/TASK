import { React, useState } from "react";
import axios from "axios";
export const ModalB = ({ closeModal }) => {
  const [user, setuser] = useState({
    id: new Date().getTime().toString(),
    product: "",
    unitprice: "",
    quantity: "",
    datesold: "",
    status: "",
  });
  const { product, unitprice, quantity, datesold, status } = user;
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
            name="product"
            value={product}
            placeholder="Enter Your Product"
            onChange={handleFormChange}
            required
          />
          <br />
          <input
            type="text"
            name="unitprice"
            value={unitprice}
            placeholder="Enter Your Unit Price"
            onChange={handleFormChange}
            required
          />
          <br />
          <input
            type="text"
            name="quantity"
            value={quantity}
            placeholder="Enter Your Quantity"
            onChange={handleFormChange}
            required
          />
          <br />
          <input
            type="text"
            name="datesold"
            value={datesold}
            placeholder="Enter Your Date Sold"
            onChange={handleFormChange}
            required
          />
          <br />
          <input
            type="text"
            name="status"
            value={status}
            placeholder="Enter Your Status"
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

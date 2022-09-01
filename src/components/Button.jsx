import React, { useState } from "react";
import { Modal } from "./Modal";
import { ModalB } from "./ModalB";
import { ModalC } from "./ModalC";
export const Button = () => {
  const [openModal, setopenModal] = useState(false);
  return (
    <div>
      <button
        className="openPopupbtn"
        onClick={(e) => {
          e.preventDefault();
          setopenModal(true);
        }}
      >
        + ADD
      </button>
      {openModal && <Modal closeModal={setopenModal} />}
      {/* {openModal && <Modal closeModal={setopenModal} /> && (
          <ModalB closeModal={setopenModal} />
        ) && <ModalC closeModal={setopenModal} />} */}
    </div>
  );
};

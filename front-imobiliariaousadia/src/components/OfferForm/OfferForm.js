import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./OfferForm.css";
import axios from 'axios';
import { backendUrl } from '../../config.js';
import { useParams } from 'react-router-dom';


const OfferForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    cpf: "",
    Payment: "Credit Card",
    Offer: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(backendUrl+`/users`);
      const users = response.data;

      const filteredUsers = users.filter((user) => user.cpf === formData.cpf);

      if (filteredUsers.length === 0) {
        setErrorMsg("CPF does not exist");
        return;
      }

      const user = filteredUsers[0];

      if (!user) {
        setErrorMsg("CPF does not exist");
        return;
      }

      const newOffer = {
        houseId: id,
        value: formData.Offer,
        paymentMethod: formData.Payment,
        userId: user._id,
        status: "pending",
      };

      await axios.post(backendUrl+"/offer", newOffer);

      console.log("Form data:", formData);
      console.log("New offer:", newOffer);

      setFormData({
        cpf: "",
        Payment: "Credit Card",
        Offer: "",
      });
      setErrorMsg("");
    } catch (error) {
      console.error("Error creating offer:", error);
      setErrorMsg("Error creating offer");
    }
  };

  return (
    <form className="OfferForm" onSubmit={handleSubmit}>
      <div className="column2">
        <label htmlFor="cpf">CPF</label>
        <br />
        <input
          type="text"
          id="cpf"
          name="cpf"
          pattern="[0-9]+"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="Payment">Payment Type</label>
        <br />
        <select
          id="Payment"
          name="Payment"
          value={formData.Payment}
          onChange={handleChange}
        >
          <option value="Credit Card">Credit Card</option>
          <option value="Pix">Pix</option>
          <option value="Check">Check</option>
        </select>
        <br />

        <label htmlFor="Offer">Initial Value Offered</label>
        <br />
        <input
          type="number"
          id="Offer"
          name="Offer"
          pattern="[0-9]+"
          value={formData.Offer}
          onChange={handleChange}
          required
        />
        <br />

        <div className="submit-button">
          <input type="submit" value="Submit" />
        </div>

        <Popup
          open={errorMsg !== ""}
          closeOnDocumentClick
          onClose={() => setErrorMsg("")}
        >
          <div>{errorMsg}</div>
        </Popup>
      </div>
    </form>
  );
};

export default OfferForm;

import React, { useState } from "react";
import { users, houseStatus } from "../../data";
import Popup from "reactjs-popup";
import "./OfferForm.css";

const OfferForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    phone: "",
    Offer: "",
    Payment: "Credit Card",
    cpf: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.cpf === formData.cpf);

    if (!user) {
      setErrorMsg("CPF does not exist");
      return;
    }

    const house = houseStatus.find((item) => item.id === formData.PropertyID);

    if (!house || house.status === "sold") {
      setErrorMsg("House does not exist or is sold");
      return;
    }

    const newHouse = {
      id: formData.PropertyID,
      status: "negotiation",
      owner: user.cpf,
      price: formData.Offer,
    };

    houseStatus.push(newHouse);

    console.log("Form data:", formData);
    console.log("New house status:", newHouse);

    setFormData({
      fname: "",
      email: "",
      phone: "",
      Offer: "",
      PropertyID: "",
      PropertyType: "House",
      Payment: "Credit Card",
      cpf: "",
    });
    setErrorMsg("");
  };

  return (
    <form className="OfferForm" onSubmit={handleSubmit}>
      <div className="column2">
        <label htmlFor="fname">First name</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="email">E-mail for Contact</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="phone">Phone for Contact</label>
        <br />
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]+"
          value={formData.phone}
          onChange={handleChange}
          required
        />
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
      </div>

      <div className="column-divider">
        <hr className="column-divider" />
      </div>

      <div className="column2">

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

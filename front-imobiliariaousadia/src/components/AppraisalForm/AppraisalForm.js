import './AppraisalForm.css';
import React, { useState } from "react";

const AppraisalForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    phone: "",
    Offer: "",
    PropertyID: "",
    PropertyType: "House",
    Payment: "Credit Card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the form data
    console.log(formData);
  };

  return (
    <form className="AppraisalForm" onSubmit={handleSubmit}>
      <div className='column2'>
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
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
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
      
      <div className='column2'>
      <label htmlFor="PropertyID">Property ID</label>
      <br />
      <input
        type="text"
        id="PropertyID"
        name="PropertyID"
        pattern="[0-9]+"
        maxLength="7"
        value={formData.PropertyID}
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="PropertyType">Property Type</label>
      <br />
      <select
        id="PropertyType"
        name="PropertyType"
        value={formData.PropertyType}
        onChange={handleChange}
      >
        <option value="House">House</option>
        <option value="Apartment">Apartment</option>
      </select>
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
      <div className="submit-button">
      <input type="submit" value="Submit" />
    </div>
    </div>

    </form>
  );
};

export default AppraisalForm;

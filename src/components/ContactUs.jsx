// src/components/ContactUs.jsx
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    companyEmail: "",
    phoneNumber: "",
    companyName: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log(formData);
  };

  return (
    <section id="contact" className="contact-us">
      <div>
        <h1 className="">Have A Project Or Partnership In Mind?</h1>
        <h5 className="">
          We’d love to hear from you. Please share more information and we will
          get back to you within one working day.
        </h5>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <div>
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Jhon walker"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="form-label">Work Email</label>
                  <input
                    type="email"
                    name="companyEmail"
                    placeholder="jwalker@company.com"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="form-label">Phone Number</label>
                  <input
                    type="phonenumber"
                    name="phoneNumber"
                    placeholder="1234567890"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Your Corporation"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="form-label">How can we help you?</label>
                  <textarea
                    name="message"
                    placeholder="Write your message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    cols={30}
                    required
                  ></textarea>
                </div>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

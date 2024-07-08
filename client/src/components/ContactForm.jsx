import React, { useState } from "react";
import Button from "../button/Button";

import contactImage from "../assets/student.jpg";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    qualification: "",
    path: "",
    destination: "",
    funds: "",
  });
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setContactError("");

    if (!isValidEmail(formData.email)) {
      setEmailError("Invalid Email Address");
      return;
    }

    if (formData.contact.length < 10) {
      setContactError("Contact number should contain 10 digits");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setFormData(data);

      toast.success("Form submitted successfully!");

      setTimeout(() => {
        window.location.href = "/register";
      }, [5000]);
    } catch (err) {
      console.log(err);
      toast.error("Error submitting form", err);
    }
  };

  return (
    <>
      <div>
        <div className="flex">
          <img
            src={contactImage}
            alt="contactImage"
            className="max-md:hidden max-w-[380px] h-[540px] object-cover rounded-tl-xl rounded-bl-lg"
          />
          <form
            className="bg-white flex flex-col items-center justify-center  rounded-tr-lg rounded-br-lg max-md:rounded-xl"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4  max-w-[calc(100vw-24px)] p-6">
              <div className="flex flex-col col-span-2 max-md:col-span-2 justify-between gap-x-4 gap-y-2.5">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex flex-col col-span-2 max-md:col-span-2 justify-between gap-x-4 gap-y-2.5">
                <label htmlFor="contact">Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="Contact"
                  required
                />
                {contactError && <p className="text-red-400">{contactError}</p>}
              </div>
              <div className="flex flex-col col-span-4 max-md:col-span-2 justify-between gap-x-4 gap-y-2.5">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                />
                {emailError && <p className="text-red-400">{emailError}</p>}
              </div>
              <div className="flex flex-col col-span-2  justify-between gap-x-4 gap-y-2.5">
                <label htmlFor="What_describes_you">What describes you?</label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  required
                >
                  <option
                    value=""
                    disabled
                    className="text-gray-500 cursor-not-allowed"
                  >
                    -select-
                  </option>
                  <option value="O/L">O/L</option>
                  <option value="A/L">A/L</option>
                </select>
              </div>
              <div className="flex flex-col col-span-2  justify-between gap-x-4 gap-y-2.5">
                <label htmlFor="Your_preferred_study_paths">
                  Your preferred study path
                </label>
                <select
                  name="path"
                  value={formData.path}
                  onChange={handleInputChange}
                >
                  <option
                    value=""
                    disabled
                    className="text-gray-500 cursor-not-allowed"
                  >
                    -select-
                  </option>
                  <option value="Foundation_course">Foundation course</option>
                  <option value="Bachelors_degree">Bachelors degree</option>
                </select>
              </div>
              <div className="flex flex-col col-span-2  justify-between gap-x-4 gap-y-2.5">
                <label htmlFor="Desired_study_destination">
                  Your desired study destination
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                >
                  <option
                    value=""
                    disabled
                    className="text-gray-500 cursor-not-allowed"
                  >
                    -select-
                  </option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="USA">USA</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Italy">Italy</option>
                </select>
              </div>
              <div className="flex flex-col col-span-2 justify-between gap-x-4 gap-y-2.5">
                <label htmlFor="Educational_funds">
                  Do you need educational funds?
                </label>
                <select
                  name="funds"
                  value={formData.funds}
                  onChange={handleInputChange}
                >
                  <option
                    value=""
                    disabled
                    className="text-gray-500 cursor-not-allowed w-full"
                  >
                    -select-
                  </option>
                  <option value="I am self funded">I am self funded</option>
                  <option value="I need a student loan">
                    I need a student loan
                  </option>
                </select>
              </div>
            </div>
            <div className="mt-2 flex items-start">
              <Button
                type="submit"
                className="bg-primary hover:bg-opacity-75 p-2 w-full text-white font-bold rounded-full"
                subject="Proceed"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

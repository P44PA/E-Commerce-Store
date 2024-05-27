import React, { useState } from "react";
import PageHeading from "../common/PageHeading";
import "./contact.css";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, message });
    setSubmitted(true);
    // You can also integrate email sending services or API calls here
  };

  return (
    <div>
      {/* <PageHeading home={"Home"} pagename={"Contact"} /> */}
      <div className="text-center flex justify-center py-10 bg-gray-100">
        <div className="contact-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-4xl mb-4">Contact us</h1>
          <p className="mb-6">
            Get in touch and let us know how we can help you!
          </p>
          {submitted ? (
            <p className="text-green-500">
              Thank you for your message! We will get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="Username"
                  placeholder="Enter your Username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Your message
                </label>
                <textarea
                  name="message"
                  placeholder="Write Here ...."
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
                <svg
                  fill="white"
                  viewBox="0 0 448 512"
                  height="1em"
                  className="inline-block ml-2"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { useState } from "react";

import "./contact.css";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmited] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, email, message);
    setSubmited(true);
  }

  return (
    <div>
      <div className="text-center justify-center ">
        <div className="contact-form">
          <h1 className="text-4xl">Contact us</h1>
          <p>Get in touch and let us know how we can help you!</p>
          {submitted ? (
            <p className="text-green-500">
              Thank you for your message! We will get back to you soon.
            </p>
          ) : (
            <form>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="Username"
                  placeholder="Enter your Username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Your message</label>
                <textarea
                  name="message"
                  placeholder="Write Here ...."
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button onClick={handleSubmit} class="submitBtn">
                Submit
                <svg
                  fill="white"
                  viewBox="0 0 448 512"
                  height="1em"
                  class="arrow"
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

import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank You ${name} for Contacting Us. We will Get Back to You Soon.\n\nYour Mail Id - ${email}.\nYour Message is - ${message}`
    );
    setname("");
    setEmail("");
    setmessage("");
  };

  return (
    <>
      <div className="contactSection">
        <h2>Contact Us</h2>
        <div className="contactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.1113464310156!2d-79.2667185234671!3d43.7082350488691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ce5e920ae83f%3A0xe3cdf0e75a349212!2s28%20N%20Woodrow%20Blvd%2C%20Scarborough%2C%20ON%20M1K%201W3%2C%20Canada!5e0!3m2!1sen!2sbd!4v1738561281190!5m2!1sen!2sbd"
            width="800"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Ecommap"
          ></iframe>
  
        </div>
        <div className="contactInfo">
          <div className="contactAddress">
            <div className="address">
              <h3>Store in Canada (Ontario)</h3>
              <p>
                28 North Woodrow Boulevard, Scarborough, Ontario, M1K 1W3.
                <br /> Canada
              </p>
              <p>
                admin@dummymail.com
                <br />
                +44 20 7123 4567
              </p>
            </div>
            <div className="address">
              <h3>Store in Canada (Manitoba)</h3>
              <p>
                28 North Woodrow Boulevard, Scarborough, Manitoba, M1K 1W3.
                <br /> Maharashtra
              </p>
              <p>
                contact@dummymail.com
                <br />
                +44 20 3422 4567
              </p>
            </div>
          </div>
          <div className="contactForm">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Name *"
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Email address *"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                rows={10}
                cols={40}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

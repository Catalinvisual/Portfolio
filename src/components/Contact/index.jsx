import React, { useState } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  // State pentru fiecare input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State pentru mesajul de succes
  const [successMessage, setSuccessMessage] = useState("");

  // Funcție pentru actualizarea inputurilor
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Funcție pentru trimiterea formularului și afișarea mesajului
  const handleSubmit = (e) => {
    e.preventDefault();

    // Trimite datele la Web3Forms
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apikey: "7e917c9f-53e3-4a7c-b2a1-ed6dd08d3845",
        subject: "New Submission for Catalin Developer",
        ...formData,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Message sent successfully!");

          // Afișează mesajul și îl ascunde după 20 secunde
          setSuccessMessage(
            "The message was sent successfully, we will contact you back soon."
          );
          {
            successMessage && (
              <p className="success-message">{successMessage}</p>
            );
          }
          setTimeout(() => setSuccessMessage(""), 10000);

          // Resetează inputurile
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          console.log("Error sending message:", data);
        }
      })
      .catch((error) => console.log("Error:", error));
  };

  return (
    <section id="contact">
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className="primary__title">Contact Me</h2>
          <p className="text__muted description">
            Ready to take your digital presence to the next level? Whether
            you're looking to launch a new website, revamp an existing one, or
            need expert advice on the best web technologies, I'm here to help.
            Reach out to discuss your project, ask questions, or just say hello.
          </p>
        </div>
        <div className="contact__group">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__icon" />
              <h3>Email</h3>
              <h5>hapenciuccatalin@yahoo.com</h5>
              <a
                href="mailto:hapenciuccatalin@yahoo.com"
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <FaInstagram className="contact__icon" />
              <h3>Instagram</h3>
              <h5>Catalin Developer</h5>
              <a
                href="https://www.instagram.com/catalindeveloper?igsh=MTVubnhmYnNyNGpwbA=="
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <FaWhatsapp className="contact__icon" />
              <h3>Whatsapp</h3>
              <h5>+31685300906</h5>
              <a
                href="https://wa.me/31685300906"
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
          </div>

          {/* Formular */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn__primary">
              Send Message
            </button>
            {/* Mesaj de succes */}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

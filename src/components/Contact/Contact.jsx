import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../Contact/contact.css";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState({ name: "", email: "", message: "" });
  const contact_details = [
    {
      id: 1,
      icon: <MdEmail />,
      cl_title: "Email",
      cl_details: "maduagwumartins16@gmail.com",
      msg: "Send a message",
    },
    {
      id: 2,
      icon: <FaFacebookMessenger />,
      cl_title: "Messenger",
      cl_details: "",
      msg: "Send a message",
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      cl_title: "WhatsApp",
      cl_details: "09039131265",
      msg: "Send a message",
    },
  ];
  return (
    <main id="contact" className="contact">
      <div className="container contact">
        <h5></h5>
        <h2>Contact Me</h2>
        <div className="contact_container">
          <div className="contact_info">
            {contact_details.map((contact) => (
              <div key={contact.id} className="contact_card">
                <div className="contact_icon">{contact.icon}</div>
                <h5>{contact.cl_title}</h5>
                <h6>{contact.cl_details}</h6>
                <a href="#">{contact.msg}</a>
              </div>
            ))}
          </div>
          <div className="contact_form">
            <form action="">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={message.name}
                onChange={(e) =>
                  setMessage({ ...message, name: e.target.value })
                }
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={message.email}
                onChange={(e) =>
                  setMessage({ ...message, email: e.target.value })
                }
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                value={message.message}
                onChange={(e) =>
                  setMessage({ ...message, message: e.target.value })
                }
              ></textarea>
              <div className="submit_btn">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

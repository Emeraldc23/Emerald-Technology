import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../Contact/contact.css";
import { useState } from "react";

const FORMSPARK_ACTION_URL = "https://submit-form.com/PKk65adHZ";
const Contact = () => {
  const [value, setValue] = useState({ name: "", email: "", message: "" });
  const [submit, setSubmit] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit("sending...");
    try {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(value),
      });
      setValue({ name: "", email: "", message: "" });
      setSubmit("Form Submitted");

      setTimeout(() => {
        setSubmit("");
      }, 3000);
    } catch (e) {
      console.log(e);
    }
  }
  const contact_details = [
    {
      id: 1,
      icon: <MdEmail />,
      cl_title: "Email",
      cl_details: "maduagwumartins16@gmail.com",
      msg: "https://mail.google.com/mail/u/0/#inbox?compose=new",
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
      msg: "https://wa.me/+2349039131265?text=Hi!%20I'm%20interested%20in%20working%20with%20you.",
    },
  ];
  return (
    <main id="contact" data-aos="zoom-in">
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
                <a href={contact.msg} target="_blank">
                  send message
                </a>
              </div>
            ))}
          </div>
          <div className="contact_form">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={value.name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={value.email}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
                required
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                value={value.message}
                onChange={(e) =>
                  setValue({ ...value, message: e.target.value })
                }
                required
              ></textarea>
              <div className="submit_btn">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
                <p className="submit_msg" disabled={submit === "sending..."}>
                  {submit}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

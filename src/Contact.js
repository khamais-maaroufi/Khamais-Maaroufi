import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u0pwdo9",
        "template_l6uxlos",
        form.current,
        "vty9KRcS6zVOmTvU3"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("email sent successfully! thank you ;)");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the email! try again Later");
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div className="containeri">
        <form id="contacti" ref={form} onSubmit={sendEmail}>
          <h3>Quick Contact</h3>
          <h4>Contact me, you'll get reply with in 24 hours!</h4>
          <fieldset>
            <input
              placeholder="Your name"
              name="name"
              type="text"
              tabIndex="1"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              name="email"
              type="email"
              tabIndex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Phone Number"
              name="phoneNumber"
              type="tel"
              tabIndex="3"
              required
            />
          </fieldset>

          <fieldset>
            <textarea
              placeholder="Type your Message Here...."
              tabIndex="5"
              name="content"
              required
            ></textarea>
          </fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

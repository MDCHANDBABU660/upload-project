import React from "react";
import "./Contact.css";
import ca from "../../assets/contact.png";
function Contact() {
  return (
    <div className="contact">
      <div className="leftcontact">
        <img src={ca} alt="" />
      </div>
      <div className="rightcontact">
        <form action="">
          <input name="Username" type="text" placeholder="Name" />
          <input name="Email" type="text" placeholder="Email" />
          <textarea
            name="message"
            id="textarea"
            placeholder="Message me"
          ></textarea>
          <button id="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

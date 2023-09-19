import React from "react";

function ContactsLink() {
  return (
    <li className="burger-nav-links__link">
      contacts
      <div className="burger-contacts">
        <div className="burger-nav-colection__link">
          Address: 37372 Hood St Sandy, OR 97123
        </div>
        <div className="burger-nav-colection__link">Phone: 800-456-7890</div>
        <div className="burger-nav-colection__link">
          Email: info@yoursite.com
        </div>
      </div>
    </li>
  );
}

export default ContactsLink;

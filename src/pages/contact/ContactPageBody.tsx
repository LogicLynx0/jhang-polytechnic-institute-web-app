import React from "react";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";

const ContactPageBody = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <ContactForm />
      <ContactInformation />
    </div>
  );
};

export default ContactPageBody;

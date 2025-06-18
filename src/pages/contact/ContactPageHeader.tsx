import React from "react";

const ContactPageHeader = () => {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text">
        Contact Us
      </h1>
      <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto zoom-in">
        Get in touch with us for any questions about our courses, admissions, or
        to schedule a campus visit.
      </p>
    </div>
  );
};

export default ContactPageHeader;

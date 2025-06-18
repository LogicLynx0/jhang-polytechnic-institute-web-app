import FAQ from "@/components/ui/FAQ";
import { contactFAQs } from "@/lib/faqsData";
import ContactPageBody from "@/pages/contact/ContactPageBody";
import ContactPageHeader from "@/pages/contact/ContactPageHeader";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactPageHeader />
        <ContactPageBody />
        <FAQ
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about contacting us"
          faqs={contactFAQs}
        />
      </div>
    </div>
  );
};

export default Contact;

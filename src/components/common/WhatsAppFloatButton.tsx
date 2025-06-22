import { MessageCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { hrefNumber } from "@/lib/configrations";

const WhatsAppFloatButton = () => {
  const WhatsAppNumber = hrefNumber;

  return (
    <div>
      <a
        href={`https://wa.me/${WhatsAppNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-btn"
        title="Chat on WhatsApp"
      >
        <Button
          className="whatsapp-float bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </a>
    </div>
  );
};

export default WhatsAppFloatButton;

import React from "react";

const WhatsAppChatButton = () => {
  // Replace '1234567890' with the actual phone number you want to open the chat with.
  const phoneNumber = "+94 076 148 6265";

  // Construct the WhatsApp chat link.
  const whatsappChatLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <a href={whatsappChatLink} target="_blank" rel="noopener noreferrer">
      <button className="bg-black w-full text-white p-3 text-md  transition duration-300 hover:scale-110">
        Chat Now
      </button>
    </a>
  );
};

export default WhatsAppChatButton;

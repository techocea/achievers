import React, { useState, useEffect } from "react";
import "./Popup.css"; // You can create a separate CSS file for styling
import { TiTimes } from "react-icons/ti";
import popupimg from "../../assets/italy-loan.jpeg";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  // Close the popup after 5 seconds (adjust the duration as needed)
  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }

    return () => {
      // Cleanup if needed
    };
  }, [showPopup]);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className={`popup-overlay ${showPopup ? "show" : ""}`}>
      <div
        className={`popup center max-md:max-w-[90%] max-md:w-[450px] relative animate__animated animate__fadeIn`}
      >
        <button onClick={handleClose} className="absolute right-0 top-0 p-2">
          <TiTimes />
        </button>
        <img
          src={popupimg}
          alt="Popup"
          className="w-[450px] h-full object-cover rounded"
        />
      </div>
    </div>
  );
};

export default Popup;

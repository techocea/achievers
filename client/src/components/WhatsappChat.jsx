import React, { useEffect } from "react";

export default function WhatsappChat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.dataset.useServiceCore = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-44477cb8-3530-49c3-ba81-bcc1d77b11b2"
      data-elfsight-app-lazy
    ></div>
  );
}

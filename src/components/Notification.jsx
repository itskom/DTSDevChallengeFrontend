import { useEffect, useState } from "react";

export default function Notification({ message, type = "success" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2800);

      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!message) return null;

  return (
    <div
      className={`alert alert-${type} ${visible ? "show" : "fade"}`}
      role="alert"
    >
      {message}
    </div>
  );
}

import React, { useState, useEffect } from "react";

export default function TextClock() {
  
  const [currentDate, setDate] = useState(new Date());
  const refresh = () => {
    setDate(new Date());
  };

  useEffect(() => {
    refresh();
  });

  return (
    <div>
      <p className="display-6">
        Nous sommes le&nbsp;
        <span>{currentDate.toLocaleDateString()}</span> et il est{" "}
        <span>{currentDate.toLocaleTimeString()}</span>
      </p>
    </div>
  );
}

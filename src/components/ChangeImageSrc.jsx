import React, { useState } from 'react';

export default function ChangeImageSrc() {
  const [imageSrc, setImageSrc] = useState('initial-image-src.jpg');

  // Function to change the image source
  const changeImageSrc = () => {
    setImageSrc('new-image-src.jpg');
  }

  return (
    <div>
      <img src={imageSrc} alt="Example" />
      <button onClick={changeImageSrc}>Change Image</button>
    </div>
  );
}
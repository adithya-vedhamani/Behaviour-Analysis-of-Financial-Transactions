import React, { useState } from 'react';

const ImageLoader = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleButtonClick = () => {
    const imagePath = require('./assets/network.jpeg');
    
    const image = new Image();
    image.src = imagePath;
    
    image.onload = () => {
      setImageLoaded(true);
    };
  };

  const buttonStyle = {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleButtonClick}>Load Image</button>
      {imageLoaded && (
        <div>
          <p>Image Loaded:</p>
          <img src={require('./assets/network.jpeg')} alt="Your Description" />
        </div>
      )}
    </div>
  );
};

export default ImageLoader;

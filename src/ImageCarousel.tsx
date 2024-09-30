import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const images = [
    'https://iiitl.ac.in/wp-content/uploads/2024/02/6a59cf7d-banner-iiitl.png',
    'https://iiitl.ac.in/wp-content/uploads/2023/12/0c2a562c-2nd-convocation-group-pic-scaled.jpg',
    'https://iiitl.ac.in/wp-content/uploads/2022/04/Institute-Pic-f-scaled.jpg.webp',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000;

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

   // Set up the timer to automatically move to the next image
   useEffect(() => {
    const interval = setInterval(nextImage, intervalTime);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full mx-auto overflow-hidden pb-12 pt-0 bg-white sm:pb-16 lg:pb-20">
    {/* Display current image */}
    <img
      src={images[currentIndex]}
      alt={`slide ${currentIndex}`}
      className="w-full h-[300px] mx-0 object-cover"
    />

    {/* Left arrow button */}
    <button
      className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-black text-white p-2 rounded-full shadow-md z-10"
      onClick={prevImage}
    >
      &#10094;
    </button>

    {/* Right arrow button */}
    <button
      className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-black text-white p-2 rounded-full shadow-md z-10"
      onClick={nextImage}
    >
      &#10095;
    </button>

    {/* Indicators (optional) */}
    <div className="absolute bottom-4 w-full text-center">
      {images.map((_, index) => (
        <span
          key={index}
          className={`inline-block w-2.5 h-2.5 mx-1 rounded-full cursor-pointer ${
            index === currentIndex ? 'bg-black' : 'bg-gray-300'
          }`}
          onClick={() => setCurrentIndex(index)}
        ></span>
      ))}
    </div>
  </div>
  );
};

export default ImageCarousel;

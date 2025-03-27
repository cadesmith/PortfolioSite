import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/Art/Electricity.jpg",
  "/Art/fogPoster.jpg",
];

const ImageFade = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={src}
          width={3000}
          height={2000}
          style={{
            width: '100%',
            height: 'auto',
          }}  
          className={`transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageFade;

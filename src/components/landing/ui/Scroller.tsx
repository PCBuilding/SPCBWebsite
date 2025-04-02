import React, { useState } from "react";

type ScrollerProps = {
  items: string[];
  maxHeight: number;
};

export const Scroller: React.FC<ScrollerProps> = ({ items, maxHeight }) => {
  // Since you have two lists (duplicated images for continuous scrolling),
  // the total number of images is doubled.
  const totalImages = items.length * 2;
  const [loadedCount, setLoadedCount] = useState(0);

  // Handler to track each image load
  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  // Only add the animation class if all images are loaded
  const animationClass = loadedCount === totalImages ? "animate-scroll" : "";

  return (
    <div className="w-full overflow-hidden flex gap-4 scroller-container" style={{ height: `${maxHeight}px` }}>
      <ul className={`scroller-list ${animationClass}`} style={{ height: `${maxHeight}px` }}>
        {items.map((src, index) => (
          <Item key={index} src={src} onLoad={handleImageLoad} />
        ))}
      </ul>
      <ul className={`scroller-list ${animationClass}`} style={{ height: `${maxHeight}px` }}>
        {items.map((src, index) => (
          <Item key={index} src={src} onLoad={handleImageLoad} />
        ))}
      </ul>
    </div>
  );
};

type ItemProps = {
  src: string;
  onLoad: () => void;
};

const Item: React.FC<ItemProps> = ({ src, onLoad }) => {
  return (
    <img
      src={src}
      alt=""
      onLoad={onLoad}
      style={{ height: "100%", width: "auto" }}
      className="scroller-item"
    />
  );
};

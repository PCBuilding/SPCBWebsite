import React from "react";
import Image from "next/image";

type Picture = {
  src: string;
};

type ScrollerProps = {
  items: string[];
  maxHeight: number
};

export const Scroller: React.FC<ScrollerProps> = ({ items, maxHeight }) => {
  return (
    <div className="w-full overflow-hidden flex gap-4 scroller-container">
      <ul className="scroller-list" style={{height: `${maxHeight}px`}}>
        {items.map((picture, index) => (
          <Item src={picture} key={index} />
        ))}
      </ul>
      <ul className="scroller-list"  style={{height: `${maxHeight}px`}}>
        {items.map((picture, index) => (
          <Item src={picture} key={index} />
        ))}
      </ul>
    </div>
  );
};

const Item: React.FC<Picture> = ({ src }) => {
  return (
    <img
      src={src}
      alt=""
      style={{ height: "100%", width: "auto" }}
      className="scroller-item"
    />
  );
};

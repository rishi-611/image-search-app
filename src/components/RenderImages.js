import React from "react";
import "../css/RenderImages.css";
import ImageCard from "./ImageCard";

const RenderImages = function (props) {
  const images = props.imageList.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  // console.log(images);

  return (
    <div>
      <p>{props.imageList.length} images found</p>
      <ul className="img-list-container">{images}</ul>
    </div>
  );
};

export default RenderImages;

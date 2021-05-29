import React from "react";

const RenderImages = function (props) {
  const images = props.imageList.map((image) => (
    <li key={image.id}>
      <img src={image.url} alt={image.alt} />
    </li>
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

import React from "react";
import ImageCard from "./ImageCard";

function ImageGallery() {

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Beautiful Nature",
      description: "Enjoy the beauty of green nature."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      title: "Mountain View",
      description: "Amazing mountain and lake scenery."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Beach View",
      description: "Beautiful beach with blue ocean."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8",
      title: "Sunrise",
      description: "Enjoy the peaceful morning sunrise."
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      title: "Forest",
      description: "Explore the beauty of green forests."
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
      title: "Ocean",
      description: "Relax with the beautiful ocean waves."
    }
  ];

  return (
    <>
      <div className="gallery-container">

        <h1>My Image Gallery</h1>

        <p className="subtitle">
          Explore Beautiful Images
        </p>

        <div className="gallery-grid">

          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}

        </div>

      </div>
    </>
  );
}

export default ImageGallery;
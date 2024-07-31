import React from 'react';
function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      {images.map(image => (
        <div key={image.id} className="image-item">
          <img src={image.url} alt={image.title} />
          <p>{image.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;

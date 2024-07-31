// Gallery.js


const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map(image => (
        <div key={image.id} className="border p-2">
          <img src={image.url} alt={image.title} className="w-full h-40 object-cover" />
          <h3 className="text-center mt-2">{image.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

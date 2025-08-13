const MediaGallery = ({ image, alt }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <img
        src={image}
        alt={alt || 'Card image'}
        className="w-full h-64 object-cover"
      />
    </div>
  );
};

export default MediaGallery;

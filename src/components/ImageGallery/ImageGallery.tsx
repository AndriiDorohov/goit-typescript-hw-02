import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onImageClick, galleryRef }) {
  if (!images.length) return null;
  return (
    <ul className={css.gallery} ref={galleryRef}>
      {images.map((image, index) => (
        <li
          key={index}
          className={css.item}
          onClick={() => onImageClick(image)}
        >
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description || "Image"}
          />
        </li>
      ))}
    </ul>
  );
}

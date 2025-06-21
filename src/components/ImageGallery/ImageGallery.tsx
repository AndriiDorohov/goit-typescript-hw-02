import type { RefObject } from 'react';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import type { UnsplashImage } from '../../types';

interface ImageGalleryProps {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
  galleryRef: RefObject<HTMLUListElement>;
}

export default function ImageGallery({
  images,
  onImageClick,
  galleryRef,
}: ImageGalleryProps) {
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
            alt={image.alt_description || 'Image'}
          />
        </li>
      ))}
    </ul>
  );
}

export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface ImageCardProps {
  src: string;
  alt: string;
}

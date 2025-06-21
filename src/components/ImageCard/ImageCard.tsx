import css from './ImageCard.module.css';
import { ImageCardProps } from '../../types.ts';

export default function ImageCard({ src, alt }: ImageCardProps) {
  return (
    <div className={css.card}>
      <img className={css.image} src={src} alt={alt} />
    </div>
  );
}

import { BeatLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader(): JSX.Element {
  return (
    <div className={css.loader}>
      <BeatLoader size={10} color='#000000' />
    </div>
  );
}

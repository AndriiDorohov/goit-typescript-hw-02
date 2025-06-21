import { BeatLoader } from 'react-spinners';
import css from './Loader.module.css';

import type { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <BeatLoader size={10} color='#000000' />
    </div>
  );
};

export default Loader;

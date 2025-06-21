import { forwardRef } from 'react';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn = forwardRef<HTMLDivElement, LoadMoreBtnProps>(
  ({ onLoadMore }, ref) => {
    return (
      <div ref={ref}>
        <button className={css.loadMoreBtn} onClick={onLoadMore}>
          Load more
        </button>
      </div>
    );
  }
);

export default LoadMoreBtn;

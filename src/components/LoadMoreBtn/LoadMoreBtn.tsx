import React, { forwardRef } from "react";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = forwardRef(({ onLoadMore }, ref) => {
  return (
    <div ref={ref}>
      <button className={css.loadMoreBtn} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
});

export default LoadMoreBtn;

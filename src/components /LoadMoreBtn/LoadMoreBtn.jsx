import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={css.loadMoreBtn}>
      Load more...
    </button>
  );
};

export default LoadMoreBtn;

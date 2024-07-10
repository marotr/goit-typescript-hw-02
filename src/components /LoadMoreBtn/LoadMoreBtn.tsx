import css from './LoadMoreBtn.module.css';
interface LoadMoreProps{
  handleLoadMore: ()=>void ;
}

const LoadMoreBtn: React.FC <LoadMoreProps> = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={css.loadMoreBtn}>
      Load more...
    </button>
  );
};

export default LoadMoreBtn;

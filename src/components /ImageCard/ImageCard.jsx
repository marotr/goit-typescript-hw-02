
import css from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  if (!image) return null; // Add this check

  const { alt_description, urls } = image;

  return (
    <div className={css.imageCard} >
      <img onClick={onClick} src={urls.small} alt={alt_description} className={css.image} />
    </div>
  );
};

export default ImageCard;

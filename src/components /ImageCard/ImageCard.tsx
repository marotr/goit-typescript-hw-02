
import { ImageCardProps } from '../../interfaces/interfaces';
import css from './ImageCard.module.css';


const ImageCard:React.FC <ImageCardProps> = ({ image, onClick }) => {
  if (!image) return null; 

  const { alt_description, urls } = image;

  return (
    <div className={css.imageCard} >
      <img onClick={onClick} 
      src={urls.small} 
      alt={alt_description} 
      className={css.image} />
    </div>
  );
};

export default ImageCard;

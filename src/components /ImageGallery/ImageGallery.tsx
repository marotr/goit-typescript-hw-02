
import { ImageData } from '../../interfaces/interfaces';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: ImageData [];
  onImageClick: (image: ImageData) => void;
  onClick: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            image={image}
            onClick={() => onImageClick(image)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;


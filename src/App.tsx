import { useEffect, useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageData } from './interfaces/interfaces';
import SearchBar from './components /SearchBar/SearchBar';
import Loader from './components /Loader/Loader';
import ImageGallery from './components /ImageGallery/ImageGallery';
import LoadMoreBtn from './components /LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components /Image Modal/ImageModal';
import { getImagesApi } from './components /api/images-api';
import ErrorMassage from './components /ErrorMessage/ErrorMassage';
import { ErrorMessage } from 'formik';



const App: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchImages = async (): Promise<void> => {
      if (!query) {
        return;
      }
      try {
        setError(false);
        setIsLoading(true);
        const data = await getImagesApi({ searchQuery: query, page });
        setImages((prev) => [...prev, ...data]);
      } catch (err) {
        setError(true);
        toast.error('Failed to fetch images. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [page, query]);

  const handleSubmit = (searchQuery: string): void => {
    if (!searchQuery.trim()) {
      toast.error('Search query cannot be empty.');
      return;
    }
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: ImageData) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar submit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage name = "apiError"/>}
      {images.length > 0 && <ImageGallery images={images} onImageClick={openModal} />}
      {images.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default App;


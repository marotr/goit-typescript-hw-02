import {  useEffect, useState } from 'react'
import ImageGallery from './components /ImageGallery/ImageGallery';
import Loader from './components /Loader/Loader';
import ErrorMessage from './components /ErrorMessage/ErrorMassage'
import SearchBar from './components /SearchBar/SearchBar';
import './App.css'
import { getImagesApi } from './components /api/images-api';
import LoadMoreBtn from './components /LoadMoreBtn/LoadMoreBtn';
import  ImageModal from './components /Image Modal/ImageModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState (null)
  const [modalIsOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const fetchImages = async () => {
      if (!query) {
        return;
      }
      try {
        setError(false)
        setIsLoading(true)
        const data = await getImagesApi(query, page);
        setImages((prev) => [...prev, ...data]);
        
      } catch (error) {
       
        setError(true)
        toast.error('Failed to fetch images. Please try again later.');
        
      }
      finally {
        setIsLoading(false)
      }
      
    }
  
    if (query) fetchImages();
  
  }, [page, query])
  
  const handleSubmit = (searchQuery) => {
    if (!searchQuery.trim()) {
      toast.error('Search query cannot be empty.');
      return;
    }
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1)
  }

  // Modal
 

  const openModal = (image) => {
    setSelectedImage (image)
    setIsOpen(true);
  }



  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null)
  }
    return (
      <>
        {<SearchBar submit={handleSubmit} />}
        {isLoading && <Loader />
        }
        {error && <ErrorMessage />}
        {images.length > 0 && (<ImageGallery images={images}  onImageClick = {openModal}/>)}
        {images.length > 0 && (<LoadMoreBtn handleLoadMore={ handleLoadMore} />)}
        { selectedImage && (
        <ImageModal
        image = {selectedImage}
        modalIsOpen = {modalIsOpen} 
        openModal={openModal} 
        
        closeModal ={closeModal}/>)}
       
       <ToastContainer />
      </>
    );
  }

export default App

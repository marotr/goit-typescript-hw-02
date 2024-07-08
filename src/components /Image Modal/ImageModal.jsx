import ReactModal from "react-modal";
import css from './ImageModal.module.css'
import { AiOutlineClose } from "react-icons/ai";


const ImageModal = ({image,  modalIsOpen, closeModal}) => 
     {
    
        const {
            alt_description,
            likes,
            id,
            user: {  name, instagram_username, location },
            urls
          } = image;    
  return (
    <div > 
    
    <ReactModal overlayClassName={css.overlay} className={css.modalContent}

      
      isOpen={modalIsOpen}
      
      onRequestClose={closeModal}
      contentLabel="ImageModal"
    >
      
      <button className={css.closeBtn} onClick={closeModal}><AiOutlineClose/></button>
      <div> 
        <img src={urls.full} alt={alt_description} key={id}  />
     
      <ul className={css.cardDetails}>
       
        <li className={css.cardElement}>
          <span className={css.label}>Author: </span>
          <p className={css.value}>{name}</p>
        </li>
        <li className={css.cardElement}>
          <span className={css.label}>Location: </span>
          <p className={css.value}>{location}</p>
        </li>
       
        <li className={css.cardElement}>
          <span className={css.label}>Instagram: </span>
          <p className={css.value}>
            {instagram_username ? `@${instagram_username}` : 'N/A'}
          </p>
        </li>
        <li className={css.cardElement}>
          <span className={css.label}>Likes: </span>
          <p className={css.value}>{likes}</p>
        </li>
      </ul> 
     </div>
      
    </ReactModal>
  </div>
  )
}

export default ImageModal
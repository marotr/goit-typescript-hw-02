export interface User{
    name:string;
    instagram_username:string;
    location:string
  }
  
  export interface ImageData {
    id: number;
    url: string;
    alt_description:string;
    likes: number;
    user:User;
    urls:{
      full:string;
    small:string;

    }
  
  }

  export interface ImageModalProps{
    image:ImageData;
    modalIsOpen: boolean;
    closeModal: () => void;
  }

  export interface QueryParams {
    searchQuery: string;
    page: number;
  }

 export  interface ImageCardProps {
    image: ImageData;
    onClick: () => void; 
  }


  
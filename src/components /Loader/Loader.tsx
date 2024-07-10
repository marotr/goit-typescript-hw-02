import css from './Loader.module.css'
import BarLoader from "react-spinners/BarLoader";

const Loader = () => {
  return (
    <div className={css.loaderContainer}><BarLoader color="#1e748e" /></div>
  )
}

export default Loader
interface ErrorMassageProps {
  name:string;
}
const ErrorMassage: React.FC <ErrorMassageProps> = ({name}) => {
  return (
    <div><p>Oops... something went wrong. Please reload the page . </p>
   </div>
  )
}

export default ErrorMassage

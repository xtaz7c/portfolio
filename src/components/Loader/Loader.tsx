import "./Loader.css";

function Loader() {
   return (
      <span className="loader" role="status" aria-label="Carregando">
         <span className="loader__dot" aria-hidden="true" />
         <span className="loader__dot" aria-hidden="true" />
         <span className="loader__dot" aria-hidden="true" />
      </span>
   );
}

export default Loader;

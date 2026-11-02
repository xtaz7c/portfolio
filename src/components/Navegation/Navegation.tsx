import "./Navegation.css";

function Navegation() {
   return (
      <nav className="navegation" aria-label="Navegação principal">
         <a className="navegation__link" href="#sobre">Sobre</a>
         <a className="navegation__link" href="#sites">Projetos</a>
         <a className="navegation__link" href="#jogos">Jogos</a>
         <a className="navegation__link" href="#contato">Contato</a>
      </nav>
   );
}

export default Navegation;

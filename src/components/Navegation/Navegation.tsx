import "./Navegation.css";

type NavegationProps = {
   isOpen: boolean;
   onNavigate: () => void;
};

function Navegation({ isOpen, onNavigate }: NavegationProps) {
   return (
      <nav
         id="main-navigation"
         className={isOpen ? "navegation is-open" : "navegation"}
         aria-label="Navegação principal"
      >
         <a className="navegation__link" href="#sobre" onClick={onNavigate}>Sobre</a>
         <a className="navegation__link" href="#sites" onClick={onNavigate}>Projetos</a>
         <a className="navegation__link" href="#jogos" onClick={onNavigate}>Jogos</a>
         <a className="navegation__link" href="#contato" onClick={onNavigate}>Contato</a>
      </nav>
   );
}

export default Navegation;

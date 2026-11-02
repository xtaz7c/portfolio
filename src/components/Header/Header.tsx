import { useState } from "react";
import { closeOutline, menuOutline } from "ionicons/icons";
import Icon from "../Icon/Icon";
import StatusPill from "../StatusPill/StatusPill";
import "./Header.css";

function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
   const closeMenu = () => setMenuOpen(false);

   return (
      <header className="header">
         <div className="box-left">
            <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Yohanan. DEV, início">
               Yohanan. DEV<span>_</span>
            </a>

            <nav id="main-nav" className={menuOpen ? "nav nav-open" : "nav"} aria-label="Navegação principal">
               <a href="#sobre" onClick={closeMenu}>Sobre</a>
               <a href="#sites" onClick={closeMenu}>Projetos</a>
               <a href="#jogos" onClick={closeMenu}>Jogos</a>
               <a href="#contato" onClick={closeMenu}>Contato</a>
            </nav>

            <div className="header-right">
               <StatusPill />
               <button
                  type="button"
                  className="menu-toggle"
                  onClick={() => setMenuOpen((open) => !open)}
                  aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                  aria-expanded={menuOpen}
                  aria-controls="main-nav"
               >
                  <Icon icon={menuOpen ? closeOutline : menuOutline} />
               </button>
            </div>
         </div>
      </header>
   );
}

export default Header;

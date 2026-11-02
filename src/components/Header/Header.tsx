import { useEffect, useState } from "react";
import { closeOutline, menuOutline } from "ionicons/icons";
import Icon from "../Icon/Icon";
import StatusPill from "../StatusPill/StatusPill";
import Navegation from "../Navegation/Navegation";
import "./Header.css";

function Header() {
   const [menuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
      if (!menuOpen) return;

      const handleKeyDown = (event: KeyboardEvent) => {
         if (event.key === "Escape") {
            setMenuOpen(false);
         }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
   }, [menuOpen]);

   const closeMenu = () => setMenuOpen(false);

   return (
      <header className="header">
         <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Yohanan DEV, início">
            Yohanan. DEV<span>_</span>
         </a>

         <Navegation isOpen={menuOpen} onNavigate={closeMenu} />

         <div className="header-right">
            <StatusPill label="Em construção" />
            <button
               className="menu-toggle"
               type="button"
               aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
               aria-expanded={menuOpen}
               aria-controls="main-navigation"
               onClick={() => setMenuOpen((open) => !open)}
            >
               <Icon icon={menuOpen ? closeOutline : menuOutline} />
            </button>
         </div>
      </header>
   );
}

export default Header;

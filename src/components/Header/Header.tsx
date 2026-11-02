import { useEffect, useRef, useState } from "react";
import { closeOutline, menuOutline } from "ionicons/icons";
import Icon from "../Icon/Icon";
import StatusPill from "../StatusPill/StatusPill";
import Navegation from "../Navegation/Navegation";
import "./Header.css";

function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
   const headerRef = useRef<HTMLElement>(null);
   const menuButtonRef = useRef<HTMLButtonElement>(null);

   useEffect(() => {
      if (!menuOpen) return;

      const handleKeyDown = (event: KeyboardEvent) => {
         if (event.key === "Escape") {
            setMenuOpen(false);
            menuButtonRef.current?.focus();
         }
      };

      const handlePointerDown = (event: PointerEvent) => {
         if (
            event.target instanceof Node &&
            !headerRef.current?.contains(event.target)
         ) {
            setMenuOpen(false);
         }
      };

      window.addEventListener("keydown", handleKeyDown);
      document.addEventListener("pointerdown", handlePointerDown);

      return () => {
         window.removeEventListener("keydown", handleKeyDown);
         document.removeEventListener("pointerdown", handlePointerDown);
      };
   }, [menuOpen]);

   const closeMenu = () => setMenuOpen(false);

   return (
      <header className="header" ref={headerRef}>
         <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Yohanan DEV, início">
            Yohanan. DEV<span>_</span>
         </a>

         <Navegation isOpen={menuOpen} onNavigate={closeMenu} />

         <div className="header-right">
            <StatusPill label="Em construção" />
            <button
               ref={menuButtonRef}
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

import StatusPill from "../StatusPill/StatusPill";
import Navegation from "../Navegation/Navegation";
import "./Header.css";

function Header() {
   return (
      <header className="header">
         <a className="brand" href="#inicio" aria-label="Yohanan DEV, início">
            Yohanan. DEV<span>_</span>
         </a>
         <div className="header-right">
            <Navegation />
            <StatusPill label="Em construção" />
         </div>
      </header>
   );
}

export default Header;

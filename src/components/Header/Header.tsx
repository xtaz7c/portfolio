import { useState } from "react";
import StatusPill from "../StatusPill/StatusPill";
import Navegation from "../Navegation/Navegation";
import "./Header.css";

function Header() {

   return (
      <header className="header">
         <div className="box-left">
            <a className="brand" href="/" aria-label="Yohanan. DEV, início">
               Yohanan. DEV<span>_</span>
            </a>
         </div>

            <div className="header-right">
               <Navegation />

               <StatusPill />
            </div>

      </header>
   );
}

export default Header;

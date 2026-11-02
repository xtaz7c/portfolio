import "./Header.css";


function Header() {
    return (
        <header className="header">
            <div className="box-left">
                <a className="brand" href="#inicio" onClick={closeMenu} aria-label="H. DEV, início">
                    Yohanan. DEV<span>_</span>
                </a>

                <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Navegação principal">
                    <a href="#sobre" onClick={closeMenu}>Sobre</a>
                    <a href="#sites" onClick={closeMenu}>Projetos</a>
                    <a href="#jogos" onClick={closeMenu}>Jogos</a>
                    <a href="#contato" onClick={closeMenu}>Contato</a>
                </nav>

                <div className="header-right">
                   <StatusPill />
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
                        <IonIcon icon={menuOpen ? closeOutline : menuOutline} />
                    </button>
                </div>

            </div>
            
        </header>
    );
}

export default Header;
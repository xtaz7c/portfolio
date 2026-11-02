import "./Home.css";

function Home() {
   return (
    
      <main className="home">
         <section className="home__hero">
            <span className="home__greeting">✳ Desenvolviemnto & Criativiade</span>
            <h1 className="home__title">Olá, eu sou o Yohanan.</h1>
            <p className="home__subtitle">
               Desenvolvedor Front-end e Designer de UI/UX.
            </p>
            <p>Desenvolvendo sites, explorando novas ideias e construindo projetos digitais — um commit de cada vez.</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#sites">Explorar projetos <IonIcon icon={arrowForwardOutline} /></a>
              <a className="button button-quiet" href="#sobre">Conhecer o portfólio</a>
            </div>
            <div className="hero-foot">
              <div className="hero-foot-line" />
              <span>Web · Code · Game</span>
              <span className="hero-index">Scroll para explorar <span>↓</span></span>

              <div className="hero-orb orb-a" aria-hidden="true" />
          <div className="hero-orb orb-b" aria-hidden="true" />
            </div>
         </section>

         <section className="intro-section section" id="sobre">
          <div className="container intro-layout">
            <SectionLabel number="01">UM POUCO SOBRE</SectionLabel>
            <div className="intro-copy">
              <h2>Minimalismo na forma.<br /><span className="muted-heading">Personalidade nos detalhes.</span></h2>
              <p>Este é meu espaço na internet para reunir projetos, experimentos e ideias. Cada projeto é uma oportunidade de aprender, testar possibilidades e criar algo que valha a pena explorar.</p>
              <div className="skill-list">
                <span><IonIcon icon={codeSlashOutline} /> Desenvolvimento web</span>
                <span><IonIcon icon={terminalOutline} /> Código & experimentação</span>
                <span><IonIcon icon={sparklesOutline} /> Design digital</span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section section" id="sites">
          <div className="container">
            <div className="section-heading">
              <SectionLabel number="02">PROJETOS SELECIONADOS</SectionLabel>
              <div className="heading-row">
                <div>
                  <h2>Sites & <span className="gradient-text">aplicações.</span></h2>
                  <p className="projects-subtitle">Uma seleção de projetos publicados e ideias em desenvolvimento.</p>
                </div>
                <span className="project-count"><span className="count-dot" /> {projects.length + 1} PROJETOS</span>
              </div>
            </div>
            <div className="project-toolbar">
              <span><IonIcon icon={filterOutline} /> FILTRAR POR TIPO</span>
              <div className="project-filters" role="group" aria-label="Filtrar projetos">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={activeFilter === filter ? 'filter-button active' : 'filter-button'}
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={activeFilter === filter}
                  >{filter}</button>
                ))}
              </div>
            </div>
            <div className="projects-grid">
              {visibleProjects.map((project) => <WebsiteCard key={project.name} project={project} />)}
              {showGame && <FutureGameCard />}
            </div>
            {visibleProjects.length === 0 && !showGame && <p className="empty-projects">Nenhum projeto nesta categoria por enquanto.</p>}
          </div>
        </section>

        <section className="games-section section" id="jogos">
          <div className="container">
            <SectionLabel number="03">OUTRO UNIVERSO</SectionLabel>
            <div className="game-panel">
              <div className="game-copy">
                <div className="game-kicker"><IonIcon icon={gameControllerOutline} /> ÁREA DE JOGOS</div>
                <h2>Playground<br /><span className="gradient-text">em construção.</span></h2>
                <p>Um espaço reservado para jogos autorais e experiências interativas. O primeiro projeto ainda está sendo planejado.</p>
                <a className="coming-soon" href="#sites" onClick={() => setActiveFilter('Jogos')}><span className="coming-dot" /> VER PROJETO EM PREPARAÇÃO <span aria-hidden="true">↗</span></a>
              </div>
              <div className="game-visual" aria-hidden="true">
                <div className="game-ring ring-outer" />
                <div className="game-ring ring-middle" />
                <div className="game-ring ring-inner" />
                <div className="game-cross">+</div>
                <div className="game-chip chip-one">PLAYER_01</div>
                <div className="game-chip chip-two">LOADING FUTURE...</div>
                <IonIcon className="game-icon" icon={gameControllerOutline} />
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contato">
          <div className="container contact-inner">
            <SectionLabel number="04">VAMOS CONVERSAR</SectionLabel>
            <h2>Tem uma ideia?<br /><span className="gradient-text">Vamos tirar do papel.</span></h2>
            <p>O próximo projeto pode começar com uma conversa.</p>
            <a className="button button-primary" href="mailto:contato@exemplo.com">Entrar em contato <IonIcon icon={arrowForwardOutline} /></a>
            <div className="contact-decoration" aria-hidden="true">H<span>.</span></div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#inicio">Yohanan. DEV<span>_</span></a>
          <p>Feito com intenção <span>© {new Date().getFullYear()}</span></p>
          <div className="footer-status"><span className="status-light" /> Todos os sistemas visuais operacionais</div>
        </div>
      </footer>
      </main>
   );
}

export default Home;
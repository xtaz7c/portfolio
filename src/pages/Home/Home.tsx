import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
   arrowForwardOutline,
   codeSlashOutline,
   filterOutline,
   gameControllerOutline,
   layersOutline,
   logoGithub,
   openOutline,
   sparklesOutline,
   terminalOutline,
} from "ionicons/icons";
import Icon from "../../components/Icon/Icon";
import "./Home.css";

type ProjectCategory = "Sites" | "Jogos";
type Filter = "Todos" | ProjectCategory;

type Project = {
   name: string;
   category: ProjectCategory;
   description: string;
   status: string;
   url: string;
   repository?: string;
};

const projects: Project[] = [
   {
      name: "Korevax",
      category: "Sites",
      description:
         "Um ecossistema open source para descobrir, organizar e conectar conteúdos digitais.",
      status: "Em desenvolvimento",
      url: "https://korevax.netlify.app/",
      repository: "https://github.com/Korevax/apps",
   },
];

const filters: Filter[] = ["Todos", "Sites", "Jogos"];

function SectionLabel({
   number,
   children,
}: {
   number: string;
   children: ReactNode;
}) {
   return (
      <span className="section-label">
         <span>{number}</span>
         {children}
      </span>
   );
}

function ProjectCard({ project }: { project: Project }) {
   return (
      <article className="project-card">
         <div className="project-card__top">
            <span className="project-card__category">{project.category}</span>
            <span className="project-card__status">
               <span aria-hidden="true" />
               {project.status}
            </span>
         </div>
         <div className="project-card__body">
            <div className="project-card__mark" aria-hidden="true">
               <Icon icon={layersOutline} />
            </div>
            <h3>{project.name}<span>.</span></h3>
            <p>{project.description}</p>
         </div>
         <div className="project-card__footer">
            <a href={project.url} target="_blank" rel="noreferrer">
               Visitar projeto <Icon icon={openOutline} />
            </a>
            {project.repository && (
               <a
                  className="project-card__source"
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver código de ${project.name} no GitHub`}
               >
                  <Icon icon={logoGithub} />
               </a>
            )}
         </div>
      </article>
   );
}

function FutureGameCard() {
   return (
      <article className="project-card project-card--future">
         <div className="project-card__top">
            <span className="project-card__category">Jogos</span>
            <span className="project-card__status project-card__status--muted">
               Em planejamento
            </span>
         </div>
         <div className="project-card__body">
            <div className="project-card__mark" aria-hidden="true">
               <Icon icon={gameControllerOutline} />
            </div>
            <h3>Próximo jogo<span>.</span></h3>
            <p>
               Um espaço para experiências interativas e projetos autorais.
               Mais novidades em breve.
            </p>
         </div>
         <div className="project-card__footer">
            <span className="project-card__coming">Em breve</span>
         </div>
      </article>
   );
}

function Home() {
   const currentYear = new Date().getFullYear();
   const [activeFilter, setActiveFilter] = useState<Filter>("Todos");

   const visibleProjects = useMemo(
      () =>
         projects.filter(
            (project) =>
               activeFilter === "Todos" || project.category === activeFilter,
         ),
      [activeFilter],
   );
   const showGame = activeFilter === "Todos" || activeFilter === "Jogos";

   return (
      <>
         <main className="home" id="inicio">
            <section className="hero section-shell" aria-labelledby="hero-title">
               <div className="hero__content">
                  <span className="eyebrow">
                     <span className="eyebrow__spark" aria-hidden="true">✳</span>
                     Desenvolvimento & criatividade
                  </span>
                  <h1 id="hero-title">
                     Olá, eu sou o <span>Yohanan.</span>
                  </h1>
                  <p className="hero__role">
                     Desenvolvedor Front-end <span>·</span> Designer de UI/UX
                  </p>
                  <p className="hero__description">
                     Desenvolvendo sites, explorando novas ideias e construindo
                     projetos digitais — um commit de cada vez.
                  </p>
                  <div className="hero__actions">
                     <a className="button button--primary" href="#sites">
                        Explorar projetos <Icon icon={arrowForwardOutline} />
                     </a>
                     <a className="button button--quiet" href="#sobre">
                        Conhecer o portfólio
                     </a>
                  </div>
               </div>
               <div className="hero__visual" aria-hidden="true">
                  <div className="hero-orbit hero-orbit--outer" />
                  <div className="hero-orbit hero-orbit--inner" />
                  <div className="hero-core">Y<span>.</span></div>
                  <span className="hero-coordinate hero-coordinate--top">DESIGN / 01</span>
                  <span className="hero-coordinate hero-coordinate--bottom">CODE / 02</span>
                  <span className="hero-cross hero-cross--one">+</span>
                  <span className="hero-cross hero-cross--two">+</span>
               </div>
               <a className="hero__scroll" href="#sobre">
                  <span /> Role para explorar
               </a>
            </section>

            <section className="about section-shell" id="sobre">
               <SectionLabel number="01">Um pouco sobre</SectionLabel>
               <div className="about__content">
                  <h2>
                     Minimalismo na forma.
                     <span>Personalidade nos detalhes.</span>
                  </h2>
                  <div className="about__copy">
                     <p>
                        Este é meu espaço na internet para reunir projetos,
                        experimentos e ideias. Cada projeto é uma oportunidade
                        de aprender, testar possibilidades e criar algo que
                        valha a pena explorar.
                     </p>
                     <div className="skill-list">
                        <span><Icon icon={codeSlashOutline} /> Desenvolvimento web</span>
                        <span><Icon icon={terminalOutline} /> Código & experimentação</span>
                        <span><Icon icon={sparklesOutline} /> Design digital</span>
                     </div>
                  </div>
               </div>
            </section>

            <section className="projects section-shell" id="sites">
               <SectionLabel number="02">Projetos selecionados</SectionLabel>
               <div className="section-heading">
                  <div>
                     <h2>Sites & <span>aplicações.</span></h2>
                     <p>Projetos publicados e ideias em desenvolvimento.</p>
                  </div>
                  <span className="project-total">
                     <span /> {projects.length + 1} projetos
                  </span>
               </div>

               <div className="project-toolbar">
                  <span className="project-toolbar__label">
                     <Icon icon={filterOutline} /> Filtrar por tipo
                  </span>
                  <div className="project-filters" role="group" aria-label="Filtrar projetos">
                     {filters.map((filter) => (
                        <button
                           key={filter}
                           type="button"
                           className={activeFilter === filter ? "filter-button is-active" : "filter-button"}
                           onClick={() => setActiveFilter(filter)}
                           aria-pressed={activeFilter === filter}
                        >
                           {filter}
                        </button>
                     ))}
                  </div>
               </div>

               <div className="projects-grid">
                  {visibleProjects.map((project) => (
                     <ProjectCard key={project.name} project={project} />
                  ))}
                  {showGame && <FutureGameCard />}
               </div>
               {visibleProjects.length === 0 && !showGame && (
                  <p className="empty-projects">
                     Nenhum projeto nesta categoria por enquanto.
                  </p>
               )}
            </section>

            <section className="playground section-shell" id="jogos">
               <SectionLabel number="03">Outro universo</SectionLabel>
               <div className="playground-panel">
                  <div className="playground__copy">
                     <span className="playground__kicker">
                        <Icon icon={gameControllerOutline} /> Área de jogos
                     </span>
                     <h2>
                        Playground
                        <span>em construção.</span>
                     </h2>
                     <p>
                        Um espaço reservado para jogos autorais e experiências
                        interativas. O primeiro projeto ainda está sendo planejado.
                     </p>
                     <button
                        className="text-link"
                        type="button"
                        onClick={() => {
                           setActiveFilter("Jogos");
                           document.getElementById("sites")?.scrollIntoView({ behavior: "smooth" });
                        }}
                     >
                        Ver projeto em preparação <Icon icon={arrowForwardOutline} />
                     </button>
                  </div>
                  <div className="playground__visual" aria-hidden="true">
                     <div className="playground-ring playground-ring--outer" />
                     <div className="playground-ring playground-ring--middle" />
                     <div className="playground-ring playground-ring--inner" />
                     <Icon icon={gameControllerOutline} />
                     <span className="playground-tag playground-tag--one">PLAYER_01</span>
                     <span className="playground-tag playground-tag--two">LOADING FUTURE...</span>
                     <span className="playground-plus">+</span>
                  </div>
               </div>
            </section>

            <section className="contact section-shell" id="contato">
               <SectionLabel number="04">Vamos conversar</SectionLabel>
               <div className="contact__content">
                  <span className="eyebrow">O próximo projeto começa aqui</span>
                  <h2>
                     Tem uma ideia?
                     <span>Vamos tirar do papel.</span>
                  </h2>
                  <p>Conheça meu trabalho e entre em contato pelo GitHub.</p>
                  <a
                     className="button button--primary"
                     href="https://github.com/xtaz7c"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <Icon icon={logoGithub} /> Acessar GitHub <Icon icon={arrowForwardOutline} />
                  </a>
                  <span className="contact__decoration" aria-hidden="true">Y<span>.</span></span>
               </div>
            </section>
         </main>

         <footer className="site-footer">
            <div className="site-footer__inner">
               <a className="brand" href="#inicio" aria-label="Yohanan DEV, voltar ao início">
                  Yohanan. DEV<span>_</span>
               </a>
               <p>Feito com intenção <span>© {currentYear}</span></p>
               <a href="https://github.com/xtaz7c" target="_blank" rel="noreferrer">
                  GitHub <Icon icon={openOutline} />
               </a>
            </div>
         </footer>
      </>
   );
}

export default Home;

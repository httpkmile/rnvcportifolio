import { useMemo, useRef, useEffect, useState } from 'react'
import './App.css'

function App() {
  const trackRef = useRef(null)
  const containerRef = useRef(null)
  const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
  
  // Drag functionality
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)

  const projects = useMemo(
    () => [
      {
        title: 'Login Form',
        image: 'assets/screenlf.png',
        description:
          'Tela de login desenvolvida com React, Vite, HTML e CSS. O design foi prototipado no Figma, com foco em uma interface moderna e funcional',
        href: 'assets/pdfs/LF-1.pdf',
        rel: 'noopener noreferrer',
      },
      {
        title: 'Career Page',
        image: 'assets/cp.png',
        description:
          'Página de carreiras em desenvolvimento, com layout criado no Figma e implementação em React + Vite. Inclui chatbot integrado usando prompts de IA para interação com o usuário.',
        href: 'assets/pdfs/CP26- 1.pdf',
        rel: 'noopener noreferrer',
      },
      {
        title: 'Posts para Instagram (Tech)',
        image: 'assets/Screenshot 2026-01-27 181808.png',
        description:
          'Criação de 3 posts para uma empresa tech fictícia, desenvolvidos 100% no Figma. Projeto focado em testar habilidades de layout, composição visual e identidade digital.',
        href: 'assets/pdfs/insta.pdf',
        rel: 'noopener noreferrer',
      },
      {
        title: 'Design Abstrato',
        image: 'assets/Screenshot 2026-01-27 191718.png',
        description:
          'Projeto de design abstrato criado no Figma, inspirado em estilos visuais já existentes, mas reinterpretado com conceitos e ideias próprias.',
        href: 'assets/pdfs/Frame 1.pdf',
        rel: 'noopener noreferrer',
      },
      {
        title: 'Visão Computacional',
        image: 'assets/MLdemo.jpg',
        description:
          'Projeto de Visão Computacional desenvolvido durante o NLW da Rocketseat, utilizando Python, CNN e MediaPipe. A aplicação implementa um agente computacional capaz de capturar, processar e classificar dados visuais em tempo real, realizando reconhecimento de padrões por meio de inteligência artificial.',
        href: 'assets/pdfs/documentacaoedemo.pdf',
        rel: 'MLDemo',
      },
    ],
    [],
  )

  const loopItems = useMemo(() => (projects.length ? [...projects, ...projects] : []), [projects])

  const pauseTicker = () => {
    trackRef.current?.classList.add('is-paused')
  }

  const resumeTicker = () => {
    trackRef.current?.classList.remove('is-paused')
  }

  // Remove drag functionality

  return (
    <>
      <div className="contato">
        <a
          href="https://wa.me/5511921960763?text=Oi%2C%20vim%20pelo%20portif%C3%B3lio."
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="17"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </a>
      </div>

      <section className="top">
        <nav>
          <ul className="social">
            <li>
              <a href="https://www.linkedin.com/in/camile-r-9b4867353/?skipRedirect=true" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </li>
            <li>
              <a href="https://www.instagram.com/camivnr/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
              <a href="https://github.com/httpkmile" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li><strong>Make it happen</strong></li>
          </ul>
        </nav>
      </section>

      <header>
        <div className="header-content">
          <div className="header-left">
            <h1>OLÁ! EU SOU A <br />CAMILE RODRIGUES.</h1>
          </div>
          
          <div className="header-center">
            <div className="avatar-container">
              <img src={assetUrl('assets/avatar.png')} alt="Camile Rodrigues" className="avatar" />
            </div>
          </div>
          
          <div className="header-right">
            <h1>E ESTE É O MEU PORTIFOLIO</h1>
            <a href="#sectioncard">
              <button className="btn-ver">Ver projetos ⭣</button>
            </a>
          </div>
        </div>
      </header>

      <section>
        <div className="sobre-container">
          <h2 className="titulosobre">SOBRE MIM</h2>
          <div className="linha"></div>
          <p className="sobre-texto">
            Sou desenvolvedora back-end em formação e sou apaixonada por estruturas automatizadas, onde a lógica e as interfaces conversam entre si. 
            Atualmente, estou trabalhando de forma consistente para dar vida às minhas ideia, 
            buscando florescer minhas habilidades e colecionar experiências na área de desenvolvimento.
            <br/><br/>
            Acredito que a estética e os métodos de automatização possam caminhar juntos.
             Gosto da liberdade que essa área me possibilita ter, explorar e dar vida. 
             É no equilíbrio entre funcionamento e aparência que encontro motivação para continuar aprendendo e evoluindo nessa área.

             
          </p>
          <svg
            width="40"
            height="40"
            viewBox="0 0 26 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: "30px" }}
          >
            <path d="M25.172 30.7388L23.9618 32.6752L12.586 30.0127L7.26115 34.3694L3.47811 30.0127L8.2293 21.7834H15.2484L0 10.4076L0.968153 2.66241L16.4586 21.2994L23.9618 28.0764L17.6688 24.2038L15.0064 25.414L23.9618 28.5605L25.172 30.7388Z" fill="url(#paint0_linear_185_3)" />
            <path d="M6.71069 0.00199609L19.3626 21.4064L6.41011 7.09955L6.71069 0.00199609Z" fill="url(#paint1_linear_185_3)" />
            <path d="M13.0701 32.9172L8.47134 36.3057L9.70147 37.7409L24.4459 33.6433L13.0701 32.9172Z" fill="url(#paint2_linear_185_3)" />
            <defs>
              <linearGradient id="paint0_linear_185_3" x1="25.172" y1="18.5159" x2="0" y2="18.5159">
                <stop offset="0.394231" />
                <stop offset="0.600962" stopOpacity="0.99" />
                <stop offset="0.802885" />
              </linearGradient>
              <linearGradient id="paint1_linear_185_3" x1="19.4504" y1="10.7571" x2="6.38083" y2="10.6493">
                <stop offset="0.394231" />
                <stop offset="0.600962" stopOpacity="0.99" />
                <stop offset="0.802885" />
              </linearGradient>
              <linearGradient id="paint2_linear_185_3" x1="24.4459" y1="35.4586" x2="8.47134" y2="35.4586">
                <stop offset="0.394231" />
                <stop offset="0.600962" stopOpacity="0.99" />
                <stop offset="0.802885" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <section id="sectioncard">
        <div className="boxtittle"><h1 className="tittlecard">PROJETOS RECENTES</h1></div>
        <div
          className="paicard carousel-viewport"
          ref={containerRef}
          onPointerEnter={pauseTicker}
          onPointerLeave={resumeTicker}
          onPointerDown={pauseTicker}
          onPointerUp={resumeTicker}
        >
          <div className="carousel-track" ref={trackRef}>
            {loopItems.map((project, idx) => (
              <div className="card" key={`${project.title}-${idx}`}>
                <img src={assetUrl(project.image)} alt={project.title} />
                <div className="content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={assetUrl(project.href)} target="_blank" rel={project.rel}>Ver completo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  
      <section className="penultimasec">
        <div className="boxtittle2"><h1>Ferramentas Utilizadas</h1></div>
        <div className="infinite">
          <div className="track">
            {['JavaScript', 'CSS', 'HTML', 'React', 'Vite', 'Windsurf', 'Figma'].map((tech) => (
              <div key={tech} className="icon">
                <img
                  src={assetUrl(`assets/${tech.toLowerCase()}.png`)}
                  alt={tech}
                  className="tech-icon-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 • Camile Rodrigues</p>
      </footer>
    </>
  )
}

export default App

import { useState } from 'react'
import {
  ArrowDown, ArrowRight, Check, HeartPulse, Hospital, MapPin,
  Menu, MessageCircle, Search, ShieldCheck, Star, Stethoscope, X,
} from 'lucide-react'

const APP_DOWNLOAD_URL = '#' // Cole aqui o link do APK
const PRESENTATION_FEEDBACK_URL = '#' // Cole aqui o link do Google Forms

const features = [
  {
    icon: MapPin,
    title: 'Encontre unidades de saúde',
    description: 'Descubra hospitais e unidades de saúde e consulte informações importantes antes de escolher.',
  },
  {
    icon: Star,
    title: 'Compartilhe sua experiência',
    description: 'Avalie atendimento, estrutura, limpeza, organização e tempo de espera.',
  },
  {
    icon: Stethoscope,
    title: 'Consulte especialidades',
    description: 'Encontre informações sobre especialidades e serviços disponíveis nas unidades.',
  },
  {
    icon: MessageCircle,
    title: 'Ajude outras pessoas',
    description: 'Suas avaliações contribuem para que outras pessoas façam escolhas mais conscientes.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="MedUp início">
            <span className="brand-mark"><HeartPulse size={23} strokeWidth={2.5} /></span>
            <span>med<span>Up</span></span>
          </a>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#sobre" onClick={closeMenu}>Sobre o MedUp</a>
            <a href="#funcionalidades" onClick={closeMenu}>Funcionalidades</a>
            <a href="#avaliacao" onClick={closeMenu}>Avalie o projeto</a>
            <a className="nav-cta" href="#download" onClick={closeMenu}>Baixar aplicativo <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> INFORMAÇÃO QUE FAZ A DIFERENÇA</div>
            <h1>Sua saúde.<br /><span>Sua escolha.</span><br />Sua voz.</h1>
            <p className="hero-description">
              Conheça o MedUp: uma plataforma que aproxima você das informações sobre hospitais
              e transforma experiências em escolhas mais conscientes.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#download">Conheça o aplicativo <ArrowRight size={18} /></a>
              <a className="button button-ghost" href="#sobre">Saiba mais <ArrowDown size={17} /></a>
            </div>
            <div className="hero-note"><ShieldCheck size={17} /> Mais transparência para escolher onde buscar atendimento.</div>
          </div>

          <div className="hero-visual" aria-label="Ilustração de celular com a interface do MedUp">
            <div className="visual-orbit orbit-a" />
            <div className="visual-orbit orbit-b" />
            <div className="floating-card floating-rating">
              <span className="floating-icon"><Star size={17} fill="currentColor" /></span>
              <span><strong>Avaliações</strong><small>Experiências compartilhadas</small></span>
            </div>
            <div className="phone">
              <div className="phone-top"><span className="phone-speaker" /><span className="phone-camera" /></div>
              <div className="app-screen">
                <div className="app-header">
                  <div className="app-brand"><span><HeartPulse size={15} /></span> medUp</div>
                  <span className="avatar">S</span>
                </div>
                <div className="app-greeting">Olá! 👋</div>
                <h3>Encontre atendimento<br />perto de você.</h3>
                <div className="fake-search"><Search size={14} /><span>Buscar hospital...</span></div>
                <div className="app-section-title">Unidades em destaque <span>Ver todas</span></div>
                <div className="hospital-card">
                  <div className="hospital-image">
                    <img
                      src="https://images.unsplash.com/photo-1764885415563-8b868745e9e2?auto=format&fit=crop&fm=jpg&q=85&w=600"
                      alt="Fachada real de uma unidade hospitalar"
                    />
                  </div>
                  <div className="hospital-info"><strong>Hospital exemplo</strong><small>Hospital • Público</small><span><Star size={11} fill="currentColor" /> 4,8 <em>•</em> São Paulo</span></div>
                </div>
                <div className="app-section-title categories-title">Explore por categoria</div>
                <div className="category-row">
                  <span><Stethoscope size={17} /></span><span><HeartPulse size={17} /></span><span><MapPin size={17} /></span>
                </div>
                <div className="phone-bottom"><i /><i /><i /><i /></div>
              </div>
            </div>
            <div className="floating-card floating-location"><span className="location-pin"><MapPin size={18} /></span><span><strong>Mais informação</strong><small>Na palma da sua mão</small></span></div>
          </div>
        </div>
        <div className="hero-bottom container"><span>DESCUBRA</span><div /></div>
      </section>

      <section className="intro section" id="sobre">
        <div className="container intro-grid">
          <div className="section-kicker">01 / SOBRE O PROJETO</div>
          <div className="intro-content">
            <h2>Escolher onde buscar atendimento também é <span>cuidar de você.</span></h2>
            <p>
              O MedUp nasceu com o propósito de facilitar o acesso a informações sobre unidades
              de saúde. A ideia é reunir dados e avaliações em um só lugar, ajudando pacientes,
              familiares e responsáveis a conhecer melhor as opções disponíveis.
            </p>
            <a className="text-link" href="#funcionalidades">Descubra o que você pode fazer <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="features section" id="funcionalidades">
        <div className="container">
          <div className="section-heading">
            <div><div className="section-kicker">02 / FUNCIONALIDADES</div><h2>Informação para<br /><span>decidir melhor.</span></h2></div>
            <p>Conheça alguns recursos pensados para tornar a busca por informações de saúde mais simples.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-top"><span className="feature-icon"><Icon size={22} /></span><span className="feature-number">0{index + 1}</span></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <div className="feature-line" />
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="download-section section" id="download">
        <div className="container download-panel">
          <div className="download-copy">
            <div className="section-kicker light">03 / EXPERIMENTE</div>
            <h2>O próximo passo<br />é <span>conhecer o MedUp.</span></h2>
            <p>Baixe o aplicativo, explore as funcionalidades e conheça de perto a nossa proposta.</p>
            <a className="button button-light" href={APP_DOWNLOAD_URL} target="_blank" rel="noreferrer">
              Baixar aplicativo <ArrowDown size={18} />
            </a>
            <small className="download-hint">O link de download será disponibilizado pela equipe do projeto.</small>
          </div>
          <div className="download-art">
            <div className="download-circle"><HeartPulse size={88} strokeWidth={1.2} /></div>
            <div className="download-pill pill-one"><Check size={15} /> Fácil de explorar</div>
            <div className="download-pill pill-two"><ShieldCheck size={15} /> Informação acessível</div>
          </div>
        </div>
      </section>

      <section className="feedback section" id="avaliacao">
        <div className="container feedback-grid">
          <div className="feedback-symbol"><MessageCircle size={34} /></div>
          <div className="feedback-copy">
            <div className="section-kicker">04 / SUA OPINIÃO</div>
            <h2>Ajude a gente a <span>melhorar.</span></h2>
            <p>Você conheceu a apresentação do MedUp? Conte o que achou! Sua avaliação é muito importante para o desenvolvimento do projeto.</p>
          </div>
          <a className="button button-primary feedback-button" href={PRESENTATION_FEEDBACK_URL} target="_blank" rel="noreferrer">
            Avaliar apresentação <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-main">
          <a className="brand brand-footer" href="#inicio"><span className="brand-mark"><HeartPulse size={22} /></span><span>med<span>Up</span></span></a>
          <p>Mais informação. Mais transparência. Escolhas melhores.</p>
          <a href="#inicio" className="back-top">Voltar ao topo ↑</a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} MedUp. Projeto acadêmico.</span><span>Feito para aproximar pessoas e informação.</span></div>
      </footer>
    </main>
  )
}

export default App

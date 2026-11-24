import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import HeroVisual from "../components/HeroVisual";

export default function HeroSection() {
	return (
		<section className="hero" id="inicio">
			<div className="hero-glow glow-one" />
			<div className="hero-glow glow-two" />
			<div className="container hero-grid">
				<div className="hero-copy">
					<h1>
						Sua saúde.
						<br />
						<span>Sua escolha.</span>
						<br />
						Sua voz.
					</h1>
					<p className="hero-description">
						Conheça o MedUp: uma plataforma que aproxima você das informações
						sobre hospitais e transforma experiências em escolhas mais
						conscientes.
					</p>
					<div className="hero-actions">
						<a className="button button-primary" href="#download">
							Conheça o aplicativo <ArrowRight size={18} />
						</a>
						<a className="button button-ghost" href="#sobre">
							Saiba mais <ArrowDown size={17} />
						</a>
					</div>
					<div className="hero-note">
						<ShieldCheck size={17} /> Mais transparência para escolher onde
						buscar atendimento.
					</div>
				</div>

				<HeroVisual />
			</div>
			<div className="hero-bottom container">
				<span>DESCUBRA</span>
				<div />
			</div>
		</section>
	);
}

import { ArrowRight } from "lucide-react";

export default function AboutSection() {
	return (
		<section className="intro section" id="sobre">
			<div className="container intro-grid">
				<div className="section-kicker">01 / SOBRE O PROJETO</div>
				<div className="intro-content">
					<h2>
						Escolher onde buscar atendimento também é{" "}
						<span>cuidar de você.</span>
					</h2>
					<p>
						O MedUp nasceu com o propósito de facilitar o acesso a informações
						sobre unidades de saúde. A ideia é reunir dados e avaliações em um
						só lugar, ajudando pacientes, familiares e responsáveis a conhecer
						melhor as opções disponíveis.
					</p>
					<a className="text-link" href="#funcionalidades">
						Descubra o que você pode fazer <ArrowRight size={17} />
					</a>
				</div>
			</div>
		</section>
	);
}

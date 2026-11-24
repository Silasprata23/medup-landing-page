import { ArrowDown, HeartPulse, Check, ShieldCheck } from "lucide-react";
import { APP_DOWNLOAD_URL } from "../config/links";

export default function DownloadSection() {
	return (
		<section className="download-section section" id="download">
			<div className="container download-panel">
				<div className="download-copy">
					<div className="section-kicker light">03 / EXPERIMENTE</div>
					<h2>
						O próximo passo
						<br />é <span>conhecer o MedUp.</span>
					</h2>
					<p>
						Baixe o aplicativo, explore as funcionalidades e conheça de perto a
						nossa proposta.
					</p>
					<a
						className="button button-light"
						href={APP_DOWNLOAD_URL}
						target="_blank"
						rel="noreferrer"
					>
						Baixar aplicativo <ArrowDown size={18} />
					</a>
					<small className="download-hint">
						O link de download será disponibilizado pela equipe do projeto.
					</small>
				</div>
				<div className="download-art">
					<div className="download-circle">
						<HeartPulse size={88} strokeWidth={1.2} />
					</div>
					<div className="download-pill pill-one">
						<Check size={15} /> Fácil de explorar
					</div>
					<div className="download-pill pill-two">
						<ShieldCheck size={15} /> Informação acessível
					</div>
				</div>
			</div>
		</section>
	);
}

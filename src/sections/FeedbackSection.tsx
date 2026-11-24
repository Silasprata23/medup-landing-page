import { MessageCircle, ArrowRight } from "lucide-react";
import { PRESENTATION_FEEDBACK_URL } from "../config/links";

export default function FeedbackSection() {
	return (
		<section className="feedback section" id="avaliacao">
			<div className="container feedback-grid">
				<div className="feedback-symbol">
					<MessageCircle size={34} />
				</div>
				<div className="feedback-copy">
					<div className="section-kicker">04 / SUA OPINIÃO</div>
					<h2>
						Ajude a gente a <span>melhorar.</span>
					</h2>
					<p>
						Você conheceu a apresentação do MedUp? Conte o que achou! Sua
						avaliação é muito importante para o desenvolvimento do projeto.
					</p>
				</div>
				<a
					className="button button-primary feedback-button"
					href={PRESENTATION_FEEDBACK_URL}
					target="_blank"
					rel="noreferrer"
				>
					Avaliar apresentação <ArrowRight size={18} />
				</a>
			</div>
		</section>
	);
}

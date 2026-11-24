import { Star, MapPin } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

export default function HeroVisual() {
	return (
		<div
			className="hero-visual"
			aria-label="Ilustração de celular com a interface do MedUp"
		>
			<div className="visual-orbit orbit-a" />
			<div className="visual-orbit orbit-b" />
			<div className="floating-card floating-rating">
				<span className="floating-icon">
					<Star size={17} fill="currentColor" />
				</span>
				<span>
					<strong>Avaliações</strong>
					<small>Experiências compartilhadas</small>
				</span>
			</div>
			<PhoneMockup />
			<div className="floating-card floating-location">
				<span className="location-pin">
					<MapPin size={18} />
				</span>
				<span>
					<strong>Mais informação</strong>
					<small>Na palma da sua mão</small>
				</span>
			</div>
		</div>
	);
}

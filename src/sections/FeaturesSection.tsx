import { features } from "../data/features";
import FeatureCard from "../components/FeatureCard";

export default function FeaturesSection() {
	return (
		<section className="features section" id="funcionalidades">
			<div className="container">
				<div className="section-heading">
					<div>
						<div className="section-kicker">02 / FUNCIONALIDADES</div>
						<h2>
							Informação para
							<br />
							<span>decidir melhor.</span>
						</h2>
					</div>
					<p>
						Conheça alguns recursos pensados para tornar a busca por informações
						de saúde mais simples.
					</p>
				</div>
				<div className="feature-grid">
					{features.map((feature, index) => (
						<FeatureCard key={feature.title} {...feature} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}

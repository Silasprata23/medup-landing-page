import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
	icon: LucideIcon;
	title: string;
	description: string;
	index: number;
};

export default function FeatureCard({
	icon,
	title,
	description,
	index,
}: FeatureCardProps) {
	const Icon = icon;

	return (
		<article className="feature-card">
			<div className="feature-top">
				<span className="feature-icon">
					<Icon size={22} />
				</span>
				<span className="feature-number">0{index + 1}</span>
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
			<div className="feature-line" />
		</article>
	);
}

import Brand from "./Brand";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container footer-main">
				<Brand footer />
				<p>Mais informação. Mais transparência. Escolhas melhores.</p>
				<a href="#inicio" className="back-top">
					Voltar ao topo ↑
				</a>
			</div>
			<div className="container footer-bottom">
				<span>© {new Date().getFullYear()} MedUp. Projeto acadêmico.</span>
				<span>Feito para aproximar pessoas e informação.</span>
			</div>
		</footer>
	);
}

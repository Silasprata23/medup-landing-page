import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Brand from "./Brand";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const closeMenu = () => setMenuOpen(false);

	return (
		<header className="site-header">
			<div className="container nav-wrap">
				<Brand onClick={closeMenu} />

				<button
					className="menu-toggle"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Abrir menu"
				>
					{menuOpen ? <X /> : <Menu />}
				</button>

				<nav className={menuOpen ? "nav-links open" : "nav-links"}>
					<a href="#sobre" onClick={closeMenu}>
						Sobre o MedUp
					</a>
					<a href="#funcionalidades" onClick={closeMenu}>
						Funcionalidades
					</a>
					<a href="#avaliacao" onClick={closeMenu}>
						Avalie o projeto
					</a>
					<a className="nav-cta" href="#download" onClick={closeMenu}>
						Baixar aplicativo <ArrowRight size={16} />
					</a>
				</nav>
			</div>
		</header>
	);
}

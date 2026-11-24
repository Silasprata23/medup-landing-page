import Logo from "./Logo.tsx";

type BrandProps = { footer?: boolean; onClick?: () => void };

export default function Brand({ footer = false, onClick }: BrandProps) {
	return (
		<a
			className={footer ? "brand brand-footer" : "brand"}
			href="#inicio"
			onClick={onClick}
			aria-label={footer ? undefined : "MedUp início"}
		>
			{/*<span className="brand-mark">{footer ? <Logo/> :<Logo/> }</span>*/}
			<span className="brand-mark">
				<Logo />
			</span>
			<span>
				Med<span>Up</span>
			</span>
		</a>
	);
}

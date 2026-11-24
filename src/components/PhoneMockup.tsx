import {
	ArrowLeft,
	Heart,
	HeartPulse,
	House,
	MapPin,
	Search,
	Star,
	CircleUserRound,
} from "lucide-react";


export default function PhoneMockup() {
	const hospitalImage = "/images/hospital.jpg";

	return (
		<div className="phone">
			<div className="phone-top">
				<span className="phone-speaker" />
				<span className="phone-camera" />
			</div>

			<div className="medup-screen">
				<header className="medup-header">
					<ArrowLeft size={15} />

					<h2>Home</h2>

					<div className="medup-logo">
						<HeartPulse size={17} />
					</div>
				</header>

				<div className="medup-content">
					<div className="medup-featured-card">
						<img
							className="medup-featured-image"
							src={hospitalImage}
							alt="Fachada de hospital"
						/>

						<div className="medup-card-title">
							<h3>Hospital São Lucas</h3>
							<Heart size={15} color="#C93617" />
						</div>

						<div className="medup-address">
							<MapPin size={12} color="#DC2638" />
							<span>Rua das Flores, 150</span>
						</div>

						<div className="medup-divider" />

						<div className="medup-tags">
                     <span className="medup-tag hours">
                        Horário não informado
                     </span>

							<span className="medup-tag type">
                        Tipo não informado
                     </span>

							<span className="medup-tag rating">
                        <Star size={10} />
                        Sem avaliações
                     </span>
						</div>
					</div>

					<h2 className="medup-section-title">
						Próximos de Você
					</h2>

					<div className="medup-hospital-list">
						{[
							{
								id: 1,
								name: "Hospital São Lucas",
								address: "Rua das Flores, 150",
								image: hospitalImage,
							},
							{
								id: 2,
								name: "Hospital Nossa Senhora das Graças",
								address: "",
								image: "/images/hospital-2.jpg",
							},
						].map((hospital) => (
							<div
								className="medup-hospital-card"
								key={hospital.id}
							>
								<img
									className="medup-hospital-photo"
									src={hospital.image}
									alt={`Imagem de hospital`}
								/>

								<div className="medup-hospital-info">
									<div className="medup-card-title">
										<h3>{hospital.name}</h3>
										<Heart size={12} color="#C93617" />
									</div>

									{hospital.address && (
										<div className="medup-address">
											<MapPin size={10} color="#DC2638" />
											<span>{hospital.address}</span>
										</div>
									)}

									<div className="medup-divider" />

									<div className="medup-tags">
                              <span className="medup-tag hours">
                                 Horário não informado
                              </span>

										<span className="medup-tag type">
                                 Tipo não informado
                              </span>

										<span className="medup-tag rating">
                                 <Star size={8} />
                                 Sem avaliações
                              </span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="medup-navbar">
					<Search size={17} />

					<div className="medup-navbar-active">
						<House size={19} />
					</div>

					<CircleUserRound size={17} />
				</div>

				<div className="medup-system-bar">
					<span />
				</div>
			</div>
		</div>
	);
}
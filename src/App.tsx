import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import FeaturesSection from "./sections/FeaturesSection";
import DownloadSection from "./sections/DownloadSection";
import FeedbackSection from "./sections/FeedbackSection";
import Footer from "./components/Footer";

export default function App() {
	return (
		<main>
			<Header />
			<HeroSection />
			<AboutSection />
			<FeaturesSection />
			<DownloadSection />
			<FeedbackSection />
			<Footer />
		</main>
	);
}

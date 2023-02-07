import NavBar from "../components/NavBar";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Testimony from "../components/Testimony";
import RentNow from "../components/RentNow";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import HeroContent from "../components/HeroContent";

function LandingPage() {
	return (
		<div>
			<NavBar />
			<HeroContent />
			<Services />
			<WhyUs />
			<Testimony />
			<RentNow />
			<FAQ />
			<Footer />
		</div>
	);
}

export default LandingPage;

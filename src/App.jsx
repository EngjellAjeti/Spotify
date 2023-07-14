import Navbar from "./components/Navbar";
import Header from "./components/Header";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";
import PaymentPlan from "./components/PaymentPlan";
import UpgradeAccount from "./components/UpgradeAccount";
import ContactUs from "./components/ContactUs";
import Hero from "./components/hero";
import GradientPosition from "./components/gradientPosition";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-black clash">
      <GradientPosition />
      <Navbar />
      <Header />
      <WhyUs />
      <HowItWorks />
      <Hero />
      <PaymentPlan />
      <UpgradeAccount />
      <ContactUs />
      <Footer />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

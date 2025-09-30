import About from "@/components/About/About";
import Audience from "@/components/Audience/Audience";
import Benefits from "@/components/Benefits/Benefits";
import Bonus from "@/components/Bonus/Bonus";
import CtaFinal from "@/components/CtaFinal/CtaFinal";
import Footer from "@/components/Footer/Footer";
import Guarantee from "@/components/Guarantee/Guarantee";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Testimonials from "@/components/Testimonials/Testimonials";

// New image-based sections created from provided assets (com nomes descritivos)
import AboutDevocional from "@/components/AboutDevocional/AboutDevocional";
import Bonus365 from "@/components/Bonus365/Bonus365";
import BonusMulheres from "@/components/BonusMulheres/BonusMulheres";
import ConviteTransformacao from "@/components/ConviteTransformacao/ConviteTransformacao";
import IndiceEnriquecido from "@/components/IndiceEnriquecido/IndiceEnriquecido";

// Home: compõe todas as seções do site. Anchors institucionais já existem no Footer.
export default function Page() {
  return (
    <main>
      <Header />
      <Hero />

      <AboutDevocional />
      <Bonus365 />
      <BonusMulheres />
      <IndiceEnriquecido />
      <ConviteTransformacao />

      <About />
      <Benefits />
      <Bonus />

      <Audience />
      <Testimonials />
      <Guarantee />
      <CtaFinal />
      <Footer />
    </main>
  );
}

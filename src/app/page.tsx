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

// New image-based sections created from provided assets (now with descriptive names)
import AboutDevocional from "@/components/AboutDevocional/AboutDevocional";
import Bonus365 from "@/components/Bonus365/Bonus365";
import BonusMulheres from "@/components/BonusMulheres/BonusMulheres";
import ConviteTransformacao from "@/components/ConviteTransformacao/ConviteTransformacao";
import IndiceEnriquecido from "@/components/IndiceEnriquecido/IndiceEnriquecido";
import IntroducaoNT from "@/components/IntroducaoNT/IntroducaoNT";
import Pricing from "@/components/Pricing/Pricing";

// Main page: composes sections. Each image (or grouped set) is now its own component/section.
export default function Page() {
  return (
    <main>
      <Header />
      <Hero />

      <AboutDevocional />
      <Bonus365 />
      <BonusMulheres />
      <IndiceEnriquecido />
      <IntroducaoNT />
      <ConviteTransformacao />

      <About />
      <Benefits />
      <Bonus />

      <Pricing />

      <Audience />
      <Testimonials />
      <Guarantee />
      <CtaFinal />
      <Footer />

      <div id="politica" style={{ display: "none" }}>
        Política de privacidade: seus dados não serão compartilhados.
      </div>
      <div id="contato" style={{ display: "none" }}>
        Contato: suporte@novotestamentoparamulheres.com.br
      </div>
      <div id="direitos" style={{ display: "none" }}>
        Conteúdo protegido por direitos autorais.
      </div>
    </main>
  );
}

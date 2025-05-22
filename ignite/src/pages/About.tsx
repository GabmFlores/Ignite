import AboutCard from "../components/AboutCard";
import abeneil from "../assets/abeneil.png";
import beejay from "../assets/beejay.jpg";
import gab from "../assets/gab.jpg";
import carmela from "../assets/carmela.jpg";

export default function AboutPage() {
  return (
    <main className="bg-background px-8 py-16">
      <h1 className="text-4xl font-semibold text-center text-primary mb-12">
        Meet the Team
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        <AboutCard imageSrc={abeneil} name="Abeneil Magpantay" />
        <AboutCard imageSrc={beejay} name="Beejay Gomez" />
        <AboutCard imageSrc={gab} name="Gab Flores" />
        <AboutCard imageSrc={carmela} name="Carmela Bordado" />
      </div>
    </main>
  );
}

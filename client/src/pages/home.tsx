import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Courses } from "@/components/courses";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Team } from "@/components/team";
import { Projects } from "@/components/projects";
import { Enrollment } from "@/components/enrollment";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhyChooseUs />
        <Team />
        <Projects />
        <Enrollment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Programs from "@/components/sections/programs";
import Facilities from "@/components/sections/facilities";
import Gallery from "@/components/sections/gallery";
import Testimonials from "@/components/sections/testimonials";
import Enroll from "@/components/sections/enroll";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Programs />
      <Facilities />
      <Gallery />
      <Testimonials />
      <Enroll />
      <Contact />
      <Footer />
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <a href="#enroll" className="w-16 h-16 bg-gradient-to-r from-sky to-turquoise rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <i className="fas fa-child text-xl"></i>
        </a>
      </div>
    </div>
  );
}

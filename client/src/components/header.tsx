import { useState, useEffect } from "react";
import { PracticodeLogoSVG } from "@/lib/logo";
import { MobileMenu } from "./mobile-menu";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [location, setLocation] = useLocation();

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "courses", label: "Courses" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location !== "/") {
      setLocation("/");
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 64; // Height of fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 64; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const navigateToHome = () => {
    setLocation("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "courses", "team", "contact", "enroll"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-xl border-b border-gray-700/50 fixed w-full z-50 top-0 shadow-2xl shadow-black/20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={navigateToHome} className="group">
              <PracticodeLogoSVG className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105" variant="primary" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => item.id === "home" ? navigateToHome() : scrollToSection(item.id)}
                  className={`relative px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 group ${
                    activeSection === item.id
                      ? "text-primary bg-gray-800/80 shadow-lg border border-primary/20"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                  style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif' }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-yellow-400/10 rounded-xl blur-sm"></div>
                  )}
                </button>
              ))}
              
              {/* CTA Button */}
              <div className="ml-4 pl-4 border-l border-gray-700/50">
                <Button
                  onClick={() => scrollToSection("enroll")}
                  className="group bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-black px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                >
                  <span className="flex items-center gap-2">
                    Start Learning
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden">
            <MobileMenu activeSection={activeSection} onSectionClick={scrollToSection} />
          </div>
        </div>
      </nav>
    </header>
  );
}

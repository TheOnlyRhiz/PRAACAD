import { PracticodeLogoSVG } from "@/lib/logo";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiInstagram, SiWhatsapp, SiLinkedin } from "react-icons/si";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "courses", label: "Courses" },
    { id: "team", label: "Our Team" },
    { id: "contact", label: "Contact" },
    { id: "enroll", label: "Enroll Now" }
  ];

  const courses = [
    { name: "Web Development", price: "₦70,000" },
    { name: "Data Analytics", price: "₦55,000" },
    { name: "UI/UX Design", price: "₦70,000" },
    { name: "Virtual Assistant", price: "₦50,000" }
  ];

  const socialLinks = [
    {
      icon: SiInstagram,
      href: "https://instagram.com/practicode_academy",
      label: "Instagram"
    },
    {
      icon: SiWhatsapp,
      href: "https://wa.me/2349030578667?text=Hello%20Practicode%20Academy,%20I%20would%20like%20to%20inquire%20about%20your%20programs.",
      label: "WhatsApp"
    },
    {
      icon: SiLinkedin,
      href: "#",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {/* Company Info */}
          <div className="text-left">
            <div className="mb-6">
              <PracticodeLogoSVG className="h-10 sm:h-12 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Empowering the next generation of tech talents through hands-on education.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300 text-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span>Ibadan, Oyo State, Nigeria</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+2347072778657" className="hover:text-primary transition-colors">+234 707 277 8657</a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <SiWhatsapp className="w-4 h-4 text-white" />
                </div>
                <a href="https://wa.me/2349030578667?text=Hello%20Practicode%20Academy,%20I%20would%20like%20to%20inquire%20about%20your%20programs." target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+234 903 057 8667</a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:info@practicodeacademy.com" className="hover:text-primary transition-colors">info@practicodeacademy.com</a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:from-primary hover:to-yellow-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-black transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-6 text-white relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-yellow-400 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm sm:text-base flex items-center w-full"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-16">
          {/* Gradient separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8"></div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 font-medium text-sm">
                © 2025 Practicode Academy. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Established April 10, 2023 • Empowering Tech Talents in Africa
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-sm">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-400 hover:text-primary font-medium transition-colors duration-300"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-400 hover:text-primary font-medium transition-colors duration-300"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection("enroll")}
                className="text-gray-400 hover:text-primary font-medium transition-colors duration-300"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

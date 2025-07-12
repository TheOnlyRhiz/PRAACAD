import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { PracticodeLogoSVG } from "@/lib/logo";

interface MobileMenuProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export function MobileMenu({ activeSection, onSectionClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "courses", label: "Courses" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
  ];

  const handleItemClick = (section: string) => {
    if (section === "home") {
      setLocation("/");
    } else {
      onSectionClick(section);
    }
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:text-white hover:bg-gray-800/50 p-2 rounded-xl transition-all duration-300 focus:outline-none"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-16 sm:top-20 left-0 right-0 bg-gradient-to-b from-gray-900 to-gray-800 border-t border-gray-700/50 shadow-2xl z-50">
            <div className="px-6 py-6 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`block px-4 py-3 text-left w-full font-medium rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-primary bg-gray-800/80 border border-primary/20"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-700/50">
                <button
                  onClick={() => handleItemClick("enroll")}
                  className="block w-full bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-black px-6 py-3 font-bold text-center rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                >
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

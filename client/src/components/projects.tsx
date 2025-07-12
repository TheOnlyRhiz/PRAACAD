import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Car, BarChart3, MessageSquare, PieChart, Smartphone, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

// Import portfolio images
import portfolio1 from "@/images/portfolio/IMG-20250627-WA0079.jpg";
import portfolio2 from "@/images/portfolio/IMG-20250627-WA0080.jpg";
import portfolio3 from "@/images/portfolio/IMG-20250627-WA0081.jpg";
import portfolio4 from "@/images/portfolio/IMG-20250627-WA0082.jpg";
import portfolio5 from "@/images/portfolio/IMG-20250627-WA0083.jpg";
import portfolio6 from "@/images/portfolio/IMG-20250627-WA0084.jpg";
import portfolio7 from "@/images/portfolio/IMG-20250627-WA0085.jpg";
import portfolio8 from "@/images/portfolio/IMG-20250627-WA0086.jpg";
import portfolio9 from "@/images/portfolio/IMG-20250627-WA0087.jpg";
import portfolio10 from "@/images/portfolio/IMG-20250627-WA0088.jpg";
import portfolio11 from "@/images/portfolio/IMG-20250627-WA0089.jpg";
import portfolio12 from "@/images/portfolio/IMG-20250627-WA0090.jpg";
import portfolio13 from "@/images/portfolio/IMG-20250627-WA0091.jpg";
import portfolio14 from "@/images/portfolio/IMG-20250627-WA0092.jpg";
import portfolio15 from "@/images/portfolio/IMG-20250627-WA0093.jpg";
import portfolio16 from "@/images/portfolio/IMG-20250627-WA0094.jpg";
import portfolio17 from "@/images/portfolio/IMG-20250627-WA0095.jpg";
import portfolio18 from "@/images/portfolio/IMG-20250627-WA0096.jpg";
import portfolio19 from "@/images/portfolio/IMG-20250627-WA0097.jpg";
import portfolio20 from "@/images/portfolio/IMG-20250627-WA0099.jpg";
import portfolio21 from "@/images/portfolio/IMG-20250627-WA0100.jpg";
import portfolio22 from "@/images/portfolio/IMG-20250627-WA0101.jpg";
import portfolio23 from "@/images/portfolio/IMG-20250627-WA0102.jpg";

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(4);
  
  // Portfolio images array
  const portfolioImages = [
    portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6,
    portfolio7, portfolio8, portfolio9, portfolio10, portfolio11, portfolio12,
    portfolio13, portfolio14, portfolio15, portfolio16, portfolio17, portfolio18,
    portfolio19, portfolio20, portfolio21, portfolio22, portfolio23
  ];

  // Calculate slides for responsive display
  const getImagesPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 5; // Large screens: 5 images
      if (window.innerWidth >= 768) return 4;  // Medium screens: 4 images
      if (window.innerWidth >= 640) return 3;  // Small screens: 3 images
      return 2; // Mobile: 2 images
    }
    return 4; // Default
  };

  const totalSlides = Math.ceil(portfolioImages.length / imagesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Handle responsive updates
  useEffect(() => {
    const handleResize = () => {
      const newImagesPerSlide = getImagesPerSlide();
      setImagesPerSlide(newImagesPerSlide);
      // Reset to first slide when layout changes
      setCurrentSlide(0);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const projects = [
    {
      icon: Book,
      title: "AI-Powered Dictionary",
      description: "A web-based dictionary application with voice search capabilities built using Python and Flask.",
      technologies: ["Python", "Flask", "API"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Car,
      title: "Park Management System",
      description: "A complete MERN stack application for managing parking spaces with driver registration and verification.",
      technologies: ["MongoDB", "React", "Node.js"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: BarChart3,
      title: "Survey Form Web App",
      description: "Interactive survey forms with various input types and data validation for collecting user feedback.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: MessageSquare,
      title: "Telegram Bot Automation",
      description: "Automated Telegram bot for customer service and game interactions using JavaScript and APIs.",
      technologies: ["JavaScript", "Telegram API", "Node.js"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: PieChart,
      title: "Business Analytics Dashboard",
      description: "Interactive Power BI dashboard analyzing Nigerian market data with comprehensive visualizations.",
      technologies: ["Excel", "Power BI", "SQL"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Prototype",
      description: "Complete UI/UX design for a Nigerian e-commerce mobile app created in Figma with interactive prototypes.",
      technologies: ["Figma", "UI Design", "Prototyping"],
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-gray-800 font-semibold text-sm mb-8 border border-primary/20 backdrop-blur-sm">
            <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-sm">🏆</span>
            </div>
            Student Achievements
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Amazing <span className="text-gradient">Student Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See the incredible projects our students have built during their 90-day journey with us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="group bg-gradient-to-br from-white to-gray-50/30 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-secondary/30 rounded-3xl overflow-hidden hover:-translate-y-3 hover:rotate-1">
                <CardContent className="p-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-3xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 shadow-lg border-2 border-white`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-700 mb-8 leading-relaxed font-medium">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="inline-flex items-center px-3 py-1.5 rounded-full border-2 border-gray-300 text-gray-700 font-medium text-sm hover:border-primary hover:text-primary transition-all duration-300">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Portfolio Gallery Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 text-gray-800 font-semibold text-sm mb-8 border border-primary/20 backdrop-blur-sm">
              <div className="w-6 h-6 bg-gradient-to-r from-primary to-yellow-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-black text-sm">📸</span>
              </div>
              Student Portfolio
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Our <span className="text-gradient">Students in Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See our students learning, creating, and building their future in tech
            </p>
          </div>

          {/* Portfolio Slider */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-4">
                      {portfolioImages
                        .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                        .map((image, index) => (
                          <div
                            key={index}
                            className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white"
                          >
                            <img
                              src={image}
                              alt={`Student portfolio ${slideIndex * imagesPerSlide + index + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-primary/20 hover:border-primary rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-primary/20 hover:border-primary rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary shadow-lg'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Your Own Success Story?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our next cohort and create amazing projects that showcase your skills to future employers.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("enroll");
                if (element) {
                  const headerHeight = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="gradient-primary text-black px-8 py-4 rounded-2xl font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

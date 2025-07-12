import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function Hero() {
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

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Universal Modern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      
      {/* Modern Geometric Patterns for Mobile & Desktop */}
      <div className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-primary/15 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-black/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 left-4 sm:left-20 w-14 h-14 sm:w-20 sm:h-20 bg-primary/10 rounded-full blur-xl"></div>
      
      {/* Mobile-specific modern accents */}
      <div className="absolute top-32 right-12 w-8 h-8 bg-primary/20 rounded-full animate-pulse sm:hidden"></div>
      <div className="absolute bottom-32 right-8 w-6 h-6 bg-black/10 rounded-full animate-bounce delay-300 sm:hidden"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-20 sm:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-center lg:text-left">
            {/* Modern Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-yellow-400/20 text-primary font-semibold text-sm mb-8 sm:mb-10 border border-primary/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3 animate-pulse"></div>
              <span className="hidden sm:inline">Transform Your Career in 90 Days</span>
              <span className="sm:hidden">90 Days to Career</span>
            </div>
            
            {/* Enhanced Typography */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-10 text-white tracking-tight">
              Master
              <span className="text-primary block relative">
                Tech Skills
                <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-lg -z-10"></div>
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white/70 block mt-2">
                That Actually Matter
              </span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-xl sm:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl font-light">
              Build real projects, learn from industry experts, and launch your career with confidence.
            </p>
            
            {/* Modern Button Group */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
              <Button
                onClick={() => scrollToSection("courses")}
                size="lg"
                className="group bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-10 py-5 text-lg font-bold rounded-2xl transition-all duration-500 transform hover:scale-[1.02] shadow-lg"
              >
                <span className="flex items-center">
                  Explore Courses
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="group bg-gradient-to-r from-primary to-yellow-500 hover:from-yellow-500 hover:to-primary text-black border-2 border-primary hover:border-yellow-500 px-10 py-5 text-lg font-semibold rounded-2xl transition-all duration-500 transform hover:scale-[1.02] shadow-lg"
              >
                Get Started
              </Button>
            </div>
            

          </div>
          
          <div className="relative hidden lg:block">
            {/* Main Image Container */}
            <div className="relative z-10 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80" 
                alt="Students collaborating on tech projects in modern classroom" 
                className="relative rounded-3xl shadow-2xl w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent rounded-3xl"></div>
            </div>
            
            {/* Modern Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-glow-lg border border-primary/30 z-20 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-7 h-7 text-black" />
                </div>
                <div>
                  <div className="font-black text-black text-lg">Certified</div>
                  <div className="text-sm text-black/60 font-medium">Industry Ready</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-black/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10 z-20 animate-float-delayed">
              <div className="text-4xl font-black text-primary mb-2">100+</div>
              <div className="text-sm text-white/80 font-semibold uppercase tracking-wider">Students Trained</div>
            </div>
            
            <div className="absolute top-1/2 -left-4 bg-gradient-to-br from-primary/90 to-yellow-400/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl z-20 animate-pulse">
              <div className="text-lg font-black text-black">Practical</div>
              <div className="text-xs text-black/70 font-bold">Learning</div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 left-1/2 w-6 h-6 bg-primary rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 right-1/4 w-4 h-4 bg-black/20 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

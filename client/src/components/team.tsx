import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, User, Award, BookOpen, Code, TrendingUp, Star, CheckCircle } from "lucide-react";

export function Team() {
  const team = [
    {
      name: "Idris Akande Rasaq",
      role: "Academic Coordinator & Lead Instructor",
      description: "Computer Science graduate from University of Ibadan with expertise in MERN Stack, Python, React, and Digital Marketing.",
      skills: ["Tech Educator", "Software Engineer 🚀", "Data Analyst", "Creative Designer ⚡️", ".NET Specialist"],
      experience: "5+ Years",
      students: "100+",
      rating: "4.9"
    }
  ];



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
    <section id="team" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-yellow-400/20 text-primary font-semibold text-sm mb-8 border border-primary/30 backdrop-blur-sm">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-2">
              <Users className="w-3 h-3 text-white" />
            </div>
            Expert Instructors
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight">
            Meet Our
            <br className="sm:hidden" />
            <span className="text-gradient"> Expert Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Learn from passionate professionals with real industry experience and a proven track record
            <br className="hidden sm:block" />
            of transforming beginners into confident tech professionals.
          </p>
        </div>



        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Idris Card */}
          {team.map((member, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-blue-500/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 hover:border-primary/50 rounded-[2rem] overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 h-full">
                <div className="p-6 sm:p-8 text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-primary to-yellow-400 rounded-full mx-auto flex items-center justify-center ring-4 ring-white/20 shadow-xl">
                      <User className="w-12 h-12 sm:w-16 sm:h-16 text-black" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{member.name}</h3>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-primary font-semibold text-xs sm:text-sm mb-4 backdrop-blur-sm">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary to-yellow-400 rounded-full flex items-center justify-center mr-2">
                      <Code className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" />
                    </div>
                    {member.role}
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{member.description}</p>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          className="bg-white/10 text-white border-white/20 rounded-lg px-3 py-1.5 text-xs backdrop-blur-sm hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>



                  {/* CTA */}
                  <button 
                    onClick={() => scrollToSection("enroll")}
                    className="w-full bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-black font-bold py-2.5 px-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 text-sm"
                  >
                    Start Learning Today
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Course Instructors Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 hover:border-primary/50 rounded-[2rem] overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 h-full">
              <div className="p-6 sm:p-8 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-primary to-yellow-400 rounded-full mx-auto flex items-center justify-center ring-4 ring-white/20 shadow-xl">
                    <Users className="w-12 h-12 sm:w-16 sm:h-16 text-black" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-bold text-black">+</span>
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">Course Instructors</h3>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-primary font-semibold text-xs sm:text-sm mb-4 backdrop-blur-sm">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary to-yellow-400 rounded-full flex items-center justify-center mr-2">
                    <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" />
                  </div>
                  Industry Experts
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  UI/UX designers, cybersecurity specialists, and freelancing experts who share 
                  real-world insights during project weeks and masterclass sessions.
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <Badge className="bg-white/10 text-white border-white/20 rounded-lg px-3 py-1.5 text-xs backdrop-blur-sm hover:bg-primary/20 hover:border-primary/40 transition-all duration-300">UI/UX Design</Badge>
                  <Badge className="bg-white/10 text-white border-white/20 rounded-lg px-3 py-1.5 text-xs backdrop-blur-sm hover:bg-primary/20 hover:border-primary/40 transition-all duration-300">Web Development</Badge>
                  <Badge className="bg-white/10 text-white border-white/20 rounded-lg px-3 py-1.5 text-xs backdrop-blur-sm hover:bg-primary/20 hover:border-primary/40 transition-all duration-300">Data Analysis</Badge>
                  <Badge className="bg-white/10 text-white border-white/20 rounded-lg px-3 py-1.5 text-xs backdrop-blur-sm hover:bg-primary/20 hover:border-primary/40 transition-all duration-300">Creative Design</Badge>
                  <Badge className="bg-white/10 text-white border-white/20 rounded-lg px-3 py-1.5 text-xs backdrop-blur-sm hover:bg-primary/20 hover:border-primary/40 transition-all duration-300">Programming</Badge>
                </div>

                <button 
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-black font-bold py-2.5 px-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 text-sm"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
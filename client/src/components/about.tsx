import { Award, HandMetal, Users, Zap, Target, Eye } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver high-impact, industry-relevant training that prepares learners to solve real-world problems with confidence.",
      color: "text-primary bg-primary/10"
    },
    {
      icon: HandMetal,
      title: "Hands-On Learning",
      description: "We believe skills are best acquired by doing. Our programs are centered around practical projects, simulations, and real-life tech challenges.",
      color: "text-black bg-black/5"
    },
    {
      icon: Zap,
      title: "Empowerment",
      description: "We equip learners with job-ready tech skills, career support, and entrepreneurial mindset to succeed beyond the classroom.",
      color: "text-primary bg-primary/10"
    },
    {
      icon: Users,
      title: "Community and Mentorship",
      description: "We promote collaboration, peer-to-peer learning, and access to mentors who guide learners throughout their journey.",
      color: "text-black bg-black/5"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-black font-semibold text-sm mb-8 border border-primary/20">
            <span className="mr-2">✨</span>
            Established April 2023 • Ibadan, Nigeria
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-6 sm:mb-8 leading-tight">
            About
            <br className="sm:hidden" />
            <span className="text-gradient"> Practicode Academy</span>
          </h2>
          <p className="text-lg sm:text-xl text-black/70 max-w-4xl mx-auto leading-relaxed">
            We bridge the gap between theoretical education and real-world tech skills, 
            <br className="hidden sm:block" />
            empowering African youths to become the next generation of tech leaders.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-20 lg:mb-24">
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              <img 
                src="/past.jpg" 
                alt="Past graduation ceremony at Practicode Academy" 
                className="rounded-[2rem] shadow-2xl w-full h-auto relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80";
                  e.currentTarget.alt = "Students in tech training program";
                }}
              />
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-2xl blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-500/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
          
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-[1.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-[1.5rem] shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-yellow-400 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h4>
                <p className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base">
                  To empower students with practical, industry-relevant tech skills that make them 
                  job-ready, freelance-capable, and entrepreneurially empowered.
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[1.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-[1.5rem] shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h4>
                <p className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base">
                  To become a practical and impactful tech talent pipeline, 
                  transforming education through hands-on learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-gray-800 font-semibold text-sm mb-8 border border-primary/20 backdrop-blur-sm">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-sm">💎</span>
            </div>
            Our Core Values
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Principles That Guide Us</h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            These principles guide everything we do and shape the learning experience for our students, 
            creating an environment where innovation and growth thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="group relative">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-blue-500/10 rounded-[1.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-[1.5rem] shadow-lg border border-gray-200/50 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 shadow-lg border-2 border-white">
                    <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-lg sm:text-xl text-center">{value.title}</h4>
                  <p className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base text-center">{value.description}</p>
                  
                  {/* Bottom accent line */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="w-8 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full mx-auto group-hover:w-12 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

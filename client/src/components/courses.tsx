import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, BarChart3, Palette, UserCheck, Check, ChartScatter, Users, Award } from "lucide-react";

export function Courses() {
  const courses = [
    {
      icon: Code,
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript, and React to build responsive websites",
      skills: ["HTML5 & CSS3", "JavaScript & React", "Git & GitHub"],
      price: "₦70,000",
      color: "text-primary bg-primary/10"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Master Excel, Power BI, and SQL for data-driven insights",
      skills: ["Microsoft Excel", "Power BI Dashboards", "SQL Basics"],
      price: "₦55,000",
      color: "text-black bg-black/5"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create beautiful, user-friendly interfaces with Figma",
      skills: ["Figma Mastery", "Design Principles", "Wireframes & Prototypes"],
      price: "₦70,000",
      color: "text-primary bg-primary/10"
    },
    {
      icon: UserCheck,
      title: "Virtual Assistant",
      description: "Become a professional VA with admin and client management skills",
      skills: ["Google Workspace", "Canva Design", "Client Management"],
      price: "₦50,000",
      color: "text-black bg-black/5"
    }
  ];

  const features = [
    {
      icon: ChartScatter,
      title: "Project-Based Learning",
      description: "Build real projects that demonstrate your skills to employers",
      color: "text-primary bg-primary/10"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with maximum 20 students per cohort",
      color: "text-white bg-white/10"
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Receive recognized certificates after completing your projects",
      color: "text-primary bg-primary/10"
    }
  ];

  const scrollToEnrollment = () => {
    const element = document.getElementById("enroll");
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
    <section id="courses" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-yellow-400/20 text-primary font-semibold text-sm mb-8 border border-primary/30 backdrop-blur-sm">
            <span className="mr-2">🎯</span>
            4 Career-Focused Specializations
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Choose Your
            <br />
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
              Tech Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Transform your career with our intensive 90-day programs designed by industry experts.
            <br />
            <span className="text-gray-400 text-lg">From beginner to job-ready professional.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <div key={index} className="group relative">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <Card className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 backdrop-blur-xl border border-gray-700/50 hover:border-primary/50 rounded-[2rem] overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
                  <CardContent className="p-0">
                    {/* Header Section with Icon and Price */}
                    <div className="relative p-8 pb-6">
                      {/* Subtle background pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[2rem] opacity-50"></div>
                      
                      <div className="relative flex items-start justify-between">
                        <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg border-2 border-white/10">
                          <IconComponent className="w-8 h-8 text-white" />
                          {/* Icon glow effect */}
                          <div className="absolute inset-0 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-all duration-500 bg-gradient-to-br from-blue-500/40 to-purple-600/40"></div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-3xl font-black bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
                            {course.price}
                          </div>
                          <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                            90 Days Intensive
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="px-8 pb-8">
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-gray-300 mb-8 leading-relaxed text-base font-light">
                        {course.description}
                      </p>
                      
                      {/* Skills List */}
                      <div className="space-y-3 mb-10">
                        {course.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center text-gray-200 text-sm sm:text-base">
                            <div className="w-2 h-2 rounded-full bg-primary mr-4 flex-shrink-0 shadow-sm"></div>
                            <span className="font-semibold tracking-wide">{skill}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Button */}
                      <Button
                        onClick={scrollToEnrollment}
                        className="w-full bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-black font-black py-5 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:scale-[1.02] group-hover:shadow-xl text-lg tracking-wide"
                      >
                        <span className="flex items-center justify-center gap-3">
                          Begin Journey
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Course Features - Modern Layout */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-gray-900/50 to-gray-800/30 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent rounded-3xl"></div>
          
          <div className="relative py-20 px-6 sm:px-8 lg:px-12">
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6 border border-primary/30">
                ⭐ Why We're Different
              </div>
              <h3 className="text-4xl sm:text-5xl font-black text-white mb-6">
                Why Choose Our <span className="text-gradient">Programs?</span>
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Experience the difference of practical, hands-on tech education designed for real-world success.
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="group relative">
                    {/* Card */}
                    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-600/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full">
                      {/* Icon Container */}
                      <div className="relative mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg border-2 border-white/10">
                          <IconComponent className="w-12 h-12 text-white" />
                        </div>
                        {/* Floating indicator */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
                          <span className="text-xs font-bold text-black">✓</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed font-medium">
                        {feature.description}
                      </p>
                      
                      {/* Bottom accent */}
                      <div className="mt-6 pt-6 border-t border-gray-600/30">
                        <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full group-hover:w-20 transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

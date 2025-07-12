import { Rocket, MapPin, DollarSign, Clock, Briefcase, Heart } from "lucide-react";

export function WhyChooseUs() {
  const leftFeatures = [
    {
      icon: Rocket,
      title: "Beginner-Friendly",
      description: "No prior coding experience required. We start from the basics and build up progressively.",
      color: "text-primary bg-primary/10"
    },
    {
      icon: MapPin,
      title: "Physical Classes",
      description: "Learn in our modern facility in Ibadan with direct instructor interaction and peer collaboration.",
      color: "text-black bg-black/5"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Quality education at student-friendly prices with flexible payment plans available.",
      color: "text-primary bg-primary/10"
    }
  ];

  const rightFeatures = [
    {
      icon: Clock,
      title: "3-Month Intensive",
      description: "Fast-track your learning with our intensive 90-day programs designed for maximum skill acquisition.",
      color: "text-black bg-black/5"
    },
    {
      icon: Briefcase,
      title: "Job-Ready Skills",
      description: "Graduate with a portfolio of real projects and industry-relevant skills that employers want.",
      color: "text-primary bg-primary/10"
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Join a supportive community of learners and alumni who help each other succeed.",
      color: "text-black bg-black/5"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-gray-800 font-semibold text-sm mb-8 border border-primary/20 backdrop-blur-sm">
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-sm">⭐</span>
            </div>
            Why We're Different
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Experience the <span className="text-gradient">Practicode Advantage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes our approach to tech education unique and effective
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-8">
            {leftFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-lg border-2 border-white">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80" 
                alt="Modern tech workspace with coding environment and multiple monitors" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform rotate-2 scale-105 -z-10"></div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 z-20">
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-1">3</div>
                <div className="text-sm text-gray-600 font-medium">Months to Career</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {rightFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-lg border-2 border-white">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

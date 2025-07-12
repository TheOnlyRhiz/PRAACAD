import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Enrollment } from "@/components/enrollment";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can register for the training?",
      answer: "This training is open to IT students (including SIWES/Industrial Training students), undergraduates, graduates, NYSC corps members, and anyone interested in learning tech skills."
    },
    {
      question: "How often are classes held?",
      answer: "Classes hold twice a week, allowing you to balance your learning with other academic or personal responsibilities."
    },
    {
      question: "What courses are available?",
      answer: "We offer courses such as: Data Analysis (Excel, SQL, Power BI, Python), Web Design (HTML, CSS, JavaScript), UI/UX Design with Figma, Python Programming, and more (based on current schedule)."
    },
    {
      question: "Where are the classes held?",
      answer: "Depending on the course: Some are physical classes, held at our designated learning center. Others are virtual/online, supported with mentorship and resources."
    },
    {
      question: "Can I take more than one course?",
      answer: "Yes, you can take multiple courses if you can manage the schedule. Kindly speak with a coordinator to help plan your timetable."
    },
    {
      question: "When does the training start?",
      answer: "Training begins after registration closes. You'll be notified of your start date after payment is confirmed."
    },
    {
      question: "Is payment compulsory before classes start?",
      answer: "Yes. All payments must be made before resumption. No student will be allowed into class without confirming payment."
    },
    {
      question: "What payment methods are accepted?",
      answer: "You can pay via: Bank transfer, Mobile banking, In-person (if available). Payment details will be shared upon registration."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes. A certificate of completion is issued at the end of the program, provided you complete the course requirements and final project."
    },
    {
      question: "Do I need a laptop?",
      answer: "Yes, students are expected to come with a laptop to participate fully, especially in physical or hands-on sessions."
    },
    {
      question: "Will there be mentorship or project support?",
      answer: "Yes. Each course includes project-based learning and access to instructors or mentors for guidance."
    },
    {
      question: "What if I miss a class?",
      answer: "If you miss a class, you can catch up with the class notes, recordings (where available), or request a brief recap from your mentor."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-gray-800 font-semibold text-sm mb-8 border border-primary/20 backdrop-blur-sm">
            <span className="mr-2">❓</span>
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Everything You <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">Need to Know</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our IT training program
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200/50 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-3xl p-8 border border-primary/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us directly and we'll be happy to help you with any additional questions
            </p>
            <a
              href="mailto:practicodeacademy@gmail.com"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-yellow-500 text-black font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ITPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* IT Form Section */}
      <section className="pt-24 pb-16 sm:pb-24 lg:pb-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-gray-800 font-semibold text-sm mb-8 border border-primary/20 backdrop-blur-sm">
              <span className="mr-2">💻</span>
              IT Program Application
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
              Join Our
              <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent"> IT Program</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Take the first step towards your IT career. Fill out the form below to apply for our comprehensive IT training program.
              <br className="hidden sm:block" />
              We'll review your application and get back to you within 24 hours.
            </p>
          </div>

          {/* Embedded Google Form */}
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-blue-500/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-white/95 backdrop-blur-sm rounded-[2rem] shadow-2xl border border-gray-200/50 overflow-hidden">
                <div className="p-2">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdntx7ulawJddJXECYuW6y9WERPjphi200Fa4lybIDoNkO4fw/viewform?embedded=true" 
                    width="100%" 
                    height="800" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    className="rounded-xl"
                    title="IT Program Application Form"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQsSection />

      {/* Enrollment Section */}
      <Enrollment />
      
      <Footer />
    </div>
  );
}
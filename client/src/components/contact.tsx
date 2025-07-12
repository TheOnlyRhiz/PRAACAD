import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiInstagram, SiWhatsapp, SiLinkedin } from "react-icons/si";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We will get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Message Failed",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: ["7b, Oba Olagbegi Street,", "Old Bodija, Ibadan, Oyo State"]
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["+2347072778657"]
    },
    {
      icon: Mail,
      title: "Email",
      content: ["practicodeacademy@gmail.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      content: ["Monday - Saturday", "9:00 AM - 6:00 PM"]
    }
  ];

  const socialLinks = [
    {
      icon: SiInstagram,
      href: "https://instagram.com/practicode_academy",
      color: "text-pink-600 bg-pink-100 hover:bg-pink-200"
    },
    {
      icon: SiWhatsapp,
      href: "https://wa.me/2349030578667?text=Hello%20Practicode%20Academy,%20I%20would%20like%20to%20inquire%20about%20your%20programs.",
      color: "text-green-600 bg-green-100 hover:bg-green-200"
    },
    {
      icon: SiLinkedin,
      href: "#",
      color: "text-blue-600 bg-blue-100 hover:bg-blue-200"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-gray-800 font-semibold text-sm mb-8 border border-primary/20 backdrop-blur-sm">
            <span className="mr-2">📞</span>
            Get In Touch With Our Team
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
            Let's Start Your
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent"> Tech Journey</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Have questions about our programs? Ready to enroll? We're here to help you every step of the way.
            <br className="hidden sm:block" />
            Contact us and let's discuss your future in tech.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="sticky top-8">
              <div className="relative group">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-blue-500/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-[2rem] shadow-xl border border-gray-200/50 p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-white">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{info.title}</p>
                            {info.content.map((line, lineIndex) => (
                              <p key={lineIndex} className="text-gray-600 text-sm">{line}</p>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200/50">
                    <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">Connect With Us</h4>
                    <div className="flex space-x-3">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:from-primary hover:to-yellow-400 hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                          >
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quick Response Promise */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-xl border border-primary/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Quick Response</p>
                        <p className="text-xs text-gray-600">We reply within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="relative group">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-blue-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-white/95 backdrop-blur-sm rounded-[2rem] shadow-2xl border border-gray-200/50 overflow-hidden">
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Send us a Message</h3>
                    <p className="text-gray-600">We'd love to hear from you. Fill out the form and we'll get back to you soon.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-900 font-semibold text-sm">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="h-12 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-900 font-semibold text-sm">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="h-12 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-900 font-semibold text-sm">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-12 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-900 font-semibold text-sm">What can we help you with? *</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300">
                          <SelectValue placeholder="Choose a topic" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-2 border-gray-200">
                          <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                          <SelectItem value="course-information">Course Information</SelectItem>
                          <SelectItem value="enrollment-question">Enrollment Question</SelectItem>
                          <SelectItem value="technical-support">Technical Support</SelectItem>
                          <SelectItem value="partnership-opportunity">Partnership Opportunity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-900 font-semibold text-sm">Your Message *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us how we can help you achieve your tech goals..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                        required
                      />
                    </div>
                    
                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        className="group w-full bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-black font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 text-lg"
                        disabled={contactMutation.isPending}
                      >
                        <span className="flex items-center justify-center gap-2">
                          {contactMutation.isPending ? "Sending Message..." : "Send Message"}
                          {!contactMutation.isPending && (
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          )}
                        </span>
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

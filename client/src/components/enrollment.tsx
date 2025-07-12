import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Calendar, Clock, Users, MapPin, CreditCard } from "lucide-react";

interface EnrollmentFormData {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  experienceLevel: string;
}

export function Enrollment() {
  const [formData, setFormData] = useState<EnrollmentFormData>({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    experienceLevel: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const enrollmentMutation = useMutation({
    mutationFn: async (data: EnrollmentFormData) => {
      return await apiRequest("POST", "/api/enrollments", data);
    },
    onSuccess: () => {
      toast({
        title: "Enrollment Submitted!",
        description: "Thank you for your interest! We will contact you soon to confirm your enrollment.",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        experienceLevel: ""
      });
      queryClient.invalidateQueries({ queryKey: ["/api/enrollments"] });
    },
    onError: (error: any) => {
      toast({
        title: "Enrollment Failed",
        description: error.message || "Failed to submit enrollment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.course || !formData.experienceLevel) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    enrollmentMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof EnrollmentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const enrollmentInfo = [
    {
      icon: Calendar,
      label: "Next Cohort:",
      value: "Starting February 2024"
    },
    {
      icon: Clock,
      label: "Duration:",
      value: "3 months intensive"
    },
    {
      icon: Users,
      label: "Class Size:",
      value: "Maximum 20 students"
    },
    {
      icon: MapPin,
      label: "Location:",
      value: "Old Bodija, Ibadan"
    },
    {
      icon: CreditCard,
      label: "Payment:",
      value: "Flexible payment plans available"
    }
  ];

  return (
    <section id="enroll" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white mb-16 sm:mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-white font-semibold text-sm mb-8 border border-primary/20 backdrop-blur-sm">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-sm">🚀</span>
            </div>
            Transform Your Future Today
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
            Ready to Start Your
            <br />
            <span className="text-primary">Tech Journey?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Join our next cohort and transform your career in just 90 days with hands-on training,
            <br className="hidden sm:block" />
            expert mentorship, and real-world projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Enrollment Info Sidebar */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-600/30 rounded-[2rem] p-6 sm:p-8 mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Program Details</h3>
                <div className="space-y-4">
                  {enrollmentInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-gray-300 text-sm font-medium">{info.label}</p>
                          <p className="text-white font-semibold text-sm">{info.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              

            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="relative group">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-yellow-400/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-white/95 backdrop-blur-sm rounded-[2rem] shadow-2xl border border-gray-200/50 overflow-hidden">
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Start Your Application</h3>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-gray-900 font-semibold text-sm">Full Name *</Label>
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          className="h-12 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          required
                        />
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
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-900 font-semibold text-sm">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+234 XXX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-12 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="course" className="text-gray-900 font-semibold text-sm">Choose Your Track *</Label>
                      <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                        <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300">
                          <SelectValue placeholder="Select your preferred course" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-2 border-gray-200">
                          <SelectItem value="web-development">Web Development (₦70,000)</SelectItem>
                          <SelectItem value="data-analytics">Data Analytics (₦55,000)</SelectItem>
                          <SelectItem value="ui-ux-design">UI/UX Design (₦70,000)</SelectItem>
                          <SelectItem value="virtual-assistant">Virtual Assistant (₦50,000)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-gray-900 font-semibold text-sm">Experience Level *</Label>
                      <Select value={formData.experienceLevel} onValueChange={(value) => handleInputChange("experienceLevel", value)}>
                        <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300">
                          <SelectValue placeholder="How much experience do you have?" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-2 border-gray-200">
                          <SelectItem value="complete-beginner">Complete Beginner</SelectItem>
                          <SelectItem value="some-basic-knowledge">Some Basic Knowledge</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        className="group w-full bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-black font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 text-lg"
                        disabled={enrollmentMutation.isPending}
                      >
                        <span className="flex items-center justify-center gap-2">
                          {enrollmentMutation.isPending ? "Submitting Application..." : "Submit Application"}
                          {!enrollmentMutation.isPending && (
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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

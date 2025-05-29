import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Enroll() {
  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    parentName: "",
    phone: "",
    email: "",
    program: "",
    notes: ""
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.childName || !formData.parentName || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Enrollment Submitted!",
      description: "Thank you for your enrollment request! We will contact you within 24 hours."
    });

    // Reset form
    setFormData({
      childName: "",
      age: "",
      parentName: "",
      phone: "",
      email: "",
      program: "",
      notes: ""
    });
  };

  const benefits = [
    {
      icon: "fas fa-gift",
      title: "Welcome Package",
      description: "School supplies, branded items, and orientation materials"
    },
    {
      icon: "fas fa-calendar-check",
      title: "Flexible Schedule",
      description: "Full-day, half-day, and flexible timing options"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Parent App",
      description: "Daily updates, photos, and direct communication with teachers"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Health & Safety",
      description: "Regular health checks, sanitization, and safety protocols"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="enroll" className="py-20 gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-16 left-10 w-20 h-20 bg-white/10 blob-shape"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-fredoka text-white mb-4 text-shadow">Ready to Join Our Family?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Take the first step towards your child's bright future. Enroll today and watch them bloom!</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Enrollment Form */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-6">Enrollment Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="childName">Child's Name *</Label>
                    <Input
                      id="childName"
                      value={formData.childName}
                      onChange={(e) => handleInputChange("childName", e.target.value)}
                      placeholder="Enter child's name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age *</Label>
                    <Select value={formData.age} onValueChange={(value) => handleInputChange("age", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-24">18-24 months</SelectItem>
                        <SelectItem value="2-3">2-3 years</SelectItem>
                        <SelectItem value="3-4">3-4 years</SelectItem>
                        <SelectItem value="4-5">4-5 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parentName">Parent's Name *</Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => handleInputChange("parentName", e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="program">Preferred Program *</Label>
                  <Select value={formData.program} onValueChange={(value) => handleInputChange("program", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="toddler">Toddler Care (18 months - 3 years)</SelectItem>
                      <SelectItem value="preschool">Preschool (3 - 4 years)</SelectItem>
                      <SelectItem value="pre-k">Pre-Kindergarten (4 - 5 years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Any special requirements or questions?"
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-coral to-turquoise hover:from-turquoise hover:to-coral text-white py-6 text-lg">
                  <i className="fas fa-paper-plane mr-2"></i> Submit Enrollment
                </Button>
              </form>
            </motion.div>

            {/* Enrollment Benefits */}
            <motion.div 
              className="text-white"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-poppins font-semibold mb-8">What You Get When You Enroll</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${benefit.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-white/80">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm"
                variants={itemVariants}
              >
                <h4 className="font-semibold mb-4">Limited Time Offer!</h4>
                <p className="text-white/90 mb-4">Enroll now and get <span className="text-sunny font-bold">50% off</span> the registration fee plus a free Rainbow Kids backpack!</p>
                <p className="text-sm text-white/70">*Offer valid until end of this month</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

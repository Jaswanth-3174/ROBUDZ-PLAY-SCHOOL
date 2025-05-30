import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      content: "62 Sriram Nagar, Amman Nagar Soorath Amman Temple Backside, Nemilicheri, Tamil Nadu 602024",
      color: "coral"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      content: "(+91) 01234 - 56789",
      color: "turquoise"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "hello@rainbowkids.com",
      color: "sky"
    },
    {
      icon: "fas fa-clock",
      title: "Hours",
      content: "Monday - Friday: 7:00 AM - 6:00 PM\nSaturday: 8:00 AM - 4:00 PM\nSunday: Closed",
      color: "mint"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook", color: "coral", href: "#" },
    { icon: "fab fa-instagram", color: "turquoise", href: "#" },
    { icon: "fab fa-twitter", color: "sky", href: "#" },
    { icon: "fab fa-youtube", color: "mint", href: "#" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We will get back to you soon."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-fredoka text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-8">Visit Us Today</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className={`w-12 h-12 bg-${info.color}/20 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <i className={`${info.icon} text-${info.color}`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            {/* Map Placeholder */}
<motion.div 
  className="mt-8 bg-gray-100 rounded-2xl p-8 text-center"
  variants={itemVariants}
>
  <i className="fas fa-map text-4xl text-gray-400 mb-4"></i>
  <h4 className="font-semibold text-foreground mb-2">Interactive Map</h4>
  <p className="text-muted-foreground mb-4">Get directions to our location</p>

  <a 
    href="https://maps.app.goo.gl/ntn9QiSmQXMSjR6g8" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Button className="bg-gradient-to-r from-coral to-turquoise hover:from-turquoise hover:to-coral text-white">
      <i className="fas fa-directions mr-2"></i> Get Directions
    </Button>
  </a>
</motion.div>


            {/* Social Media */}
            <motion.div className="mt-8" variants={itemVariants}>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-${social.color}/20 rounded-full flex items-center justify-center hover:bg-${social.color} hover:text-white transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
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
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enrollment">Enrollment Inquiry</SelectItem>
                    <SelectItem value="programs">Program Information</SelectItem>
                    <SelectItem value="facilities">Facility Tour</SelectItem>
                    <SelectItem value="general">General Questions</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-coral to-turquoise hover:from-turquoise hover:to-coral text-white py-6 text-lg">
                <i className="fas fa-paper-plane mr-2"></i> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

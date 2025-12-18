import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HelpCircle, AlertTriangle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "account", label: "Account Issues" },
    { value: "feedback", label: "Feedback & Suggestions" },
    { value: "report", label: "Report a Problem" },
    { value: "partnership", label: "Partnership Inquiry" },
    { value: "other", label: "Other" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@kaverammafantasy.com",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: "C/O S K MOHAN, MEKOOR, SIDDAPURA",
      subtext: "Pollibetta, Virajpet, Kodagu - 571215, Karnataka"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Saturday",
      subtext: "9:00 AM - 6:00 PM IST"
    }
  ];

  const quickLinks = [
    { icon: HelpCircle, title: "FAQ", description: "Find answers to common questions", href: "/faq" },
    { icon: MessageSquare, title: "How to Play", description: "Learn the basics of fantasy cricket", href: "/how-to-play" },
    { icon: AlertTriangle, title: "Report Issue", description: "Report bugs or violations", href: "#report" }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center p-8"
        >
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Message Sent!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for contacting us. We've received your message and will get back to you within 24 hours.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/">
              <Button variant="outline">Go Home</Button>
            </Link>
            <Button onClick={() => setIsSubmitted(false)}>Send Another</Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border/50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg">KAVERAMMA</div>
                <div className="text-xs text-muted-foreground -mt-0.5">Fantasy Cricket</div>
              </div>
            </a>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/login"><Button variant="ghost">Login</Button></Link>
            <Link href="/register"><Button className="bg-gradient-to-r from-primary to-primary/90 text-white">Get Started</Button></Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20">
          <div className="container">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-border/50 rounded-full shadow-sm mb-6">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">We're Here to Help</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground">
                Have questions, feedback, or need support? We'd love to hear from you. 
                Our team is ready to assist you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="p-5 bg-slate-50 rounded-xl text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-sm font-medium text-foreground">{info.details}</p>
                    <p className="text-xs text-muted-foreground">{info.subtext}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 bg-slate-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Quick Links */}
                <div className="lg:col-span-1">
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    {quickLinks.map((link, i) => (
                      <Link key={i} href={link.href}>
                        <a className="flex items-start gap-3 p-3 bg-white rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <link.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{link.title}</h4>
                            <p className="text-xs text-muted-foreground">{link.description}</p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>

                  {/* Company Info */}
                  <div className="mt-6 p-4 bg-white rounded-xl border border-border/50">
                    <h4 className="font-semibold text-sm mb-2">Company Information</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong>KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</strong><br />
                      CIN: U10792KA2024PTC186508<br />
                      PAN: AAKCK9076B<br />
                      TAN: BLRK29132F
                    </p>
                  </div>
                </div>

                {/* Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl p-6 border border-border/50">
                    <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1.5">Category *</label>
                          <select
                            required
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                          >
                            <option value="">Select a category</option>
                            {categories.map((cat) => (
                              <option key={cat.value} value={cat.value}>{cat.label}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5">Subject *</label>
                          <input
                            type="text"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="Brief subject"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5">Message *</label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                          placeholder="Please describe your inquiry in detail..."
                        />
                      </div>

                      <div className="flex items-start gap-2">
                        <input type="checkbox" id="consent" required className="mt-1" />
                        <label htmlFor="consent" className="text-xs text-muted-foreground">
                          I agree to the <Link href="/privacy-policy"><a className="text-primary hover:underline">Privacy Policy</a></Link> and 
                          consent to Kaveramma Fantasy Cricket processing my data to respond to my inquiry.
                        </label>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-primary to-green-600 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Expected Response Time</h2>
              <p className="text-muted-foreground">
                We typically respond to all inquiries within <strong>24 hours</strong> during business days. 
                For urgent matters, please mention "URGENT" in your subject line.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><span className="text-white font-bold">K</span></div>
              <div><div className="font-bold">KAVERAMMA</div><div className="text-xs text-white/60">Fantasy Cricket</div></div>
            </div>
            <p className="text-sm text-white/40">© 2024 Kaveramma Fantasy Cricket</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

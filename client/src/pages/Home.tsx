import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Trophy, Users, Shield, Zap, Target, Award, 
  ChevronRight, Play, Star, CheckCircle2,
  Menu, X
} from "lucide-react";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Trophy,
      title: "100% Free to Play",
      description: "No entry fees, no hidden charges. Pure fantasy cricket entertainment.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "No Real Money",
      description: "Completely risk-free gaming experience. Play for fun and learning.",
      color: "text-secondary"
    },
    {
      icon: Target,
      title: "Skill-Based Gaming",
      description: "Test your cricket knowledge and strategic thinking abilities.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of cricket enthusiasts across India.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description: "Live scores and instant point calculations during matches.",
      color: "text-secondary"
    },
    {
      icon: Award,
      title: "Leaderboard Glory",
      description: "Compete for top positions and showcase your cricket expertise.",
      color: "text-accent"
    }
  ];

  const steps = [
    { number: "01", title: "Register", description: "Create your free account in seconds" },
    { number: "02", title: "Select Match", description: "Choose from upcoming cricket matches" },
    { number: "03", title: "Build Team", description: "Pick 11 players within the budget" },
    { number: "04", title: "Compete", description: "Watch your team earn points live" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Modern Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full glass border-b border-border/50"
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  KAVERAMMA
                </div>
                <div className="text-xs text-muted-foreground -mt-0.5">Fantasy Cricket</div>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {["About Us", "How to Play", "FAQ", "Blog", "Contact"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                <a className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
                  {item}
                </a>
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            {/* Compliance Badges */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center space-x-1 px-2 py-1 bg-primary/10 rounded-full">
                <span className="text-xs font-bold text-primary">18+</span>
              </div>
              <div className="flex items-center space-x-1 px-2 py-1 bg-secondary/10 rounded-full">
                <Shield className="w-3 h-3 text-secondary" />
                <span className="text-xs font-medium text-secondary">Fair Play</span>
              </div>
            </div>

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <Link href="/dashboard">
                <Button className="gradient-primary text-white shadow-soft btn-modern">
                  Dashboard
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" className="font-medium">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="gradient-primary text-white shadow-soft btn-modern">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/50 bg-background"
          >
            <nav className="container py-4 space-y-2">
              {["About Us", "How to Play", "FAQ", "Blog", "Contact"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                  <a className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
                    {item}
                  </a>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-hero">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float delay-200" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="container relative py-20 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {/* Badge */}
                <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-soft mb-8">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-sm font-medium text-foreground">India's Free Fantasy Cricket Platform</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                >
                  <span className="text-foreground">Fantasy Cricket</span>
                  <br />
                  <span className="text-gradient">for Everyone</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                  Build your dream cricket team, compete with friends, and master fantasy cricket strategy—completely free with no real money involved!
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Link href={isAuthenticated ? "/dashboard" : "/register"}>
                    <Button size="lg" className="gradient-primary text-white shadow-soft-lg btn-modern px-8 py-6 text-lg">
                      <Play className="w-5 h-5 mr-2" />
                      Start Playing Free
                    </Button>
                  </Link>
                  <Link href="/how-to-play">
                    <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur border-border/50 px-8 py-6 text-lg">
                      Learn How to Play
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Trust Badges */}
                <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6">
                  {[
                    { icon: CheckCircle2, text: "100% Free", color: "text-primary" },
                    { icon: Shield, text: "No Real Money", color: "text-secondary" },
                    { icon: Target, text: "Skill-Based", color: "text-accent" }
                  ].map((badge, i) => (
                    <div key={i} className="flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur rounded-full">
                      <badge.icon className={`w-5 h-5 ${badge.color}`} />
                      <span className="text-sm font-medium text-foreground">{badge.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-wider">
                Why Choose Us
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                Play Smart, Play Free
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                Experience the thrill of fantasy cricket without any financial risk. Perfect for learning and entertainment.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group p-6 bg-white rounded-2xl border border-border/50 shadow-soft card-hover"
                >
                  <div className={`w-12 h-12 rounded-xl ${
                    index % 3 === 0 ? 'bg-primary/10' : 
                    index % 3 === 1 ? 'bg-secondary/10' : 'bg-accent/10'
                  } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Getting Started
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                How It Works
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                Start your fantasy cricket journey in just four simple steps
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative p-6 bg-white rounded-2xl border border-border/50 shadow-soft text-center card-hover"
                >
                  <div className="text-5xl font-bold text-gradient opacity-20 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ChevronRight className="w-6 h-6 text-border" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        {!isAuthenticated && (
          <section className="py-20 lg:py-28">
            <div className="container">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="relative overflow-hidden rounded-3xl gradient-primary p-10 lg:p-16 text-center"
              >
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
                </div>
                
                <div className="relative">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Ready to Start Your Journey?
                  </h2>
                  <p className="text-white/80 max-w-xl mx-auto mb-8">
                    Join thousands of cricket fans playing fantasy cricket for free. No risk, all fun!
                  </p>
                  <Link href="/register">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-soft-lg px-8 py-6 text-lg">
                      Create Free Account
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>

      {/* Modern Footer */}
      <footer className="bg-foreground text-white">
        <div className="container py-12 lg:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <div>
                  <div className="font-bold text-lg">KAVERAMMA</div>
                  <div className="text-xs text-white/60">Fantasy Cricket</div>
                </div>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Fantasy Cricket for Everyone. 100% free, skill-based entertainment platform.
              </p>
              <div className="flex items-center space-x-3">
                <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold">18+</div>
                <div className="flex items-center space-x-1 px-3 py-1 bg-white/10 rounded-full">
                  <Shield className="w-3 h-3" />
                  <span className="text-xs font-medium">Fair Play</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About Us", "How to Play", "FAQ", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                      <a className="text-white/60 hover:text-white text-sm transition-colors">{item}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {["Terms & Conditions", "Privacy Policy", "Fair Play Policy", "Responsible Gaming"].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}>
                      <a className="text-white/60 hover:text-white text-sm transition-colors">{item}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <p className="text-white/60 text-sm mb-2">
                KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED
              </p>
              <p className="text-white/40 text-xs">
                CIN: U10792KA2024PTC186508
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-8 border-t border-white/10">
            <div className="bg-white/5 rounded-xl p-4 mb-6">
              <p className="text-white/60 text-xs leading-relaxed">
                <strong className="text-white/80">Legal Disclaimer:</strong> This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. Only users 18 years and older are permitted. This is a skill-based, free-to-play platform with no real money involved. No financial transactions, deposits, or withdrawals are supported.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
              <p>© 2024 Kaveramma Fantasy Cricket. All rights reserved.</p>
              <p>Domain: kaverammafantasy.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

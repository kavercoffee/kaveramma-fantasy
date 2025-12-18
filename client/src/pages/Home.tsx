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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } }
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

// Cricket Scene Illustration with Stadium, Stumps, and Player
const CricketSceneIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Stadium/Field Background */}
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <svg viewBox="0 0 400 400" className="w-full h-full max-w-md">
        {/* Outer stadium ring */}
        <defs>
          <linearGradient id="fieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#16A34A" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="pitchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#FCD34D" />
          </linearGradient>
          <linearGradient id="jerseyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        
        {/* Cricket field oval */}
        <ellipse cx="200" cy="200" rx="180" ry="160" fill="url(#fieldGradient)" stroke="#22C55E" strokeWidth="3" strokeDasharray="10 5" />
        
        {/* Inner circle (30-yard) */}
        <ellipse cx="200" cy="200" rx="100" ry="90" fill="none" stroke="#22C55E" strokeWidth="2" strokeDasharray="8 4" opacity="0.6" />
        
        {/* Pitch rectangle */}
        <rect x="185" y="120" width="30" height="160" rx="2" fill="url(#pitchGradient)" />
        
        {/* Crease lines */}
        <line x1="175" y1="140" x2="225" y2="140" stroke="#8B4513" strokeWidth="2" />
        <line x1="175" y1="260" x2="225" y2="260" stroke="#8B4513" strokeWidth="2" />
        
        {/* Stumps at both ends */}
        {/* Top stumps */}
        <rect x="193" y="125" width="3" height="20" fill="#8B4513" />
        <rect x="198" y="125" width="3" height="20" fill="#8B4513" />
        <rect x="203" y="125" width="3" height="20" fill="#8B4513" />
        <rect x="191" y="123" width="18" height="3" fill="#DC2626" rx="1" />
        
        {/* Bottom stumps */}
        <rect x="193" y="255" width="3" height="20" fill="#8B4513" />
        <rect x="198" y="255" width="3" height="20" fill="#8B4513" />
        <rect x="203" y="255" width="3" height="20" fill="#8B4513" />
        <rect x="191" y="253" width="18" height="3" fill="#DC2626" rx="1" />
      </svg>
    </motion.div>

    {/* Batsman */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute"
      style={{ bottom: '25%', left: '50%', transform: 'translateX(-50%)' }}
    >
      <svg viewBox="0 0 100 150" className="w-24 h-36 md:w-32 md:h-48">
        <defs>
          <linearGradient id="helmetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="skinTone" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        
        {/* Helmet */}
        <ellipse cx="50" cy="20" rx="18" ry="16" fill="url(#helmetGrad)" />
        <rect x="32" y="18" width="36" height="8" fill="url(#helmetGrad)" />
        <rect x="38" y="26" width="24" height="5" fill="#1E3A5F" opacity="0.6" />
        
        {/* Face */}
        <ellipse cx="50" cy="30" rx="10" ry="8" fill="url(#skinTone)" />
        
        {/* Body - Jersey */}
        <path d="M32 45 L38 38 L62 38 L68 45 L72 85 L28 85 Z" fill="url(#helmetGrad)" />
        <text x="50" y="68" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">K</text>
        
        {/* Arms */}
        <path d="M32 48 L15 70 L20 75 L38 58" fill="url(#skinTone)" />
        <path d="M68 48 L85 60 L88 70 L70 58" fill="url(#skinTone)" />
        
        {/* Bat */}
        <rect x="82" y="55" width="5" height="35" rx="1" fill="#DEB887" transform="rotate(20 85 72)" />
        <rect x="80" y="48" width="6" height="12" rx="1" fill="#8B4513" transform="rotate(20 83 54)" />
        
        {/* Pants */}
        <path d="M28 85 L25 120 L40 120 L50 90 L60 120 L75 120 L72 85 Z" fill="#1E3A5F" />
        
        {/* Pads */}
        <rect x="26" y="115" width="14" height="25" rx="3" fill="#F3F4F6" />
        <rect x="60" y="115" width="14" height="25" rx="3" fill="#F3F4F6" />
        
        {/* Shoes */}
        <ellipse cx="33" cy="145" rx="10" ry="5" fill="#1F2937" />
        <ellipse cx="67" cy="145" rx="10" ry="5" fill="#1F2937" />
      </svg>
    </motion.div>

    {/* Animated Cricket Ball */}
    <motion.div
      animate={{ 
        x: [0, 50, 100, 50, 0],
        y: [0, -30, 0, 30, 0],
        rotate: [0, 180, 360, 540, 720]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-16 right-16 md:top-20 md:right-24"
    >
      <svg viewBox="0 0 50 50" className="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg">
        <circle cx="25" cy="25" r="23" fill="#DC2626" />
        <path d="M8 25 Q25 15 42 25" stroke="white" strokeWidth="2" fill="none" />
        <path d="M8 25 Q25 35 42 25" stroke="white" strokeWidth="2" fill="none" />
        {/* Stitches */}
        <circle cx="12" cy="22" r="1.5" fill="white" />
        <circle cx="18" cy="19" r="1.5" fill="white" />
        <circle cx="25" cy="17" r="1.5" fill="white" />
        <circle cx="32" cy="19" r="1.5" fill="white" />
        <circle cx="38" cy="22" r="1.5" fill="white" />
        <circle cx="12" cy="28" r="1.5" fill="white" />
        <circle cx="18" cy="31" r="1.5" fill="white" />
        <circle cx="25" cy="33" r="1.5" fill="white" />
        <circle cx="32" cy="31" r="1.5" fill="white" />
        <circle cx="38" cy="28" r="1.5" fill="white" />
      </svg>
    </motion.div>

    {/* Second Ball - smaller, different animation */}
    <motion.div
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, -360]
      }}
      transition={{ 
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 6, repeat: Infinity, ease: "linear" }
      }}
      className="absolute bottom-24 left-8 md:bottom-32 md:left-12"
    >
      <svg viewBox="0 0 50 50" className="w-7 h-7 md:w-9 md:h-9 drop-shadow-md opacity-80">
        <circle cx="25" cy="25" r="23" fill="#DC2626" />
        <path d="M8 25 Q25 15 42 25" stroke="white" strokeWidth="2" fill="none" />
        <path d="M8 25 Q25 35 42 25" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    </motion.div>

    {/* Feature badges - Real information only */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 }}
      className="absolute top-8 right-4 md:top-12 md:right-8 bg-white rounded-xl shadow-lg p-3 border border-border/50"
    >
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
          <Shield className="w-4 h-4 text-green-600" />
        </div>
        <span className="text-sm font-semibold text-foreground">Free to Play</span>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-16 left-4 md:bottom-20 md:left-8 bg-white rounded-xl shadow-lg p-3 border border-border/50"
    >
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
          <Target className="w-4 h-4 text-blue-600" />
        </div>
        <span className="text-sm font-semibold text-foreground">Skill-Based</span>
      </div>
    </motion.div>
  </div>
);

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
      description: "Join cricket enthusiasts from across India.",
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
        className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border/50"
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
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
              <div className="flex items-center space-x-1 px-2.5 py-1 bg-red-50 border border-red-200 rounded-full">
                <span className="text-xs font-bold text-red-600">18+</span>
              </div>
              <div className="flex items-center space-x-1 px-2.5 py-1 bg-green-50 border border-green-200 rounded-full">
                <Shield className="w-3 h-3 text-green-600" />
                <span className="text-xs font-medium text-green-600">Fair Play</span>
              </div>
            </div>

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-primary to-primary/90 text-white shadow-md hover:shadow-lg transition-shadow">
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
                  <Button className="bg-gradient-to-r from-primary to-primary/90 text-white shadow-md hover:shadow-lg transition-shadow">
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
            className="lg:hidden border-t border-border/50 bg-white"
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
        {/* Hero Section - Split Layout with Cricket Scene */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.08) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />
          </div>

          <div className="container relative py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Left Side - Text Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="text-center lg:text-left"
              >
                {/* Badge */}
                <motion.div variants={fadeInLeft} className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-border/50 rounded-full shadow-sm mb-6">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-foreground">India's Free Fantasy Cricket Platform</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 
                  variants={fadeInLeft}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                >
                  <span className="text-foreground">Fantasy Cricket</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    for Everyone
                  </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p 
                  variants={fadeInLeft}
                  className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
                >
                  Build your dream cricket team, compete with friends, and master fantasy cricket strategy—completely free with no real money involved!
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={fadeInLeft} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                  <Link href={isAuthenticated ? "/dashboard" : "/register"}>
                    <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg hover:shadow-xl transition-all px-8 py-6 text-lg group">
                      <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Start Playing Free
                    </Button>
                  </Link>
                  <Link href="/how-to-play">
                    <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg">
                      Learn How to Play
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Trust Badges */}
                <motion.div variants={fadeInLeft} className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  {[
                    { icon: CheckCircle2, text: "100% Free", color: "text-primary bg-primary/10" },
                    { icon: Shield, text: "No Real Money", color: "text-green-600 bg-green-100" },
                    { icon: Target, text: "Skill-Based", color: "text-orange-600 bg-orange-100" }
                  ].map((badge, i) => (
                    <div key={i} className={`flex items-center space-x-2 px-4 py-2 rounded-full ${badge.color}`}>
                      <badge.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{badge.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Side - Cricket Scene Illustration */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInRight}
                className="relative h-[400px] lg:h-[480px]"
              >
                <CricketSceneIllustration />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-28 bg-white">
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
                  className="group p-6 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl ${
                    index % 3 === 0 ? 'bg-primary/10' : 
                    index % 3 === 1 ? 'bg-green-100' : 'bg-orange-100'
                  } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${
                      index % 3 === 0 ? 'text-primary' : 
                      index % 3 === 1 ? 'text-green-600' : 'text-orange-600'
                    }`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="container">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-sm font-semibold text-green-600 uppercase tracking-wider">
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
                  className="relative p-6 bg-white rounded-2xl border border-border/50 shadow-sm text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-5xl font-bold bg-gradient-to-br from-primary/20 to-green-500/20 bg-clip-text text-transparent mb-2">
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
          <section className="py-20 lg:py-28 bg-white">
            <div className="container">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/90 to-green-600 p-10 lg:p-16 text-center"
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
                    Join cricket fans playing fantasy cricket for free. No risk, all fun!
                  </p>
                  <Link href="/register">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg px-8 py-6 text-lg">
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
      <footer className="bg-slate-900 text-white">
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
                <div className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-bold text-red-400">18+</div>
                <div className="flex items-center space-x-1 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                  <Shield className="w-3 h-3 text-green-400" />
                  <span className="text-xs font-medium text-green-400">Fair Play</span>
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

import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Play, 
  ChevronRight, 
  Shield, 
  Target, 
  Trophy,
  Users,
  Zap,
  CheckCircle,
  Star,
  Menu,
  X,
  BookOpen,
  Award,
  Clock,
  Globe,
  Heart,
  Lock,
  TrendingUp,
  Sparkles,
  CircleDollarSign,
  GraduationCap,
  Gamepad2,
  ChevronDown,
  ArrowRight,
  BadgeCheck,
  Smartphone,
  Monitor,
  Calendar,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { useState } from "react";
import GoogleAdsBanner from "@/components/GoogleAdsBanner";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Cricket Scene Illustration Component
const CricketSceneIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Stadium/Field Background */}
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
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
      className="absolute"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
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
      className="absolute top-10 right-10"
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 360]
      }}
      transition={{ 
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 3, repeat: Infinity, ease: "linear" }
      }}
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
      className="absolute bottom-20 left-5"
      animate={{ 
        x: [0, 10, 0],
        rotate: [0, -360]
      }}
      transition={{ 
        x: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 4, repeat: Infinity, ease: "linear" }
      }}
    >
      <svg viewBox="0 0 50 50" className="w-7 h-7 md:w-9 md:h-9 drop-shadow-md opacity-80">
        <circle cx="25" cy="25" r="23" fill="#DC2626" />
        <path d="M8 25 Q25 15 42 25" stroke="white" strokeWidth="2" fill="none" />
        <path d="M8 25 Q25 35 42 25" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    </motion.div>

    {/* Feature badges - Real information only */}
    <motion.div
      className="absolute top-5 right-0 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-border/50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
    >
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
          <Shield className="w-4 h-4 text-green-600" />
        </div>
        <span className="text-sm font-semibold text-foreground">Free to Play</span>
      </div>
    </motion.div>

    <motion.div
      className="absolute bottom-10 left-0 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-border/50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
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

// Features data
const features = [
  {
    icon: CircleDollarSign,
    title: "100% Free Forever",
    description: "No deposits, no entry fees, no hidden charges. Play unlimited contests without spending a single rupee. Our platform is completely free to use.",
    color: "green",
    details: ["No registration fees", "No contest entry fees", "No premium subscriptions", "All features free"]
  },
  {
    icon: GraduationCap,
    title: "Learn & Improve",
    description: "Perfect for beginners to understand fantasy cricket mechanics. Learn player selection, captain choices, and strategy without any financial risk.",
    color: "blue",
    details: ["Beginner-friendly tutorials", "Strategy guides", "Player analysis tips", "Performance tracking"]
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your data is protected with industry-standard security. We never share your personal information with third parties.",
    color: "purple",
    details: ["Encrypted data storage", "No third-party sharing", "Secure authentication", "Privacy protected"]
  },
  {
    icon: Target,
    title: "Skill-Based Gaming",
    description: "Success depends on your cricket knowledge and analytical skills, not luck. Research players, analyze form, and make informed decisions.",
    color: "orange",
    details: ["Knowledge-based selection", "Form analysis matters", "Strategic thinking rewarded", "No random outcomes"]
  },
  {
    icon: Trophy,
    title: "Leaderboard Rankings",
    description: "Compete for glory on our leaderboards. See how your fantasy cricket skills stack up against other players across India.",
    color: "yellow",
    details: ["Daily leaderboards", "Weekly rankings", "Season standings", "Achievement badges"]
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a growing community of cricket enthusiasts. Share strategies, discuss matches, and learn from fellow fantasy cricket fans.",
    color: "cyan",
    details: ["Active community", "Strategy discussions", "Match predictions", "Cricket insights"]
  }
];

// How it works steps
const howItWorksSteps = [
  {
    number: "01",
    title: "Create Your Account",
    description: "Sign up for free in less than 2 minutes. Just provide your email, create a password, and verify your age (18+). No payment information required.",
    icon: Users,
    details: ["Quick registration", "Email verification", "Age verification (18+)", "Instant access"]
  },
  {
    number: "02",
    title: "Choose a Match",
    description: "Browse upcoming cricket matches from various tournaments. Select the match you want to play - IPL, international matches, domestic leagues, and more.",
    icon: Calendar,
    details: ["Multiple tournaments", "Live match updates", "Match schedules", "Team information"]
  },
  {
    number: "03",
    title: "Build Your Team",
    description: "Select 11 players within the budget. Choose wisely from batsmen, bowlers, all-rounders, and wicket-keepers. Pick your captain and vice-captain for bonus points.",
    icon: Target,
    details: ["11 player selection", "Budget management", "Role-based picking", "Captain selection"]
  },
  {
    number: "04",
    title: "Track & Compete",
    description: "Watch your team score points based on real match performance. Track live scores, climb the leaderboard, and see how your strategy plays out.",
    icon: Trophy,
    details: ["Live point tracking", "Real-time updates", "Leaderboard position", "Performance analysis"]
  }
];

// Supported match types
const matchTypes = [
  { name: "IPL", description: "Indian Premier League", icon: "🏏" },
  { name: "International", description: "ODI, T20I, Test Matches", icon: "🌍" },
  { name: "T20 Leagues", description: "BBL, PSL, CPL & more", icon: "⚡" },
  { name: "Domestic", description: "Ranji Trophy, SMAT", icon: "🇮🇳" }
];

// FAQ items
const faqItems = [
  {
    question: "Is Kaveramma Fantasy Cricket really free?",
    answer: "Yes, 100% free! There are no registration fees, no contest entry fees, and no premium subscriptions. All features are available to every user at no cost. We are backed by investors who believe in fantasy cricket education."
  },
  {
    question: "Can I win real money on this platform?",
    answer: "No. Kaveramma Fantasy Cricket is purely for entertainment and education. There are no real money prizes, deposits, or withdrawals. Winners are recognized on our leaderboard for bragging rights only."
  },
  {
    question: "Who can play on Kaveramma Fantasy Cricket?",
    answer: "Users must be 18 years or older. The platform is NOT available in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana due to state regulations."
  },
  {
    question: "How are points calculated?",
    answer: "Points are awarded based on real cricket match performance - runs scored, wickets taken, catches, run-outs, and more. Captains earn 2x points and vice-captains earn 1.5x points."
  }
];

// Trust indicators
const trustIndicators = [
  { icon: Lock, title: "Secure Platform", description: "Bank-grade encryption" },
  { icon: BadgeCheck, title: "Verified Company", description: "Registered in Karnataka" },
  { icon: Shield, title: "Fair Play", description: "Transparent scoring" },
  { icon: Heart, title: "Responsible Gaming", description: "Safe entertainment" }
];

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Modern Header - Hide on mobile when banner is visible */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border/50 ${isBannerVisible ? "hidden lg:block" : ""}`}
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo-dark.png" 
              alt="Kaveramma" 
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {["About Us", "How to Play", "FAQ", "Blog", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
              >
                {item}
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
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Google Ads Banner - Shows before hero section on mobile */}
      <GoogleAdsBanner onVisibilityChange={setIsBannerVisible} />

      <main className="flex-1">
        {/* ==================== HERO SECTION ==================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }} />
          </div>

          <div className="container relative py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Left Side - Text Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
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
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
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
                  className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
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
                    { icon: CheckCircle, text: "100% Free", color: "bg-green-50 text-green-700 border-green-200" },
                    { icon: Shield, text: "No Real Money", color: "bg-blue-50 text-blue-700 border-blue-200" },
                    { icon: Target, text: "Skill-Based", color: "bg-orange-50 text-orange-700 border-orange-200" }
                  ].map((badge, i) => (
                    <div key={i} className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${badge.color}`}>
                      <badge.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{badge.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Side - Cricket Scene Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[400px] lg:h-[500px]"
              >
                <CricketSceneIllustration />
              </motion.div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* ==================== PLATFORM HIGHLIGHTS ==================== */}
        <section className="py-12 bg-white">
          <div className="container">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { label: "Free to Play", value: "100%", icon: CircleDollarSign, color: "text-green-600 bg-green-100" },
                { label: "No Real Money", value: "₹0", icon: Shield, color: "text-blue-600 bg-blue-100" },
                { label: "Skill-Based", value: "Pure", icon: Target, color: "text-orange-600 bg-orange-100" },
                { label: "Age Requirement", value: "18+", icon: Users, color: "text-red-600 bg-red-100" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="text-center p-6 rounded-2xl bg-slate-50 border border-border/50"
                >
                  <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ==================== FEATURES SECTION ==================== */}
        <section className="py-20 lg:py-28 bg-slate-50">
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
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
                Play Smart, Play Free
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Experience the thrill of fantasy cricket without any financial risk. Perfect for learning, entertainment, and honing your cricket knowledge.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl ${
                    feature.color === 'green' ? 'bg-green-100' :
                    feature.color === 'blue' ? 'bg-blue-100' :
                    feature.color === 'purple' ? 'bg-purple-100' :
                    feature.color === 'orange' ? 'bg-orange-100' :
                    feature.color === 'yellow' ? 'bg-yellow-100' :
                    'bg-cyan-100'
                  } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-7 h-7 ${
                      feature.color === 'green' ? 'text-green-600' :
                      feature.color === 'blue' ? 'text-blue-600' :
                      feature.color === 'purple' ? 'text-purple-600' :
                      feature.color === 'orange' ? 'text-orange-600' :
                      feature.color === 'yellow' ? 'text-yellow-600' :
                      'text-cyan-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ==================== HOW IT WORKS SECTION ==================== */}
        <section className="py-20 lg:py-28 bg-white">
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
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
                How It Works
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Start your fantasy cricket journey in just four simple steps. No payment required, no complicated setup.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {howItWorksSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative bg-slate-50 rounded-2xl p-8 border border-border/50"
                >
                  {/* Step Number */}
                  <div className="text-6xl font-bold bg-gradient-to-br from-primary/20 to-green-500/20 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Connector Arrow */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA after steps */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href={isAuthenticated ? "/dashboard" : "/register"}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-green-600 text-white shadow-lg hover:shadow-xl px-8 py-6 text-lg">
                  Start Playing Now - It's Free!
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ==================== SUPPORTED MATCHES SECTION ==================== */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-green-50/50 to-blue-50/30">
          <div className="container">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                Cricket Coverage
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
                Supported Matches
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Play fantasy cricket across multiple tournaments and formats. From IPL to international matches, we've got you covered.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {matchTypes.map((match, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all"
                >
                  <div className="text-5xl mb-4">{match.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{match.name}</h3>
                  <p className="text-muted-foreground">{match.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ==================== TRUST & COMPLIANCE SECTION ==================== */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                Trust & Safety
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
                Play with Confidence
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto text-lg">
                We're committed to providing a safe, fair, and transparent gaming experience for all users.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Compliance Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 border border-border/50"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex items-center space-x-4">
                  <div className="px-4 py-2 bg-red-100 border border-red-200 rounded-full">
                    <span className="text-lg font-bold text-red-600">18+</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-600">Fair Play Certified</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Important:</strong> This platform is NOT available in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana. Only users 18 years and older are permitted. This is a skill-based, free-to-play platform with no real money involved.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==================== FAQ PREVIEW SECTION ==================== */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="container">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">
                Common Questions
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
                Frequently Asked Questions
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Got questions? We've got answers. Here are some of the most common questions about Kaveramma Fantasy Cricket.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto space-y-4"
            >
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl border border-border/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-foreground pr-4">{item.question}</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-muted-foreground">{item.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Link href="/faq">
                <Button variant="outline" size="lg" className="border-2">
                  View All FAQs
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ==================== FINAL CTA SECTION ==================== */}
        {!isAuthenticated && (
          <section className="py-20 lg:py-28 bg-white">
            <div className="container">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-r from-primary via-blue-600 to-green-600 rounded-3xl p-12 lg:p-16 text-center overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                </div>
                
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
                  >
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span className="text-white/90 text-sm font-medium">Join the Cricket Revolution</span>
                  </motion.div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Ready to Start Your Journey?
                  </h2>
                  <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
                    Join cricket fans across India playing fantasy cricket for free. No risk, all fun, pure skill!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/register">
                      <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg px-8 py-6 text-lg">
                        Create Free Account
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/how-to-play">
                      <Button size="lg" variant="outline" className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                    <div className="flex items-center space-x-2 text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>100% Free</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>No Credit Card</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>Instant Access</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-slate-900 text-white">
        <div className="container py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img 
                  src="/logo-dark.png" 
                  alt="Kaveramma" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Fantasy Cricket for Everyone. India's 100% free, skill-based entertainment platform. Learn, play, and enjoy fantasy cricket without any financial risk.
              </p>
              <div className="flex items-center space-x-3">
                <div className="px-3 py-1.5 bg-red-500/20 border border-red-500/30 rounded-full text-sm font-bold text-red-400">18+</div>
                <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-green-400">Fair Play</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {["About Us", "How to Play", "FAQ", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-white/60 hover:text-white text-sm transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Legal</h4>
              <ul className="space-y-3">
                {["Terms & Conditions", "Privacy Policy", "Fair Play Policy", "Responsible Gaming"].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                      className="text-white/60 hover:text-white text-sm transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <div className="space-y-4 text-sm">
                <p className="text-white/80 font-medium">
                  KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED
                </p>
                <div className="space-y-2 text-white/60">
                  <p className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>C/O S K MOHAN, MEKOOR, SIDDAPURA, Pollibetta, Virajpet, Kodagu- 571215, Karnataka</span>
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>support@kaverammafantasy.com</span>
                  </p>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-white/40 text-xs">CIN: U10792KA2024PTC186508</p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-10 border-t border-white/10">
            <div className="bg-white/5 rounded-2xl p-6 mb-8">
              <h5 className="text-white/90 font-semibold mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-yellow-500" />
                Legal Disclaimer
              </h5>
              <p className="text-white/60 text-sm leading-relaxed">
                This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim due to state regulations. Only users 18 years and older are permitted to use this platform. This is a skill-based, free-to-play platform with no real money involved. No financial transactions, deposits, or withdrawals are supported. Winners are recognized on leaderboards only - there are no monetary prizes or rewards.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
              <p>© 2025 KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED. All rights reserved.</p>
              <p className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                kaverammafantasy.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

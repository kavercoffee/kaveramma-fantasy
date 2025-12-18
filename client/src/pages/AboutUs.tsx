import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Building2, Target, Heart, Users, Shield, Award, 
  MapPin, Mail, Phone, ChevronRight, Star, CheckCircle2,
  Lightbulb, Globe, BookOpen, TrendingUp, Zap, Lock,
  Trophy, BarChart3, Clock, Sparkles
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AboutUs() {
  const values = [
    {
      icon: Shield,
      title: "Transparency & Trust",
      description: "Complete transparency is the foundation of our platform. Every rule, scoring mechanism, point calculation formula, and policy is clearly documented, publicly accessible, and explained in simple language. We maintain detailed logs of all activities and provide users with full visibility into how their teams perform and how rankings are calculated."
    },
    {
      icon: Heart,
      title: "User-First Philosophy",
      description: "Our users are not just participants—they are the heart of Kaveramma. Every feature we build, every decision we make, and every improvement we implement is driven by user feedback and needs. We actively listen to our community through surveys, support channels, and social media to continuously enhance the platform experience."
    },
    {
      icon: Award,
      title: "Fair Play & Integrity",
      description: "We are uncompromisingly committed to maintaining a level playing field for all participants. Our advanced anti-cheating systems, pattern detection algorithms, and human moderation teams work around the clock to prevent any form of manipulation, bot usage, or unfair advantage. Success on Kaveramma is determined solely by cricket knowledge and strategic thinking."
    },
    {
      icon: BookOpen,
      title: "Education & Learning",
      description: "Fantasy cricket is more than just a game—it's an educational tool that deepens understanding of cricket strategy, player performance analysis, match conditions, and team dynamics. We provide comprehensive tutorials, strategy guides, statistical analysis tools, and learning resources to help users develop their cricket knowledge and analytical skills."
    },
    {
      icon: Users,
      title: "Community & Connection",
      description: "We foster a vibrant, inclusive community of cricket enthusiasts who share their passion for the sport. Our platform brings together fans from diverse backgrounds across India, creating spaces for discussion, strategy sharing, friendly competition, and celebration of cricket. We organize community events, discussions, and interactive sessions to strengthen bonds among users."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Excellence",
      description: "We continuously innovate to provide cutting-edge features and improve user experience. Our dedicated team of developers, designers, and cricket analysts work tirelessly to introduce new functionalities, optimize performance, enhance interface design, and implement user-requested features. We embrace new technologies and methodologies to stay ahead in delivering the best fantasy cricket experience."
    }
  ];

  const platformFeatures = [
    {
      icon: Zap,
      title: "100% Free Forever",
      description: "No hidden costs, no premium tiers, no entry fees. Every feature on Kaveramma is completely free to use. We believe fantasy cricket should be accessible to everyone regardless of financial status.",
      highlights: ["No registration fees", "No contest entry fees", "No subscription charges", "All features unlocked"]
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "Your data security and privacy are our top priorities. We employ bank-grade encryption, secure authentication protocols, and strict data protection policies to safeguard your personal information.",
      highlights: ["256-bit SSL encryption", "Secure authentication", "No data selling", "GDPR compliant"]
    },
    {
      icon: Trophy,
      title: "Skill-Based Competition",
      description: "Success on Kaveramma depends entirely on your cricket knowledge, analytical abilities, and strategic decision-making. No luck, no randomness—pure skill-based gameplay.",
      highlights: ["Knowledge-based selection", "Strategic gameplay", "Performance analytics", "Fair competition"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track your team's performance with live score updates, detailed statistics, player performance metrics, and comprehensive analytics dashboards that help you make informed decisions.",
      highlights: ["Live score tracking", "Player statistics", "Performance graphs", "Historical data"]
    },
    {
      icon: Clock,
      title: "Multiple Tournaments",
      description: "Play across various cricket formats and tournaments including IPL, international matches (ODI, T20I, Test), domestic leagues (Ranji Trophy, SMAT), and other T20 leagues worldwide.",
      highlights: ["IPL coverage", "International matches", "Domestic leagues", "T20 tournaments"]
    },
    {
      icon: Sparkles,
      title: "User-Friendly Interface",
      description: "Our intuitive, modern interface makes team building and contest participation effortless. Whether you're a beginner or experienced player, you'll find the platform easy to navigate and use.",
      highlights: ["Clean design", "Easy navigation", "Mobile responsive", "Quick team building"]
    }
  ];

  const whyChooseUs = [
    {
      title: "No Financial Risk",
      description: "Unlike traditional fantasy cricket platforms that involve real money transactions, Kaveramma is completely free. You can enjoy the thrill of fantasy cricket without worrying about losing money or getting into financial trouble. This makes it perfect for learning, entertainment, and honing your skills."
    },
    {
      title: "Educational Value",
      description: "Kaveramma serves as an excellent educational tool for understanding cricket at a deeper level. By analyzing player statistics, studying match conditions, evaluating team compositions, and making strategic decisions, users develop analytical thinking and gain comprehensive cricket knowledge."
    },
    {
      title: "Legal & Compliant",
      description: "As a free-to-play, skill-based platform with no real money involved, Kaveramma operates within legal frameworks. We are registered under KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED with proper CIN, PAN, and TAN registrations, ensuring complete legal compliance and transparency."
    },
    {
      title: "Safe for All Ages (18+)",
      description: "Since there's no gambling or financial risk involved, Kaveramma provides a safe environment for adults (18 years and above) to enjoy fantasy cricket. Parents and guardians can be confident that users are engaging in a skill-based, educational activity rather than gambling."
    },
    {
      title: "Community Support",
      description: "Join thousands of cricket enthusiasts who share strategies, discuss matches, analyze player performances, and celebrate cricket together. Our active community forums, social media groups, and support channels ensure you're never alone in your fantasy cricket journey."
    },
    {
      title: "Continuous Improvement",
      description: "We regularly update our platform based on user feedback, technological advancements, and cricket trends. New features, improved interfaces, enhanced analytics, and better user experiences are continuously rolled out to ensure Kaveramma remains the best free fantasy cricket platform."
    }
  ];

  const milestones = [
    { 
      year: "2024", 
      title: "Company Incorporation", 
      description: "KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED was officially incorporated in Karnataka, India, with a vision to create accessible sports entertainment platforms."
    },
    { 
      year: "2025 Q1", 
      title: "Platform Development", 
      description: "Intensive development phase where our team of engineers, designers, and cricket experts built the Kaveramma fantasy cricket platform from ground up with focus on user experience and fair play."
    },
    { 
      year: "2025 Q2", 
      title: "Beta Testing", 
      description: "Conducted extensive beta testing with cricket enthusiasts across India to gather feedback, identify issues, and refine features before public launch."
    },
    { 
      year: "2025 Q3", 
      title: "Official Launch", 
      description: "Launched Kaveramma to the public as India's premier free-to-play fantasy cricket platform, making fantasy cricket accessible to everyone without financial barriers."
    },
    { 
      year: "2025 Q4", 
      title: "Community Growth", 
      description: "Rapidly growing community of cricket enthusiasts joining Kaveramma, participating in contests, sharing strategies, and enjoying skill-based fantasy cricket competition."
    },
    { 
      year: "Future", 
      title: "Expansion & Innovation", 
      description: "Plans to introduce new features, expand tournament coverage, enhance analytics capabilities, and build partnerships to provide even better fantasy cricket experiences."
    }
  ];

  return (
    <Layout>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="container relative">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-border/50 rounded-full shadow-sm mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">About Our Platform</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Welcome to <span className="bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">Kaveramma</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                India's premier free-to-play fantasy cricket platform where passion meets strategy. 
                We're on a mission to make fantasy cricket accessible to every cricket enthusiast across India, 
                providing a safe, fair, and educational environment to enjoy the game you love—completely free, forever.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/how-to-play">
                  <Button size="lg" className="gap-2">
                    Learn How to Play
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">What is Kaveramma?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Kaveramma is a revolutionary fantasy cricket platform that breaks down financial barriers to make fantasy sports 
                  accessible to everyone. Unlike traditional fantasy cricket platforms that require monetary investments, contest 
                  entry fees, or premium subscriptions, Kaveramma is completely free—forever.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our platform allows cricket enthusiasts to build their dream teams by selecting 11 players from upcoming cricket 
                  matches, assign captains and vice-captains for bonus points, and compete with thousands of other users based on 
                  real match performance. Points are awarded based on actual player performances in live matches—runs scored, 
                  wickets taken, catches held, and other cricket actions.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  What sets Kaveramma apart is our commitment to keeping fantasy cricket purely skill-based and educational. 
                  There are no monetary prizes, no cash withdrawals, no deposits, and no financial transactions of any kind. 
                  Instead, users compete for glory, leaderboard rankings, achievement badges, and the satisfaction of demonstrating 
                  their cricket knowledge and strategic thinking abilities.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a seasoned cricket analyst or a casual fan looking to deepen your understanding of the game, 
                  Kaveramma provides the perfect platform to test your skills, learn from others, and enjoy fantasy cricket 
                  without any financial stress or risk.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Kaveramma was born from a simple yet powerful observation: millions of cricket fans across India wanted 
                    to experience the thrill of fantasy cricket but were hesitant or unable to participate due to the financial 
                    aspects involved in most platforms. Many people couldn't afford entry fees, were uncomfortable with real 
                    money transactions, or simply wanted to learn without financial risk.
                  </p>
                  <p>
                    Founded in 2025 by <strong className="text-foreground">KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</strong>, 
                    a company registered in Karnataka, India, our founders—passionate cricket enthusiasts themselves—decided to 
                    create a solution. They envisioned a platform where anyone with an internet connection could enjoy fantasy 
                    cricket regardless of their financial situation, age (18+), or experience level.
                  </p>
                  <p>
                    After months of intensive development, user research, and testing with cricket fans across India, Kaveramma 
                    was launched as a completely free-to-play fantasy cricket platform. Our goal was clear: democratize fantasy 
                    cricket, promote cricket education, and build a community united by love for the game rather than monetary gains.
                  </p>
                  <p>
                    Today, Kaveramma stands as India's leading free fantasy cricket platform, serving thousands of users who 
                    participate in contests daily, share strategies, discuss matches, and celebrate cricket together. We continue 
                    to grow, innovate, and improve based on community feedback, always staying true to our core mission of making 
                    fantasy cricket accessible to all.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border border-border/50 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-primary" />
                  Official Company Information
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">Registered Company Name</div>
                    <div className="font-semibold">KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">Corporate Identification Number (CIN)</div>
                    <div className="font-semibold font-mono text-sm">U10792KA2024PTC186508</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">Permanent Account Number (PAN)</div>
                    <div className="font-semibold font-mono">AAKCK9076B</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">Tax Deduction Account Number (TAN)</div>
                    <div className="font-semibold font-mono">BLRK29132F</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">Registered Office Address</div>
                    <div className="font-semibold flex items-start text-sm">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>C/O S K MOHAN, MEKOOR, SIDDAPURA, Pollibetta, Virajpet, Kodagu - 571215, Karnataka, India</span>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">Contact Email</div>
                    <div className="font-semibold flex items-center text-sm">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      support@kaverammafantasy.com
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Mission & Vision</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Guiding principles that drive everything we do at Kaveramma
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-border/50 shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To democratize fantasy cricket by providing a completely free, skill-based, and educational platform where 
                  every cricket enthusiast in India—regardless of financial status, location, or experience level—can participate, 
                  learn, compete, and enjoy the game without any financial barriers, risks, or pressures.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We aim to create an inclusive, fair, and transparent community that celebrates cricket knowledge, strategic 
                  thinking, analytical skills, and sportsmanship. By removing monetary elements, we focus purely on the love 
                  of cricket and the joy of competition.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Core Objectives</h4>
                  {[
                    "Make fantasy cricket accessible to everyone",
                    "Promote cricket education and strategic thinking",
                    "Build a safe, fair, and transparent gaming environment",
                    "Foster an inclusive community of cricket enthusiasts",
                    "Eliminate financial barriers and risks",
                    "Provide educational resources and learning tools"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-border/50 shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To become India's most trusted, loved, and widely-used free fantasy cricket platform, where millions of users 
                  across the nation experience the joy of building their dream teams, competing with friends and family, and 
                  deepening their cricket knowledge—all in a safe, fair, and financially risk-free environment.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We envision a future where fantasy cricket is recognized not just as entertainment, but as a valuable 
                  educational tool that enhances cricket understanding, promotes analytical thinking, and brings communities 
                  together through shared passion for the sport.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Future Goals</h4>
                  {[
                    "Reach millions of cricket fans across India",
                    "Become the go-to platform for free fantasy cricket",
                    "Expand coverage to more tournaments and formats",
                    "Build the largest community of cricket enthusiasts",
                    "Introduce innovative features and analytics",
                    "Partner with cricket organizations for content"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <Star className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The fundamental principles that guide our decisions, shape our culture, and define who we are as a platform
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Makes Kaveramma Special</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive features designed to provide the best free fantasy cricket experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-6 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-border/50 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-green-600 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Kaveramma */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Kaveramma?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Compelling reasons why thousands of cricket fans trust and love Kaveramma
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-border/50 shadow-sm"
                >
                  <h3 className="text-lg font-bold mb-3 flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-7">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey & Milestones */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Key milestones in Kaveramma's evolution from concept to India's leading free fantasy cricket platform
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                        <span className="font-bold text-primary text-sm">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-slate-50 rounded-xl p-6 border border-border/50">
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-blue-50/30 to-green-50/20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join the Kaveramma Community</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Become part of India's fastest-growing free fantasy cricket community. Build your dream team, 
                compete with thousands of cricket fans, and showcase your cricket knowledge—all completely free!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/register">
                  <Button size="lg" className="gap-2">
                    Get Started Free
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/how-to-play">
                  <Button size="lg" variant="outline">
                    Learn How to Play
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                No credit card required • 100% free forever • Join thousands of cricket fans
              </p>
            </motion.div>
          </div>
        </section>
    </Layout>
  );
}

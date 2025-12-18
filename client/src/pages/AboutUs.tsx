import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Building2, Target, Heart, Users, Shield, Award, 
  MapPin, Mail, Phone, ChevronRight, Star, CheckCircle2,
  Lightbulb, Globe, BookOpen, TrendingUp
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
      title: "Transparency",
      description: "We believe in complete transparency in all our operations. Every rule, every point calculation, and every policy is clearly documented and accessible to all users."
    },
    {
      icon: Heart,
      title: "User-First Approach",
      description: "Our users are at the center of everything we do. We continuously improve our platform based on user feedback and strive to provide the best fantasy cricket experience."
    },
    {
      icon: Award,
      title: "Fair Play",
      description: "We are committed to maintaining a level playing field for all participants. Our systems are designed to prevent any form of cheating or unfair advantage."
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "We believe fantasy cricket is a great way to learn about the sport. Our platform is designed to help users understand cricket strategy and player performance."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster a vibrant community of cricket enthusiasts who share their passion for the sport. Our platform brings together fans from across India."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate to provide new features and improve user experience. Our team is always working on making fantasy cricket more engaging and fun."
    }
  ];

  const milestones = [
    { year: "2024", title: "Company Founded", description: "Kaveramma Coffee Curing Works Private Limited was incorporated in Karnataka" },
    { year: "2024", title: "Platform Launch", description: "Launched Kaveramma Fantasy Cricket as a free-to-play educational platform" },
    { year: "2024", title: "Growing Community", description: "Building a community of cricket enthusiasts across India" }
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
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-border/50 rounded-full shadow-sm mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">About Our Company</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">Kaveramma</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                We are on a mission to make fantasy cricket accessible to everyone in India. 
                Our free-to-play platform allows cricket enthusiasts to enjoy the thrill of fantasy sports 
                without any financial risk.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Kaveramma Fantasy Cricket</strong> was born from a simple idea: 
                    everyone should be able to enjoy fantasy cricket without worrying about money. Founded in 2024 by 
                    <strong className="text-foreground"> Kaveramma Coffee Curing Works Private Limited</strong>, we set out 
                    to create a platform that focuses purely on the love of cricket and strategic gameplay.
                  </p>
                  <p>
                    Our founders, passionate cricket fans from Karnataka, noticed that many people wanted to try fantasy 
                    cricket but were hesitant due to the financial aspects involved in most platforms. This inspired us 
                    to create a completely free alternative where users can learn, play, and compete without any monetary 
                    transactions.
                  </p>
                  <p>
                    Today, Kaveramma Fantasy Cricket stands as India's premier free-to-play fantasy cricket platform, 
                    dedicated to providing an educational and entertaining experience for cricket lovers across the nation.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-green-500/5 rounded-2xl p-8 border border-border/50"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-primary" />
                  Company Details
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-xl border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">Registered Company Name</div>
                    <div className="font-semibold">KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">Corporate Identification Number (CIN)</div>
                    <div className="font-semibold font-mono">U10792KA2024PTC186508</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">Permanent Account Number (PAN)</div>
                    <div className="font-semibold font-mono">AAKCK9076B</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">Tax Deduction Account Number (TAN)</div>
                    <div className="font-semibold font-mono">BLRK29132F</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">Registered Address</div>
                    <div className="font-semibold flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>C/O S K MOHAN, MEKOOR, SIDDAPURA, Pollibetta, Virajpet, Kodagu - 571215, Karnataka, India</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize fantasy cricket by providing a completely free, skill-based platform where every 
                  cricket enthusiast in India can participate, learn, and enjoy the game without any financial barriers. 
                  We aim to create an inclusive community that celebrates cricket knowledge and strategic thinking.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Make fantasy cricket accessible to everyone",
                    "Promote cricket education and strategy",
                    "Build a safe, fair gaming environment",
                    "Foster a community of cricket lovers"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted and loved free fantasy cricket platform, where millions of users 
                  can experience the joy of building their dream teams and competing with friends and family. 
                  We envision a future where fantasy cricket is a tool for learning and entertainment, not gambling.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Be the #1 free fantasy cricket platform in India",
                    "Reach cricket fans in every corner of the country",
                    "Set industry standards for fair play",
                    "Inspire the next generation of cricket strategists"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-wider">
                What We Stand For
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                Our Core Values
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at Kaveramma Fantasy Cricket
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl ${
                    index % 3 === 0 ? 'bg-primary/10' : 
                    index % 3 === 1 ? 'bg-green-100' : 'bg-orange-100'
                  } flex items-center justify-center mb-4`}>
                    <value.icon className={`w-6 h-6 ${
                      index % 3 === 0 ? 'text-primary' : 
                      index % 3 === 1 ? 'text-green-600' : 'text-orange-600'
                    }`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Free */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-green-500/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Is Our Platform Free?</h2>
                <p className="text-muted-foreground">
                  A question we often get asked - here's our honest answer
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 lg:p-10 border border-border/50 shadow-sm"
              >
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg">
                    <strong className="text-foreground">We are backed by investors who believe in fantasy education.</strong>
                  </p>
                  <p>
                    Our investors share our vision of making fantasy cricket a learning tool rather than a gambling 
                    platform. They understand that many cricket fans, especially young enthusiasts and students, 
                    want to experience fantasy cricket but cannot or should not engage with platforms that involve 
                    real money.
                  </p>
                  <p>
                    By keeping our platform completely free, we:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Remove financial barriers</strong> - Anyone can play regardless of their economic situation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Eliminate gambling concerns</strong> - Parents can let their children learn about cricket strategy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Focus on skill development</strong> - Users play to learn and improve, not to win money</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Build genuine community</strong> - Competition is about pride and knowledge, not financial gain</span>
                    </li>
                  </ul>
                  <p>
                    Our business model is sustainable through strategic partnerships and future premium features 
                    that enhance the experience without affecting the core free gameplay.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Journey</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">Milestones</h2>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {milestone.year.slice(2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm text-primary font-medium">{milestone.year}</div>
                    <h3 className="text-lg font-semibold mt-1">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary to-green-600 rounded-3xl p-10 lg:p-16 text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Join Our Growing Community
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Be part of India's free fantasy cricket revolution. Start playing today!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
                    Create Free Account
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/how-to-play">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                    Learn How to Play
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
  );
}

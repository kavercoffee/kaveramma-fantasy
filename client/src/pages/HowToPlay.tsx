import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, Search, Users, Trophy, ChevronRight, CheckCircle2,
  Star, Target, Shield, Zap, Award, HelpCircle, ArrowRight,
  User, Calendar, ListChecks, Medal, TrendingUp, Clock
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function HowToPlay() {
  const mainSteps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Create Your Free Account",
      description: "Sign up in just 30 seconds with your email. No payment required, ever.",
      details: [
        "Visit our registration page and enter your email address",
        "Create a secure password (minimum 8 characters)",
        "Enter your full name as it appears on official documents",
        "Select your date of birth (must be 18 years or older)",
        "Choose your state of residence from the dropdown",
        "Read and accept our Terms & Conditions and Privacy Policy",
        "Click 'Create Account' to complete registration",
        "Verify your email address by clicking the link we send you"
      ],
      tip: "Use a valid email address as we'll send important match updates and notifications there."
    },
    {
      number: "02",
      icon: Calendar,
      title: "Select a Match",
      description: "Browse upcoming cricket matches and choose the one you want to play.",
      details: [
        "Go to your Dashboard after logging in",
        "View the list of upcoming matches in the 'Upcoming Matches' section",
        "Each match card shows: Teams playing, Match date & time, Match type (T20/ODI/Test)",
        "Click on any match to see more details",
        "Check the deadline - you must create your team before the match starts",
        "Select 'Create Team' to start building your fantasy team for that match"
      ],
      tip: "Start with T20 matches if you're new - they're shorter and easier to predict."
    },
    {
      number: "03",
      icon: Users,
      title: "Build Your Dream Team",
      description: "Select 11 players within the budget to create your fantasy team.",
      details: [
        "You have a virtual budget of 100 credits to spend on players",
        "Select exactly 11 players for your team",
        "Your team must include players from both teams playing",
        "Follow the player composition rules:",
        "  • 1-4 Wicket-keepers (WK)",
        "  • 3-6 Batsmen (BAT)",
        "  • 1-4 All-rounders (AR)",
        "  • 3-6 Bowlers (BOWL)",
        "Each player has a credit value based on their performance history",
        "View player statistics to make informed decisions",
        "You can change players until the match deadline"
      ],
      tip: "Balance your team with consistent performers and a few high-risk, high-reward picks."
    },
    {
      number: "04",
      icon: Star,
      title: "Choose Captain & Vice-Captain",
      description: "Select your captain (2x points) and vice-captain (1.5x points).",
      details: [
        "After selecting 11 players, choose your Captain and Vice-Captain",
        "Captain (C): Earns 2x points for all their actions in the match",
        "Vice-Captain (VC): Earns 1.5x points for all their actions",
        "Choose players you expect to perform exceptionally well",
        "Consider factors like:",
        "  • Player's recent form",
        "  • Performance against the opponent team",
        "  • Pitch and weather conditions",
        "  • Player's role in the team (opener, finisher, etc.)",
        "Your captain choice can make or break your team's total score"
      ],
      tip: "Pick a reliable performer as captain rather than gambling on an inconsistent player."
    },
    {
      number: "05",
      icon: Trophy,
      title: "Track & Compete",
      description: "Watch your team earn points as the match progresses and climb the leaderboard.",
      details: [
        "Once the match starts, your team begins earning points",
        "Points are calculated based on real match performance",
        "Track your team's score in real-time on the dashboard",
        "Compare your ranking with other players on the leaderboard",
        "Points are awarded for:",
        "  • Runs scored by batsmen",
        "  • Wickets taken by bowlers",
        "  • Catches, stumpings, and run-outs",
        "  • Strike rate and economy rate bonuses",
        "  • Milestone bonuses (50s, 100s, 4-wicket hauls, etc.)",
        "Final standings are determined after the match ends"
      ],
      tip: "Don't worry if you're behind early - cricket matches can change dramatically!"
    }
  ];

  const pointsSystem = {
    batting: [
      { action: "Run scored", points: "+1 point" },
      { action: "Boundary (4)", points: "+1 bonus point" },
      { action: "Six (6)", points: "+2 bonus points" },
      { action: "Half-century (50 runs)", points: "+10 bonus points" },
      { action: "Century (100 runs)", points: "+25 bonus points" },
      { action: "Duck (0 runs, out)", points: "-5 points (Batsmen/WK only)" }
    ],
    bowling: [
      { action: "Wicket taken", points: "+25 points" },
      { action: "Maiden over", points: "+15 points" },
      { action: "3-wicket haul", points: "+10 bonus points" },
      { action: "4-wicket haul", points: "+15 bonus points" },
      { action: "5-wicket haul", points: "+25 bonus points" },
      { action: "Economy rate < 4 (min 2 overs)", points: "+10 points" }
    ],
    fielding: [
      { action: "Catch taken", points: "+10 points" },
      { action: "Stumping", points: "+15 points" },
      { action: "Direct hit run-out", points: "+15 points" },
      { action: "Run-out (non-striker end)", points: "+10 points" },
      { action: "3+ catches in a match", points: "+5 bonus points" }
    ]
  };

  const tips = [
    {
      icon: TrendingUp,
      title: "Research Player Form",
      description: "Check recent performances, not just overall statistics. A player in form is more likely to perform well."
    },
    {
      icon: Target,
      title: "Consider Match Conditions",
      description: "Pitch type, weather, and venue history can significantly impact player performance. Spinners do better on turning tracks."
    },
    {
      icon: Users,
      title: "Balance Your Team",
      description: "Don't put all your credits on star players. Sometimes lesser-known players deliver match-winning performances."
    },
    {
      icon: Clock,
      title: "Check Team News",
      description: "Last-minute changes happen. Always check the playing XI before the deadline to avoid selecting benched players."
    },
    {
      icon: Medal,
      title: "Captain Wisely",
      description: "Your captain choice is crucial. Pick someone with a high floor (consistent) rather than high ceiling (inconsistent)."
    },
    {
      icon: Zap,
      title: "Learn from Experience",
      description: "Review your past teams to understand what worked and what didn't. Fantasy cricket is a skill that improves with practice."
    }
  ];

  const faqs = [
    {
      question: "Is there any entry fee to play?",
      answer: "No, absolutely not. Kaveramma Fantasy Cricket is 100% free to play. There are no entry fees, no hidden charges, and no real money involved at any point."
    },
    {
      question: "Can I change my team after creating it?",
      answer: "Yes, you can modify your team as many times as you want until the match deadline (usually when the match starts). After the deadline, your team is locked."
    },
    {
      question: "What happens if a player I selected doesn't play?",
      answer: "If a player in your team doesn't play in the actual match, they will score 0 points. That's why it's important to check the playing XI before the deadline."
    },
    {
      question: "How are winners determined?",
      answer: "Winners are determined by total points scored by their fantasy team. The user with the highest points ranks first on the leaderboard."
    },
    {
      question: "Do winners get any prizes?",
      answer: "As a free-to-play educational platform, we don't offer monetary prizes. Winners get recognition on the leaderboard and bragging rights among their friends!"
    }
  ];

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
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-primary to-primary/90 text-white">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20 overflow-hidden">
          <div className="container relative">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-border/50 rounded-full shadow-sm mb-6">
                <ListChecks className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Step-by-Step Guide</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
                How to Play <span className="bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">Fantasy Cricket</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                New to fantasy cricket? Don't worry! This comprehensive guide will walk you through 
                everything you need to know to start playing and competing on our platform.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
                {[
                  { icon: CheckCircle2, text: "Free to Play" },
                  { icon: Shield, text: "No Real Money" },
                  { icon: Target, text: "Skill-Based" }
                ].map((badge, i) => (
                  <div key={i} className="flex items-center space-x-2 px-4 py-2 bg-white border border-border/50 rounded-full">
                    <badge.icon className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">{badge.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Steps */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-wider">
                Getting Started
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                5 Simple Steps to Play
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to create your first fantasy cricket team
              </motion.p>
            </motion.div>

            <div className="space-y-12">
              {mainSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`grid lg:grid-cols-2 gap-8 items-start p-6 lg:p-8 rounded-2xl border border-border/50 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                  }`}>
                    {/* Step Info */}
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-green-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Step Details */}
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="bg-white rounded-xl p-6 border border-border/50 shadow-sm">
                        <h4 className="font-semibold mb-4 flex items-center">
                          <step.icon className="w-5 h-5 mr-2 text-primary" />
                          Detailed Instructions
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start text-sm text-muted-foreground">
                              {detail.startsWith('  •') ? (
                                <span className="ml-6">{detail}</span>
                              ) : (
                                <>
                                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>{detail}</span>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                          <p className="text-sm">
                            <strong className="text-primary">💡 Pro Tip:</strong> {step.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connector Arrow */}
                  {index < mainSteps.length - 1 && (
                    <div className="flex justify-center my-4">
                      <ArrowRight className="w-8 h-8 text-border rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Points System */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                Scoring System
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                How Points Are Calculated
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                Understanding the points system will help you make better team selections
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Batting Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Batting Points</h3>
                <div className="space-y-3">
                  {pointsSystem.batting.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-sm text-muted-foreground">{item.action}</span>
                      <span className={`text-sm font-semibold ${item.points.includes('-') ? 'text-red-600' : 'text-green-600'}`}>
                        {item.points}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bowling Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Bowling Points</h3>
                <div className="space-y-3">
                  {pointsSystem.bowling.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-sm text-muted-foreground">{item.action}</span>
                      <span className="text-sm font-semibold text-green-600">{item.points}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Fielding Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Fielding Points</h3>
                <div className="space-y-3">
                  {pointsSystem.fielding.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-sm text-muted-foreground">{item.action}</span>
                      <span className="text-sm font-semibold text-green-600">{item.points}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-white rounded-2xl border border-border/50"
            >
              <h4 className="font-bold mb-2 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500 fill-yellow-500" />
                Captain & Vice-Captain Multipliers
              </h4>
              <p className="text-muted-foreground">
                <strong>Captain (C):</strong> All points earned by your captain are multiplied by 2x. 
                <strong className="ml-4">Vice-Captain (VC):</strong> All points earned by your vice-captain are multiplied by 1.5x.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                Expert Advice
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                Pro Tips for Success
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                Follow these tips from experienced fantasy cricket players
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-border/50"
                >
                  <div className={`w-12 h-12 rounded-xl ${
                    index % 3 === 0 ? 'bg-primary/10' : 
                    index % 3 === 1 ? 'bg-green-100' : 'bg-orange-100'
                  } flex items-center justify-center mb-4`}>
                    <tip.icon className={`w-6 h-6 ${
                      index % 3 === 0 ? 'text-primary' : 
                      index % 3 === 1 ? 'text-green-600' : 'text-orange-600'
                    }`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground text-sm">{tip.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-wider">
                Common Questions
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                Frequently Asked Questions
              </motion.h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-border/50"
                >
                  <h3 className="font-semibold mb-2 flex items-start">
                    <HelpCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm ml-7">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <Link href="/faq">
                <Button variant="outline" className="border-2">
                  View All FAQs
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary to-green-600 rounded-3xl p-10 lg:p-16 text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Start Playing?
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Now that you know how to play, create your free account and build your first fantasy team!
              </p>
              <Link href="/register">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
                  Create Free Account
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <div>
                <div className="font-bold">KAVERAMMA</div>
                <div className="text-xs text-white/60">Fantasy Cricket</div>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <Link href="/terms-and-conditions"><a className="hover:text-white">Terms</a></Link>
              <Link href="/privacy-policy"><a className="hover:text-white">Privacy</a></Link>
              <Link href="/contact"><a className="hover:text-white">Contact</a></Link>
            </div>
            <p className="text-sm text-white/40">© 2024 Kaveramma Fantasy Cricket</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Heart, ChevronRight, CheckCircle2, Clock, Users, Brain, Shield, AlertTriangle, Phone, BookOpen } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ResponsibleGaming() {
  const guidelines = [
    { icon: Clock, title: "Set Time Limits", description: "Decide how much time you want to spend on fantasy cricket and stick to it. Take regular breaks." },
    { icon: Brain, title: "Play for Fun", description: "Remember that fantasy cricket is meant to be entertaining. Don't let it become a source of stress." },
    { icon: Users, title: "Maintain Balance", description: "Keep a healthy balance between fantasy cricket and other activities, work, and relationships." },
    { icon: Shield, title: "Stay Informed", description: "Understand the rules and how the platform works. Knowledge leads to better decisions." }
  ];

  const warningSignsPersonal = [
    "Spending more time than intended on fantasy cricket",
    "Neglecting work, studies, or personal responsibilities",
    "Feeling restless or irritable when not playing",
    "Lying to others about time spent on the platform",
    "Using fantasy cricket to escape problems or negative feelings",
    "Difficulty stopping even when you want to"
  ];

  const healthyHabits = [
    "Set a daily or weekly time limit for using the platform",
    "Take a break every hour when playing",
    "Don't play when tired, stressed, or emotional",
    "Keep fantasy cricket as one of many hobbies",
    "Talk to friends and family about your gaming habits",
    "If it stops being fun, take a break"
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
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium">Your Wellbeing Matters</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Responsible Gaming</h1>
              <p className="text-lg text-muted-foreground">
                At Kaveramma Fantasy Cricket, we care about your wellbeing. While our platform is free-to-play 
                with no real money involved, we still encourage healthy gaming habits.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/5 to-green-500/5 rounded-2xl p-8 border border-border/50">
                <h2 className="text-2xl font-bold mb-4">Our Commitment to You</h2>
                <p className="text-muted-foreground mb-4">
                  Even though Kaveramma Fantasy Cricket is completely free-to-play with no real money involved, 
                  we recognize that any activity can become problematic if not balanced properly. We are committed to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-1" /><span>Promoting healthy gaming habits among all users</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-1" /><span>Providing resources for users who may need support</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-1" /><span>Maintaining a platform that is safe for all ages (18+)</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-1" /><span>Never introducing real money gambling or betting</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Guidelines */}
        <section className="py-12 bg-slate-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Guidelines for Healthy Gaming</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {guidelines.map((g, i) => (
                  <div key={i} className="p-5 bg-white rounded-xl border border-border/50 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <g.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{g.title}</h3>
                    <p className="text-sm text-muted-foreground">{g.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-amber-600" />
                  <h2 className="text-xl font-bold text-amber-800">Warning Signs to Watch For</h2>
                </div>
                <p className="text-amber-700 mb-4">
                  If you notice any of these signs in yourself or someone you know, it may be time to take a break:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {warningSignsPersonal.map((sign, i) => (
                    <li key={i} className="flex items-start text-sm text-amber-800">
                      <AlertTriangle className="w-4 h-4 mr-2 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Healthy Habits */}
        <section className="py-12 bg-slate-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                  <h2 className="text-xl font-bold text-green-800">Tips for Healthy Gaming</h2>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {healthyHabits.map((habit, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{habit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Self-Exclusion */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Self-Exclusion Option</h2>
              <div className="bg-slate-50 rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">
                  If you feel you need a break from fantasy cricket, we offer a self-exclusion option. 
                  You can request to temporarily or permanently deactivate your account by contacting our support team.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm"><CheckCircle2 className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" /><span><strong>Temporary Break:</strong> Deactivate your account for 7, 30, or 90 days</span></li>
                  <li className="flex items-start text-sm"><CheckCircle2 className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" /><span><strong>Permanent Exclusion:</strong> Permanently close your account</span></li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline">Request Self-Exclusion</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-12 bg-slate-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Support Resources</h2>
              <p className="text-muted-foreground mb-6">
                If you or someone you know is struggling with gaming habits or any form of addiction, 
                these resources can help:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border border-border/50">
                  <Phone className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">iCall - TISS</h3>
                  <p className="text-sm text-muted-foreground mb-2">Free psychological counseling service</p>
                  <p className="font-mono text-primary">9152987821</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-border/50">
                  <Phone className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Vandrevala Foundation</h3>
                  <p className="text-sm text-muted-foreground mb-2">24/7 mental health helpline</p>
                  <p className="font-mono text-primary">1860-2662-345</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Age Restriction */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold text-lg">18+</span>
                  </div>
                  <h2 className="text-xl font-bold text-red-800">Age Restriction</h2>
                </div>
                <p className="text-red-700">
                  Kaveramma Fantasy Cricket is strictly for users aged 18 and above. We take this seriously 
                  and verify age during registration. If you are under 18, please do not attempt to use this platform. 
                  Parents and guardians should monitor their children's online activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-12 bg-slate-50">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about responsible gaming or need support, our team is here to help.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-green-600 text-white">
                  Contact Support <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
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

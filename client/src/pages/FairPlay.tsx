import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, ChevronRight, CheckCircle2, XCircle, AlertTriangle, Scale, Eye, Ban, Award } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function FairPlay() {
  const principles = [
    { icon: Scale, title: "Equal Opportunity", description: "Every user has the same chance to succeed based on their cricket knowledge and strategy" },
    { icon: Eye, title: "Transparency", description: "All rules, points systems, and policies are clearly documented and accessible" },
    { icon: Shield, title: "Integrity", description: "We maintain the highest standards of honesty and ethical conduct" },
    { icon: Award, title: "Merit-Based", description: "Success is determined solely by skill and knowledge, not by unfair advantages" }
  ];

  const allowed = [
    "Creating one account per person",
    "Researching players and matches before making selections",
    "Discussing strategies with friends and family",
    "Using publicly available cricket statistics and news",
    "Modifying your team before the deadline",
    "Participating in multiple matches simultaneously",
    "Sharing your achievements on social media",
    "Providing feedback to improve the platform"
  ];

  const prohibited = [
    "Creating multiple accounts",
    "Using bots, scripts, or automated tools",
    "Sharing account credentials with others",
    "Colluding with other users to manipulate outcomes",
    "Exploiting bugs or vulnerabilities in the system",
    "Using VPN to bypass geographic restrictions",
    "Impersonating other users or staff",
    "Harassment or abusive behavior toward other users",
    "Attempting to hack or compromise the platform",
    "Spreading false information about the platform"
  ];

  const consequences = [
    { level: "Warning", description: "First-time minor violations may result in a warning", color: "yellow" },
    { level: "Temporary Suspension", description: "Repeated or moderate violations lead to account suspension", color: "orange" },
    { level: "Permanent Ban", description: "Serious violations result in permanent account termination", color: "red" }
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
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Fair Play Commitment</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Fair Play Policy</h1>
              <p className="text-lg text-muted-foreground">
                At Kaveramma Fantasy Cricket, we are committed to providing a fair, transparent, and enjoyable experience for all users.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Our Fair Play Principles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {principles.map((p, i) => (
                  <div key={i} className="p-5 bg-slate-50 rounded-xl text-center">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-3">
                      <p.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Allowed vs Prohibited */}
        <section className="py-12 bg-slate-50">
          <div className="container">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700">What's Allowed</h3>
                </div>
                <ul className="space-y-3">
                  {allowed.map((item, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-red-700">What's Prohibited</h3>
                </div>
                <ul className="space-y-3">
                  {prohibited.map((item, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <XCircle className="w-4 h-4 mr-2 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Consequences */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Consequences of Violations</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {consequences.map((c, i) => (
                  <div key={i} className={`p-5 rounded-xl border-2 ${
                    c.color === 'yellow' ? 'border-yellow-300 bg-yellow-50' :
                    c.color === 'orange' ? 'border-orange-300 bg-orange-50' :
                    'border-red-300 bg-red-50'
                  }`}>
                    <h3 className={`font-bold mb-2 ${
                      c.color === 'yellow' ? 'text-yellow-700' :
                      c.color === 'orange' ? 'text-orange-700' :
                      'text-red-700'
                    }`}>{c.level}</h3>
                    <p className="text-sm text-muted-foreground">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detection */}
        <section className="py-12 bg-slate-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">How We Detect Violations</h2>
              <div className="bg-white rounded-2xl p-6 border border-border/50">
                <p className="text-muted-foreground mb-4">
                  We employ multiple methods to ensure fair play on our platform:
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" /><span><strong>Automated Systems:</strong> AI-powered algorithms monitor for suspicious patterns and behaviors</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" /><span><strong>Device Fingerprinting:</strong> We detect multiple accounts from the same device</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" /><span><strong>IP Analysis:</strong> Unusual IP patterns are flagged for review</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" /><span><strong>User Reports:</strong> Community reports are investigated by our team</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" /><span><strong>Manual Review:</strong> Our team reviews flagged accounts and activities</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Report */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Report a Violation</h2>
              <p className="text-muted-foreground mb-6">
                If you suspect any user is violating our Fair Play Policy, please report it immediately. 
                All reports are confidential and will be investigated.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-green-600 text-white">
                  Report Violation <ChevronRight className="w-4 h-4 ml-2" />
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

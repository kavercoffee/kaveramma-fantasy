import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, XCircle, AlertTriangle, Scale, Eye, Award, Calendar, Users, Lock, FileText, MessageSquare, Ban, UserX, AlertCircle, Search, Gavel, TrendingUp } from "lucide-react";

export default function FairPlay() {
  const lastUpdated = "December 18, 2025";

  const principles = [
    { icon: Scale, title: "Equal Opportunity", description: "Every user has the same chance to succeed based on skill" },
    { icon: Eye, title: "Transparency", description: "All rules, scoring, and processes are clearly documented" },
    { icon: Shield, title: "Integrity", description: "Highest standards of ethical conduct and data protection" },
    { icon: Award, title: "Merit-Based", description: "Success determined by cricket knowledge and strategy alone" }
  ];

  const allowed = [
    "Creating one account per person with verified email",
    "Researching players, match conditions, and historical statistics",
    "Discussing strategies and tips with friends and community",
    "Using publicly available cricket statistics and analysis",
    "Modifying your team lineup before match deadline",
    "Participating in multiple matches simultaneously",
    "Sharing achievements and team selections on social media",
    "Reading cricket news, expert opinions, and match previews",
    "Analyzing player form, pitch conditions, and weather reports",
    "Creating different team combinations for different matches"
  ];

  const prohibited = [
    "Creating multiple accounts to gain unfair advantage",
    "Using bots, scripts, or automated tools for team selection",
    "Sharing account credentials with others",
    "Colluding with other users to manipulate rankings",
    "Exploiting bugs, glitches, or system vulnerabilities",
    "Using VPN or proxy to bypass state-based restrictions",
    "Harassment, abusive behavior, or offensive communication",
    "Impersonating other users or platform administrators",
    "Attempting to hack, reverse engineer, or tamper with the platform",
    "Submitting false information during registration",
    "Manipulating or interfering with other users' teams",
    "Using insider information not publicly available"
  ];

  const violationTypes = [
    {
      title: "Account Violations",
      icon: UserX,
      color: "red",
      items: [
        "Multiple account creation (one person, multiple accounts)",
        "Account sharing or credential trading",
        "Fake identity or false registration information",
        "Underage registration (below 18 years)",
        "Registration from restricted states"
      ]
    },
    {
      title: "Technical Violations",
      icon: AlertCircle,
      color: "orange",
      items: [
        "Use of bots, automation, or scraping tools",
        "Exploiting platform bugs or vulnerabilities",
        "Reverse engineering or tampering with code",
        "DDoS attacks or system disruption attempts",
        "Unauthorized API access or data extraction"
      ]
    },
    {
      title: "Behavioral Violations",
      icon: Ban,
      color: "purple",
      items: [
        "Harassment, threats, or abusive language",
        "Hate speech or discriminatory content",
        "Spam or unsolicited promotional content",
        "Impersonation of users or staff",
        "Collusion or match-fixing attempts"
      ]
    }
  ];

  const detectionMethods = [
    {
      icon: Search,
      title: "Automated Monitoring",
      description: "AI-powered systems continuously monitor user activity patterns, team selections, and account behavior to detect anomalies and suspicious activities in real-time."
    },
    {
      icon: Users,
      title: "Community Reporting",
      description: "Users can report suspicious behavior through our reporting system. Every report is reviewed by our moderation team within 24-48 hours."
    },
    {
      icon: TrendingUp,
      title: "Pattern Analysis",
      description: "Advanced algorithms analyze team selection patterns, login locations, device fingerprints, and behavioral trends to identify coordinated manipulation attempts."
    },
    {
      icon: Lock,
      title: "Security Audits",
      description: "Regular security audits and penetration testing ensure platform integrity. We maintain detailed logs of all user actions for investigation purposes."
    }
  ];

  const consequences = [
    {
      severity: "Minor Violation",
      color: "yellow",
      icon: AlertTriangle,
      examples: ["First-time minor rule misunderstanding", "Accidental duplicate account creation", "Minor communication guideline breach"],
      actions: ["Written warning via email", "Educational guidance on rules", "Monitoring of future activity", "No immediate account restriction"]
    },
    {
      severity: "Moderate Violation",
      color: "orange",
      icon: AlertCircle,
      examples: ["Repeated minor violations", "Attempted VPN usage", "Sharing account credentials", "Harassment or abusive language"],
      actions: ["Temporary account suspension (7-30 days)", "Removal from current contests", "Loss of leaderboard positions", "Mandatory acknowledgment of rules"]
    },
    {
      severity: "Severe Violation",
      color: "red",
      icon: XCircle,
      examples: ["Multiple account operation", "Bot usage or automation", "Collusion or match-fixing", "System exploitation or hacking attempts"],
      actions: ["Permanent account termination", "IP and device ban", "Removal of all achievements", "Legal action if applicable", "Reporting to authorities if criminal"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm text-white/80">Play Fair, Play Smart</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Fair Play Policy
            </h1>
            <p className="text-lg text-white/70 mb-6">
              Our comprehensive commitment to maintaining a fair, transparent, and enjoyable gaming environment for all users
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-white/60">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Fair Play</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  At Kaveramma Fantasy Cricket, fair play is the foundation of our platform. We believe that fantasy cricket should be a level playing field where success is determined solely by cricket knowledge, strategic thinking, and analytical skills—not by unfair advantages, manipulation, or deceptive practices.
                </p>
                <p>
                  This Fair Play Policy outlines our rules, expectations, enforcement mechanisms, and consequences for violations. By using our platform, you agree to abide by these guidelines and contribute to a positive, ethical gaming community.
                </p>
                <p>
                  We employ advanced technology, human moderation, and community reporting to detect and prevent unfair practices. Our goal is to ensure that every user has an equal opportunity to enjoy fantasy cricket in a safe, transparent, and respectful environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Core Fair Play Principles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="p-6 bg-white rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Allowed vs Prohibited */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What's Allowed & What's Not</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Allowed */}
              <motion.div 
                className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-50 px-6 py-5 border-b-2 border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800">Allowed Activities</h3>
                  </div>
                  <p className="text-sm text-green-700 mt-2">These practices are encouraged and supported</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {allowed.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Prohibited */}
              <motion.div 
                className="bg-white rounded-2xl border-2 border-red-200 overflow-hidden shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-red-50 px-6 py-5 border-b-2 border-red-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-red-800">Prohibited Activities</h3>
                  </div>
                  <p className="text-sm text-red-700 mt-2">These actions will result in penalties</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {prohibited.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Violation Types */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Types of Violations</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We categorize violations into three main types. Each category has specific examples and corresponding enforcement actions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {violationTypes.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`bg-${category.color}-50 px-6 py-5 border-b border-${category.color}-200`}>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 bg-${category.color}-100 rounded-lg`}>
                        <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                      </div>
                      <h3 className={`text-lg font-bold text-${category.color}-800`}>{category.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className={`text-${category.color}-500 mt-1`}>•</span>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detection Methods */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">How We Detect Violations</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We employ multiple layers of detection technology and human oversight to identify and prevent unfair practices.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {detectionMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gray-50 rounded-2xl border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0">
                      <method.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consequences */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Consequences of Violations</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Penalties are applied based on violation severity. We follow a progressive enforcement approach, escalating consequences for repeated violations.
            </p>
            <div className="space-y-6">
              {consequences.map((consequence, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-2xl border-2 border-${consequence.color}-200 overflow-hidden shadow-sm`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`bg-${consequence.color}-50 px-6 py-4 border-b-2 border-${consequence.color}-200`}>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 bg-${consequence.color}-100 rounded-lg`}>
                        <consequence.icon className={`w-6 h-6 text-${consequence.color}-600`} />
                      </div>
                      <h3 className={`text-xl font-bold text-${consequence.color}-800`}>{consequence.severity}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                        <ul className="space-y-2">
                          {consequence.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="text-gray-400 mt-1">•</span>
                              <span className="text-sm text-gray-700">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Enforcement Actions:</h4>
                        <ul className="space-y-2">
                          {consequence.actions.map((action, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className={`text-${consequence.color}-500 mt-1`}>→</span>
                              <span className="text-sm text-gray-700">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reporting & Appeals */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Reporting */}
              <motion.div
                className="bg-blue-50 rounded-2xl p-8 border border-blue-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">Report Violations</h3>
                </div>
                <p className="text-blue-800 mb-4">
                  If you suspect unfair play or witness violations, please report them immediately.
                </p>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-start space-x-2">
                    <span>•</span>
                    <span>Email: support@kaverammafantasy.com</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>•</span>
                    <span>Include user details, screenshots, and description</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>•</span>
                    <span>All reports reviewed within 24-48 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>•</span>
                    <span>Reporter identity kept confidential</span>
                  </li>
                </ul>
              </motion.div>

              {/* Appeals */}
              <motion.div
                className="bg-purple-50 rounded-2xl p-8 border border-purple-200"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Gavel className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900">Appeal Process</h3>
                </div>
                <p className="text-purple-800 mb-4">
                  If you believe you were penalized unfairly, you have the right to appeal.
                </p>
                <ul className="space-y-2 text-sm text-purple-700">
                  <li className="flex items-start space-x-2">
                    <span>•</span>
                    <span>Submit appeal within 7 days of penalty</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>•</span>
                    <span>Provide evidence supporting your case</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>•</span>
                    <span>Appeals reviewed by senior moderation team</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>•</span>
                    <span>Final decision communicated within 5-7 business days</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">Our Commitment to You</h3>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              We are dedicated to maintaining a fair, transparent, and enjoyable gaming environment for all users. Fair play is not just a policy—it's the foundation of our community. Together, we can ensure that Kaveramma Fantasy Cricket remains a platform where skill, knowledge, and strategy determine success.
            </p>
            <p className="text-white/80 text-sm">
              Thank you for being part of our fair play community. Let's keep fantasy cricket fun, fair, and accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

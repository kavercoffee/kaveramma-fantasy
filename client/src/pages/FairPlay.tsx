import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, XCircle, AlertTriangle, Scale, Eye, Award, Calendar } from "lucide-react";

export default function FairPlay() {
  const lastUpdated = "December 18, 2025";

  const principles = [
    { icon: Scale, title: "Equal Opportunity", description: "Every user has the same chance to succeed" },
    { icon: Eye, title: "Transparency", description: "All rules are clearly documented" },
    { icon: Shield, title: "Integrity", description: "Highest standards of ethical conduct" },
    { icon: Award, title: "Merit-Based", description: "Success determined by skill alone" }
  ];

  const allowed = [
    "Creating one account per person",
    "Researching players and matches",
    "Discussing strategies with friends",
    "Using publicly available statistics",
    "Modifying team before deadline",
    "Participating in multiple matches",
    "Sharing achievements on social media"
  ];

  const prohibited = [
    "Creating multiple accounts",
    "Using bots or automated tools",
    "Sharing account credentials",
    "Colluding with other users",
    "Exploiting bugs or vulnerabilities",
    "Using VPN to bypass restrictions",
    "Harassment or abusive behavior"
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
              Our commitment to maintaining a fair and enjoyable gaming environment
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-white/60">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Our Core Principles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {principles.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="p-5 bg-gray-50 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Allowed vs Prohibited */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Allowed */}
              <motion.div 
                className="bg-white rounded-2xl border border-green-200 overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-50 px-6 py-4 border-b border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-green-800">Allowed Activities</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {allowed.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Prohibited */}
              <motion.div 
                className="bg-white rounded-2xl border border-red-200 overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-red-50 px-6 py-4 border-b border-red-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <XCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-red-800">Prohibited Activities</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {prohibited.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Consequences */}
            <motion.div 
              className="mt-10 bg-white rounded-2xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-amber-50 px-6 py-4 border-b border-amber-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-800">Consequences of Violations</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <h4 className="font-semibold text-yellow-800 mb-2">Warning</h4>
                    <p className="text-sm text-yellow-700">First-time minor violations may result in a warning</p>
                  </div>
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl">
                    <h4 className="font-semibold text-orange-800 mb-2">Temporary Suspension</h4>
                    <p className="text-sm text-orange-700">Repeated violations lead to account suspension</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <h4 className="font-semibold text-red-800 mb-2">Permanent Ban</h4>
                    <p className="text-sm text-red-700">Serious violations result in permanent termination</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Commitment */}
            <motion.div 
              className="mt-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Shield className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">Our Commitment to Fair Play</h3>
              <p className="text-white/80 max-w-xl mx-auto">
                We are dedicated to maintaining a fair, transparent, and enjoyable gaming environment for all users.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Shield, Calendar, Lock, Eye, Database, UserCheck } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "December 18, 2024";

  const highlights = [
    { icon: Lock, title: "Data Encryption", description: "All personal data is encrypted" },
    { icon: Eye, title: "No Third-Party Selling", description: "We never sell your data" },
    { icon: Database, title: "Minimal Collection", description: "Only what we need" },
    { icon: UserCheck, title: "User Control", description: "Full control over your data" }
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
              <span className="text-sm text-white/80">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/70 mb-6">
              How we collect, use, and protect your personal information
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-white/60">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                <div className="p-2 bg-green-100 rounded-lg">
                  <item.icon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-8 lg:p-10 prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mt-0">1. Introduction</h2>
                <p>
                  <strong>KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</strong> operates Kaveramma Fantasy 
                  Cricket. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you use our Platform.
                </p>

                <h2 className="text-2xl font-bold text-gray-900">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-800">2.1 Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Full name, email address, password (encrypted)</li>
                  <li>Date of birth (for age verification)</li>
                  <li>State of residence (for compliance)</li>
                  <li>Team selections and contest participation</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800">2.2 Automatic Information</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Device type, browser, operating system</li>
                  <li>IP address and access times</li>
                  <li>Pages viewed and usage patterns</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800">2.3 What We Do NOT Collect</h3>
                <p>Since we are free-to-play with no monetary transactions:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>No bank account or payment details</li>
                  <li>No credit/debit card information</li>
                  <li>No PAN, Aadhaar, or financial data</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Create and manage your account</li>
                  <li>Verify age and geographic eligibility</li>
                  <li>Provide and improve our services</li>
                  <li>Send important updates and notifications</li>
                  <li>Detect and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900">4. Data Sharing</h2>
                <p><strong>We do NOT sell your personal information.</strong> We may share data with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Service providers who help operate our platform</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900">5. Data Security</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>TLS/SSL encryption for data transmission</li>
                  <li>Bcrypt hashing for passwords</li>
                  <li>Regular security audits</li>
                  <li>Restricted employee access</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900">6. Your Rights</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Access:</strong> Request a copy of your data</li>
                  <li><strong>Correction:</strong> Update inaccurate information</li>
                  <li><strong>Deletion:</strong> Request account deletion</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900">7. Cookies</h2>
                <p>We use cookies for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Essential functionality (authentication)</li>
                  <li>Remembering preferences</li>
                  <li>Analytics and improvements</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900">8. Children's Privacy</h2>
                <p>
                  Our Platform is not intended for users under 18. We do not knowingly collect 
                  information from minors.
                </p>

                <h2 className="text-2xl font-bold text-gray-900">9. Data Retention</h2>
                <p>
                  We retain data while your account is active. After deletion, we may retain 
                  certain information for up to 90 days for legal compliance.
                </p>

                <h2 className="text-2xl font-bold text-gray-900">10. Contact Us</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-1"><strong>KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</strong></p>
                  <p className="mb-1">Address: C/O S K MOHAN, MEKOOR, SIDDAPURA, Pollibetta, Virajpet, Kodagu - 571215, Karnataka</p>
                  <p>Email: privacy@kaverammafantasy.com</p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <motion.div 
              className="mt-10 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Shield className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">Your Privacy is Protected</h3>
              <p className="text-white/80 max-w-xl mx-auto">
                We are committed to protecting your personal information and being transparent about how we use it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

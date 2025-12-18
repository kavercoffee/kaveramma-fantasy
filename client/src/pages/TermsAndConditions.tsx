import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { FileText, Calendar, AlertTriangle, CheckCircle } from "lucide-react";

export default function TermsAndConditions() {
  const lastUpdated = "December 18, 2024";

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
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-white/80">Legal Document</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-white/70 mb-6">
              Please read these terms carefully before using Kaveramma Fantasy Cricket
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-white/60">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Important Notice */}
            <motion.div 
              className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Important Notice</h3>
                  <p className="text-sm text-amber-800">
                    By using Kaveramma Fantasy Cricket, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Terms Content */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-8 lg:p-10 prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mt-0">1. Introduction and Acceptance</h2>
                <p>
                  Welcome to Kaveramma Fantasy Cricket ("Platform", "Service", "we", "us", or "our"), 
                  operated by <strong>KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</strong>, a company 
                  incorporated under the laws of India with Corporate Identification Number (CIN): 
                  U10792KA2024PTC186508, having its registered office at C/O S K MOHAN, MEKOOR, SIDDAPURA, 
                  Pollibetta, Virajpet, Kodagu - 571215, Karnataka, India.
                </p>
                <p>
                  By creating an account, accessing, or using our Platform, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms, our Privacy Policy, Fair Play Policy, and 
                  Responsible Gaming Policy.
                </p>

                <h2 className="text-2xl font-bold text-gray-900">2. Eligibility Requirements</h2>
                <h3 className="text-xl font-semibold text-gray-800">2.1 Age Requirement</h3>
                <p>
                  You must be at least <strong>18 (eighteen) years of age</strong> to create an account and 
                  use our Platform. By registering, you represent and warrant that you are at least 18 years old.
                </p>

                <h3 className="text-xl font-semibold text-gray-800">2.2 Geographic Restrictions</h3>
                <p>Our Platform is <strong>NOT available</strong> to residents of:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Andhra Pradesh</li>
                  <li>Assam</li>
                  <li>Nagaland</li>
                  <li>Odisha</li>
                  <li>Sikkim</li>
                  <li>Telangana</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900">3. Nature of the Platform</h2>
                <h3 className="text-xl font-semibold text-gray-800">3.1 Free-to-Play Model</h3>
                <p>Kaveramma Fantasy Cricket is a <strong>100% free-to-play</strong> platform:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>No registration fees</li>
                  <li>No entry fees for any contest</li>
                  <li>No deposits or withdrawals of real money</li>
                  <li>No monetary prizes or rewards</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800">3.2 Skill-Based Gaming</h3>
                <p>
                  Fantasy cricket as offered on our Platform is a game of skill. Success depends on your 
                  knowledge of cricket, understanding of player performance, and strategic decision-making. 
                  This is NOT gambling, betting, or a game of chance.
                </p>

                <h2 className="text-2xl font-bold text-gray-900">4. Account Registration and Security</h2>
                <p>To use our Platform, you must create an account by providing accurate information including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Valid email address</li>
                  <li>Full legal name</li>
                  <li>Date of birth</li>
                  <li>State of residence</li>
                  <li>Secure password</li>
                </ul>
                <p>Each user is permitted to maintain only <strong>ONE (1) account</strong> on the Platform.</p>

                <h2 className="text-2xl font-bold text-gray-900">5. Platform Rules and Gameplay</h2>
                <p>When participating in fantasy cricket contests:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>You must select exactly 11 players for your team</li>
                  <li>Your team must comply with the specified player composition rules</li>
                  <li>You must designate one Captain (2x points) and one Vice-Captain (1.5x points)</li>
                  <li>Teams must be submitted before the match deadline</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900">6. Prohibited Activities</h2>
                <p>You agree NOT to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Create multiple accounts or use another person's account</li>
                  <li>Provide false or misleading information</li>
                  <li>Use automated systems, bots, or scripts</li>
                  <li>Attempt to manipulate contest outcomes</li>
                  <li>Use VPN or proxy to circumvent geographic restrictions</li>
                  <li>Engage in any form of cheating or fraudulent activity</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900">7. Intellectual Property</h2>
                <p>
                  All content on the Platform is the property of Kaveramma Coffee Curing Works Private Limited 
                  and is protected by Indian and international copyright laws.
                </p>

                <h2 className="text-2xl font-bold text-gray-900">8. Disclaimer of Warranties</h2>
                <p>
                  THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND. 
                  We do not warrant that the Platform will be uninterrupted, timely, secure, or error-free.
                </p>

                <h2 className="text-2xl font-bold text-gray-900">9. Limitation of Liability</h2>
                <p>
                  Since our Platform is free-to-play with no monetary transactions, our total liability 
                  to you shall not exceed INR 1,000 (One Thousand Indian Rupees).
                </p>

                <h2 className="text-2xl font-bold text-gray-900">10. Account Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your account at any time for violation of 
                  these Terms, suspected fraudulent activity, or any other reason at our discretion.
                </p>

                <h2 className="text-2xl font-bold text-gray-900">11. Governing Law</h2>
                <p>
                  These Terms shall be governed by the laws of India. Any disputes shall be subject to 
                  the exclusive jurisdiction of courts in Kodagu, Karnataka.
                </p>

                <h2 className="text-2xl font-bold text-gray-900">12. Contact Information</h2>
                <p>For questions about these Terms, contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-1"><strong>KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</strong></p>
                  <p className="mb-1">Address: C/O S K MOHAN, MEKOOR, SIDDAPURA, Pollibetta, Virajpet, Kodagu - 571215, Karnataka</p>
                  <p className="mb-1">CIN: U10792KA2024PTC186508</p>
                  <p>Email: support@kaverammafantasy.com</p>
                </div>
              </div>
            </div>

            {/* Agreement Confirmation */}
            <motion.div 
              className="mt-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">Agreement Acknowledgment</h3>
              <p className="text-white/80 max-w-xl mx-auto">
                By creating an account and using Kaveramma Fantasy Cricket, you confirm that you have read, 
                understood, and agree to these Terms and Conditions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

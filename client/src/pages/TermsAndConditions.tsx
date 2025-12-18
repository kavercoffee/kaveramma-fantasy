import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FileText, ChevronRight, AlertTriangle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function TermsAndConditions() {
  const lastUpdated = "December 18, 2024";

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
        <section className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20">
          <div className="container">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-border/50 rounded-full shadow-sm mb-6">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Legal Document</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Terms & Conditions
              </h1>
              
              <p className="text-muted-foreground">
                Last updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Important Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
                    <p className="text-amber-700 text-sm">
                      Please read these Terms and Conditions carefully before using Kaveramma Fantasy Cricket. 
                      By accessing or using our platform, you agree to be bound by these terms. If you do not 
                      agree with any part of these terms, you may not use our services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                <h2>1. Introduction and Acceptance</h2>
                <p>
                  Welcome to Kaveramma Fantasy Cricket ("Platform", "Service", "we", "us", or "our"), 
                  operated by <strong>KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</strong>, a company 
                  incorporated under the laws of India with Corporate Identification Number (CIN): 
                  U10792KA2024PTC186508, having its registered office at C/O S K MOHAN, MEKOOR, SIDDAPURA, 
                  Pollibetta, Virajpet, Kodagu - 571215, Karnataka, India.
                </p>
                <p>
                  These Terms and Conditions ("Terms") govern your access to and use of the Kaveramma Fantasy 
                  Cricket platform, including any content, functionality, and services offered on or through 
                  our website at kaverammafantasy.com.
                </p>
                <p>
                  By creating an account, accessing, or using our Platform, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms, our Privacy Policy, Fair Play Policy, and 
                  Responsible Gaming Policy. These documents together constitute a legally binding agreement 
                  between you and Kaveramma Fantasy Cricket.
                </p>

                <h2>2. Eligibility Requirements</h2>
                <h3>2.1 Age Requirement</h3>
                <p>
                  You must be at least <strong>18 (eighteen) years of age</strong> to create an account and 
                  use our Platform. By registering, you represent and warrant that you are at least 18 years 
                  old. We reserve the right to request proof of age at any time and may suspend or terminate 
                  accounts if we have reason to believe the user is under 18.
                </p>

                <h3>2.2 Geographic Restrictions</h3>
                <p>
                  Due to legal restrictions in certain Indian states regarding online gaming, our Platform is 
                  <strong> NOT available</strong> to residents of the following states:
                </p>
                <ul>
                  <li>Andhra Pradesh</li>
                  <li>Assam</li>
                  <li>Nagaland</li>
                  <li>Odisha</li>
                  <li>Sikkim</li>
                  <li>Telangana</li>
                </ul>
                <p>
                  If you are a resident of any of these states, you are prohibited from registering or using 
                  our Platform. Attempting to circumvent these restrictions through VPN, proxy, or any other 
                  means is a violation of these Terms and may result in immediate account termination.
                </p>

                <h3>2.3 Legal Capacity</h3>
                <p>
                  You must have the legal capacity to enter into a binding contract. Employees, directors, 
                  and immediate family members of Kaveramma Coffee Curing Works Private Limited are not 
                  eligible to participate in contests on the Platform.
                </p>

                <h2>3. Nature of the Platform</h2>
                <h3>3.1 Free-to-Play Model</h3>
                <p>
                  Kaveramma Fantasy Cricket is a <strong>100% free-to-play</strong> platform. There are:
                </p>
                <ul>
                  <li>No registration fees</li>
                  <li>No entry fees for any contest</li>
                  <li>No deposits or withdrawals of real money</li>
                  <li>No monetary prizes or rewards</li>
                  <li>No in-app purchases required for gameplay</li>
                </ul>

                <h3>3.2 Skill-Based Gaming</h3>
                <p>
                  Fantasy cricket as offered on our Platform is a game of skill. Success depends on your 
                  knowledge of cricket, understanding of player performance, and strategic decision-making. 
                  This is NOT gambling, betting, or a game of chance.
                </p>

                <h3>3.3 Educational Purpose</h3>
                <p>
                  Our Platform is designed for entertainment and educational purposes. It helps users learn 
                  about cricket strategy, player analysis, and team management without any financial risk.
                </p>

                <h2>4. Account Registration and Security</h2>
                <h3>4.1 Account Creation</h3>
                <p>
                  To use our Platform, you must create an account by providing accurate and complete 
                  information including:
                </p>
                <ul>
                  <li>Valid email address</li>
                  <li>Full legal name</li>
                  <li>Date of birth</li>
                  <li>State of residence</li>
                  <li>Secure password</li>
                </ul>

                <h3>4.2 Account Accuracy</h3>
                <p>
                  You agree to provide truthful, accurate, and complete information during registration and 
                  to keep this information updated. Providing false information, including but not limited 
                  to age, name, or state of residence, is grounds for immediate account termination.
                </p>

                <h3>4.3 One Account Policy</h3>
                <p>
                  Each user is permitted to maintain only <strong>ONE (1) account</strong> on the Platform. 
                  Creating multiple accounts is strictly prohibited and will result in permanent banning of 
                  all associated accounts.
                </p>

                <h3>4.4 Account Security</h3>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and 
                  for all activities that occur under your account. You must:
                </p>
                <ul>
                  <li>Keep your password confidential and not share it with anyone</li>
                  <li>Notify us immediately of any unauthorized access or security breach</li>
                  <li>Ensure you log out from your account after each session</li>
                  <li>Not allow others to use your account</li>
                </ul>

                <h2>5. Platform Rules and Gameplay</h2>
                <h3>5.1 Contest Rules</h3>
                <p>
                  When participating in fantasy cricket contests on our Platform:
                </p>
                <ul>
                  <li>You must select exactly 11 players for your team</li>
                  <li>Your team must comply with the specified player composition rules</li>
                  <li>You must select players from both teams playing in the match</li>
                  <li>You must designate one Captain (2x points) and one Vice-Captain (1.5x points)</li>
                  <li>Teams must be submitted before the match deadline</li>
                  <li>Once the deadline passes, teams cannot be modified</li>
                </ul>

                <h3>5.2 Points Calculation</h3>
                <p>
                  Points are calculated based on the actual performance of players in real cricket matches. 
                  The detailed points system is available on our "How to Play" page. We reserve the right 
                  to modify the points system with prior notice to users.
                </p>

                <h3>5.3 Leaderboard and Rankings</h3>
                <p>
                  Rankings are determined by total points scored. In case of a tie, the user who submitted 
                  their team first will be ranked higher. Leaderboard positions are for recognition only 
                  and do not entitle users to any monetary rewards.
                </p>

                <h2>6. Prohibited Activities</h2>
                <p>You agree NOT to:</p>
                <ul>
                  <li>Create multiple accounts or use another person's account</li>
                  <li>Provide false or misleading information</li>
                  <li>Use automated systems, bots, or scripts to interact with the Platform</li>
                  <li>Attempt to manipulate contest outcomes or exploit system vulnerabilities</li>
                  <li>Collude with other users to gain unfair advantages</li>
                  <li>Use VPN or proxy to circumvent geographic restrictions</li>
                  <li>Engage in any form of cheating or fraudulent activity</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Attempt to reverse engineer or hack the Platform</li>
                  <li>Use the Platform for any commercial purposes without authorization</li>
                </ul>

                <h2>7. Intellectual Property</h2>
                <h3>7.1 Our Rights</h3>
                <p>
                  All content on the Platform, including but not limited to text, graphics, logos, icons, 
                  images, audio clips, digital downloads, and software, is the property of Kaveramma Coffee 
                  Curing Works Private Limited or its content suppliers and is protected by Indian and 
                  international copyright laws.
                </p>

                <h3>7.2 Limited License</h3>
                <p>
                  We grant you a limited, non-exclusive, non-transferable, revocable license to access and 
                  use the Platform for personal, non-commercial purposes in accordance with these Terms.
                </p>

                <h3>7.3 User Content</h3>
                <p>
                  By submitting any content to the Platform (such as team names or profile information), 
                  you grant us a worldwide, royalty-free license to use, reproduce, and display such content 
                  in connection with operating the Platform.
                </p>

                <h2>8. Disclaimer of Warranties</h2>
                <p>
                  THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, 
                  EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
                </p>
                <ul>
                  <li>The Platform will be uninterrupted, timely, secure, or error-free</li>
                  <li>The results obtained from using the Platform will be accurate or reliable</li>
                  <li>Any errors in the Platform will be corrected</li>
                </ul>

                <h2>9. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED 
                  SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
                  DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM.
                </p>
                <p>
                  Since our Platform is free-to-play with no monetary transactions, our total liability 
                  to you for any claims arising from your use of the Platform shall not exceed INR 1,000 
                  (One Thousand Indian Rupees).
                </p>

                <h2>10. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Kaveramma Coffee Curing Works Private 
                  Limited, its officers, directors, employees, and agents from any claims, damages, losses, 
                  liabilities, and expenses (including legal fees) arising from:
                </p>
                <ul>
                  <li>Your use of the Platform</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Any content you submit to the Platform</li>
                </ul>

                <h2>11. Account Termination</h2>
                <h3>11.1 Termination by You</h3>
                <p>
                  You may terminate your account at any time by contacting our support team. Upon 
                  termination, your right to use the Platform will immediately cease.
                </p>

                <h3>11.2 Termination by Us</h3>
                <p>
                  We reserve the right to suspend or terminate your account at any time, with or without 
                  notice, for any reason, including but not limited to:
                </p>
                <ul>
                  <li>Violation of these Terms</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Providing false information</li>
                  <li>Creating multiple accounts</li>
                  <li>Any conduct we deem harmful to other users or the Platform</li>
                </ul>

                <h2>12. Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective 
                  immediately upon posting on the Platform. Your continued use of the Platform after 
                  any changes constitutes acceptance of the modified Terms. We encourage you to review 
                  these Terms periodically.
                </p>

                <h2>13. Governing Law and Jurisdiction</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India. 
                  Any disputes arising from these Terms or your use of the Platform shall be subject to 
                  the exclusive jurisdiction of the courts in Kodagu, Karnataka, India.
                </p>

                <h2>14. Dispute Resolution</h2>
                <p>
                  In the event of any dispute, you agree to first attempt to resolve the matter informally 
                  by contacting us. If the dispute cannot be resolved informally within 30 days, either 
                  party may pursue formal legal remedies.
                </p>

                <h2>15. Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision 
                  shall be limited or eliminated to the minimum extent necessary, and the remaining 
                  provisions shall remain in full force and effect.
                </p>

                <h2>16. Contact Information</h2>
                <p>
                  For any questions or concerns regarding these Terms, please contact us at:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p><strong>KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</strong></p>
                  <p>C/O S K MOHAN, MEKOOR, SIDDAPURA</p>
                  <p>Pollibetta, Virajpet, Kodagu - 571215</p>
                  <p>Karnataka, India</p>
                  <p className="mt-2">Email: support@kaverammafantasy.com</p>
                </div>

                <p className="text-sm text-muted-foreground mt-8">
                  By using Kaveramma Fantasy Cricket, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms and Conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 bg-slate-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold mb-4">Related Policies</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link href="/privacy-policy">
                  <a className="p-4 bg-white rounded-xl border border-border/50 hover:border-primary/30 transition-colors flex items-center justify-between">
                    <span>Privacy Policy</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </a>
                </Link>
                <Link href="/fair-play">
                  <a className="p-4 bg-white rounded-xl border border-border/50 hover:border-primary/30 transition-colors flex items-center justify-between">
                    <span>Fair Play Policy</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </a>
                </Link>
                <Link href="/responsible-gaming">
                  <a className="p-4 bg-white rounded-xl border border-border/50 hover:border-primary/30 transition-colors flex items-center justify-between">
                    <span>Responsible Gaming</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </a>
                </Link>
              </div>
            </div>
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
            <p className="text-sm text-white/40">© 2024 Kaveramma Fantasy Cricket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

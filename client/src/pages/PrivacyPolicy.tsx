import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, ChevronRight, Lock, Eye, Database, UserCheck, Bell, Trash2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function PrivacyPolicy() {
  const lastUpdated = "December 18, 2024";

  const highlights = [
    { icon: Lock, title: "Data Encryption", description: "All personal data is encrypted using industry-standard protocols" },
    { icon: Eye, title: "No Third-Party Selling", description: "We never sell your personal information to third parties" },
    { icon: Database, title: "Minimal Data Collection", description: "We only collect data necessary for platform operation" },
    { icon: UserCheck, title: "User Control", description: "You have full control over your data and can request deletion" }
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
        <section className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20">
          <div className="container">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-border/50 rounded-full shadow-sm mb-6">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Your Privacy Matters</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Privacy Policy
              </h1>
              
              <p className="text-muted-foreground">
                Last updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-12 bg-white border-b border-border/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-xl text-center">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto prose prose-slate max-w-none">
              
              <h2>1. Introduction</h2>
              <p>
                <strong>KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</strong> ("Company", "we", "us", or "our") 
                operates the Kaveramma Fantasy Cricket platform (the "Platform"). This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you use our Platform.
              </p>
              <p>
                We are committed to protecting your privacy and ensuring the security of your personal information. 
                This policy applies to all users of our Platform and describes our practices regarding data 
                collection and use.
              </p>
              <p>
                By using our Platform, you consent to the data practices described in this Privacy Policy. 
                If you do not agree with the terms of this Privacy Policy, please do not access or use the Platform.
              </p>

              <h2>2. Information We Collect</h2>
              
              <h3>2.1 Information You Provide Directly</h3>
              <p>When you register for an account or use our Platform, we collect:</p>
              <ul>
                <li><strong>Account Information:</strong> Full name, email address, password (encrypted), date of birth, state of residence</li>
                <li><strong>Profile Information:</strong> Username, profile picture (optional)</li>
                <li><strong>Communication Data:</strong> Messages sent through our contact form, support requests, feedback</li>
                <li><strong>Contest Data:</strong> Team selections, captain/vice-captain choices, contest participation history</li>
              </ul>

              <h3>2.2 Information Collected Automatically</h3>
              <p>When you access our Platform, we automatically collect:</p>
              <ul>
                <li><strong>Device Information:</strong> Device type, operating system, browser type and version</li>
                <li><strong>Log Data:</strong> IP address, access times, pages viewed, time spent on pages</li>
                <li><strong>Usage Data:</strong> Features used, actions taken, interaction patterns</li>
                <li><strong>Cookies and Similar Technologies:</strong> Session cookies, preference cookies, analytics cookies</li>
              </ul>

              <h3>2.3 Information We Do NOT Collect</h3>
              <p>Since we are a free-to-play platform with no monetary transactions, we do NOT collect:</p>
              <ul>
                <li>Bank account details</li>
                <li>Credit/debit card information</li>
                <li>UPI IDs or payment wallet information</li>
                <li>PAN card numbers</li>
                <li>Aadhaar numbers</li>
                <li>Any financial information</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              
              <h3>3.1 Platform Operation</h3>
              <ul>
                <li>To create and manage your account</li>
                <li>To provide and maintain our Platform services</li>
                <li>To process your contest entries and calculate points</li>
                <li>To display leaderboards and rankings</li>
                <li>To communicate with you about your account and activities</li>
              </ul>

              <h3>3.2 Improvement and Analytics</h3>
              <ul>
                <li>To understand how users interact with our Platform</li>
                <li>To improve our Platform features and user experience</li>
                <li>To develop new features and services</li>
                <li>To analyze usage patterns and trends</li>
              </ul>

              <h3>3.3 Safety and Compliance</h3>
              <ul>
                <li>To verify user eligibility (age and geographic restrictions)</li>
                <li>To detect and prevent fraud, cheating, and abuse</li>
                <li>To enforce our Terms and Conditions and Fair Play Policy</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h3>3.4 Communication</h3>
              <ul>
                <li>To send important updates about the Platform</li>
                <li>To respond to your inquiries and support requests</li>
                <li>To send match reminders and notifications (with your consent)</li>
                <li>To inform you about changes to our policies</li>
              </ul>

              <h2>4. Legal Basis for Processing (GDPR Compliance)</h2>
              <p>For users in jurisdictions where GDPR applies, we process your data based on:</p>
              <ul>
                <li><strong>Contract Performance:</strong> Processing necessary to provide our services to you</li>
                <li><strong>Legitimate Interests:</strong> Processing for fraud prevention, security, and Platform improvement</li>
                <li><strong>Consent:</strong> Processing for marketing communications (where applicable)</li>
                <li><strong>Legal Obligation:</strong> Processing required to comply with applicable laws</li>
              </ul>

              <h2>5. Data Sharing and Disclosure</h2>
              
              <h3>5.1 We Do NOT Sell Your Data</h3>
              <p>
                We do not sell, rent, or trade your personal information to third parties for their 
                marketing purposes. Your data is not a product we monetize.
              </p>

              <h3>5.2 Limited Sharing</h3>
              <p>We may share your information only in the following circumstances:</p>
              <ul>
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating the Platform (e.g., hosting providers, analytics services). These providers are contractually bound to protect your data.</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Safety:</strong> To protect the rights, property, or safety of our users or others</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice to users)</li>
              </ul>

              <h3>5.3 Public Information</h3>
              <p>
                Certain information may be publicly visible on the Platform, including your username, 
                team names, and leaderboard rankings. Do not include sensitive information in these fields.
              </p>

              <h2>6. Data Security</h2>
              <p>We implement robust security measures to protect your information:</p>
              <ul>
                <li><strong>Encryption:</strong> All data transmitted between your device and our servers is encrypted using TLS/SSL</li>
                <li><strong>Password Security:</strong> Passwords are hashed using industry-standard algorithms (bcrypt)</li>
                <li><strong>Access Controls:</strong> Employee access to user data is restricted and logged</li>
                <li><strong>Regular Audits:</strong> We conduct regular security assessments and updates</li>
                <li><strong>Secure Infrastructure:</strong> Our servers are hosted in secure data centers with physical and network security</li>
              </ul>
              <p>
                While we strive to protect your information, no method of transmission over the Internet 
                is 100% secure. We cannot guarantee absolute security but will notify you of any breach 
                that affects your data.
              </p>

              <h2>7. Data Retention</h2>
              <p>We retain your information for as long as:</p>
              <ul>
                <li>Your account is active</li>
                <li>Necessary to provide our services</li>
                <li>Required by law or for legitimate business purposes</li>
              </ul>
              <p>
                After account deletion, we may retain certain information for up to 90 days for backup 
                purposes and to comply with legal obligations. Anonymized data may be retained indefinitely 
                for analytics purposes.
              </p>

              <h2>8. Your Rights and Choices</h2>
              
              <h3>8.1 Access and Portability</h3>
              <p>
                You have the right to access the personal information we hold about you. You can request 
                a copy of your data in a portable format by contacting us.
              </p>

              <h3>8.2 Correction</h3>
              <p>
                You can update most of your account information directly through your profile settings. 
                For information that cannot be changed directly, contact our support team.
              </p>

              <h3>8.3 Deletion</h3>
              <p>
                You have the right to request deletion of your account and personal data. To delete your 
                account, contact our support team. We will process your request within 30 days.
              </p>

              <h3>8.4 Opt-Out</h3>
              <p>You can opt out of:</p>
              <ul>
                <li>Marketing emails by clicking "unsubscribe" in any email</li>
                <li>Push notifications through your device settings</li>
                <li>Cookies through your browser settings</li>
              </ul>

              <h3>8.5 Restriction and Objection</h3>
              <p>
                You have the right to restrict or object to certain processing of your data. Contact us 
                to exercise these rights.
              </p>

              <h2>9. Cookies and Tracking Technologies</h2>
              
              <h3>9.1 Types of Cookies We Use</h3>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for the Platform to function (authentication, security)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with the Platform</li>
              </ul>

              <h3>9.2 Managing Cookies</h3>
              <p>
                You can control cookies through your browser settings. Note that disabling essential 
                cookies may affect Platform functionality.
              </p>

              <h2>10. Children's Privacy</h2>
              <p>
                Our Platform is not intended for users under 18 years of age. We do not knowingly collect 
                personal information from children under 18. If we learn that we have collected information 
                from a child under 18, we will delete that information immediately.
              </p>

              <h2>11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than India. 
                We ensure appropriate safeguards are in place for such transfers, including standard 
                contractual clauses where required.
              </p>

              <h2>12. Third-Party Links</h2>
              <p>
                Our Platform may contain links to third-party websites. We are not responsible for the 
                privacy practices of these external sites. We encourage you to read their privacy policies.
              </p>

              <h2>13. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new policy on this page and updating the "Last updated" date. 
                We encourage you to review this policy periodically.
              </p>

              <h2>14. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p><strong>Data Protection Officer</strong></p>
                <p>KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</p>
                <p>C/O S K MOHAN, MEKOOR, SIDDAPURA</p>
                <p>Pollibetta, Virajpet, Kodagu - 571215</p>
                <p>Karnataka, India</p>
                <p className="mt-2">Email: privacy@kaverammafantasy.com</p>
              </div>

              <h2>15. Grievance Officer</h2>
              <p>
                In accordance with the Information Technology Act, 2000 and rules made thereunder, 
                the name and contact details of the Grievance Officer are:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p><strong>Grievance Officer</strong></p>
                <p>KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</p>
                <p>Email: grievance@kaverammafantasy.com</p>
                <p>Response Time: Within 24 hours of receipt</p>
                <p>Resolution Time: Within 30 days</p>
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
                <Link href="/terms-and-conditions">
                  <a className="p-4 bg-white rounded-xl border border-border/50 hover:border-primary/30 transition-colors flex items-center justify-between">
                    <span>Terms & Conditions</span>
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

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, ChevronRight, ChevronDown, Search,
  User, CreditCard, Shield, Trophy, Settings, AlertCircle,
  BookOpen, Users, Zap, Mail
} from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  icon: React.ElementType;
  title: string;
  description: string;
  faqs: FAQItem[];
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const faqCategories: FAQCategory[] = [
    {
      icon: User,
      title: "Account & Registration",
      description: "Questions about creating and managing your account",
      faqs: [
        {
          question: "How do I create an account on Kaveramma Fantasy Cricket?",
          answer: "Creating an account is simple and free. Click on 'Get Started' or 'Register' button on our homepage. You'll need to provide your email address, create a password, enter your full name, date of birth, and select your state of residence. After accepting our Terms & Conditions, click 'Create Account'. You may need to verify your email address by clicking a link we send you."
        },
        {
          question: "Is there any fee to register or play?",
          answer: "No, absolutely not. Kaveramma Fantasy Cricket is 100% free to play. There are no registration fees, no entry fees for contests, no hidden charges, and no real money transactions of any kind. We are a free-to-play educational platform."
        },
        {
          question: "What is the minimum age to play?",
          answer: "You must be at least 18 years old to create an account and play on Kaveramma Fantasy Cricket. This is a legal requirement, and we verify age during registration. Users who provide false age information may have their accounts suspended."
        },
        {
          question: "I'm from Andhra Pradesh/Assam/Telangana/Odisha/Nagaland/Sikkim. Can I play?",
          answer: "Unfortunately, due to state government regulations regarding online gaming, users from Andhra Pradesh, Assam, Telangana, Odisha, Nagaland, and Sikkim are not permitted to use our platform. This restriction applies even though our platform is free-to-play and involves no real money."
        },
        {
          question: "How do I reset my password?",
          answer: "If you've forgotten your password, click on 'Forgot Password' on the login page. Enter your registered email address, and we'll send you a password reset link. Click the link in the email and create a new password. The reset link expires after 24 hours for security reasons."
        },
        {
          question: "Can I change my email address or personal details?",
          answer: "Yes, you can update your profile information by going to Settings in your dashboard. However, some information like your date of birth and state cannot be changed after registration for compliance reasons. If you need to change these, please contact our support team."
        },
        {
          question: "How do I delete my account?",
          answer: "If you wish to delete your account, please contact our support team through the Contact Us page. We'll process your request and permanently delete all your data within 30 days as per our privacy policy. Please note that this action is irreversible."
        }
      ]
    },
    {
      icon: BookOpen,
      title: "How to Play",
      description: "Understanding the game mechanics and rules",
      faqs: [
        {
          question: "How does fantasy cricket work?",
          answer: "Fantasy cricket allows you to create your own virtual cricket team by selecting real players from upcoming matches. Your team earns points based on how those players perform in the actual match. For example, if a batsman you selected scores runs, you earn points. The goal is to score more points than other participants."
        },
        {
          question: "How many players do I need to select for my team?",
          answer: "You need to select exactly 11 players for your fantasy team. Your team must include: 1-4 Wicket-keepers, 3-6 Batsmen, 1-4 All-rounders, and 3-6 Bowlers. You must also select players from both teams playing in the match."
        },
        {
          question: "What is the credit system?",
          answer: "Each player has a credit value based on their skill level and recent performance. You have a total budget of 100 credits to build your team of 11 players. Star players cost more credits, while lesser-known players cost fewer. This system ensures you can't simply pick all the best players and must make strategic choices."
        },
        {
          question: "What are Captain and Vice-Captain?",
          answer: "After selecting your 11 players, you must choose one as Captain (C) and another as Vice-Captain (VC). Your Captain earns 2x (double) points for all their actions in the match. Your Vice-Captain earns 1.5x points. Choosing the right captain is crucial for success."
        },
        {
          question: "Can I change my team after creating it?",
          answer: "Yes, you can modify your team as many times as you want until the match deadline, which is usually when the match starts. After the deadline, your team is locked and cannot be changed. We recommend checking the playing XI announcement before the deadline."
        },
        {
          question: "What happens if a player I selected doesn't play in the actual match?",
          answer: "If a player in your fantasy team doesn't play in the actual match (not in the playing XI), they will score 0 points. This is why it's important to check team news and playing XI announcements before the deadline and make necessary changes."
        },
        {
          question: "How are points calculated?",
          answer: "Points are calculated based on real match performance. Batsmen earn points for runs, boundaries, and milestones. Bowlers earn points for wickets, maiden overs, and economy rate. Fielders earn points for catches, stumpings, and run-outs. There are also bonus points for exceptional performances and negative points for ducks."
        }
      ]
    },
    {
      icon: Trophy,
      title: "Contests & Leaderboard",
      description: "Questions about competitions and rankings",
      faqs: [
        {
          question: "How do I join a contest?",
          answer: "After creating your fantasy team for a match, you're automatically entered into the public leaderboard for that match. There's no separate contest joining process - simply create your team before the deadline and you're in!"
        },
        {
          question: "Are there any prizes for winning?",
          answer: "As a free-to-play educational platform, we do not offer monetary prizes or rewards. Winners get recognition on the leaderboard and the satisfaction of showcasing their cricket knowledge. Our platform is designed for learning and entertainment, not gambling."
        },
        {
          question: "How is the leaderboard ranking determined?",
          answer: "Leaderboard rankings are determined by total points scored by your fantasy team. The user with the highest points ranks first. In case of a tie, the user who created their team first gets the higher rank."
        },
        {
          question: "Can I see other users' teams?",
          answer: "Before the match deadline, all teams are private. After the deadline, you can view other users' team compositions. This ensures fair play and prevents copying of team strategies."
        },
        {
          question: "Is there a global leaderboard?",
          answer: "Yes, in addition to match-specific leaderboards, we maintain a global leaderboard that tracks cumulative performance across all matches. This shows who the most consistent and skilled fantasy cricket players are on our platform."
        }
      ]
    },
    {
      icon: CreditCard,
      title: "Payments & Money",
      description: "Clarifications about our free-to-play model",
      faqs: [
        {
          question: "Do I need to pay anything to play?",
          answer: "No. Kaveramma Fantasy Cricket is completely free. There are no registration fees, no entry fees, no subscription charges, and no in-app purchases required to play. Every feature on our platform is available to all users at no cost."
        },
        {
          question: "Is there any real money involved?",
          answer: "No real money is involved in any aspect of our platform. You cannot deposit money, you cannot withdraw money, and there are no monetary prizes. Our platform uses only virtual points for gameplay."
        },
        {
          question: "Why is the platform free?",
          answer: "We are backed by investors who believe in fantasy cricket as an educational tool. Our mission is to make fantasy cricket accessible to everyone without financial barriers. We sustain our operations through strategic partnerships and may introduce optional premium features in the future that enhance but don't affect core gameplay."
        },
        {
          question: "Will you ever charge money in the future?",
          answer: "Our core gameplay will always remain free. We may introduce optional premium features in the future (like advanced statistics or cosmetic items), but participating in fantasy cricket contests will never require payment."
        },
        {
          question: "Why do you ask for PAN/identity details if there's no money involved?",
          answer: "We do NOT ask for PAN or bank details because there are no financial transactions on our platform. We only collect basic information (name, email, age, state) required for account creation and legal compliance."
        }
      ]
    },
    {
      icon: Shield,
      title: "Fair Play & Security",
      description: "How we ensure fair and secure gameplay",
      faqs: [
        {
          question: "How do you ensure fair play?",
          answer: "We have multiple systems in place: 1) Teams are locked after the deadline and cannot be changed. 2) All teams are hidden until the deadline to prevent copying. 3) We monitor for suspicious patterns and multiple accounts. 4) Our algorithms detect and prevent any form of cheating. 5) Violations result in account suspension."
        },
        {
          question: "Can I have multiple accounts?",
          answer: "No. Each user is allowed only one account. Creating multiple accounts is a violation of our Terms & Conditions and will result in all associated accounts being permanently banned. We use various methods to detect multiple accounts."
        },
        {
          question: "Is my personal data safe?",
          answer: "Yes. We take data security very seriously. Your personal information is encrypted and stored securely. We never share your data with third parties for marketing purposes. Please read our Privacy Policy for complete details on how we handle your data."
        },
        {
          question: "What happens if I suspect someone is cheating?",
          answer: "If you suspect any user of cheating or violating our fair play policies, please report them through our Contact Us page. Provide as much detail as possible. Our team will investigate and take appropriate action."
        },
        {
          question: "How do you verify user age?",
          answer: "Users must provide their date of birth during registration. We verify that users are 18 or older. If we have reason to believe a user has provided false information, we may request additional verification or suspend the account."
        }
      ]
    },
    {
      icon: Settings,
      title: "Technical Issues",
      description: "Help with common technical problems",
      faqs: [
        {
          question: "The website is not loading properly. What should I do?",
          answer: "Try these steps: 1) Clear your browser cache and cookies. 2) Try a different browser (we recommend Chrome, Firefox, or Safari). 3) Check your internet connection. 4) Disable browser extensions that might interfere. 5) If the problem persists, contact our support team."
        },
        {
          question: "I'm not receiving emails from Kaveramma.",
          answer: "Check your spam/junk folder first. Add our email address to your contacts or safe senders list. If you're using Gmail, check the Promotions or Updates tabs. If you still don't receive emails, verify your email address is correct in your profile settings."
        },
        {
          question: "The app/website is slow. How can I improve performance?",
          answer: "Ensure you have a stable internet connection. Close other tabs and applications. Clear your browser cache. Use the latest version of your browser. If on mobile, ensure you have sufficient storage space and close background apps."
        },
        {
          question: "My points are not updating. Is there a delay?",
          answer: "Points are updated in near real-time during live matches, but there may be occasional delays of a few minutes due to data processing. If points haven't updated for more than 15 minutes during a live match, please contact support."
        },
        {
          question: "I can't log in to my account. What should I do?",
          answer: "First, ensure you're using the correct email and password. Try the 'Forgot Password' option to reset your password. Clear your browser cookies. If you still can't log in, your account may be suspended - contact support for assistance."
        }
      ]
    },
    {
      icon: AlertCircle,
      title: "Legal & Compliance",
      description: "Legal questions and regulatory compliance",
      faqs: [
        {
          question: "Is fantasy cricket legal in India?",
          answer: "Yes, fantasy cricket is legal in India. The Supreme Court and various High Courts have recognized fantasy sports as games of skill, not gambling. However, some states have restrictions, which is why we don't operate in Andhra Pradesh, Assam, Telangana, Odisha, Nagaland, and Sikkim."
        },
        {
          question: "Why can't users from certain states play?",
          answer: "Some Indian states have enacted laws that restrict or prohibit online gaming, including fantasy sports. To comply with these laws, we don't allow users from Andhra Pradesh, Assam, Telangana, Odisha, Nagaland, and Sikkim to register or play on our platform."
        },
        {
          question: "Is Kaveramma Fantasy Cricket a gambling platform?",
          answer: "Absolutely not. We are NOT a gambling platform. There is no real money involved - no deposits, no withdrawals, no prizes. Our platform is purely for entertainment and education. Fantasy cricket is recognized as a game of skill, not chance."
        },
        {
          question: "What happens if laws change in my state?",
          answer: "We continuously monitor legal developments across India. If laws change in your state that affect your ability to play, we will notify you via email and update our terms accordingly. We always prioritize legal compliance."
        },
        {
          question: "Do you report user information to authorities?",
          answer: "We only share user information with authorities when legally required to do so, such as in response to valid legal requests or court orders. We do not proactively report user information. See our Privacy Policy for details."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

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
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Help Center</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">Questions</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                Find answers to common questions about Kaveramma Fantasy Cricket. 
                Can't find what you're looking for? Contact our support team.
              </motion.p>

              {/* Search Box */}
              <motion.div variants={fadeInUp} className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-border/50 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground">Try a different search term or browse the categories below</p>
                <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredCategories.map((category, catIndex) => (
                  <motion.div
                    key={catIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl ${
                        catIndex % 3 === 0 ? 'bg-primary/10' : 
                        catIndex % 3 === 1 ? 'bg-green-100' : 'bg-orange-100'
                      } flex items-center justify-center`}>
                        <category.icon className={`w-6 h-6 ${
                          catIndex % 3 === 0 ? 'text-primary' : 
                          catIndex % 3 === 1 ? 'text-green-600' : 'text-orange-600'
                        }`} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{category.title}</h2>
                        <p className="text-muted-foreground text-sm">{category.description}</p>
                      </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-3">
                      {category.faqs.map((faq, faqIndex) => {
                        const key = `${catIndex}-${faqIndex}`;
                        const isOpen = openItems[key];
                        
                        return (
                          <div
                            key={faqIndex}
                            className="border border-border/50 rounded-xl overflow-hidden bg-white hover:border-primary/30 transition-colors"
                          >
                            <button
                              onClick={() => toggleItem(key)}
                              className="w-full px-6 py-4 flex items-center justify-between text-left"
                            >
                              <span className="font-medium pr-4">{faq.question}</span>
                              <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-4">
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-8">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-green-600 text-white px-8">
                  Contact Support
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

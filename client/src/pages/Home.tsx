import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPANY_INFO, LEGAL_DISCLAIMER } from "@/const";
import { Link } from "wouter";
import { Trophy, Users, Target, Shield, BookOpen, TrendingUp } from "lucide-react";

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-3">
              <img src="/images/logo.png" alt="Kaveramma Fantasy Cricket" className="h-10 w-auto" />
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-primary">KAVERAMMA</div>
                <div className="text-xs text-muted-foreground">Fantasy Cricket</div>
              </div>
            </a>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/about">
              <a className="transition-colors hover:text-primary">About Us</a>
            </Link>
            <Link href="/how-to-play">
              <a className="transition-colors hover:text-primary">How to Play</a>
            </Link>
            <Link href="/faq">
              <a className="transition-colors hover:text-primary">FAQ</a>
            </Link>
            <Link href="/blog">
              <a className="transition-colors hover:text-primary">Blog</a>
            </Link>
            <Link href="/contact">
              <a className="transition-colors hover:text-primary">Contact</a>
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <img src="/images/18plus.png" alt="18+" className="h-8 w-auto" />
            <img src="/images/fair-play.png" alt="Fair Play" className="h-8 w-auto" />
            
            {isAuthenticated ? (
              <Link href="/dashboard">
                <Button className="bg-accent hover:bg-accent/90">Dashboard</Button>
              </Link>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-accent hover:bg-accent/90">Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative gradient-hero text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="/images/hero.png" alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-fadeIn">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {COMPANY_INFO.tagline}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90">
                Build your dream cricket team, compete with friends, and master fantasy cricket strategy—completely free, no money involved!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                {isAuthenticated ? (
                  <Link href="/dashboard">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link href="/register">
                      <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                        Start Playing Free
                      </Button>
                    </Link>
                    <Link href="/how-to-play">
                      <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                        Learn How to Play
                      </Button>
                    </Link>
                  </>
                )}
              </div>

              <div className="flex items-center justify-center space-x-8 pt-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>No Real Money</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>Skill-Based</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Kaveramma Fantasy Cricket?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the thrill of fantasy cricket without financial pressure. Learn, compete, and have fun!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>100% Free to Play</CardTitle>
                  <CardDescription>
                    No entry fees, no hidden costs, no real money involved. Just pure cricket strategy and fun.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-secondary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Educational Focus</CardTitle>
                  <CardDescription>
                    Learn cricket strategy, player analysis, and team building skills in a risk-free environment.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Skill-Based Gaming</CardTitle>
                  <CardDescription>
                    Test your cricket knowledge and strategic thinking. Compete based on skill, not luck.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Leaderboard Rankings</CardTitle>
                  <CardDescription>
                    Climb the leaderboard and showcase your fantasy cricket skills. Earn bragging rights!
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-secondary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Compete with Friends</CardTitle>
                  <CardDescription>
                    Create teams for upcoming matches and see how you stack up against other players.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Real-Time Updates</CardTitle>
                  <CardDescription>
                    Follow live matches, track player performance, and see your points update in real-time.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get started in minutes with our simple 4-step process
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold">Register Free</h3>
                <p className="text-muted-foreground">
                  Create your account in seconds. Just email, password, and age verification.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary text-white text-2xl font-bold flex items-center justify-center mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold">Select Match</h3>
                <p className="text-muted-foreground">
                  Choose from upcoming cricket matches to build your fantasy team.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent text-white text-2xl font-bold flex items-center justify-center mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold">Build Team</h3>
                <p className="text-muted-foreground">
                  Pick 11 players, assign captain and vice-captain, and finalize your strategy.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto">
                  4
                </div>
                <h3 className="text-xl font-bold">Track & Compete</h3>
                <p className="text-muted-foreground">
                  Watch the match, earn points, and climb the leaderboard!
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/how-to-play">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Detailed Guide
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {!isAuthenticated && (
          <section className="py-20 gradient-hero text-white">
            <div className="container text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Start Your Fantasy Cricket Journey?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of cricket enthusiasts playing for free. No risk, all fun!
              </p>
              <Link href="/register">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-12 py-6">
                  Register Now - It's Free!
                </Button>
              </Link>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/images/logo.png" alt="Kaveramma" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-sm text-white/80">
                {COMPANY_INFO.tagline}
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about"><a className="hover:text-accent transition-colors">About Us</a></Link></li>
                <li><Link href="/how-to-play"><a className="hover:text-accent transition-colors">How to Play</a></Link></li>
                <li><Link href="/faq"><a className="hover:text-accent transition-colors">FAQ</a></Link></li>
                <li><Link href="/blog"><a className="hover:text-accent transition-colors">Blog</a></Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms"><a className="hover:text-accent transition-colors">Terms & Conditions</a></Link></li>
                <li><Link href="/privacy"><a className="hover:text-accent transition-colors">Privacy Policy</a></Link></li>
                <li><Link href="/fair-play"><a className="hover:text-accent transition-colors">Fair Play Policy</a></Link></li>
                <li><Link href="/responsible-gaming"><a className="hover:text-accent transition-colors">Responsible Gaming</a></Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>{COMPANY_INFO.address}</li>
                <li><Link href="/contact"><a className="hover:text-accent transition-colors">Contact Us</a></Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <div className="flex items-center space-x-4">
                <img src="/images/18plus.png" alt="18+" className="h-12 w-auto" />
                <img src="/images/fair-play.png" alt="Fair Play" className="h-12 w-auto" />
              </div>
              <div className="text-sm text-white/80">
                <p>CIN: {COMPANY_INFO.cin}</p>
              </div>
            </div>

            <div className="bg-accent/20 border border-accent/40 rounded-lg p-4 mb-6">
              <p className="text-sm text-center">
                {LEGAL_DISCLAIMER}
              </p>
            </div>

            <div className="text-center text-sm text-white/60">
              <p>© 2024 {COMPANY_INFO.name}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

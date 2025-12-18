import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { Trophy, Users, Calendar, TrendingUp, LogOut, ChevronRight, Shield, Zap, Target } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

export default function Dashboard() {
  const { user, loading } = useAuth();
  const [, setLocation] = useLocation();

  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      toast.success("Logged out successfully");
      setLocation("/");
    },
  });

  // Redirect if not authenticated
  if (!loading && !user) {
    setLocation("/login");
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-hero">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-white font-bold text-2xl">K</span>
          </div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </motion.div>
      </div>
    );
  }

  const stats = [
    { icon: Users, label: "My Teams", value: "0", description: "Teams created", color: "primary" },
    { icon: Calendar, label: "Upcoming", value: "0", description: "Matches available", color: "secondary" },
    { icon: Trophy, label: "Rank", value: "--", description: "Not ranked yet", color: "accent" },
    { icon: TrendingUp, label: "Points", value: "0", description: "Total points", color: "primary" },
  ];

  const steps = [
    { icon: Calendar, title: "Wait for Matches", description: "Upcoming cricket matches will appear here", color: "bg-primary/10 text-primary" },
    { icon: Users, title: "Build Your Team", description: "Select 11 players and assign captain", color: "bg-secondary/10 text-secondary" },
    { icon: Trophy, title: "Earn Points", description: "Watch your players earn points live!", color: "bg-accent/10 text-accent" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 w-full glass border-b border-border/50"
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  KAVERAMMA
                </div>
                <div className="text-xs text-muted-foreground -mt-0.5">Fantasy Cricket</div>
              </div>
            </a>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-full">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </span>
              </div>
              <span className="text-sm font-medium">{user?.name}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => logoutMutation.mutate()}
              disabled={logoutMutation.isPending}
              className="border-border/50 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </motion.header>

      <main className="flex-1 py-8 gradient-hero">
        <div className="container">
          {/* Welcome Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mb-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-medium text-primary">Dashboard</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Overview</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-3xl font-bold mb-2">
              Welcome back, <span className="text-gradient">{user?.name?.split(' ')[0]}</span>!
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-muted-foreground">
              Ready to build your dream cricket team?
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-border/50 shadow-soft bg-white/80 backdrop-blur card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl ${
                        stat.color === 'primary' ? 'bg-primary/10' :
                        stat.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'
                      } flex items-center justify-center`}>
                        <stat.icon className={`w-5 h-5 ${
                          stat.color === 'primary' ? 'text-primary' :
                          stat.color === 'secondary' ? 'text-secondary' : 'text-accent'
                        }`} />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Upcoming Matches */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-border/50 shadow-soft bg-white/80 backdrop-blur h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Upcoming Matches</CardTitle>
                      <CardDescription>Select a match to create your team</CardDescription>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-muted-foreground/50" />
                    </div>
                    <p className="text-muted-foreground mb-2">No upcoming matches available</p>
                    <p className="text-sm text-muted-foreground/70">Check back soon for new matches!</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* My Teams */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-border/50 shadow-soft bg-white/80 backdrop-blur h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">My Teams</CardTitle>
                      <CardDescription>Manage your fantasy cricket teams</CardDescription>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-muted-foreground/50" />
                    </div>
                    <p className="text-muted-foreground mb-2">No teams created yet</p>
                    <p className="text-sm text-muted-foreground/70">Create your first team when matches are available</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Getting Started */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-primary/20 shadow-soft bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur overflow-hidden">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Getting Started</CardTitle>
                </div>
                <CardDescription>New to fantasy cricket? Here's how to play</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center shrink-0`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs font-bold text-muted-foreground">STEP {index + 1}</span>
                        </div>
                        <h4 className="font-semibold mb-1">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 px-3 py-1.5 bg-primary/10 rounded-full">
                      <span className="text-xs font-bold text-primary">18+</span>
                    </div>
                    <div className="flex items-center space-x-1 px-3 py-1.5 bg-secondary/10 rounded-full">
                      <Shield className="w-3 h-3 text-secondary" />
                      <span className="text-xs font-medium text-secondary">Fair Play</span>
                    </div>
                    <div className="flex items-center space-x-1 px-3 py-1.5 bg-accent/10 rounded-full">
                      <Target className="w-3 h-3 text-accent" />
                      <span className="text-xs font-medium text-accent">Skill-Based</span>
                    </div>
                  </div>
                  <Link href="/how-to-play">
                    <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

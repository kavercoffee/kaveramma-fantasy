import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { Loader2, AlertCircle, User, Mail, Lock, MapPin, Calendar, Shield, ArrowRight } from "lucide-react";
import { INDIAN_STATES, RESTRICTED_STATES } from "@/const";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion } from "framer-motion";

export default function Register() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    state: "",
    acceptedTerms: false,
  });

  const registerMutation = trpc.auth.register.useMutation({
    onSuccess: () => {
      toast.success("Registration successful! Welcome to Kaveramma Fantasy Cricket.");
      setLocation("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message || "Registration failed. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.age || !formData.state) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    const age = parseInt(formData.age);
    if (isNaN(age) || age < 18) {
      toast.error("You must be at least 18 years old to register");
      return;
    }

    if (RESTRICTED_STATES.includes(formData.state)) {
      toast.error(`Sorry, this platform is not available in ${formData.state} due to government regulations.`);
      return;
    }

    if (!formData.acceptedTerms) {
      toast.error("You must accept the terms and conditions to register");
      return;
    }

    registerMutation.mutate({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      age,
      state: formData.state,
      acceptedTerms: formData.acceptedTerms,
    });
  };

  const isRestrictedState = formData.state && RESTRICTED_STATES.includes(formData.state);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center">
          <Link href="/">
            <a className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <div className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  KAVERAMMA
                </div>
                <div className="text-xs text-muted-foreground -mt-0.5">Fantasy Cricket</div>
              </div>
            </a>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-8 px-4 gradient-hero">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md relative"
        >
          <Card className="border-border/50 shadow-soft-lg bg-white/80 backdrop-blur">
            <CardHeader className="space-y-1 text-center pb-2">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-soft"
              >
                <span className="text-white font-bold text-2xl">K</span>
              </motion.div>
              <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
              <CardDescription>
                Join Kaveramma Fantasy Cricket - 100% Free to Play
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={registerMutation.isPending}
                      className="pl-10 h-11 bg-muted/30 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={registerMutation.isPending}
                      className="pl-10 h-11 bg-muted/30 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Min 8 chars"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        disabled={registerMutation.isPending}
                        className="pl-10 h-11 bg-muted/30 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Re-enter"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        required
                        disabled={registerMutation.isPending}
                        className="pl-10 h-11 bg-muted/30 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-sm font-medium">Age</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="age"
                        type="number"
                        placeholder="18+"
                        min="18"
                        max="120"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        required
                        disabled={registerMutation.isPending}
                        className="pl-10 h-11 bg-muted/30 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-sm font-medium">State</Label>
                    <Select
                      value={formData.state}
                      onValueChange={(value) => setFormData({ ...formData, state: value })}
                      disabled={registerMutation.isPending}
                    >
                      <SelectTrigger className="h-11 bg-muted/30 border-border/50">
                        <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {INDIAN_STATES.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                            {RESTRICTED_STATES.includes(state) && " ⚠️"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {isRestrictedState && (
                  <Alert variant="destructive" className="bg-destructive/10 border-destructive/30">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      Sorry, this platform is not available in {formData.state} due to government regulations.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptedTerms}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, acceptedTerms: !!checked })
                    }
                    disabled={registerMutation.isPending}
                    className="mt-0.5"
                  />
                  <Label htmlFor="terms" className="text-xs leading-relaxed cursor-pointer text-muted-foreground">
                    I confirm I am 18+ years old and accept the{" "}
                    <Link href="/terms"><a className="text-primary hover:underline">Terms</a></Link>,{" "}
                    <Link href="/privacy"><a className="text-primary hover:underline">Privacy Policy</a></Link>, and{" "}
                    <Link href="/responsible-gaming"><a className="text-primary hover:underline">Responsible Gaming Policy</a></Link>.
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 gradient-primary text-white shadow-soft btn-modern"
                  disabled={registerMutation.isPending || !!isRestrictedState}
                >
                  {registerMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">Already have an account? </span>
                <Link href="/login">
                  <a className="text-primary font-semibold hover:underline">
                    Login here
                  </a>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-1 px-3 py-1.5 bg-primary/10 rounded-full">
                    <span className="text-xs font-bold text-primary">18+</span>
                  </div>
                  <div className="flex items-center space-x-1 px-3 py-1.5 bg-secondary/10 rounded-full">
                    <Shield className="w-3 h-3 text-secondary" />
                    <span className="text-xs font-medium text-secondary">Fair Play</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}

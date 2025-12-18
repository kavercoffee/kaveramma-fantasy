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
import { Loader2, AlertCircle } from "lucide-react";
import { INDIAN_STATES, RESTRICTED_STATES } from "@/const";
import { Alert, AlertDescription } from "@/components/ui/alert";

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

    // Validation
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
    <div className="min-h-screen flex flex-col">
      {/* Simple Header */}
      <header className="border-b bg-background">
        <div className="container flex h-16 items-center">
          <Link href="/">
            <a className="flex items-center space-x-3">
              <img src="/images/logo.png" alt="Kaveramma Fantasy Cricket" className="h-10 w-auto" />
              <div>
                <div className="font-bold text-lg text-primary">KAVERAMMA</div>
                <div className="text-xs text-muted-foreground">Fantasy Cricket</div>
              </div>
            </a>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4 bg-muted/30">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
            <CardDescription className="text-center">
              Join Kaveramma Fantasy Cricket - 100% Free to Play
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={registerMutation.isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={registerMutation.isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  disabled={registerMutation.isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                  disabled={registerMutation.isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Must be 18 or older"
                  min="18"
                  max="120"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  required
                  disabled={registerMutation.isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) => setFormData({ ...formData, state: value })}
                  disabled={registerMutation.isPending}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDIAN_STATES.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                        {RESTRICTED_STATES.includes(state) && " (Not Available)"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {isRestrictedState && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Sorry, this platform is not available in {formData.state} due to government regulations.
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptedTerms}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, acceptedTerms: !!checked })
                  }
                  disabled={registerMutation.isPending}
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                  I am 18 years or older and I accept the{" "}
                  <Link href="/terms">
                    <a className="text-primary hover:underline" target="_blank">
                      Terms & Conditions
                    </a>
                  </Link>
                  ,{" "}
                  <Link href="/privacy">
                    <a className="text-primary hover:underline" target="_blank">
                      Privacy Policy
                    </a>
                  </Link>
                  , and{" "}
                  <Link href="/responsible-gaming">
                    <a className="text-primary hover:underline" target="_blank">
                      Responsible Gaming Policy
                    </a>
                  </Link>
                  .
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90"
                disabled={registerMutation.isPending || !!isRestrictedState}
              >
                {registerMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link href="/login">
                <a className="text-primary font-medium hover:underline">
                  Login here
                </a>
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center justify-center space-x-4">
                <img src="/images/18plus.png" alt="18+" className="h-8 w-auto" />
                <img src="/images/fair-play.png" alt="Fair Play" className="h-8 w-auto" />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

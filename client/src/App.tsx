import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import HowToPlay from "./pages/HowToPlay";
import FAQ from "./pages/FAQ";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FairPlay from "./pages/FairPlay";
import ResponsibleGaming from "./pages/ResponsibleGaming";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      {/* Public Pages */}
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      
      {/* Informational Pages */}
      <Route path="/about" component={AboutUs} />
      <Route path="/how-to-play" component={HowToPlay} />
      <Route path="/faq" component={FAQ} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/fair-play" component={FairPlay} />
      <Route path="/responsible-gaming" component={ResponsibleGaming} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      
      {/* Protected Pages */}
      <Route path="/dashboard" component={Dashboard} />
      
      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { Shield, Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const { isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["About Us", "How to Play", "FAQ", "Blog", "Contact"];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border/50"
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src="/logo-dark.png" 
            alt="Kaveramma" 
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          {/* Compliance Badges */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-1 px-2.5 py-1 bg-red-50 border border-red-200 rounded-full">
              <span className="text-xs font-bold text-red-600">18+</span>
            </div>
            <div className="flex items-center space-x-1 px-2.5 py-1 bg-green-50 border border-green-200 rounded-full">
              <Shield className="w-3 h-3 text-green-600" />
              <span className="text-xs font-medium text-green-600">Fair Play</span>
            </div>
          </div>

          {/* Auth Buttons */}
          {isAuthenticated ? (
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-primary to-primary/90 text-white shadow-md hover:shadow-lg transition-shadow">
                Dashboard
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="ghost" className="font-medium">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-primary to-primary/90 text-white shadow-md hover:shadow-lg transition-shadow">
                  Get Started
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-border/50 bg-white"
        >
          <nav className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            {/* Mobile Compliance Badges */}
            <div className="flex items-center space-x-2 px-4 pt-4 border-t border-border/50">
              <div className="flex items-center space-x-1 px-2.5 py-1 bg-red-50 border border-red-200 rounded-full">
                <span className="text-xs font-bold text-red-600">18+</span>
              </div>
              <div className="flex items-center space-x-1 px-2.5 py-1 bg-green-50 border border-green-200 rounded-full">
                <Shield className="w-3 h-3 text-green-600" />
                <span className="text-xs font-medium text-green-600">Fair Play</span>
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/how-to-play", label: "How to Play" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-gray-900">KAVERAMMA</div>
                <div className="text-xs text-gray-500 -mt-0.5">Fantasy Cricket</div>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href) 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}>
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Right Side - Badges & Auth */}
          <div className="flex items-center space-x-3">
            {/* 18+ Badge */}
            <div className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-red-100 border-2 border-red-500">
              <span className="text-red-600 font-bold text-xs">18+</span>
            </div>

            {/* Fair Play Badge */}
            <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
              <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-green-700 text-xs font-medium">Fair Play</span>
            </div>

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm">Dashboard</Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a 
                    className={`px-4 py-2.5 text-sm font-medium rounded-lg ${
                      isActive(link.href) 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              {!isAuthenticated && (
                <Link href="/login">
                  <a 
                    className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg sm:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </a>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

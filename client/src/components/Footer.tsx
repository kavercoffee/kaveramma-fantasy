import { Link } from "wouter";
import { Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = ["About Us", "How to Play", "FAQ", "Blog", "Contact"];
  const legalLinks = ["Terms & Conditions", "Privacy Policy", "Fair Play Policy", "Responsible Gaming"];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img 
                src="/logo-dark.png" 
                alt="Kaveramma Fantasy Cricket" 
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm mb-4">
              Fantasy Cricket for Everyone. 100% free, skill-based entertainment platform.
            </p>
            <div className="flex items-center space-x-3">
              <div className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-bold text-red-400">18+</div>
              <div className="flex items-center space-x-1 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                <Shield className="w-3 h-3 text-green-400" />
                <span className="text-xs font-medium text-green-400">Fair Play</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <p className="text-white/60 text-sm mb-2">
              KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED
            </p>
            <p className="text-white/40 text-xs">
              CIN: U10792KA2024PTC186508
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-8 border-t border-white/10">
          <div className="bg-white/5 rounded-xl p-4 mb-6">
            <p className="text-white/60 text-xs leading-relaxed">
              <strong className="text-white/80">Legal Disclaimer:</strong> This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. Only users 18 years and older are permitted. This is a skill-based, free-to-play platform with no real money involved. No financial transactions, deposits, or withdrawals are supported.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
            <p>© {currentYear} Kaveramma Fantasy Cricket. All rights reserved.</p>
            <p>Domain: kaverammafantasy.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

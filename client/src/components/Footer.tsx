import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/about", label: "About Us" },
      { href: "/how-to-play", label: "How to Play" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact Us" },
    ],
    legal: [
      { href: "/terms-and-conditions", label: "Terms & Conditions" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/fair-play", label: "Fair Play Policy" },
      { href: "/responsible-gaming", label: "Responsible Gaming" },
    ],
    support: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Help Center" },
    ],
  };

  const restrictedStates = [
    "Andhra Pradesh", "Assam", "Nagaland", "Odisha", "Sikkim", "Telangana"
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <a className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <div>
                  <div className="font-bold text-lg">KAVERAMMA</div>
                  <div className="text-xs text-white/60 -mt-0.5">Fantasy Cricket</div>
                </div>
              </a>
            </Link>
            <p className="text-sm text-white/60 mb-4">
              India's free-to-play fantasy cricket platform. Learn, play, and enjoy cricket strategy without any financial risk.
            </p>
            {/* Badges */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50">
                <span className="text-red-400 font-bold text-xs">18+</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-full">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-green-400 text-xs font-medium">Fair Play</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Company Info */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-xs text-white/40 leading-relaxed">
                <strong className="text-white/60">KAVERAMMA COFFEE CURING WORKS PVT LTD</strong><br />
                CIN: U10792KA2024PTC186508
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
            <p className="text-sm text-red-300 text-center">
              <strong>Legal Disclaimer:</strong> This platform is NOT available in {restrictedStates.join(", ")}. 
              Only users 18 years and older are permitted. This is a skill-based, free-to-play platform with no real money involved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              © {currentYear} Kaveramma Fantasy Cricket. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Fantasy Cricket for Everyone
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

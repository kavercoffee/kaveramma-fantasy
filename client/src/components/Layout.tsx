import Header from "./Header";
import Footer from "./Footer";
import { ReactNode, useState } from "react";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export default function Layout({ children, showFooter = true }: LayoutProps) {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hide header on mobile when banner is visible */}
      <div className={isBannerVisible ? "hidden lg:block" : ""}>
        <Header />
      </div>
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

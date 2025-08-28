import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg glow-effect"></div>
            <span className="text-xl font-bold" data-testid="logo-text">Enterprise NLQ</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-how-it-works"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('demo')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-demo"
            >
              Demo
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-button"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('features')} 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                data-testid="mobile-nav-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                data-testid="mobile-nav-how-it-works"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('demo')} 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                data-testid="mobile-nav-demo"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

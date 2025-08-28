import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" }
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Contact", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", testId: "social-github" },
    { icon: Linkedin, href: "#", label: "LinkedIn", testId: "social-linkedin" },
    { icon: Twitter, href: "#", label: "Twitter", testId: "social-twitter" }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg glow-effect"></div>
              <span className="text-xl font-bold" data-testid="footer-logo">Enterprise NLQ</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md" data-testid="footer-description">
              Transforming how enterprises interact with data through natural language processing and AI-powered query optimization.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  onClick={() => handleLinkClick(social.href)}
                  data-testid={social.testId}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-product-title">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-foreground transition-colors text-left"
                    data-testid={`footer-product-${index}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-company-title">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-foreground transition-colors text-left"
                    data-testid={`footer-company-${index}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p data-testid="footer-copyright">&copy; 2025 Enterprise NLQ Engine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

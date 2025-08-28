import { Play, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Futuristic database network background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1200" 
          alt="Futuristic database technology with glowing data streams" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-background/90"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight"
            data-testid="hero-title"
          >
            Query Any Database with Natural Language
          </h1>
          <p 
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            data-testid="hero-subtitle"
          >
            An AI-powered enterprise engine that transforms natural language into optimized SQL and Mongo queries across PostgreSQL, MySQL, SQLite, and MongoDB.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={scrollToDemo}
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold text-lg hover:scale-105 transition-transform glow-effect"
              data-testid="button-try-demo"
            >
              <Play className="w-5 h-5 mr-2" />
              Try Demo
            </Button>
            <Button
              onClick={scrollToAbout}
              variant="outline"
              className="px-8 py-4 bg-card border border-border text-card-foreground rounded-lg font-semibold text-lg hover:border-primary hover:glow-effect transition-all"
              data-testid="button-get-started"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Started
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating animation elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
    </section>
  );
}

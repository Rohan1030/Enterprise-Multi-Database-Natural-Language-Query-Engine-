import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="about-title">
              Built for Enterprise Scale
            </h2>
            <p className="text-lg text-muted-foreground mb-6" data-testid="about-description-1">
              Our Enterprise Multi-Database Natural Language Query Engine is designed for mission-critical applications that demand the highest levels of performance, security, and reliability.
            </p>
            <p className="text-lg text-muted-foreground mb-8" data-testid="about-description-2">
              Handle real-time schema evolution, maintain strict security compliance, and optimize performance across heterogeneous database environments - all while enabling business users to access data with simple, natural language queries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="bg-card border border-border px-4 py-2 rounded-lg text-base" data-testid="metric-uptime">
                <span className="text-primary font-semibold">99.9%</span> Uptime
              </Badge>
              <Badge variant="secondary" className="bg-card border border-border px-4 py-2 rounded-lg text-base" data-testid="metric-response">
                <span className="text-primary font-semibold">&lt; 100ms</span> Avg Response
              </Badge>
              <Badge variant="secondary" className="bg-card border border-border px-4 py-2 rounded-lg text-base" data-testid="metric-compliance">
                <span className="text-primary font-semibold">SOC 2</span> Compliant
              </Badge>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Enterprise AI dashboard with data analytics and performance metrics" 
              className="rounded-xl shadow-2xl w-full h-auto" 
              data-testid="about-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

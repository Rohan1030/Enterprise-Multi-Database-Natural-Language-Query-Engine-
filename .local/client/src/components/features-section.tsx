import { Search, Database, Zap, Shield, TrendingUp, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Search,
    title: "NL → SQL Conversion",
    description: "Understands complex queries & business logic, converting natural language to optimized database queries with precision.",
    testId: "feature-nl-sql"
  },
  {
    icon: Database,
    title: "Multi-Database Support",
    description: "Seamlessly works with PostgreSQL, MySQL, SQLite, and MongoDB - all from a single interface.",
    testId: "feature-multi-db"
  },
  {
    icon: Zap,
    title: "Real-time Schema Adaptation",
    description: "Auto-adjusts when schemas evolve, ensuring queries remain accurate as your database structure changes.",
    testId: "feature-schema-adaptation"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "RBAC, SQL injection prevention, and data masking to ensure your sensitive data stays protected.",
    testId: "feature-security"
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description: "Query insights, audit logging, and performance metrics to optimize your database operations.",
    testId: "feature-analytics"
  },
  {
    icon: Globe,
    title: "Cross-Database Federation",
    description: "Correlate data from multiple systems and databases in a single query for comprehensive insights.",
    testId: "feature-federation"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="features-title">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="features-subtitle">
            Enterprise-grade capabilities designed for modern data infrastructure
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card bg-card border border-border rounded-lg p-8 glow-border" data-testid={feature.testId}>
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6 glow-effect">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4" data-testid={`${feature.testId}-title`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`${feature.testId}-description`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

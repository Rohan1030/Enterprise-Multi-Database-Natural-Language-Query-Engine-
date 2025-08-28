import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Natural Language Input",
    description: "User enters a query in plain English, no SQL knowledge required",
    example: '"Show me all customers from California"',
    testId: "step-input"
  },
  {
    number: "2", 
    title: "AI Processing",
    description: "AI parses, plans, and optimizes SQL/Mongo queries for your specific schema",
    example: "SELECT * FROM customers WHERE state = 'CA'",
    testId: "step-processing"
  },
  {
    number: "3",
    title: "Instant Results", 
    description: "System executes queries across databases & returns formatted results instantly",
    example: "✅ 1,247 customers found in 0.3s",
    testId: "step-results"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="how-it-works-title">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="how-it-works-subtitle">
            Simple 3-step process to transform natural language into database queries
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className={`flow-step text-center ${index < steps.length - 1 ? 'flow-connector' : ''}`} data-testid={step.testId}>
              <Card className="bg-card border border-border rounded-xl p-8 mb-6">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 glow-effect">
                    <span className="text-2xl font-bold text-primary-foreground" data-testid={`${step.testId}-number`}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4" data-testid={`${step.testId}-title`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`${step.testId}-description`}>
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              <div className="bg-muted rounded-lg p-4 text-sm font-mono" data-testid={`${step.testId}-example`}>
                {step.example}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

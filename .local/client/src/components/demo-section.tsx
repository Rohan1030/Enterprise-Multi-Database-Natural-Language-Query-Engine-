import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { QueryResponse } from "@shared/schema";

const sampleQueries = [
  "Top 5 product categories by revenue growth last quarter",
  "Compare Postgres orders with Mongo user activity", 
  "Show customer retention rates by region",
  "Find anomalies in payment transactions this week"
];

export default function DemoSection() {
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState<QueryResponse | null>(null);

  const queryMutation = useMutation({
    mutationFn: async (queryText: string) => {
      const response = await apiRequest("POST", "/api/query", { query: queryText });
      return await response.json() as QueryResponse;
    },
    onSuccess: (data) => {
      setQueryResult(data);
    },
    onError: (error) => {
      console.error("Query error:", error);
      // Set fallback result on error
      setQueryResult({
        query,
        intent: "error_fallback",
        generatedSql: `-- Error processing query: ${query}`,
        results: [{ error: "Unable to process query. Please try again." }],
        explanation: `There was an error processing your query: "${query}". This could be due to network issues or API limitations.`,
        executionTime: 0
      });
    }
  });

  const handleQuerySubmit = () => {
    if (!query.trim()) return;
    setQueryResult(null);
    queryMutation.mutate(query.trim());
  };

  const handleSampleQuery = (sampleQuery: string) => {
    setQuery(sampleQuery);
    setQueryResult(null);
  };

  return (
    <section id="demo" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="demo-title">
            Try It Live
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="demo-subtitle">
            Experience the power of natural language queries in action
          </p>
        </div>
        
        {/* Interactive Demo Interface */}
        <Card className="bg-card border border-border rounded-xl p-8 glow-border" data-testid="demo-interface">
          <CardContent className="p-0">
            <div className="mb-8">
              <Label className="block text-sm font-medium mb-3" data-testid="demo-input-label">
                Enter your query in natural language:
              </Label>
              <div className="relative">
                <Input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleQuerySubmit()}
                  className="demo-input w-full px-6 py-4 rounded-lg text-lg placeholder-muted-foreground focus:outline-none transition-all pr-20"
                  placeholder="Show me all customers from California..."
                  data-testid="demo-input"
                />
                <Button
                  onClick={handleQuerySubmit}
                  disabled={!query.trim() || queryMutation.isPending}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary to-accent px-6 py-2 rounded-lg text-primary-foreground hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="demo-submit"
                >
                  {queryMutation.isPending ? (
                    <div className="animate-pulse">...</div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
            
            {/* Sample Queries */}
            <div className="mb-8">
              <h4 className="text-sm font-medium mb-4 text-muted-foreground" data-testid="sample-queries-label">
                Try these sample queries:
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {sampleQueries.map((sampleQuery, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => handleSampleQuery(sampleQuery)}
                    className="bg-muted hover:bg-primary/20 px-4 py-3 rounded-lg text-left text-sm transition-colors justify-start h-auto whitespace-normal"
                    data-testid={`sample-query-${index}`}
                  >
                    "{sampleQuery}"
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Results Display */}
            {(queryMutation.isPending || queryResult) && (
              <div className="bg-secondary/50 border border-border rounded-lg p-6" data-testid="demo-results">
                {queryMutation.isPending ? (
                  <div className="flex items-center" data-testid="demo-loading">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Processing query with AI agent...</span>
                  </div>
                ) : queryResult ? (
                  <>
                    <div className="flex items-center mb-4" data-testid="demo-success">
                      <div className={`w-3 h-3 ${queryResult.intent === 'error_fallback' ? 'bg-red-500' : 'bg-green-500'} rounded-full mr-3`}></div>
                      <span className="text-sm text-muted-foreground">
                        {queryResult.intent === 'error_fallback' 
                          ? 'Query processing failed' 
                          : `Query executed successfully in ${(queryResult.executionTime / 1000).toFixed(2)}s`}
                      </span>
                    </div>
                    <div className="font-mono text-sm mb-4 text-accent" data-testid="demo-generated-sql">
                      Generated SQL: {queryResult.generatedSql}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4" data-testid="demo-explanation">
                      {queryResult.explanation}
                    </div>
                    {queryResult.results && queryResult.results.length > 0 && (
                      <div className="border rounded-lg overflow-hidden" data-testid="demo-result-table">
                        <div className="bg-muted p-3 text-sm font-semibold">
                          📊 Results ({queryResult.results.length} records found):
                        </div>
                        <div className="max-h-48 overflow-y-auto">
                          <table className="w-full text-sm">
                            <thead className="bg-secondary/50">
                              <tr>
                                {queryResult.results[0] && Object.keys(queryResult.results[0]).map((key) => (
                                  <th key={key} className="px-3 py-2 text-left font-medium">
                                    {key.replace('_', ' ').toUpperCase()}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {queryResult.results.map((row, index) => (
                                <tr key={index} className="border-t border-border">
                                  {Object.values(row).map((value, i) => (
                                    <td key={i} className="px-3 py-2">
                                      {String(value)}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </>
                ) : null}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

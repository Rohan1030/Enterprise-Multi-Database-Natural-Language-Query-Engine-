import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Query processing schemas
export const queryRequestSchema = z.object({
  query: z.string().min(1, "Query cannot be empty")
});

export const queryResponseSchema = z.object({
  query: z.string(),
  intent: z.string(),
  generatedSql: z.string(),
  results: z.array(z.record(z.any())),
  explanation: z.string(),
  executionTime: z.number()
});

export type QueryRequest = z.infer<typeof queryRequestSchema>;
export type QueryResponse = z.infer<typeof queryResponseSchema>;

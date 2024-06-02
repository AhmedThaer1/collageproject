// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `collagewebapp_${name}`);

export const posts = createTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),

  postUrl: varchar("post_url", { length: 1024 }).notNull(),
  author: varchar("author", { length: 256 }).notNull(),

  doiUrl: varchar("doi_url", { length: 1024 }).notNull(),

  userId: varchar("userId", { length: 256 }).notNull(),

  abstract: varchar("abstract", { length: 2048 }).notNull(),
  publishedAt: varchar("published_at", { length: 256 }).notNull(),

  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt", { withTimezone: true }),
});

/**
 * Main Express server entry point.
 * Run after build: node server.js
 * Or use: npm run dev (runs src/index.ts via tsx)
 */
require("dotenv").config({ path: require("path").join(__dirname, ".env") });
require("./dist/index.js");

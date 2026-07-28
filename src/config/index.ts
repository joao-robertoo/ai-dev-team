export const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "development",
  llm: {
    openaiApiKey: process.env.OPENAI_API_KEY || "",
    anthropicApiKey: process.env.ANTHROPIC_API_KEY || "",
    geminiApiKey: process.env.GEMINI_API_KEY || ""
  }
};

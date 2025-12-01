// Project: AI-Powered Automated Student Support System

import Groq from "groq-sdk";
import readline from "readline";
import chalk from "chalk";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Create interactive console interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(chalk.green("🚀 AI-Powered Automated Student Support System Started!"));
console.log(chalk.gray("Type your message and press Enter. Type 'exit' to quit.\n"));

// Initialize conversation history
const messages = [
  { role: "system", content: "You are an AI-powered assistant designed to support students by providing guidance, explanations, study help, and academic support." }
];

let messageCount = 1;

async function askAgent(userMessage) {
  try {
    // Add user message to conversation history
    messages.push({ role: "user", content: userMessage });

    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: messages
    });

    const agentMessage = response.choices[0].message.content;

    // Add agent message to conversation history
    messages.push({ role: "assistant", content: agentMessage });

    console.log(chalk.blue(`\n${messageCount}. You: ${userMessage}`));
    console.log(chalk.green(`${messageCount}. Agent: ${agentMessage}\n`));
    messageCount++;
  } catch (err) {
    console.error("\n❌ AGENT ERROR:", err);
  }
}

// Loop to keep asking user input
rl.on("line", async (input) => {
  if (input.toLowerCase() === "exit") {
    console.log(chalk.yellow("👋 Exiting Student Support System. Bye!"));
    rl.close();
    process.exit(0);
  } else {
    await askAgent(input);
    rl.prompt();
  }
});

rl.prompt();

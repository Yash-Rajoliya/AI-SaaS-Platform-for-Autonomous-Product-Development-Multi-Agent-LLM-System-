import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class PromptManager {
  constructor() {
    this.cache = new Map();
  }

  async load(promptFile) {
    if (this.cache.has(promptFile)) {
      return this.cache.get(promptFile);
    }

    const filePath = path.join(
      __dirname,
      promptFile,
    );

    const content = await fs.readFile(
      filePath,
      "utf8",
    );

    this.cache.set(promptFile, content);

    return content;
  }

  async render(promptFile, variables = {}) {
    let template = await this.load(promptFile);

    Object.entries(variables).forEach(
      ([key, value]) => {
        template = template.replaceAll(
          `{{${key}}}`,
          String(value),
        );
      },
    );

    return template;
  }

  invalidate(promptFile) {
    this.cache.delete(promptFile);
  }

  clear() {
    this.cache.clear();
  }
}
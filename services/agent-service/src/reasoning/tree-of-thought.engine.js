import { randomUUID } from "crypto";

export class TreeOfThoughtEngine {
  constructor(options = {}) {
    this.maxDepth = options.maxDepth || 4;
    this.maxBranches = options.maxBranches || 5;
  }

  async generate(problem) {
    const root = {
      id: randomUUID(),
      depth: 0,
      thought: problem,
      score: 1,
      children: []
    };

    await this.expand(root);

    const bestPath = this.findBestPath(root);

    return {
      tree: root,
      bestPath,
      generatedAt: new Date().toISOString()
    };
  }

  async expand(node) {
    if (node.depth >= this.maxDepth) {
      return;
    }

    const branchCount = Math.min(
      this.maxBranches,
      3
    );

    for (let i = 0; i < branchCount; i++) {
      const child = {
        id: randomUUID(),
        depth: node.depth + 1,
        thought: `${node.thought} → Option ${i + 1}`,
        score: Math.random(),
        children: []
      };

      node.children.push(child);

      await this.expand(child);
    }
  }

  findBestPath(root) {
    const path = [];

    let current = root;

    while (
      current &&
      current.children &&
      current.children.length
    ) {
      path.push(current);

      current = current.children.reduce((best, node) =>
        node.score > best.score ? node : best
      );
    }

    if (current) {
      path.push(current);
    }

    return path;
  }
}
export class PlannerPrompt {
  buildPrompt({
    requirements,
    context,
  }) {
    return `
You are a Principal Product Strategist.

Context:
${JSON.stringify(context, null, 2)}

Requirements:
${JSON.stringify(
  requirements,
  null,
  2,
)}

Generate:
- Product Vision
- Epics
- User Stories
- Milestones
- Sprint Plan
- Risks
`;
  }
}
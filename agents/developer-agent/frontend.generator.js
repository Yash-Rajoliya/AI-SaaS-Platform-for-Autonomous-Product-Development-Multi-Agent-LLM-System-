export class FrontendGenerator {
  async generate(specification) {
    return {
      framework: "React",
      uiLibrary:
        "TailwindCSS",
      pages:
        specification.pages || [],
    };
  }
}
export class MicroserviceGenerator {
  async generate(specification) {
    return (
      specification.services || []
    ).map((service) => ({
      name: service,
      communication:
        "Event Driven",
      status: "generated",
    }));
  }
}
export class FederatedSecurity {
  validate(request) {
    return {
      allowed: !!request.identity,
      checkedAt: new Date().toISOString(),
    };
  }
}
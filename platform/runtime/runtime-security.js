export class RuntimeSecurity {
  validate(runtime) {
    const violations = [];

    if (runtime.privileged === true) {
      violations.push("Privileged mode not allowed");
    }

    if (runtime.hostNetwork === true) {
      violations.push("Host network access forbidden");
    }

    return {
      secure: violations.length === 0,
      violations,
    };
  }

  enforce(runtime) {
    runtime.privileged = false;
    runtime.hostNetwork = false;

    return runtime;
  }
}
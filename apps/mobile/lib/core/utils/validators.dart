final class Validators {
  Validators._();

  static String? required(
    String? value,
    String field,
  ) {
    if (value == null || value.trim().isEmpty) {
      return '$field is required';
    }

    return null;
  }

  static String? email(String? value) {
    if (value == null || value.isEmpty) {
      return 'Email is required';
    }

    final regex = RegExp(
      r'^[^\s@]+@[^\s@]+\.[^\s@]+$',
    );

    if (!regex.hasMatch(value)) {
      return 'Invalid email address';
    }

    return null;
  }
}
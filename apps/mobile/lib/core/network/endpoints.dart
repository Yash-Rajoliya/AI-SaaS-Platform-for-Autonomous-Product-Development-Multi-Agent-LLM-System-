final class Endpoints {
  Endpoints._();

  static const String baseUrl =
      String.fromEnvironment(
        'API_URL',
        defaultValue: 'https://api.example.com',
      );

  static const String login = '/auth/login';
  static const String refresh = '/auth/refresh';

  static const String agents = '/agents';
  static const String deployments = '/deployments';
  static const String observability = '/observability';

  static const String websocket = '/ws';
}
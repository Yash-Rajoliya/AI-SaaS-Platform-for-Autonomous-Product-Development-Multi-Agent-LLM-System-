import '../network/api_client.dart';
import '../network/endpoints.dart';

class AuthService {
  final ApiClient client;

  AuthService(this.client);

  Future<void> login({
    required String email,
    required String password,
  }) async {
    await client.dio.post(
      Endpoints.login,
      data: {
        'email': email,
        'password': password,
      },
    );
  }

  Future<void> refreshToken() async {
    await client.dio.post(Endpoints.refresh);
  }
}
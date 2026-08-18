import '../network/api_client.dart';
import '../network/endpoints.dart';

class ObservabilityService {
  final ApiClient client;

  ObservabilityService(this.client);

  Future<Map<String, dynamic>> getOverview() async {
    final response = await client.dio.get(
      Endpoints.observability,
    );

    return Map<String, dynamic>.from(response.data);
  }
}
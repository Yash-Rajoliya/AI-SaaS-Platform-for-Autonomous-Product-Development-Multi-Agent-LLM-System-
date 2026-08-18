import '../network/api_client.dart';
import '../network/endpoints.dart';

class AgentService {
  final ApiClient client;

  AgentService(this.client);

  Future<List<dynamic>> getAgents() async {
    final response = await client.dio.get(Endpoints.agents);
    return response.data as List<dynamic>;
  }
}
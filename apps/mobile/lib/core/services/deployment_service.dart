import '../network/api_client.dart';
import '../network/endpoints.dart';

class DeploymentService {
  final ApiClient client;

  DeploymentService(this.client);

  Future<List<dynamic>> getDeployments() async {
    final response = await client.dio.get(
      Endpoints.deployments,
    );

    return response.data as List<dynamic>;
  }
}
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/network/api_client.dart';
import '../../core/services/agent_service.dart';
import '../../core/services/auth_service.dart';
import '../../core/services/deployment_service.dart';
import '../../core/services/observability_service.dart';

final apiClientProvider =
    Provider<ApiClient>(
  (ref) => ApiClient(),
);

final authServiceProvider =
    Provider<AuthService>(
  (ref) => AuthService(
    ref.read(apiClientProvider),
  ),
);

final agentServiceProvider =
    Provider<AgentService>(
  (ref) => AgentService(
    ref.read(apiClientProvider),
  ),
);

final deploymentServiceProvider =
    Provider<DeploymentService>(
  (ref) => DeploymentService(
    ref.read(apiClientProvider),
  ),
);

final observabilityServiceProvider =
    Provider<ObservabilityService>(
  (ref) => ObservabilityService(
    ref.read(apiClientProvider),
  ),
);
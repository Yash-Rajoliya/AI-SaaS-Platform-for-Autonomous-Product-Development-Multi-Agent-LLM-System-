import 'package:flutter/material.dart';

import '../../shared/widgets/metrics_card.dart';

class DashboardScreen extends StatelessWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final metrics = [
      ('Active Agents', '12'),
      ('Deployments', '38'),
      ('Incidents', '2'),
      ('Success Rate', '99.4%'),
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Dashboard'),
      ),
      body: GridView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: metrics.length,
        gridDelegate:
            const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 1.4,
        ),
        itemBuilder: (_, index) {
          return MetricsCard(
            title: metrics[index].$1,
            value: metrics[index].$2,
          );
        },
      ),
    );
  }
}
import 'package:flutter/material.dart';

class DeploymentScreen extends StatelessWidget {
  const DeploymentScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Deployments'),
      ),
      body: ListView.builder(
        itemCount: 20,
        itemBuilder: (_, index) {
          return ListTile(
            leading: const Icon(
              Icons.cloud_done,
            ),
            title: Text(
              'Deployment #$index',
            ),
            subtitle: const Text(
              'Healthy',
            ),
          );
        },
      ),
    );
  }
}
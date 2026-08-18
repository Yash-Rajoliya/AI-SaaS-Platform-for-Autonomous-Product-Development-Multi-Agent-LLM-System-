import 'package:flutter/material.dart';

class ObservabilityScreen
    extends StatelessWidget {
  const ObservabilityScreen({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Observability'),
      ),
      body: const Center(
        child: Text(
          'Metrics, Logs & Traces',
        ),
      ),
    );
  }
}
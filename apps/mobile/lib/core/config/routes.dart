import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

final class AppRoutes {
  static final GoRouter router = GoRouter(
    initialLocation: '/',
    routes: [
      GoRoute(
        path: '/',
        builder: (_, __) => const _HomeScreen(),
      ),
    ],
  );
}

class _HomeScreen extends StatelessWidget {
  const _HomeScreen();

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: Text('AI SaaS Mobile'),
      ),
    );
  }
}
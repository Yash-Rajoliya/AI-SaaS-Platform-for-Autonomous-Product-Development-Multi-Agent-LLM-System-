import 'package:flutter/material.dart';

import 'core/config/theme.dart';
import 'core/config/routes.dart';

class AISaaSMobileApp extends StatelessWidget {
  const AISaaSMobileApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'AI SaaS Platform',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      routerConfig: AppRoutes.router,
    );
  }
}
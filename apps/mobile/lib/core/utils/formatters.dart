import 'package:intl/intl.dart';

final class Formatters {
  Formatters._();

  static String date(DateTime value) {
    return DateFormat('dd MMM yyyy').format(value);
  }

  static String dateTime(DateTime value) {
    return DateFormat(
      'dd MMM yyyy HH:mm',
    ).format(value);
  }

  static String currency(num value) {
    return NumberFormat.currency(
      symbol: '\$',
    ).format(value);
  }
}
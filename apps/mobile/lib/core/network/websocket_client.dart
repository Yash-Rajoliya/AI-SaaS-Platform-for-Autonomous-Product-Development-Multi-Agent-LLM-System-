import 'dart:convert';

import 'package:web_socket_channel/web_socket_channel.dart';

class WebSocketClient {
  WebSocketChannel? _channel;

  bool get isConnected => _channel != null;

  void connect(String url) {
    _channel = WebSocketChannel.connect(Uri.parse(url));
  }

  Stream<dynamic>? get stream =>
      _channel?.stream.map((event) => jsonDecode(event));

  void send(Map<String, dynamic> payload) {
    _channel?.sink.add(jsonEncode(payload));
  }

  void disconnect() {
    _channel?.sink.close();
    _channel = null;
  }
}
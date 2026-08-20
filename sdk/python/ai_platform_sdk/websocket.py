import asyncio
import websockets


class WebSocketClient:
    def __init__(self, url):
        self.url = url

    async def connect(self):
        return await websockets.connect(
            self.url
        )
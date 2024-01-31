let socket: null | WebSocket = null;

export const useSockets = () => {
  const send = (data: string) => {
    getWebSocket().send(data);
  };

  const connect = (uri: string) => {
    if (socket != null) throw Error('Socket already connected!');
    socket = new WebSocket(uri);
  };

  const disconnect = () => {
    if (socket == null) throw Error('No socket connected!');
    socket.close();
  };

  // Тут это нужно, чтобы привязать функцию к onmessage.
  // eslint-disable-next-line no-unused-vars
  let onreceive: ((event: WebSocketMessageEvent) => void) | null = null;
  // eslint-disable-next-line no-unused-vars
  const receive = (callback: (event: WebSocketMessageEvent) => void) => {
    onreceive = callback;
  };

  function getWebSocket() {
    if (socket == null) throw Error();
    socket.onmessage = onreceive;
    return socket;
  }

  return { send, receive, connect, disconnect };
};

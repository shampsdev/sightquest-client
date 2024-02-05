let socket: null | WebSocket = null;

export const useSockets = () => {
  const send = async (data: string) => {
    try {
      getWebSocket().send(data);
    } catch (e) {
      console.log(e);
    }
  };

  const connect = async (uri: string) => {
    if (socket != null) throw Error('Socket already connected!');
    socket = new WebSocket(uri);

    // Wait until socket is available beofre resolving.
    return new Promise<void>((resolve, reject) => {
      if (socket != null) {
        socket.onopen = () => {
          return resolve();
        };
        socket.onerror = (error) => {
          return reject(error);
        };
      }
    });
  };

  const disconnect = () => {
    if (socket == null) return;
    socket.close();
    socket = null;
  };

  // Тут это нужно, чтобы привязать функцию к onmessage.
  // eslint-disable-next-line no-unused-vars
  let onreceive: ((event: WebSocketMessageEvent) => void) | null = null;
  // eslint-disable-next-line no-unused-vars
  const receive = (callback: (event: WebSocketMessageEvent) => void) => {
    onreceive = callback;
  };

  function getWebSocket() {
    if (socket == null) throw Error('Socket is not connected!');
    socket.onmessage = onreceive;
    return socket;
  }

  return { send, receive, connect, disconnect };
};

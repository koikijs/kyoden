
export default function wsFn({ url, onmessage = () => {} }) {
  const WebSocket = window.WebSocket || window.MozWebsocket;
  if (!WebSocket) {
    console.log('WebSocket is not defined');
    return null;
  }
  const ws = new WebSocket(url);
  const listener = {
    onmessage,
    close: () => ws.close()
  };

  ws.onopen = () => {
    console.log('connected!');
    ws.onmessage = (msg) => {
      const json = JSON.parse(msg.data);
      listener.onmessage(json);
    };
  };

  ws.onclose = (...args) => {
    console.log(args);
  };
  return listener;
}

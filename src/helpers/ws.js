
export default function wsFn({ url }) {
  const WebSocket = window.WebSocket || window.MozWebsocket;
  if (!WebSocket) {
    console.log('WebSocket is not defined');
    return null;
  }
  const ws = new WebSocket(url);
  const listener = {
    close: () => ws.close()
  };

  ws.onopen = () => {
    console.log('connected!');
    ws.onmessage = (msg) => {
      const json = JSON.parse(msg);
      listener.onmessage = fn => fn(json);
    };
  };

  ws.onclose = (...args) => {
    console.log(args);
  };
  return listener;
}

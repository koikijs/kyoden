export default function ({
  url,
  dispatch,
  map,
  /**
    map: {
      '/events/xxxx-vvvv-yyyy': function get(){}
    }
  */
}) {
  const WebSocket = window.WebSocket || window.MozWebsocket;
  if (!WebSocket) {
    console.log('WebSocket is not defined');
    return null;
  }
  const ws = new WebSocket(url);

  ws.onopen = () => {
    console.log('connected!');
    ws.onmessage = (msg) => {
      const json = JSON.parse(msg);
      dispatch(map[json.uri](json.data));
    };
  };

  ws.onclose = (...args) => {
    console.log(args);
  };
  return ws;
}

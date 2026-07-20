import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;
let allSockets: WebSocket[] = [];

wss.on("connection", (socket) => {
  allSockets.push(socket);

  userCount += 1;
  console.log(`User #${userCount} connection succesfull`);

  socket.on("message", (message) => {
    const msg = message.toString();
    // console.log(`Message recieved: ${msg}`);

    // setTimeout(() => {
    //   socket.send(`${msg}: sent from the server`);
    // }, 1000);

    for (const currentSocket of allSockets) {
      if (currentSocket !== socket) {
        currentSocket.send(`${msg}: broadcast from the server`);
      }
    }
  });

  socket.on("close", () => {
    allSockets = allSockets.filter((s) => s !== socket);
  });
});

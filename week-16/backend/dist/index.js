import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    console.log("User Connection Succesful");
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
        else {
            socket.send("The message sent is not ping");
            console.log("The message sent is not ping");
        }
    });
});
//# sourceMappingURL=index.js.map
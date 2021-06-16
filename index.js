const express = require('express')
const app = express()
var path = require('path')
const server = require('http').createServer(app)
const io = require('socket.io')(server,{ cors:{ origin: "#"}})
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req,res)  => {
    res.render('home')
})

server.listen(port, () => {
    console.log(`server running on ${port}`)
});
io.on( 'connection' , (socket) => {
    console.log("user connected: " + socket.id);

    socket.on("message", (data) => {
        socket.broadcast.emit("message", data)
    });
  
});

const socket = io('http://localhost:3000')

socket.on('connect', (socket) => {
    console.log('Successfully connected!');
});

socket.on('message', (data) => {
    console.log(data)
    // document.queryselector('h1').innerHTML = data
    $('.showMessages').append("<span class='mleft'>"+data+"</span><br/>");
})

const sendMessage = () => {
    const message = $('.message').val();
    $('.showMessages').append("<span class='mright'>"+message+"</span><br/>");
    socket.emit('message',message)
}
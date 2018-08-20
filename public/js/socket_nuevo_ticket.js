//Comando para establecer la comunicacion

var socket = io();

var label = $('#lblNuevoTicket');

socket.on("connect", function() {
  console.log("Conectado con el servidor");
});

socket.on("disconnect", function() {
  console.log("Desconectado con el servidor");
});

socket.on('estadoActual',function ({actual}) {
  label.text(actual);
})

$("button").on("click", function() {
  socket.emit('siguienteTicket',null,function (siguiente) {
    label.text(siguiente)
  });
});

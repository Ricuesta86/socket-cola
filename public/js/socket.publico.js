var socket = io();


var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');


socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(data) {
    // console.log(data.ultimos4);
    actualizarHTML(data.ultimos4);

});

socket.on('ultimos4', function(data) {
    actualizarHTML(data.ultimos4);
});


function actualizarHTML(ultimos4) {
    lblTicket1.text('Ticket ' + ultimos4[0].numero);
    lblTicket2.text('Ticket ' + ultimos4[1].numero);
    lblTicket3.text('Ticket ' + ultimos4[2].numero);
    lblTicket4.text('Ticket ' + ultimos4[3].numero);


    lblEscritorio1.text('Escritorio ' + ultimos4[0].escritorio);
    lblEscritorio2.text('Escritorio ' + ultimos4[1].escritorio);
    lblEscritorio3.text('Escritorio ' + ultimos4[2].escritorio);
    lblEscritorio4.text('Escritorio ' + ultimos4[3].escritorio);

    // for (let i = 0; i < ultimos4.length; i++) {
    //     lblTicket[i].text(ultimos4[i].numero);
    //     lblEscritorio[i].text(ultimos4[i].escritorio);
    // }
}
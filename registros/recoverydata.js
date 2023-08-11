$(document).ready(function() {
    carregarDados();

    function carregarDados() {
        $.ajax({
            url: 'http://localhost:3000/reservas',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                var tableBody = $('#my-table tbody');
                tableBody.empty();

                $.each(data, function(index, reserva) {
                    var row = '<tr>' +
                        '<td>' + reserva.nome + '</td>' +
                        '<td>' + reserva.email + '</td>' +
                        '<td>' + reserva.dataentrada + '</td>' +
                        '<td>' + reserva.datasaida + '</td>' +
                        '<td>' + reserva.observacoes + '</td>' +
                        '<td>' + reserva.adultos + '</td>' +
                        '<td>' + reserva.criancas + '</td>' +
                        '</tr>';
                    tableBody.append(row);
                });
            },
            error: function(xhr, status, error) {
                console.error('Erro na requisição:', status, error);
            }
        });
    }

    setInterval(carregarDados, 5000); // 5000 milissegundos 
});

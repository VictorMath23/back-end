$(document).ready(function() {
    $('form').submit(function (event) {
        event.preventDefault();

        var formValues = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/reservas',
            data: formValues
        })
        .done(function(data){
            
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Reserva feita com sucesso!',
                showConfirmButton: false,
                timer: 1500
              })
            $('form')[0].reset();
        })
        .fail(function (xhr, status, error){
            
            Swal.fire(
                'Sem conexão',
                'Não foi possivel conectar',
                'question'
              )
            
            
            console.log(error);
        });
    });
});
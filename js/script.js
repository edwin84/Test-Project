$(function () { 
    
    $('#createUserSubmit').click( sendData );
    $('#getUsers').click( getData );

    function sendData () {
        var data         = {};
            data.name    = $('#inputName').val();
            data.surname = $('#inputSurname').val();
            data.lasname = $('#inputLastName').val();
            data.email   = $('#inputEmail').val();
			
	    $("#form").validate ({
                              name: {
                                     required: true,
		                             minlength: 3
                                  },
                             email: {
                                     required: true,
                                     email: true
									 
							        },
		
		                    createUserSubmitHandler: function () {

                                                                  alert('ok');
                                                                  }
							})									

        $.ajax({
            type: 'POST',
            url: 'http://92.53.104.115:3000/api/v1/users',
            data: data,
            dataType: 'json', //script, html, json, jsonp
            beforeSend: function ( jqXHR, settings ) {
                $('#createUserSubmit').prop('disabled', true)
                $('#createUserSubmit span').css('opacity', 0.5);
                $('#createUserSubmit .cssload-container').css('display', 'block');
                console.log(jqXHR);
                console.log(settings);
                console.log('Я выполняюсь перед отправкой ajax-запроса!');
                // return false; //если в этом методе вернуть false, то ajax-запрос не выполнится
            },
            error: function ( jqXHR, textStatus, errorThrown ) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
                console.log('Я выполняюсь в случае ошибки!');
				alert("Ошибка");
                // console.log('Время превышено');
            },
            success: function ( data, textStatus, errorThrown ){
                $('#inputName').val('');
                $('#inputSurname').val('');
                $('#inputLastName').val('');
                $('#inputEmail').val('');
                console.log('Пользователь создан');
            },
            complete: function ( jqXHR, textStatus ) {
                $('#createUserSubmit').prop('disabled', false)
                $('#createUserSubmit span').css('opacity', 1);
                $('#createUserSubmit .cssload-container').css('display', 'none');
                console.log(jqXHR);
                console.log(textStatus);
                console.log('Мне всё равно с каким статусом завершился ajax-запрос, я выполнюсь в любом случае!');
            }
        });

        return false;
    }

});









 function getData () {
			
        $.ajax({
            type: 'GET',
            url: 'http://92.53.104.115:3000/api/v1/users',
      
            beforeSend: function ( jqXHR, settings ) {
                console.log('Я выполняюсь перед отправкой ajax-запроса!');
                // return false; //если в этом методе вернуть false, то ajax-запрос не выполнится
            },
            error: function ( jqXHR, textStatus, errorThrown ) {
				
                console.log('Я выполняюсь в случае ошибки!');
                // console.log('Время превышено');
            },
            success: function ( data, textStatus, errorThrown ){
				
                console.log('Пользователь создан=' , data);
            },
            complete: function ( jqXHR, textStatus ) {
				
                console.log('Мне всё равно с каким статусом завершился ajax-запрос, я выполнюсь в любом случае!');
            }
        });

        return false;
    }
















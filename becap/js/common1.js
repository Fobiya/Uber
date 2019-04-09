AOS.init({
    easing: 'ease-in-out-sine',
     disable: 'mobile'
});



$(function () {
    $("[name=send]").click(function () {
		
		
		
	 // conversion  выбор
		var submit = $(this),
        form = submit.closest('form'),
        conversion = form.attr('data-conversion');
		
		
	
		
        $(":input.error").removeClass('error');
        $(".allert").remove();
        var error;
        var btn = $(this);
        var ref = btn.closest('form').find('[required]');
        var msg = btn.closest('form').find('input, textarea');
        var send_btn = btn.closest('form').find('[name=send]');
        var send_options = btn.closest('form').find('[name=campaign_token]');
        $(ref).each(function () {
            if ($(this).val() == '') {
                var errorfield = $(this);
                $(this).addClass('error').parent('.field').append('<div class="allert"><span>Заполните это поле</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                error = 1;
                $(":input.error:first").focus();
                return;
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if ($(this).attr("type") == 'email') {
                    if(!pattern.test($(this).val())) {
                        $("[name=email]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
              var patterntel = /^()[0-9+()]{7,16}/i;
                if ($(this).attr("type") == 'tel') {
                    if (!patterntel.test($(this).val())) {
                        $("[name=phone]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный номер телефона</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
            }
        });
		

        if (!(error == 1)) {
            $(send_btn).each(function () {
                $(this).attr('disabled', true);
            });
            $(send_options).each(function () {
                var form = $(this).closest('form'), name = form.find('.name').val();
                if ($(this).val() == '') {
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: msg,
                        success: function() {
                            $('form').trigger("reset");
                            setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
                            // Настройки модального окна после удачной отправки
                        
                            
                               // Настройки модального окна после удачной отправки
                                    $('div.md-show').removeClass('md-show');
                                    $("#call_ok")[0].click();
                             
							
						
                            
						
                            // yaCounter41256209.reachGoal(conversion);
                          //  location.href = 'http://www.u2powerbank.com.ua/success.php';
                            
                            
                            
                        },
                        error: function(xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
                } else {
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: msg,
                        success:
                            $.ajax({
                                type: 'POST',
                                url: 'https://app.getresponse.com/add_subscriber.html',
                                data: msg,
                                statusCode: {0:function() {
                                    $('form').trigger("reset");
                                    setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
                                    // Настройки модального окна после удачной отправки
                                    
                                       // Настройки модального окна после удачной отправки
                                    $('div.md-show').removeClass('md-show');
                                    $("#call_ok")[0].click();
                                    
                                    
                               //  yaCounter41256209.reachGoal(conversion);
                                   //   location.href = 'http://www.u2powerbank.com.ua/success.php';
                                    
                                }}
                            }),
                        error:  function(xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
                }
            });
        }
        return false;
    })
});




$(function () {

	
      $('[id*="phone"]').mask("+37(999) 999-9999");
    
});


 
//ФАНСИ


 $(".fancybox-effects-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});    
  


			$('.fancybox').fancybox();





function sendNameText_1()
{
  
    b = document.getElementById('uname_1');
    a = document.getElementById('inname');
    a.innerText = b.value ;
}






function sendNameText_2()
{
  
    b = document.getElementById('uname_2');
    a = document.getElementById('inname');
    a.innerText = b.value ;
}















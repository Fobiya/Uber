	AOS.init({
    easing: 'ease-in-out-sine',
     disable: 'mobile'
});


$('body').each(function() {
    var body = $(this);
    var img_url = $(this).data('img');

    var img = new Image();
    img.src = img_url;
    img.onload = function(){
        var ppbox = '<div id="pp" style="background: url('+img_url+') no-repeat 50% 0%;top:0;width:100%;position:absolute;z-index:1000000;opacity:0.5;height:'+img.height+'px"></div>';
        var ppbtn = '<button onclick="myOff()" id="ppbtn" style="position:fixed;top:0;right:0;z-index:1000001">OFF</button>'
        body.append(ppbox);
        body.append(ppbtn);
    };
});
function myOff() {
    var ppbtntext = $('#ppbtn').text();
    if (ppbtntext == 'OFF') {
        $('#ppbtn').text('ON');
        $('#pp').css({'z-index' : '-1'});
    } else {
        $('#ppbtn').text('OFF');
        $('#pp').css({'z-index' : '1000000'});
    }
}

$('html').keydown(function(){
  var ppbtntext = $('#ppbtn').text();
  if (event.keyCode == 81) {
    if (ppbtntext == 'OFF') {
        $('#ppbtn').text('ON');
        $('#pp').css({'z-index' : '-1'});
    } else {
        $('#ppbtn').text('OFF');
        $('#pp').css({'z-index' : '1000000'});
    }
  }
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
                             
							
						
                            
						
//                            yaCounter41256209.reachGoal(conversion);
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
                                    
                                    
//                                yaCounter41256209.reachGoal(conversion);
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







function set(obj) {var id=obj.title; $('.pacet').val(id);}
function setbtn(obj) {var id=obj.title; $('.pacet').val("Кнопка: " + id);}




var initializeContactsMap;

initializeContactsMap = function() {
    var canvasMap, location, locationMarker, options, x, y;
    if ($('#map').length) {
        x = 50.5078921;
        y = 30.4666638;
        location = new google.maps.LatLng(x, y);
        options = {
            center: location,
            zoom: 15,
            mapTypeControl: false,
            scrollwheel: false
        };

        var markerImage = new google.maps.MarkerImage(
            'images/icon__map.png',
            new google.maps.Size(75,100),
            new google.maps.Point(0,0),
            new google.maps.Point(-0,0)
        );


        canvasMap = new google.maps.Map(document.getElementById('map'), options);
        locationMarker = new google.maps.Marker({
            icon: markerImage,
            position: location
        });

        return locationMarker.setMap(canvasMap);
    }
};
$(document).ready(initializeContactsMap);




// СКРОЛ ИД

$(".scroll_to_id").mPageScroll2id();

// СКРОЛ ИД



// телефон маска
$(function () {

	
      $('[id*="phone"]').mask("+38(999) 999-9999");
    
});

// телефон маска




  // слайдер  
       $(".real") .slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
           speed: 500
 
      });       

	$(".04__real") .slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
           speed: 500,
		
		 responsive: [
			    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
	{
      breakpoint: 998,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 
      });





$('.box__r1').readmore({
	
	
  speed: 75,
  lessLink: '<a id="r1" class="op__text">В чем разница между Uber и UBERLAB?<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAMAAACXmSduAAAAWlBMVEX///8uzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHFC/u2zAAAAHXRSTlMAsf3y/LcoLmx10tglK4iO5us7Q6OsBfP4CVTxXO/Yfz8AAABFSURBVHjaTcdHEoAgEADBMWcxZ/7/TXELgb41UZx4aUauQwWUQSuM2rXh07p3iN5WYQ3Skd8kn3EW0xVv2/VxErjuB/ECfDEI2O82z0gAAAAASUVORK5CYII=" alt="b"></a>',
	
        heightMargin: 3,
        moreLink: '<a id="r1" class="op__text">В чем разница между Uber и UBERLAB? 	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAPCAMAAAAF48UCAAAAXVBMVEXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL///+zFXizAAAAHXRSTlMAAQQPFC4zNDlITl1lcHeGi5yjrLDEytjd6O7w8qRxxU8AAABHSURBVHgBRc41FsBQCAXRH3d3mf1vM014UN2CAxOWLGigkx/Y8t8vwBC5OSo3TImbq3GD+27lObX9s9adMba/e6meXj1rIX6VcgoMc3YBGgAAAABJRU5ErkJggg==" alt="r"></a>',
    beforeToggle: function(){ $('.r1').toggleClass('active');}

});

 


$('.box__r2').readmore({
  speed: 75,
  lessLink: '<a class="op__text">Подключение к Uber бесплатное?<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAMAAACXmSduAAAAWlBMVEX///8uzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHFC/u2zAAAAHXRSTlMAsf3y/LcoLmx10tglK4iO5us7Q6OsBfP4CVTxXO/Yfz8AAABFSURBVHjaTcdHEoAgEADBMWcxZ/7/TXELgb41UZx4aUauQwWUQSuM2rXh07p3iN5WYQ3Skd8kn3EW0xVv2/VxErjuB/ECfDEI2O82z0gAAAAASUVORK5CYII=" alt="b"></a>',
	
        heightMargin: 3,
        moreLink: '<a class="op__text">Подключение к Uber бесплатное? 	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAPCAMAAAAF48UCAAAAXVBMVEXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL///+zFXizAAAAHXRSTlMAAQQPFC4zNDlITl1lcHeGi5yjrLDEytjd6O7w8qRxxU8AAABHSURBVHgBRc41FsBQCAXRH3d3mf1vM014UN2CAxOWLGigkx/Y8t8vwBC5OSo3TImbq3GD+27lObX9s9adMba/e6meXj1rIX6VcgoMc3YBGgAAAABJRU5ErkJggg==" alt="r"></a>',
     beforeToggle: function(){ $('.r2').toggleClass('active');}
});

$('.box__r3').readmore({
  speed: 75,
  lessLink: '<a class="op__text">Когда происходят выплаты?<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAMAAACXmSduAAAAWlBMVEX///8uzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHFC/u2zAAAAHXRSTlMAsf3y/LcoLmx10tglK4iO5us7Q6OsBfP4CVTxXO/Yfz8AAABFSURBVHjaTcdHEoAgEADBMWcxZ/7/TXELgb41UZx4aUauQwWUQSuM2rXh07p3iN5WYQ3Skd8kn3EW0xVv2/VxErjuB/ECfDEI2O82z0gAAAAASUVORK5CYII=" alt="b"></a>',
	
        heightMargin: 3,
        moreLink: '<a class="op__text">Когда происходят выплаты? 	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAPCAMAAAAF48UCAAAAXVBMVEXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL///+zFXizAAAAHXRSTlMAAQQPFC4zNDlITl1lcHeGi5yjrLDEytjd6O7w8qRxxU8AAABHSURBVHgBRc41FsBQCAXRH3d3mf1vM014UN2CAxOWLGigkx/Y8t8vwBC5OSo3TImbq3GD+27lObX9s9adMba/e6meXj1rIX6VcgoMc3YBGgAAAABJRU5ErkJggg==" alt="r"></a>',
     beforeToggle: function(){ $('.r3').toggleClass('active');}
});

$('.box__r4').readmore({
  speed: 75,
  lessLink: '<a class="op__text">Хватает ли заказов?<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAMAAACXmSduAAAAWlBMVEX///8uzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHFC/u2zAAAAHXRSTlMAsf3y/LcoLmx10tglK4iO5us7Q6OsBfP4CVTxXO/Yfz8AAABFSURBVHjaTcdHEoAgEADBMWcxZ/7/TXELgb41UZx4aUauQwWUQSuM2rXh07p3iN5WYQ3Skd8kn3EW0xVv2/VxErjuB/ECfDEI2O82z0gAAAAASUVORK5CYII=" alt="b"></a>',
	
        heightMargin: 3,
        moreLink: '<a class="op__text">Хватает ли заказов? 	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAPCAMAAAAF48UCAAAAXVBMVEXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL///+zFXizAAAAHXRSTlMAAQQPFC4zNDlITl1lcHeGi5yjrLDEytjd6O7w8qRxxU8AAABHSURBVHgBRc41FsBQCAXRH3d3mf1vM014UN2CAxOWLGigkx/Y8t8vwBC5OSo3TImbq3GD+27lObX9s9adMba/e6meXj1rIX6VcgoMc3YBGgAAAABJRU5ErkJggg==" alt="r"></a>',
     beforeToggle: function(){ $('.r4').toggleClass('active');}
});

$('.box__r5').readmore({
  speed: 75,
  lessLink: '<a class="op__text">Могу ли я работать в свободное время?<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAMAAACXmSduAAAAWlBMVEX///8uzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHFC/u2zAAAAHXRSTlMAsf3y/LcoLmx10tglK4iO5us7Q6OsBfP4CVTxXO/Yfz8AAABFSURBVHjaTcdHEoAgEADBMWcxZ/7/TXELgb41UZx4aUauQwWUQSuM2rXh07p3iN5WYQ3Skd8kn3EW0xVv2/VxErjuB/ECfDEI2O82z0gAAAAASUVORK5CYII=" alt="b"></a>',
	
        heightMargin: 3,
        moreLink: '<a class="op__text">Могу ли я работать в свободное время?	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAPCAMAAAAF48UCAAAAXVBMVEXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL///+zFXizAAAAHXRSTlMAAQQPFC4zNDlITl1lcHeGi5yjrLDEytjd6O7w8qRxxU8AAABHSURBVHgBRc41FsBQCAXRH3d3mf1vM014UN2CAxOWLGigkx/Y8t8vwBC5OSo3TImbq3GD+27lObX9s9adMba/e6meXj1rIX6VcgoMc3YBGgAAAABJRU5ErkJggg==" alt="r"></a>',
     beforeToggle: function(){ $('.r5').toggleClass('active');}
});

$('.box__r6').readmore({
  speed: 75,
  lessLink: '<a class="op__text">Сколько можно зарабатывать в Uber?<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAMAAACXmSduAAAAWlBMVEX///8uzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHEuzHFC/u2zAAAAHXRSTlMAsf3y/LcoLmx10tglK4iO5us7Q6OsBfP4CVTxXO/Yfz8AAABFSURBVHjaTcdHEoAgEADBMWcxZ/7/TXELgb41UZx4aUauQwWUQSuM2rXh07p3iN5WYQ3Skd8kn3EW0xVv2/VxErjuB/ECfDEI2O82z0gAAAAASUVORK5CYII=" alt="b"></a>',
	
        heightMargin: 3,
        moreLink: '<a class="op__text">Сколько можно зарабатывать в Uber? 	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAPCAMAAAAF48UCAAAAXVBMVEXS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL///+zFXizAAAAHXRSTlMAAQQPFC4zNDlITl1lcHeGi5yjrLDEytjd6O7w8qRxxU8AAABHSURBVHgBRc41FsBQCAXRH3d3mf1vM014UN2CAxOWLGigkx/Y8t8vwBC5OSo3TImbq3GD+27lObX9s9adMba/e6meXj1rIX6VcgoMc3YBGgAAAABJRU5ErkJggg==" alt="r"></a>',
     beforeToggle: function(){ $('.r6').toggleClass('active');}
});



 


// отчет инпут наме 


function sendNameText()
{
  
    b = document.getElementById('uname');
    a = document.getElementById('inname');
    a.innerText = b.value ;
};



function sendNameText_1()
{
  
    b = document.getElementById('uname_1');
    a = document.getElementById('inname');
    a.innerText = b.value ;
};



function sendNameText_2()
{
  
    b = document.getElementById('uname_2');
    a = document.getElementById('inname');
    a.innerText = b.value ;
};


function sendNameText_3()
{
  
    b = document.getElementById('uname_3');
    a = document.getElementById('inname');
    a.innerText = b.value ;
};


function sendNameText_4()
{
  
    b = document.getElementById('uname_4');
    a = document.getElementById('inname');
    a.innerText = b.value ;
};

function sendNameText_5()
{
  
    b = document.getElementById('uname_5');
    a = document.getElementById('inname');
    a.innerText = b.value ;
};

// отчет инпут наме 



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





  // Elements
  var scene = document.getElementById('scene_1');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_1, {
  });


 // Elements
  var scene = document.getElementById('scene_2');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_2, {
  });
 // Elements
  var scene = document.getElementById('scene_3');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_3, {
  });



 // Elements
  var scene = document.getElementById('scene_4');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_4, {
  });






// Elements
  var scene = document.getElementById('scene_6');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_6, {
  });
// Elements
  var scene = document.getElementById('scene_7');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_7, {
  });

// Elements
  var scene = document.getElementById('scene_8');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_8, {
  });





// Elements
  var scene = document.getElementById('scene_9');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_9, {
  });

// Elements
  var scene = document.getElementById('scene_10');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_10, {
  });







// Elements
  var scene = document.getElementById('scene_11');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_11, {
  });

// Elements
  var scene = document.getElementById('scene_12');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_12, {
  });







// Elements
  var scene = document.getElementById('scene_13');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_13, {
  });

// Elements
  var scene = document.getElementById('scene_14');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');


  // Pretty simple huh?
  var parallax = new Parallax(scene_14, {
  });


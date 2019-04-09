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














    $('header').waypoint(
        (function() {
            var headline = document.querySelector('.trigger-headline'),
                trigger = document.querySelector('.btn--trigger'),
                segmenter = new Segmenter(document.querySelector('.segmenter'), {
                    pieces: 4,
                    animation: {
                        duration: 1500,
                        easing: 'easeInOutExpo',
                        delay: 100,
                        translateZ: 100
                    },
                    parallax: true,
                    positions: [
                        {top: 0, left: 0, width: 45, height: 45},
                        {top: 55, left: 0, width: 45, height: 45},
                        {top: 0, left: 55, width: 45, height: 45},
                        {top: 55, left: 55, width: 45, height: 45}
                    ],
                    onReady: function() {
                        trigger.classList.remove('btn--hidden');
                        trigger.addEventListener('click', function() {
                            segmenter.animate();

                            this.classList.add('btn--hidden');
                        });
                    }
                });


            $(document).on( "ready", function(){
                setTimeout(function() {
                    $('.btn--trigger').click();
                }, 2000);
            })

        })

    ,
        {offset: "15px"}
    );








    $('.blok__01').waypoint(
        (function() {
            var headline = document.querySelector('.trigger-headline'),
                trigger = document.querySelector('.btn--trigger__1'),
                segmenter_n = new Segmenter(document.querySelector('.segmenter_n'), {
                    pieces: 3,
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuad',
                        delay: 50,
                        translateZ: {min: 10, max: 65}
                    },
                    parallax: true,

                    positions: [

                        {top: 1, left: 2, width: 18, height: 27},

                        {top: 70, left: 77, width: 18, height: 27},
                        {top: 20, left: 15, width: 65, height: 55}

                    ],
                    onReady: function() {
                        trigger.classList.remove('btn--hidden');
                        trigger.addEventListener('click', function() {
                            segmenter_n.animate();

                            this.classList.add('btn--hidden');
                        });
                    }
                });

            $(function (){
                setTimeout(function() {
                    $('.btn--trigger__1').click();
                }, 2000);
            });
        })

        ,
        {offset: "5px"}
    );





    $('.blok__02').waypoint(
        (function() {
            var headline = document.querySelector('.trigger-headline'),
                trigger = document.querySelector('.btn--trigger__2'),
                segmenter_e = new Segmenter(document.querySelector('.segmenter_e'), {
                    pieces: 2,
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuad',
                        delay: 50,
                        translateZ: {min: 10, max: 65}
                    },
                    parallax: true,

                    positions: [

                        {top: 1, left: 1, width: 40, height: 120},

                        {top: 1, left: 54, width: 40, height: 96}


                    ],
                    onReady: function() {
                        trigger.classList.remove('btn--hidden');
                        trigger.addEventListener('click', function() {
                            segmenter_e.animate();

                            this.classList.add('btn--hidden');
                        });
                    }
                });

            $(function (){
                setTimeout(function() {
                    $('.btn--trigger__2').click();
                }, 2000);
            });
        })

        ,
        {offset: "200px"}
    );






    $('.blok__05').waypoint(
        (function() {
            var headline = document.querySelector('.trigger-headline'),
                trigger = document.querySelector('.btn--trigger__3'),
                segmenter_t = new Segmenter(document.querySelector('.segmenter_t'), {
                    pieces: 2,
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuad',
                        delay: 50,
                        translateZ: {min: 10, max: 65}
                    },
                    parallax: true,
                    positions: [

                        {top: 30, left: 1, width: 40, height: 80},

                        {top: 5, left: 57, width: 40, height: 70}


                    ],
                    onReady: function() {
                        trigger.classList.remove('btn--hidden');
                        trigger.addEventListener('click', function() {
                            segmenter_t.animate();

                            this.classList.add('btn--hidden');
                        });
                    }
                });

            $(function (){
                setTimeout(function() {
                    $('.btn--trigger__3').click();
                }, 2000);
            });
        })

        ,
        {offset: "200px"}
    );






    $('.blok__09').waypoint(
        (function() {
            var headline = document.querySelector('.trigger-headline'),
                trigger = document.querySelector('.btn--trigger__4'),
                segmenter_k = new Segmenter(document.querySelector('.segmenter_k'), {
                    pieces: 2,
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuad',
                        delay: 50,
                        translateZ: {min: 10, max: 75}
                    },
                    parallax: true,
                    positions: [

                        {top: 55, left: 1, width: 30, height: 45},

                        {top: 5, left: 42, width: 55, height: 60}


                    ],
                    onReady: function() {
                        trigger.classList.remove('btn--hidden');
                        trigger.addEventListener('click', function() {
                            segmenter_k.animate();

                            this.classList.add('btn--hidden');
                        });
                    }
                });

            $(function (){
                setTimeout(function() {
                    $('.btn--trigger__4').click();
                }, 2000);
            });
        })

        ,
        {offset: "200px"}
    );

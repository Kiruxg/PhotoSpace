   /*eslint-env jquery*/
 /*eslint-env browser*/
$(document).ready(function () {

	$('#searchBar').blur(function() {

		if (this.value == ''){
			this.value = 'Search...'
			this.placeholder = ''
		}
	})
	$('#searchBar').mousedown(function() {

		if (this.value == 'Search...'){
			this.value = ''
			this.placeholder = 'Search...'
		}
	})
  $(".animsition").animsition({
    inClass: 'fade-in-left-sm',
    outClass: 'fade-out-right-sm',
    inDuration: 400,
    outDuration: 700,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in csase the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

    function Warning(){
           var warning = $('form').prepend('<p id="warning">Please fill in all of the areas.</p>')
        $('#warning').css('background-color', 'red')
       }
   $('#submit').on('click', function(event) {
       event.preventDefault()  
       var name = document.getElementById('username').value
       var email =document.getElementById('email').value
       var topic = document.getElementById('options').value
       if (name.length == 0 || email.length == 0|| topic.length == 0) {
           if($('#warning').length == 0){
                Warning()
       }
       } else {
           $('#warning').hide()
       }
    })
$('.carousel').slick({
    dots: true,
  infinite: false,
  speed: 300,
    autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 4,
    arrows: false,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 500,
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
   $('.toggle').on('click',function(){
       console.log(3)
       $('ul').slideToggle();
       $('ul').css('display','block')
   })
    $('.nav li').on("click",function(){
        console.log(4)
		$('ul').slideToggle();
})

});
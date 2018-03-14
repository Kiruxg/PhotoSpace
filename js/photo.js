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
    $('#searchBar').submit(function(){
        
        var current_query = $(this).value
        
        
    })
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
    autoplay: false,
    centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 3,
    arrows: false,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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


  })
        $('.toggle').on('click',function(){
       console.log(3)
       $('ul').slideToggle();
       $(window).on('resize',function(){
           $('ul').css('display','block')
       })
   })
    
    $('.nav li a').on("click",function(){
		$('ul').slideToggle();
})
	
    
$('#comments-container').comments({
    profilePictureURL: 'https://app.viima.com/static/media/user_profiles/user-icon.png',
    getComments: function(success, error) {
        var commentsArray = [{
            id: 1,
            created: '2017-10-01',
            content: 'I am loving the context Greg! Thanks for following up with me after the photoshoot.',
            profilePictureURL: 'images/client1.jpg',
            fullname: 'Konrad H.',
            enableEditing: true,
            enableDeleting: true

        }];
        success(commentsArray);
    }
});
    
});
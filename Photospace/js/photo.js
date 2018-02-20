$(document).ready(function () {
	/*function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
    });
	}
	function active(){
		
		var searchBar = document.getElementById('searchBar')
		if (searchBar.value == 'Search...'){
			searchBar.value == ''
			searchBar.placeholder = 'Search...'
		}
	}*/
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
    $(document).ready(function() {
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
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});
	
});
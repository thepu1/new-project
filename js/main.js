$(document).ready(function () {
  $('.mobile-menu').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu-active',
  });
});


$(document).ready(function(){
	var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
})
	$('.protfolio_manu').on( 'click', 'button', function() {
   var filterValue = $(this).attr('data-filter');
   $grid.isotope({ filter: filterValue });
});

	$('.protfolio_manu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

})
 $(document).ready(function(){
     $('.product-active').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    autoplay:true,
    smartSpeed:1500,
  
    responsive:{
        0:{
            items:1,
            margin:0,
        },
        600:{
            items:2
        },
        1000:{
            items:2,
            dots:true,
            
        }
    }
})

})


 $(document).ready(function(){
  $('html').smoothScroll(1000);
  $('.action').counterUp({
    delay:1,
    time:100,
  });
 });
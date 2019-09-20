 $('.ol1').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    autoplay:true,
    dots:false,
    navText:['<i class="fa fa-angle-left">','<i class="fa fa-angle-right">',],
    smartSpeed:1500,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
 $(document).ready(function(){
     $('.product-active').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:true,
    autoplay:true,
    smartSpeed:1500,
    navText:['Back','Next'],
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:2
        }
    }
})

})

"use strict"; jQuery(function ($) {
    'use strict'; $(window).ready(function () { $('#preloader').delay(200).fadeOut('fade'); }); $(function () { $(document).on('click', 'a.page-scroll', function (event) { var $anchor = $(this); $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 60 }, 900, 'easeInOutExpo'); event.preventDefault(); }); }); $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) { $('.navbar').addClass('affix'); $('.scroll-to-target').addClass('open'); } else { $('.navbar').removeClass('affix'); $('.scroll-to-target').removeClass('open'); }
        if ($(this).scrollTop() > 500) { $('.scroll-to-target').addClass('open'); } else { $('.scroll-to-target').removeClass('open'); }
    }); if ($('.scroll-to-target').length) { $(".scroll-to-target").on('click', function () { var target = $(this).attr('data-target'); $('html, body').animate({ scrollTop: $(target).offset().top }, 500); }); }
    $('.count-number').rCounter(); $('.screen-carousel').owlCarousel({ loop: true, margin: 0, center: true, dots: true, nav: false, autoplay: true, responsive: { 0: { items: 1 }, 768: { items: 3 }, 991: { items: 4 }, 1200: { items: 4 }, 1920: { items: 4 } } }); $('.clients-carousel').owlCarousel({ autoplay: true, loop: true, margin: 15, dots: false, slideTransition: 'linear', autoplayTimeout: 4500, autoplayHoverPause: true, autoplaySpeed: 4500, responsive: { 0: { items: 2 }, 500: { items: 3 }, 600: { items: 4 }, 800: { items: 5 }, 1200: { items: 6 } } }); $('.clients-carousel-2').owlCarousel({ autoplay: true, loop: true, margin: 15, dots: false, autoplayTimeout: 4500, slideTransition: 'linear', responsive: { 0: { items: 2 }, 500: { items: 3 }, 600: { items: 4 }, 800: { items: 5 }, 1200: { items: 6 } } }); $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({ disableOn: 700, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: false }); $('.client-testimonial-1').owlCarousel({ loop: true, margin: 30, nav: false, dots: true, responsiveClass: true, autoplay: true, autoplayHoverPause: true, lazyLoad: true, items: 1 }); $('.client-testimonial-2').owlCarousel({ autoplay: true, loop: true, margin: 15, dots: false, autoplayTimeout: 4500, slideTransition: 'linear', responsive: { 0: { items: 1 }, 500: { items: 1 }, 600: { items: 2 }, 800: { items: 2 }, 1200: { items: 2 } } }); $('.deliveryareas').owlCarousel({ autoplay: true, loop: false, autoWidth: true, margin: 15, dots: false, autoplayTimeout: 4500, slideTransition: 'linear', responsive: { 0: { items: 1 }, 500: { items: 2 }, 600: { items: 3 }, 800: { items: 4 }, 1200: { items: 4 } } }); $("#js-contcheckbox").change(function () { if (this.checked) { $('.monthly-price').css('display', 'none'); $('.yearly-price').css('display', 'block'); $('.afterinput').addClass('text-success'); $('.beforeinput').removeClass('text-success'); } else { $('.monthly-price').css('display', 'block'); $('.yearly-price').css('display', 'none'); $('.afterinput').removeClass('text-success'); $('.beforeinput').addClass('text-success'); } }); $('#clock').countdown('2022/01/30', function (event) { $(this).html(event.strftime('' + '<div class="row">' + '<div class="col">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">Day%!d</h5>' + '</div>' + '<div class="col">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">Hours</h5>' + '</div>' + '<div class="col">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">Minutes</h5>' + '</div>' + '<div class="col">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">Seconds</h5>' + '</div>' + '</div>')); }); if ($("#getQuoteFrm").length) { $("#getQuoteFrm").validator().on("submit", function (event) { if (event.isDefaultPrevented()) { submitMSG(false, '.sign-up-form-wrap'); } else { event.preventDefault(); submitGetQuoteForm(); } }); }
});
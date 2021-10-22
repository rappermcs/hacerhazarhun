/*--------------------- Copyright (c) 2020 -----------------------
[Master Javascript]
Project: Responsive HTML Template 
Version: 1.0.0

-------------------------------------------------------------------*/
(function($) {
    "use strict";
    /*-----------------------------------------------------
    	Function  Start
    -----------------------------------------------------*/
    var control = {
        initialised: false,
        version: 1.0,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-----------------------------------------------------
            	Function Calling
            -----------------------------------------------------*/
            this.searchBox();
            this.isAnimation();
            this.navMenu();
            this.focusText();
            this.progressBar();
            this.popupCart();
            this.footerHeight();
            this.topButton();
            this.popupVideo();
            this.countDonw();
            this.quantity();
            this.thumbProduct();
            this.popupGallery();
            this.hideProduct();
            this.shipAddress();
            this.paymentOption();
        },


        /*-----------------------------------------------------
        	Fix Search Bar & Cart
        -----------------------------------------------------*/
        searchBox: function() {
            $('.search-btn').on("click", function() {
                $('.search-box').addClass('show');
            });
            $('.close-btn').on("click", function() {
                $('.search-box').removeClass('show');
            });
            $('.search-box').on("click", function() {
                $('.search-box').removeClass('show');
            });
            $(".search-bar-inner").on('click', function(e) {
                e.stopPropagation();
            });
        },


        /*-----------------------------------------------------
            Fix Go To Top Button
        -----------------------------------------------------*/
        topButton: function() {
            var scrollTop = $(".scroll-to-topp");
            $(window).on('scroll', function() {
                if ($(this).scrollTop() < 500) {
                    scrollTop.removeClass("active");
                } else {
                    scrollTop.addClass("active");
                }
            });
            $('.scroll-to-topp').click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
                return false;
            });


            /** Scroll Down Banner **/
            $(function() {
                $('.scroll-down-section').click(function() {
                    $('html, body').animate({ scrollTop: $('#scroll-down-section').offset().top }, 'fast');
                    return false;
                });
            });
        },

        /*-----------------------------------------------------
        	Fix Animation 
        -----------------------------------------------------*/
        isAnimation: function() {
            /** enllax **/
            $(window).enllax();
            /** Custom **/
            $(window).on("scroll", function() {
                if ($(this).scrollTop() > 10) {
                    $(".ext-banner-text-inner").addClass("hidden").removeClass("show");
                } else {
                    $(".ext-banner-text-inner").removeClass("hidden").addClass("show");
                }
            });
            /* Tilt */
            var tiltAnimation = $('.parallax')
            if (tiltAnimation.length) {
                tiltAnimation.tilt({
                    max: 12,
                    speed: 1e3,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                    transition: !1,
                    perspective: 1e3,
                    scale: 1
                })
            }
        },

        /*-----------------------------------------------------
        	Fix Mobile Menu 
        -----------------------------------------------------*/
        navMenu: function() {
            /* Menu Toggle */
            $(".menu-btn").on('click', function(event) {
                $(".main-menu, .menu-btn").toggleClass("open-menu");
            });
            $("body").on('click', function() {
                $(".main-menu, .menu-btn").removeClass("open-menu");
            });
            $(".menu-btn, .main-menu").on('click', function(event) {
                event.stopPropagation();
            });

            /* Submenu */

            var w = window.innerWidth;
            if (w <= 1199) {
                $(".main-menu > ul > li").on('click', function(e) {
                    $('.main-menu > ul > li').not($(this)).closest('li').find('.sub-menu').slideUp();
                    $('.main-menu > ul > li').not($(this)).closest('li').removeClass('open');
                    $(this).closest('li').find('.sub-menu').slideToggle();
                    $(this).toggleClass("open");
                });
                $(".sub-menu").on('click', function(event) {
                    event.stopPropagation();
                });
            }

            /* Linking */
            $(function() {
                for (var a = window.location, counting = $(".main-menu > ul > li > a").filter(function() {
                        return this.href == a;
                    }).addClass("active");;) {
                    if (!counting.is(".has-sub-menu")) break;
                    counting = counting.parent().addClass("active");
                }
                // Submenu
                for (var a = window.location, counting = $(".sub-menu a").filter(function() {
                        return this.href == a;
                    }).parent().parent().parent().addClass("active");;) {
                    if (!counting.is(".has-sub-menu")) break;
                    counting = counting.parent().addClass("active");
                }
            });
        },

        /*-----------------------------------------------------
        	Fix  On focus Placeholder
        -----------------------------------------------------*/
        focusText: function() {
            var place = '';
            $('input,textarea').focus(function() {
                place = $(this).attr('placeholder');
                $(this).attr('placeholder', '');
            }).blur(function() {
                $(this).attr('placeholder', place);
            });
        },

        /*-----------------------------------------------------
         	Fix Banner Slider 
         -----------------------------------------------------*/
        homeBanner: function() {
            var bannerSwiper = new Swiper('.swiper-container.ext-banner-slider', {
                allowTouchMove: true,
                preventClicks: true,
                spaceBetween: 30,
                autoHeight: false,
                keyboardControl: true,
                autoplay: false,
                loop: true,
                centeredSlides: false,
                speed: 1000,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                    stopOnLast: true,
                },
                mousewheel: {
                    enable: true
                },
                keyboard: {
                    enabled: true,
                },
                navigation: {
                    nextEl: '.ButtonNext',
                    prevEl: '.ButtonPrev',
                },
                pagination: {
                    el: '.pagination',
                    clickable: true,
                },
                allowTouchMove: true,
            });
        },

        /*-----------------------------------------------------
        	Fix  Progress Bar Scroll
        -----------------------------------------------------*/
        progressBar: function() {
            $(document).ready(function() {

                var getMax = function() {
                    return $(document).height() - $(window).height();
                }

                var getValue = function() {
                    return $(window).scrollTop();
                }

                if ('max' in document.createElement('progress')) {
                    var progressBar = $('progress');

                    progressBar.attr({
                        max: getMax()
                    });

                    $(document).on('scroll', function() {
                        progressBar.attr({
                            value: getValue()
                        });
                    });

                    $(window).resize(function() {

                        progressBar.attr({
                            max: getMax(),
                            value: getValue()
                        });
                    });

                } else {

                    var progressBar = $('.progress-bar'),
                        max = getMax(),
                        value, width;

                    var getWidth = function() {

                        value = getValue();
                        width = (value / max) * 100;
                        width = width + '%';
                        return width;
                    }

                    var setWidth = function() {
                        progressBar.css({
                            width: getWidth()
                        });
                    }

                    $(document).on('scroll', setWidth);
                    $(window).on('resize', function() {
                        max = getMax();
                        setWidth();
                    });
                }
            });
        },

        /*-----------------------------------------------------
            Fix Cart
        -----------------------------------------------------*/

        popupCart: function() {
            $(".cart-btn").on('click', function(e) {
                e.stopPropagation();
                $("body").toggleClass('open-cart');
            });
            $('body, .close-btn').on('click', function() {
                $('body').removeClass('open-cart');
            });
            $('.slide-cart-box').on('click', function(event) {
                event.stopPropagation();
            });

            /** On Load Modal **/
            $(document).ready(function() {
                $('#newsletter-modal').modal('show');
            });

        },

        /*-----------------------------------------------------
            Fix Footer Height
        -----------------------------------------------------*/
        footerHeight: function() {
            var w = window.innerWidth;
            if (w >= 1200) {
                $('.ext-footer-height-controler').css('height', ($('.ext-main-footer').height()) + 'px');
            }
        },

        /*-----------------------------------------------------
			Fix  Video Popup
		-----------------------------------------------------*/
        popupVideo: function() {
            $('.video-popup').magnificPopup({
                type: 'iframe'
            });
        },

        /*-----------------------------------------------------
			Fix  CountDown
		-----------------------------------------------------*/
        countDonw: function() {
            if ($('.ext-countdown').length > 0) {
                (function() {
                    const second = 1000,
                        minute = second * 60,
                        hour = minute * 60,
                        day = hour * 24;

                    let offer = "june 28, 2021 11:53:00",
                        countDown = new Date(offer).getTime(),
                        x = setInterval(function() {

                            let now = new Date().getTime(),
                                distance = countDown - now;

                            document.getElementById("days").innerText = Math.floor(distance / (day)),
                                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                            //do something later when date is reached
                            if (distance < 0) {
                                let headline = document.getElementById("headline"),
                                    countdown = document.getElementById("countdown");

                                headline.innerText = "Offer is End!";
                                countdown.style.display = "none";

                                clearInterval(x);
                            }
                            //seconds
                        }, 0)
                }());
            }
        },


        /*-----------------------------------------------------
			Fix  Quantity Up Down
		-----------------------------------------------------*/
        quantity: function() {
            var quantity = 0;
            $('.quantity-plus').on('click', function(e) {
                e.preventDefault();
                var quantity = parseInt($(this).siblings('.quantity').val(), 10);
                $(this).siblings('.quantity').val(quantity + 1);

            });
            $('.quantity-minus').on('click', function(e) {
                e.preventDefault();
                var quantity = parseInt($(this).siblings('.quantity').val(), 10);
                if (quantity > 0) {
                    $(this).siblings('.quantity').val(quantity - 1);
                }
            });
        },

        /*-----------------------------------------------------
			Fix  Product Thumb
		-----------------------------------------------------*/
        thumbProduct: function() {
            if ($('.ext-product-single-wrap').length > 0) {
                $(document).on('click', '.ext-product-img-thumb ul li img', function() {
                    $('.ext-main-img').find('img').attr('src', $(this).data('source'));
                    $('.ext-main-img').find('a').attr('href', $(this).data('source'));
                    $('.ext-product-img-thumb >ul > li').not($(this)).closest('li').removeClass('active');
                    $(this).closest('li').addClass('active');
                });
            }
        },

        /*-----------------------------------------------------
        	Fix Gallery Magnific Popup
        -----------------------------------------------------*/
        popupGallery: function() {
            $('.popup-gallery').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        },

        /*-----------------------------------------------------
        	Fix On remove Hide Product
        -----------------------------------------------------*/
        hideProduct: function() {
            if ($('.ext-remove-product').length > 0) {
                $(document).on('click', '.ext-remove-product', function() {
                    $(this).parents("tr").remove();
                });
            }
        },

        /*-----------------------------------------------------
            Fix Diffrent Ship Add
        -----------------------------------------------------*/
        shipAddress: function() {
            $('.ext-diffrent-adress').slideUp();
            $(".ext-ship-btn").change(function() {
                if (this.checked) {
                    $('.ext-diffrent-adress').slideDown();
                } else {
                    $('.ext-diffrent-adress').slideUp();
                }
            });

            /** Coupn Code **/
            $('.ext-coupn-code').slideUp();
            $(".ext-coupn-code-btn").on('click', function() {
                $(".coupon_code_form").slideToggle("fast");
            });
        },

        /*-----------------------------------------------------
            Fix Checkout Radio Button
        -----------------------------------------------------*/

        paymentOption: function() {
            $('.radio-inner').on('click', function() {
                var counter = 0;
                if (counter == '0') {
                    $(this).find('input').prop('checked', true);
                    counter++;
                } else {
                    $(this).find('input').prop('checked', false);
                    counter--;
                }
            });
        },


    };

    control.init();



    $(document).ready(function() {

        //color picker start
        $(window).on("load", function() {

            var colorcode = document.cookie;
            if (colorcode != "") {
                var cname = "colorcssfile";
                var name = cname + "=";
                var cssname = '';
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1);
                    if (c.indexOf(name) != -1) {
                        cssname = c.substring(name.length, c.length);
                    }
                }

                if (cssname != '') {
                    var new_style = 'assets/css/' + cssname + '.css';
                    $('#color-change').attr('href', new_style);
                }
            }
        });
        //Color Change Script
        $('.colorchange').on("click", function() {
            var name = $(this).attr('id');
            var new_style = 'assets/css/' + name + '.css';
            $('#color-change').attr('href', new_style);
        });

        $("#color-switcher .bottom a.settings").on("click", function(e) {
            e.preventDefault();
            var div = $("#color-switcher");
            if (div.css("left") === "-160px") {
                $("#color-switcher").animate({
                    left: "0px"
                });
            } else {
                $("#color-switcher").animate({
                    left: "-160px"
                });
            }
        });
        //color picker end



    });











})(jQuery);
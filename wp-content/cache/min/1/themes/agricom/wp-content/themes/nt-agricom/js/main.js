jQuery(document).ready(function($) {
    'use strict';
    var rtl = $('body').hasClass('rtl') ? !0 : !1;
    jQuery(window).load(function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove()
        })
    });
    $('.li-btn').appendTo('#top-bar__navigation > ul');
    (function() {
        var oInterval = setInterval(function() {
            if (typeof window.jQuery !== 'undefined') {
                clearInterval(oInterval);
                jQuery(document).ready(function($) {
                    $('#start-screen-owl').children('.owl-carousel').owlCarousel({
                        loop: !0,
                        nav: !1,
                        dots: !0,
                        rtl: rtl,
                        autoplay: !0,
                        autoplayTimeout: 5000,
                        autoplayHoverPause: !0,
                        autoHeight: !0,
                        smartSpeed: 1000,
                        margin: 0,
                        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                        responsive: {
                            0: {
                                items: 1
                            },
                            500: {
                                items: 2
                            },
                            992: {
                                items: 3
                            },
                            2000: {
                                items: 4
                            }
                        },
                        onInitialized: _fixed_menu
                    })
                })
            }
        }, 500)
    })();
    var $window = $(window);

    function _fixed_menu() {
        var nTopBar = document.getElementById('top-bar'),
            jTopBar = $(nTopBar),
            iTop = jTopBar.next('header').innerHeight() + 120;
        window.onscroll = function() {
            if ((window.pageYOffset || document.documentElement.scrollTop) >= iTop) {
                jTopBar.addClass('fixed in')
            } else if (jTopBar.hasClass('fixed')) {
                jTopBar.removeClass('in').addClass('out');
                setTimeout(function() {
                    jTopBar.removeClass('fixed out')
                }, 100)
            }
        }
    };
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            $('#top-bar').addClass('mobile-header-after-scroll')
        } else {
            $('#top-bar').removeClass('mobile-header-after-scroll')
        }
    });

    function _main_menu() {
        var nTopBar = document.getElementById('top-bar'),
            nMenuToggler = document.getElementById('top-bar__navigation-toggler'),
            nNav = document.getElementById('top-bar__navigation'),
            jTopBar = $(nTopBar),
            jMenuToggler = $(nMenuToggler),
            jNav = $(nNav),
            jLink = jNav.find('li a'),
            jCaret = jNav.find('li span.caret'),
            jSubMenu = jNav.find('.submenu'),
            topBarHeight = 0;
        if (jSubMenu.length) {
            jSubMenu.parents('li').addClass('has-children')
        };
        if (jMenuToggler.is(':visible')) {
            topBarHeight = 70
        } else {
            topBarHeight = 80
        };
        jLink.on('touchend click', function(e) {
            var $this = $(this),
                $parent = $this.parent();
            if ($('.page.page-id-180').length > 0) {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name="' + this.hash.slice(1) + '"]');
                    if (target.length) {
                        $('html,body').stop().animate({
                            scrollTop: target.offset().top - topBarHeight
                        }, 1000)
                    }
                    if (jMenuToggler.is(':visible')) {
                        jTopBar.removeClass('expanded');
                        jMenuToggler.removeClass('active')
                    };
                    return !1
                }
            }
        });
        jCaret.on('touchend click', function(e) {
            var $this = $(this),
                $parent = $this.parent();
            $('.caret').removeClass('opened');
            if (jMenuToggler.is(':visible') && $this.next(jSubMenu).length) {
                if ($this.next().is(':visible')) {
                    $parent.removeClass('drop_active');
                    $this.next().slideUp('fast');
                    $this.removeClass('opened')
                } else {
                    $this.closest('ul').find('li').removeClass('drop_active');
                    $this.closest('ul').find('.submenu').slideUp('fast');
                    $parent.addClass('drop_active');
                    $this.next().slideDown('fast');
                    $this.addClass('opened')
                };
                return !1
            }
        });
        jMenuToggler.on('touchend click', function(e) {
            e.preventDefault();
            var $this = $(this);
            $this.toggleClass('active');
            jTopBar.toggleClass('expanded');
            return !1
        });
        jLink.on('touchend click', function(e) {
            if ($('#top-bar__navigation').hasClass('metabox-menu')) {
                jTopBar.removeClass('expanded');
                jMenuToggler.removeClass('active')
            }
            var $this = $(this),
                $parent = $this.parent();
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name="' + this.hash.slice(1) + '"]');
                if (target.length) {
                    $('html,body').stop().animate({
                        scrollTop: target.offset().top - topBarHeight
                    }, 1000)
                }
                if (jMenuToggler.is(':visible')) {
                    jTopBar.removeClass('expanded');
                    jMenuToggler.removeClass('active')
                };
                return !1
            }
        });
        $window.smartresize(function() {
            if (window.innerWidth >= 767) {
                jTopBar.removeClass('expanded');
                jMenuToggler.removeClass('active')
            }
        })
    };

    function _owl_carousel() {
        var fSlider = $('.feedbacks--slider');
        if (fSlider.length > 0) {
            var timeout = $('.feedbacks--slider').attr('data-owl-autoplaytimeout');
            var time_out = timeout ? parseInt(timeout) : 6000;
            var smartspeed = $('.feedbacks--slider').attr('data-owl-smartspeed');
            var smart_speed = smartspeed ? parseInt(smartspeed) : 1000;
            fSlider.children('.owl-carousel').owlCarousel({
                loop: !0,
                nav: !1,
                dots: !0,
                rtl: rtl,
                autoplay: !0,
                autoplayTimeout: time_out,
                autoplayHoverPause: !0,
                autoHeight: !0,
                smartSpeed: smart_speed,
                margin: 30,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    992: {
                        items: 1
                    }
                }
            })
        }
    };

    function _isotope_sorting() {
        var nOptionSets = document.getElementById('gallery-set'),
            jOptionSets = $(nOptionSets);
        if (jOptionSets.length > 0) {
            var jIsoContainer = $('.js-isotope'),
                jOptionLinks = jOptionSets.find('a');
            jOptionLinks.on('click', function(e) {
                var $this = $(this),
                    currentOption = $this.data('cat');
                jOptionSets.find('.selected').removeClass('selected');
                $this.addClass('selected');
                if (currentOption !== '*') {
                    currentOption = '.' + currentOption
                }
                jIsoContainer.isotope({
                    filter: currentOption
                });
                return !1
            })
        }
    };

    function _chart() {
        $('.skill__item').appear(function() {
            var _self = $(this);
            setTimeout(function() {
                _chartInit(_self)
            }, 200)
        });

        function _chartInit(el) {
            $('.js-chart', el).each(function() {
                $(this).easyPieChart({
                    easing: 'easeOutElastic',
                    delay: 3000,
                    barColor: '#369670',
                    trackColor: '',
                    scaleColor: !1,
                    lineWidth: 12,
                    trackWidth: 12,
                    size: 175,
                    lineCap: 'butt',
                    onStep: function(from, to, percent) {
                        this.el.children[0].innerHTML = Math.round(percent)
                    }
                })
            })
        }
    };

    function _count() {
        $('.counter__item').appear(function() {
            var _self = $(this);
            setTimeout(function() {
                _countInit(_self)
            }, 200)
        });

        function _countInit(el) {
            $('.js-count', el).each(function() {
                if (!$(this).hasClass('animate')) {
                    $(this).countTo({
                        from: 0,
                        speed: 2000,
                        refreshInterval: 100,
                        onComplete: function() {
                            $(this).addClass('animate')
                        }
                    })
                }
            })
        }
    };

    function _parallax() {
        if (device.desktop()) {
            $.stellar({
                scrollProperty: 'scroll',
                verticalOffset: 0,
                horizontalOffset: 0,
                horizontalScrolling: !1
            });
            $window.smartresize(function() {
                $.stellar('refresh')
            })
        }
    };

    function _scrollTop() {
        var nBtnToTopWrap = document.getElementById('btn-to-top-wrap'),
            jBtnToTopWrap = $(nBtnToTopWrap);
        if (jBtnToTopWrap.length > 0) {
            var nBtnToTop = document.getElementById('btn-to-top'),
                jBtnToTop = $(nBtnToTop);
            jBtnToTop.on('click', function(e) {
                e.preventDefault();
                $('body,html').stop().animate({
                    scrollTop: 0
                }, 1500);
                return !1
            });
            $window.on('scroll', function(e) {
                if ($window.scrollTop() > jBtnToTop.data('visible-offset')) {
                    if (jBtnToTopWrap.is(":hidden")) {
                        jBtnToTopWrap.fadeIn()
                    }
                } else {
                    if (jBtnToTopWrap.is(":visible")) {
                        jBtnToTopWrap.fadeOut()
                    }
                }
            })
        }
    };

    function _gall() {
        var galleryElement = $("a[data-gallery]");
        if (galleryElement.length > 0) {
            galleryElement.boxer({
                fixed: !0,
                videoWidth: 1000
            })
        }
    };
    (function($, sr) {
        var debounce = function(func, threshold, execAsap) {
            var timeout;
            return function debounced() {
                var obj = this,
                    args = arguments;

                function delayed() {
                    if (!execAsap)
                        func.apply(obj, args);
                    timeout = null
                };
                if (timeout)
                    clearTimeout(timeout);
                else if (execAsap)
                    func.apply(obj, args);
                timeout = setTimeout(delayed, threshold || 100)
            }
        }
        jQuery.fn[sr] = function(fn) {
            return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr)
        }
    })(jQuery, 'smartresize');
    _fixed_menu();
    _main_menu();
    _owl_carousel();
    _isotope_sorting();
    _chart();
    _count();
    _parallax();
    _scrollTop();
    _gall();
    $window.on('load', function() {
        var jIsotope = $('.js-isotope');
        if (jIsotope.length) {
            jIsotope.isotope('layout')
        }
    })
});
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    document.body.className += " safari"
}
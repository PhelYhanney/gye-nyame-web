jQuery(document).ready(function($) {
    "use strict";
    responsiveEl();

    function responsiveEl() {
        var matches = document.querySelectorAll("[data-res-css]");
        var resdata = [];
        matches.forEach(function(element) {
            var get_style = element.getAttribute("data-res-css");
            resdata.push(get_style);
            element.removeAttribute("data-res-css")
        });
        var css = resdata.join(""),
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        style.setAttribute("data-type", "agricom-shortcodes-custom-css");
        if (style.styleSheet) {
            style.styleSheet.cssText = css
        } else {
            style.appendChild(document.createTextNode(css))
        }
        head.appendChild(style)
    }
    AOS.init({
        offset: 120,
        delay: 100,
        duration: 450,
        easing: 'ease-in-out-quad',
        once: !0,
        disable: 'mobile'
    });
    jQuery('.flexslider').flexslider({
        controlNav: !0
    });
    jQuery(".video-responsive").fitVids();
    jQuery("#blog table").addClass("table table-striped");
    $('.primary-menu li:not(.item-has-children) a').on('click', function() {
        $('.navbar-toggle:visible').click()
    })
})
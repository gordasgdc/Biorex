jQuery(document).ready(function () {
    jQuery('.search-block-form input.form-search').addClass('form-control');
    jQuery('.search-block-form input.form-search').attr('placeholder', 'Search...');
    jQuery('.simplenews-subscriber-form input[type="email"]').attr('placeholder', 'Email Address');
    jQuery('.google-map').click(function () {
        jQuery('.google-map iframe').css("pointer-events", "auto");
    });
    jQuery(".google-map").mouseleave(function () {
        jQuery('.google-map iframe').css("pointer-events", "none");
    });
    jQuery('#mainNav > li.dropdown > a').append('<i class="fa fa-caret-down"></i>');

    jQuery('#mainNav > li.dropdown > a .fa-caret-down').on('click', function (e) {
        e.preventDefault();
        if (jQuery(window).width() < 992) {
            jQuery(this).closest('li').toggleClass('opened');

        }
    });
    jQuery('.webform-submission-contact-advanced-form input[type="submit"]').val('Send Message');
    jQuery('.webform-submission-contact-footer-form input[type="submit"]').val('Send Message');
    jQuery('.messages').append('<i class="icon-cancel message-close fa fa-close"></i>');
    jQuery('body').on('click', '.icon-cancel.message-close', function () {
        jQuery(this).parent().animate({
            'opacity': '0'
        }, function () {
            jQuery(this).slideUp();
        });
    });
    //Validate
    jQuery('#webform-submission-contact-form').validate();
    jQuery('#webform-submission-contact-advanced-form').validate();
    jQuery('#webform-submission-contact-footer-form').validate();
    jQuery('.block-simplenews-subscription-block form').validate();
    jQuery('#webform-submission-contact-form-sidebar-form').validate();
    //Scrool
    var sections = jQuery('section.section');
    jQuery(window).on('scroll', function () {
        var cur_pos = jQuery(this).scrollTop();
        sections.each(function () {


        });
    });
});
// add to cart in product list
function addToCartInList(id) {
    if (jQuery('#commerce-order-item-add-to-cart-form-commerce-product-' + id).length) {
        jQuery('#commerce-order-item-add-to-cart-form-commerce-product-' + id).submit();
    }
}
/* COMMENT USER IMAGE */
jQuery(document).ready(function () {
    var sample_image = '<img src="http://placehold.it/85x85" alt="" class="img-responsive"/>';
    jQuery('ul.comments li .img-thumbnail article').each(function () {
        if (jQuery(this).find('img').length === 0) {
            jQuery(this).append(sample_image);
        }
    });
    var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE');
    var new_ie = ua.indexOf('Trident/');
    if ((old_ie > -1) || (new_ie > -1)) {
        ms_ie = true;
    }
    if (ms_ie) {
        jQuery('body').addClass('ie');
    }

    jQuery('.write-review-link').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                jQuery('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 500);
                return false;
            }
        }
    });
    var text = jQuery('#block-cart .cart-block--summary__count').text();
    var qty = text.split(" ", 1);
    jQuery('#cart-qty').text(qty);

});
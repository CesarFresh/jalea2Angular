/*! auth.js | Bulkit | CSS Ninja */

/* ==========================================================================
Authentication and registration pages JS file 
========================================================================== */

$(document).ready(function($){
    
    "use strict";
    
    $('.show-recover, .show-login').on('click', function () {
        $('#login-card, #recover-card').toggleClass('is-hidden');
    })

    /** DEMO AREA */
    var toTest = 0;
    $('#recover').on('click', function () {
        $('.recover-subtitle p').addClass('is-hidden');
        if(toTest % 2 == 0){
            $('.recover-subtitle .notificacion-exito').removeClass('is-hidden');
            $('.recover-subtitle .notificacion-error').addClass('is-hidden');
        }else{
            $('.recover-subtitle .notificacion-exito').addClass('is-hidden');
            $('.recover-subtitle .notificacion-error').removeClass('is-hidden');
        }
        toTest++;
    })

})
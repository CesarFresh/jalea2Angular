/*! dashboard.js | Bulkit | CSS Ninja */

/* ==========================================================================
Dashboard core JS file
========================================================================== */

$(document).ready(function($){

    "use strict";

    $('.con-submenu').on('click', function () {
        $(this).siblings( "ul" ).slideToggle();
    })

    //Mobile menu toggle
    $().initMobileMenu();

    $().initDashboardLayout();

    //Pop Dropdowns
    $().initPopDropdowns();

    //Common dropdown
    $().initDropdowns();

    //Init Modals
    $().initModals();

    //Init Alert boxes
    $().initAlertBoxes();

    //Navigation Tabs
    $().initNavigationTabs();

    //Ripple effect
    $().initRipple();

    //Custom quickview initialization with data attributes
    $().initQuickview();

    //datepicker initialization
    $().initDatepicker();

    //wickedpicker 24 hours initialization
    $().initTimepicker();

    //Accordion initialization
    $().initAccordion();

    //Chosen select initialization
    $().initChosenSelect();

    //Adding the styled checkbox styles
    $().initCheckboxes();

    //Initialize tooltips
    $().initTooltips();

    //Initialize popovers
    $().initPopovers();

    //Busy switch behaviour
    $().initBusySwitch();

    //Complete task fab button
    $().initTaskFab();

    //Social Fab menu
    $().initSocialFab();

    //Like button
    $().initLikeButton();

    //Init Profile section
    $().initProfile();

    //Fake chat messages simulation
    $().initChat();

    //Media card background images
    $().initMediaCards();

    //Svg vector map
    $().initVectorMap();

})


﻿$(document).ready(function () {
    $("#header").removeClass("slideInTop");
    $("#heroOverlay").removeClass("fadein");
    $("#heroMonitor").removeClass("preload");
    $("#heroPhone").removeClass("preload");
    $("#uxKnight").removeClass("fadein");

    $("#nav").click(function () {
        $("#nav section").toggleClass("showMenu")
    });
});
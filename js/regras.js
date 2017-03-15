/**
 * @package     Cattive.Site
 * @subpackage  Templates.cattive
 *
 * @copyright   Copyright (C) 2015, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

/* global  $, Pace */

$(function () {
    
    //Lazy Load
    $("img").unveil(10000);
    
    //Start Carousel
     $("#produtos-carousel").owlCarousel({
         items: 3,
         pagination : false,
         //Mouse Events
        dragBeforeAnimFinish : false,
        mouseDrag : false,
        touchDrag : false,
        scrollPerPage :	true,
        lazyLoad : true
     });
    
    var sliderProdutos = $("#produtos-carousel").data('owlCarousel');
    $('.linksUl li').click(function(){
        
        var paginaSlider = $(this).index();
       
        if  (paginaSlider == 0) {
            paginaSlider = 0;
        } 
        else  {
            paginaSlider = paginaSlider * 3;
        } 
        sliderProdutos.goTo(paginaSlider);
        paginaSlider = 0;
    });
    
    $('.produtos-item').mouseover(function(){
        $(this).addClass('produtos-item-site-hover');
    });
    $('.produtos-item').mouseout(function(){
        $(this).removeClass('produtos-item-site-hover');
    });
    
	  
});


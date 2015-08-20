$(document).ready(function(){
    
    //--- Mobile open
    $('#open').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('#wrapper').toggleClass('active');
    });
   
    //--- Image back
    $('.image').replaceWith(function(i, v){
        return $('<figure/>', {
            style: 'background-image: url('+this.src+')',
        }) 
    });
    //--- fix placeholder
			$(function() {
				var input = document.createElement("input");
					if(('placeholder' in input)==false) { 
						$('[placeholder]').focus(function() {
							var i = $(this);
							if(i.val() == i.attr('placeholder')) {
								i.val('').removeClass('placeholder');
								if(i.hasClass('password')) {
									i.removeClass('password');
									this.type='password';
								}			
							}
						}).blur(function() {
							var i = $(this);	
							if(i.val() == '' || i.val() == i.attr('placeholder')) {
								if(this.type=='password') {
									i.addClass('password');
									this.type='text';
								}
								i.addClass('placeholder').val(i.attr('placeholder'));
							}
						}).blur().parents('form').submit(function() {
							$(this).find('[placeholder]').each(function() {
								var i = $(this);
								if(i.val() == i.attr('placeholder'))
									i.val('');
							})
						});
				}
		});
});

//--- Equal height
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.tables-module ul li');
});


$(window).resize(function(){
  equalheight('.tables-module ul li');
});
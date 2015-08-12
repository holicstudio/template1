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
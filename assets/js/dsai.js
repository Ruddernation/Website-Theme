jQuery('.ds').click(function(e){
  e.preventDefault();  
  var val = jQuery('#replycontent').val(); 
  jQuery('#replycontent').val(val + "\r\n" + jQuery(this).data('text')); 
});
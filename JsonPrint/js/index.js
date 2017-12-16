$( document ).ready(function() {
    $("#loader").click(function() {
    	$.getJSON('file.json', function(abc){
    		$('#datastage').html('<p>zipcode : '+ abc.zipcode +' </p>');
    	});
    });
    
});
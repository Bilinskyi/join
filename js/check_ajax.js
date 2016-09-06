$(document).ready(function() {
	$('#feedback-valid-1').validate({
	
		rules:{
			"name":{required:true},
			"email":{required:true},
			"sk":{required:true}
		},
		messages:{
			"name":{required:"Warning: 1"},
			"email":{required:"Warning: 2"},
			"sk":{required:"Warning: 3"}
		},
		errorContainer: $('#errorContainer'),
    errorLabelContainer: $('#errorContainer ul'),
    wrapper: 'li',
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-1')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							$.fancybox.close()
							var message = $('.modal');
							$.fancybox(message);

						}
					}  
				}); 
		}
	});

});

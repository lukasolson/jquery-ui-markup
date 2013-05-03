$(document).ready(function() {
	$("[data-jqui]").each(function() {
		var options = $(this).data();
		$(this)[$(this).data("jqui")](options);
	});
});
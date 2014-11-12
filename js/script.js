$(document).ready(function(){
	$(".filter-button").on("click", function(){
		console.log(this.id);
	 	$("." + this.id).toggle() 
	});
})



// this is the JS for the business documents 

$(".filter-button").on("click", function(){
	console.log(this.id);
	var className = "." + this.id; 
console.log(className);
$(className).toggle();
//.toggleClass("active")


});


$(document).ready(function() {

	$("a[href^='#'").click(function(event){
		event.preventDefault();
		var pageTarget = this.hash;
		$("html, body").animate({ 
			scrollTop: $(pageTarget).offset().top
		}, 1000)
	});

	$(document).on("scroll", function(){
		if($(document).scrollTop() < 1065){
			console.log("sec 1");
			$("#sec-1 a").css("color","#b0b0b0");
			$("#sec-1 a").css("text-decoration","underline");
			$("#sec-2 a").css("color","#ffffff");
			$("#sec-2 a").css("text-decoration","none");
			$("#sec-3 a").css("color","#ffffff");
			$("#sec-3 a").css("text-decoration","none");
				
		}
		else if($(document).scrollTop() < 2145){
			console.log("sec 2");
			$("#sec-2 a").css("color","#b0b0b0");
			$("#sec-2 a").css("text-decoration","underline");
			$("#sec-1 a").css("color","#ffffff");
			$("#sec-1 a").css("text-decoration","none");
			$("#sec-3 a").css("color","#ffffff");
			$("#sec-3 a").css("text-decoration","none");
		}
		else{
			$("#sec-3 a").css("color","#b0b0b0");
			$("#sec-3 a").css("text-decoration","underline");
			$("#sec-1 a").css("color","#ffffff");
			$("#sec-1 a").css("text-decoration","none");
			$("#sec-2 a").css("color","#ffffff");
			$("#sec-2 a").css("text-decoration","none");
		}
	});
 
	$("#owl-demo").owlCarousel({

		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigationText: [
		"<i class='fa fa-chevron-left fa-4x'></i></a>",
		"<i class='fa fa-chevron-right fa-4x'></i></a>"
		],
		responsiveClass:true
	});

	$(document).foundation();
});
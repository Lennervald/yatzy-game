$(document).ready(function(){
	$(".start-game-button").click(function(){
           $("#start-page").remove();
            includeHtml("templates/gamearea.html","body");
//		$(".dices-container-main").show();
//		$(".gamecard").show();
//		$(this).hide();
	});

});
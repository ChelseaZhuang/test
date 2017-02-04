//fixed导航箭头滚动到页面顶部
$(document).ready(function(){ 
	$('#arrowTop').click(function(){ 
		$('html, body').animate({
			scrollTop: 0
			}, 400); 
		return false; 
		}); 

	$("#fixednav1").mouseenter(function(){
		$(this).next().show(600);
	});
	$("#fixednav1").mouseleave(function(){
		$(this).next().hide(400);
	});
	$("#fixednav2").mouseenter(function(){
		$(this).next().show(600);
	});
	$("#fixednav2").mouseleave(function(){
		$(this).next().hide(400);
	});
	$("#fixednav3").mouseenter(function(){
		$(this).next().show(600);
	});
	$("#fixednav3").mouseleave(function(){
		$(this).next().hide(400);
	});

})

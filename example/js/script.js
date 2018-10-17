/*  Page script  */

/* button functions */

function refresh(clr=false){
	if(clr){
		clrCookies('text');
		clrCookies('width');
		clrCookies('cookies');
	}
	$('.container').removeClass('fadeInDown delay-1s').addClass('fadeOutUp');
	$('#cookies').removeClass('fadeInUp delay-2s').addClass('fadeOutDown');
	setTimeout(function(){location.reload();},1000);
}
function acceptCookies(){
	$('#cookies').removeClass('fadeInUp delay-2s').addClass('fadeOutDown');
	setCookie("cookies",1,1);
}

$(document).ready(function(){
	
	/*
		If cookies  set, retrieve previous values
		and update inpareuts accordingly.
	*/
	if(issetCookie("cookies")){
		$('#cookies').removeClass().hide();
	}
	
	if(!issetCookie("width")){
		setCookie("width",180,1);
		$('#width').val(180);
	}else{
		$('#width').val(getCookie("width"));
		$('#output_div').width(10+getCookie("width")/2+'%');
	}
	$('#w_label').html(10+$('#width').val()/2+'%');
	if(!issetCookie("text")){
		$('#output_div p').html("Write your text here...");
	}else{
		$('#output_div p').html(getCookie("text"));
		$("#text_in").val(getCookie("text"));
	}
	
	/*
		Once inputs have been initialized, run fitText.
	*/
	
	fitText('#output_div p');
	

	/*
		On input change:
		- Update output_div's width and text
		- Set cookies
		- Run fitText
	*/
	
	$('#text_in').keyup(function(){
		if($(this).val()!= ""){
			$('#output_div p').html($(this).val());					
			setCookie("text",$(this).val(),1);
		}else{
			$('#output_div p').html("Write your text here...");					
			setCookie("text","",0);
		}
		fitText('#output_div p');
	});	
	
	$('#width').on('change mousemove swipe',function(){
		setCookie("width",$(this).val(),1);
		$('#width').val($(this).val());
		$('#output_div').width(10+$(this).val()/2+'%');
		$('#w_label').html(10+$(this).val()/2+'%');
		fitText('#output_div p');
	});
	
	/* 
		Since output_div's width is proportional to the window's size,
		upon window resizing we run fitText just in case.
	*/
	$(window).resize(function(){
		fitText('#output_div p');
	});
});
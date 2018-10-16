
/* fitText function */


function fitText(element){
	var i = 0;
	var parent = $('#'+element.id);
	var child = $('#'+element.id).children('p');
	if(parent.height()>child.height() && parent.width()>child.width()){
		child.css('font-size',parent.height()+'px');
	}
	while(i<parent.height() && (parent.height()<child.height() || parent.width()<child.width() || child.height()>parseInt(child.css('font-size'))*1.5)  ){
		child.css("font-size",parseInt(parent.height())-i+'px')	;	
		i++;
	}
}
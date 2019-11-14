function getCurrentTabIndex(){
	var pageSearch = window.location.search;
	var i = pageSearch.indexOf("=");
	var index = pageSearch.substring(i+1);
	return index;
}

function switchTabs(i){
	if(!i || i == 1){
		i = 1;
	}
	i = i -1;
	if($(".switchTables").eq(i).hasClass("hidden")){
		$(".switchTables").eq(i).removeClass("hidden");
		$(".switchTables").eq(i).siblings(".switchTables").addClass("hidden");
	}else{
		return false;
	}
	
	
	
}
$(document).on('click','.content',function(e){ 	
  	    var id = $(this).data("id");
  	    var url = markeurl_home_detail(id);
  	    window.location.href=url;
	})

function makeurl_home_detail(name){
	var encode=encodeURI(name);//encodeURI() 函数可把字符串作为 URI 进行编码。
	var url="./detail.html";
	var encode=encodeURI(url + "?ID=" + encode);
	return encode;
}


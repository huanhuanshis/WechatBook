$(function(){
	var NIANJI=document.getElementsByClassName("btn-group-vertical")[0].getElementsByClassName("btn")[0].innerHTML;
	var XUEYUAN = document.getElementsByClassName("btn-group")[0].getElementsByClassName("btn")[0].innerHTML;
	var datatosend={
		"NIANJI":NIANJI,
		"XUEYUAN":XUEYUAN
	}	
	$.ajax({
		type:"get",
		url:'http://115.28.103.235:8000/booklist/',
		crossDomain:true,
		dataType:"json",
		success:function(data){
			alert("进入拉");
			alert(DATA[0].BookId);
			//var list_length = data.DATA.length;
			var list_length = DATA.length;
			for(var i =0 ; i<list_length;i++){
				var main_node=document.getElementsByClassName("content_start")[0];
				var firstnode = document.createElement("tr");
				firstnode.addClass("content");
				//firstnode.setAttribute("data-id",data.DATA[i].BookId);
				firstnode.setAttribute("data-id",DATA[i].BookId);
				firstnode.style.borderBottom="groove 1px cornsilk";
				main_node.appendChild(firstnode);
				var twonode = document.createElement("td");
				firstnode.appendChild(twonode);
				var threenode = document.createElement("img");
				//threenode.setAttribute("src","xxx"+data.DATA[i].PictureUrl);
				threenode.setAttribute("src",DATA[i].PictureUrl);
				threenode.addClass("img-responsive");
				threenode.style.backgroundColor="white";
			    twonode.appendChild(threenode);
			    var fournode=document.createElement("td");
			    firstnode.appendChild(fournode);
			    var fivenode=document.createElement("p");
			    fivenode.innerHTML=data.DATA[i].BookName;
			    fournode.appendChild(fivenode);
			    var sixnode=document.createElement("strong");
			    sixnode.innerHTML=data.DATA[i].Price;
			    fournode.appendChild(sixnode);
			    var sevennode = document.createElement("del");
			    sevennode.innerHTML=data.DATA[i].OriginalPrice;
			    fournode.appendChild(sevennode);
			}
		}
	})	
})

//
//
//$(function(){
//	$(".btn").on('click',function(){
//		$(".content_start").empty();
//			var NIANJI=document.getElementsByClassName("btn-group-vertical")[0].getElementsByClassName("btn")[0].innerHTML;
//	var XUEYUAN = document.getElementsByClassName("btn-group")[0].getElementsByClassName("btn")[0].innerHTML;
//	var datatosend={
//		"NIANJI":
//		"XUEYUAN":
//	}	
//	$.ajax({
//		type:"get",
//		url:'http://115.28.103.235:8000/booklist/',
//		crossDomain:true,
//		dataType:"json",
//		success:function(data){
//			var list_length = data.DATA.length;
//			for(var i =0 ; i<list_length;i++){
//				var main_node=document.getElementsByClassName("content_start")[0];
//				var firstnode = document.createElement("tr");
//				firstnode.addClass("content");
//				firstnode.setAttribute("data-id",data.DATA[i].BookId);
//				firstnode.style.borderBottom="groove 1px cornsilk";
//				main_node.appendChild(firstnode);
//				var twonode = document.createElement("td");
//				firstnode.appendChild(twonode);
//				var threenode = document.createElement("img");
//				threenode.setAttribute("src","xxx"+data.DATA[i].PictureUrl);
//				threenode.addClass("img-responsive");
//				threenode.style.backgroundColor="white";
//			    twonode.appendChild(threenode);
//			    var fournode=document.createElement("td");
//			    firstnode.appendChild(fournode);
//			    var fivenode=document.createElement("p");
//			    fivenode.innerHTML=data.DATA[i].BookName;
//			    fournode.appendChild(fivenode);
//			    var sixnode=document.createElement("strong");
//			    sixnode.innerHTML=data.DATA[i].Price;
//			    fournode.appendChild(sixnode);
//			    var sevennode = document.createElement("del");
//			    sevennode.innerHTML=data.DATA[i].OriginalPrice;
//			    fournode.appendChild(sevennode);
//			}
//		}
//	})	
//	})
//})
//

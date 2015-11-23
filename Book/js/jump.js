function jumpcart(){
	var v=document.getElementById("booklists");   
    v.value= readallbookinfo();
    var f=document.getElementById("formid");
    f.submit();
}

function jumpsetorder(){
	var v=document.getElementById("booklists");   
    v.value= readallbookinfo();
    var f=document.getElementById("formid");
    f.submit();
}

function checkinfo(){
	var name = document.getElementById("name").value;
	var phone = document.getElementById("telephone").value;
	if(name.trim()!=""&&phone.length==11){
		jumpsetorder();
	}
	alert("请输入正确信息");
}

function jumphome(){
	window.location.href="home.jsp";
}

function jumpdetail(d){
	window.location.href="detail.jsp?goodid="+d;
}

function jumporder(){
	if(summoney==0){
		alert("Buy some boooook~~~");
	}
	else{
		window.location.href="order.jsp";
	}
}

function class1jump(a){
	var as = encodeURIComponent(a);
	window.location.href="home.jsp?class1="+as;
}

function class2jump(a,b){
	var bs = encodeURIComponent(b);
	var as = encodeURIComponent(a);
	window.location.href="home.jsp?class1="+as+"&class2="+bs;
}

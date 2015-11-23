var map=new HashTable();
window.onload=function (){
	if(document.getElementById("goodid")!=null)
		setbooknumlayout(document.getElementById("goodid").value);
}

function addonebook(id){
	var bknum=parseInt(readbooknum(id))+1;
	if(bknum<=9){
		setbooknumber(id,bknum);
		setbooknumlayout(id);
		caculatethis(id);
		caculateall(id,1);
	}
}

function delonebook(id){
	var bknum=parseInt(readbooknum(id))-1;
	if(bknum>=0){
		setbooknumber(id,bknum);
		setbooknumlayout(id);
		caculatethis(id);
		caculateall(id,0);
	}
}

function readbooknum(id){
	var arr,reg=new RegExp("(^| )"+id+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)){
		return unescape(arr[2]);
	}
	else{
		return 0;
	}
}

function setbooknumber(id,num){
	document.cookie = id + "="+ escape (num);
}

function settime(){
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function readallbooknum(){
	var sum=0;
    var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
    if(keys){
        for (var i =  keys.length; i--;){
        	var s =parseInt(keys[i]);
        	if(s>10000){
        		sum = parseInt(sum)+parseInt(readbooknum(s));
        	}
    	}
        return sum;
    }
}

function readallbookinfo(){
	var sum="";
    var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
    if(keys){
        for (var i =  keys.length; i--;){
        	var s =parseInt(keys[i]);
        	if(s>10000&&parseInt(readbooknum(s))>0){
        		sum = sum+s+","+parseInt(readbooknum(s))+";";
        	}
    	}
        return sum;
    }
}

function setbooknumlayout(goodid){
	document.getElementById(goodid).innerHTML=readbooknum(goodid);
	if(document.getElementById("number_sum")!=null){
		var allnum = readallbooknum();
		if(allnum>=0){
		}else{
			allnum=0;
		}
		document.getElementById("number_sum").innerHTML=allnum;
	}
}

function saveprice(id,price){
	map.add(id, price);
}

function getprice(id){
	return map.getValue(id);
}

function caculatethis(id){
	//	alert("this is this-sum-"+parseInt(readbooknum(id))*getprice(id));
}

function caculateall(id,type){
	if(type==1)
		summoney = summoney*1+getprice(id)*1;
	else
		summoney = summoney*1-getprice(id)*1;
	document.getElementById("moneysum").innerHTML = summoney.toFixed(2);
}

function HashTable()
{
    var size = 0;
    var entry = new Object();

    this.add = function (key , value)
    {
        if(!this.containsKey(key))
        {
            size ++ ;
        }
        entry[key] = value;
    }

    this.getValue = function (key)
    {
        return this.containsKey(key) ? entry[key] : null;
    }

    this.remove = function ( key )
    {
        if( this.containsKey(key) && ( delete entry[key] ) )
        {
            size --;
        }
    }

    this.containsKey = function ( key )
    {
        return (key in entry);
    }

    this.containsValue = function ( value )
    {
        for(var prop in entry)
        {
            if(entry[prop] == value)
            {
                return true;
            }
        }
        return false;
    }

    this.getValues = function ()
    {
        var values = new Array();
        for(var prop in entry)
        {
            values.push(entry[prop]);
        }
        return values;
    }

    this.getKeys = function ()
    {
        var keys = new Array();
        for(var prop in entry)
        {
            keys.push(prop);
        }
        return keys;
    }

    this.getSize = function ()
    {
        return size;
    }

    this.clear = function ()
    {
        size = 0;
        entry = new Object();
    }
}


window.onload=function(){
//登录
  var dengluzong=$(".dengluzong")[0];
  var denglu1=$(".denglu1")[0];
  var hidden=$(".hidden")[0];
      dengluzong.onmouseover=function(){
		 denglu1.style.display="block";
		 hidden.style.display="block";
		 dengluzong.style.background="#fff";
	}
	  dengluzong.onmouseout=function(){
		 denglu1.style.display="none";
		 hidden.style.display="none";
         dengluzong.style.background="#f6f6f6";
	}
//手机营业厅
 var yyt=$(".yyt")[0];
 var sys=$(".sys")[0];
 var hidden1=$(".hidden1")[0];
	yyt.onmouseover=function(){
	  sys.style.display="block";
	  hidden1.style.display="block";
	  yyt.style.background="#fff";
	}
	yyt.onmouseout=function(){
	  sys.style.display="none";
	  hidden1.style.display="none"
	  yyt.style.background="#f6f6f6";
	}
//省份
   var province=$(".province")[0];
   var provincez=$(".provincez")[0];
   var body=$("body")[0];
   var province2=$(".province2")[0];
   var a1=$("a",provincez)[0];
   province.onclick=function(e){
	   var e=e||window.event;
	   if(e.cancelBubble){
	   e.cancelBubble=true;
	   }else{
	     e.stopPropagation();
	   }
     provincez.style.display="block";
   }
   body.onclick=function(e){
     var e=e||window.event;
	 var obj=e.target||e.srcElement;
	 if(obj.className!=province){
	   provincez.style.display="none";
	 }
   }
//首页选项卡
   var sy=$(".sy")[0];
   var item=$(".item");
   var list=$(".list");
   var triangle=$(".triangle");
   console.log(triangle.length);
   for(var i=0;i<item.length;i++){
     item[i].index=i;
	 item[i].onmouseover=function(){
	 list[this.index].style.display="block";
     triangle[this.index].style.display="block";
	 }
	 item[i].onmouseout=function(){
	 list[this.index].style.display="none";
	 triangle[this.index].style.display="none";
	 }
   }
   //banner
 var aa=$("a",$(".anniu")[0]);
 var bb=$(".img");
 aa[0].className="hot";
 var now=0;
 var next=0;
 var x=0;
 var cc=$(".anniu");
     cc[0].style.zIndex=11;
 var dd=$(".banner2");
 var ee=$(".youd");
 var ff=$(".zuod")
 var mw=parseInt(getStyle(dd[0],"width"));
  var t=setInterval(move,2000);
   dd[0].onmouseover=function(){
        clearInterval(t);
    }
    dd[0].onmouseout=function(){
       t=setInterval(move,2000);
    }
	for(var i=0;i<bb.length;i++){
	   if(i==0){
	   continue;
	   }
	   else{
	     bb[i].style.left=mw+"px";
	   }
	}
    function move(){
         next++;
		 if(next==bb.length){
		   next=0;
		 }
		 
         bb[next].style.left=mw+"px";
		 aa[now].style.background="#b3c3c8";
		 animate(bb[now],{left:-mw});
		 animate(bb[next],{left:0},function(){
		    flag=true});
		 aa[next].style.background="#ca1a83";
		 now=next;
    }
	 function moveL(){
         next--;
		 if(next<0){
		   next=bb.length-1;
		 }
         bb[next].style.left=-mw+"px";
		 aa[now].style.background="#b3c3c8";
		 animate(bb[now],{left:mw});
		 animate(bb[next],{left:0},function(){
		    flag=true
		 });
		 aa[next].style.background="#ca1a83";
		 now=next;
    }
	var flag=true;
    ee[0].onclick=function(){
		if(flag){
	    move();
		flag=false;
		}
	}  
	ff[0].onclick=function(){
		if(flag){
	    moveL();
		flag=false;
		}
	}
	for(var i=0;i<aa.length;i++){ 
	   aa[i].index=i;
	   
	   aa[i].onclick=function(){
         //next this.index
		 if(parseInt(getStyle(bb[next],"left"))==0){
		 if(now<this.index){
		 bb[this.index].style.left=mw+"px";
		 animate(bb[now],{left:-mw});
		 animate(bb[this.index],{left:0});
		 }
		 else if(now>this.index){
		 bb[this.index].style.left=-mw+"px";
		 animate(bb[now],{left:mw});
		 animate(bb[this.index],{left:0});
		 }
		 else{
		    return;
		 }
		 aa[now].style.background="#b3c3c8";
		 aa[this.index].style.background="#ca1a83";
		 now=this.index;
		 next=this.index;
	   }  
	   }
	}
var hdkx=$(".hdkx");
lunbo(hdkx[0],1)
function lunbo (obj,num) {
var flag=true;
var hdkc=$(".hdkc",obj);
var zf=$(".zf",obj)[0];
var yf=$(".yf",obj)[0];
var box=$(".box",hdkc[0]);
var aw=parseInt(getStyle(box[0],"width"))+parseInt(getStyle(box[0],"margin-right"));
hdkc[0].style.width=aw*box.length+"px";
var a=setInterval(hh,2000);
 obj.onmouseover=function(){
      clearInterval(a);
 }
 obj.onmouseout=function(){
      a=setInterval(hh,1500);
 }
function hh() {

  animate(hdkc[0],{left:-num*aw},function(){
	for (var i=0; i<num; i++) {
	
     var first=firstChild(hdkc[0]);
	 hdkc[0].appendChild(first);
	 hdkc[0].style.left=0;
	 }
	 flag=true;
  })
}
function hhL() {
	for (var i=0; i<num; i++) {
   var first=firstChild(hdkc[0]);
   var last=lastChild(hdkc[0]);
	 hdkc[0].insertBefore(last,first);
	}
	 hdkc[0].style.left=-num*aw+"px";
  animate(hdkc[0],{left:0},function(){
     flag=true;
  })
}
  zf.onclick=function(){
	  if(flag){
     hhL();
	 flag=false;
	  }
  }
   yf.onclick=function(){
	   if(flag){
     hh();
	 flag=false;
	  }
  }
}
//固定定位js
  var zxzx=$(".zxzx")[0];
  var cjwt=$(".cjwt")[0];
  var tsjy=$(".tsjy")[0];
  zxzx.onmouseover=function(){
    animate(zxzx,{left:-86},600);
  }
  zxzx.onmouseout=function(){
    animate(zxzx,{left:-22},600);
  }
  cjwt.onmouseover=function(){
    animate(cjwt,{left:-86},600);
  }
  cjwt.onmouseout=function(){
    animate(cjwt,{left:-22},600);
  }
  tsjy.onmouseover=function(){
    animate(tsjy,{left:-86},600);
  }
  tsjy.onmouseout=function(){
    animate(tsjy,{left:-22},600);
  }
//公告内容
  var xy=$(".xy")[0];
  var dy=$(".dy")[0];
  var ggw1=$(".ggw1");
  var ggnyd=$(".ggnyd")[0];
  dy.onclick=function(){
   var first=firstChild(ggnyd);
	 ggnyd.appendChild(first);
  }
  xy.onclick=function(){
   var first=firstChild(ggnyd);
   var last=lastChild(ggnyd);
   ggnyd.insertBefore(last,first);
  }
//移动图
 var picture1=$(".picture1");
  for (var i=0; i<picture1.length; i++) {
	  picture1[i].index=i;
      picture1[i].style.right=0;
	  picture1[i].onmouseover=function(){
	    animate(picture1[this.index],{right:10});
	  }
	  picture1[i].onmouseout=function(){
	    animate(picture1[this.index],{right:0});
	  }
  }
  var box221=$(".box221");

  for (var i=0; i<box221.length; i++) {
	  box221[i].index=i;
	  box221[i].style.right=0;
	  box221[i].onmouseover=function(){
	    animate(box221[this.index],{right:10});
	  }
	  box221[i].onmouseout=function(){
	    animate(box221[this.index],{right:0});
	  }
  }
// 固定定位
 
}


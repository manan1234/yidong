$(document).ready(function(){
// head
	$(".dengluzong").hover(function(){
        $(".denglu1").show();
		$(".hidden").show();
		$(".dengluzong").css("color","#fff");
	},function(){
        $(".denglu1").hide();
		$(".hidden").hide();
		$(".dengluzong").css("color","#f6f6f6");
	})
	$(".yyt").hover(function(){
        $(".sys").show();
		$(".hidden1").show();
		$(this).css("color","#fff");
	},function(){
        $(".sys").hide();
		$(".hidden").hide();
		$(this).css("color","#f6f6f6");
	})
// 省份
    $("body").delegate(".province","click",function(){
         $(".provincez").toggle();

    })
    // $(".provincez").click(function(){
    //      $(".provincez").css("display","none");

    // })
   
// 选项卡
    $(".item").each(function(index,dom){
    	$(this).hover(function(){
            $(".list").eq(index).show();
            $(".triangle").eq(index).show();
    	},function(){
            $(".list").eq(index).hide();
            $(".triangle").eq(index).hide();
    	})
    })
//banner轮播图
    var now=0;
    var next=0;
    var width=$(".banner2").width();
    var flag=true;
    var t=setInterval(move,2000);
    $(".banner2").hover(function(){
    	clearInterval(t);
    },function(){
        t=setInterval(move,2000);
    })
    $(".imgfirst").css("zIndex",1000);
    function move(){
    	next++;
    	if (next>=$(".img").length) {
              next=0;
    	}
    	$(".img").eq(next).css("left",width).end().eq(now).animate({"left":-width},function(){flag=true}).end().eq(next).animate({"left":0});
    	$(".anniu a").eq(now).css("background","#b3c3c8").end().eq(next).css("background","#ca1a83");
    	now=next;
    }
    function moveL(){
    	next--;
    	if (next<0) {
              next=$(".img").length-1;
    	}
    	$(".img").eq(next).css("left",-width).end().eq(now).animate({"left":width},function(){flag=true}).end().eq(next).animate({"left":0});
    	$(".anniu a").eq(now).css("background","#b3c3c8").end().eq(next).css("background","#ca1a83");
    	now=next;
    }
    $(".youd").click(function(){
    	if (flag) {
    	move();
    	flag=false;
    	}
    })
    $(".zuod").click(function(){
    	if (flag) {
    	moveL();
    	flag=false;
    	}
    })
    $(".anniu a").click(function(){
    	var index=$(this).index();
    	if (now<index) {
            $(".img").eq(index).css("left",width).end().eq(now).animate({left:-width}).end().eq(index).animate({left:0});
    	}
    	else if(now>index){
    		$(".img").eq(index).css("left",-width).end().eq(now).animate({left:width}).end().eq(index).animate({left:0});
    	}
    	else{
    		return;
    	}
    	$(".anniu a").eq(index).css("background","#ca1a83").end().eq(now).css("background","#b3c3c8");
    	now=index;
    	next=index;
    })
// 节点轮播
    var flag1=true;
    var a=setInterval(hh,2000);
    var aw=$(".hdkc .box").eq(0).outerWidth(true);
    $(".hdkx").hover(function(){clearInterval(a)},function(){a=setInterval(hh,2000)});
    function hh(){
    	$(".hdkc").eq(0).animate({left:-aw},function(){
                $(".hdkc").append($(".hdkc .box:first-child")).css("left",0);
                flag1=true;
    	})
    }
    function hhL(){
        $(".hdkc .box:last-child").insertBefore(".hdkc .box:first-child");
        $(".hdkc").css("left",-aw).animate({left:0},function(){flag1=true});
    }
    $(".zf").click(function(){
         if (flag1) {
         	hhL();
         	flag1=false;
         }
    })
    $(".yf").click(function(){
         if (flag1) {
         	hh();
         	flag1=false;
         }
    })
// 4G专区
     var index=$(".picture1").index($(this));
     $(".picture1").hover(function(){
           $(this).eq(index).animate({right:10});
     },function(){
           $(this).eq(index).animate({right:0});
          
     })
     var index1=$(".box221").index($(this));
     $(".box221").hover(function(){
           $(this).eq(index).animate({right:10});
     },function(){
           $(this).eq(index).animate({right:0});
          
     })
     var index=$(".picture1").index($(this));
     $(".picture1").hover(function(){
           $(this).eq(index).animate({right:10});
     },function(){
           $(this).eq(index).animate({right:0});
          
     })
// 固定定位
   var flag2=true;
   var flag3=true;
   var index2=$(".gugu").index(this);
   $(".gugu").hover(function(){
          $(this).eq(index).animate({left:-86});
   },function(){
          $(this).eq(index).animate({left:-22});     
   })
// 公告内容
   $(".dy").click(function(){
   	$(".ggnyd").append($(".ggnyd .ggny1:first-child"));
   })
   $(".xy").click(function(){
   	$(".ggnyd .ggny1:last-child").insertBefore(".ggnyd .ggny1:first-child")
   })
}) 
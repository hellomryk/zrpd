$(document).ready(function(){										 								 										 										 										
/*输入框效果										 
$(".inp").bind({ 
focus:function(){ 
if (this.value == this.defaultValue){ 
this.value=""; 
} 
}, 
blur:function(){ 
if (this.value == ""){ 
this.value = this.defaultValue; 
} 
}
	})*/
/*返回顶部*/
(function() {
	    var $backToTopTxt = "", $backToTopEle = $('<div class="backToTop"></div>').insertBefore($(".briefing"))
	        .text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
	            $("html, body").animate({ scrollTop: 0 }, 120);
	    }), $backToTopFun = function() {
	        var st = $(document).scrollTop(), winh = $(window).height();
	        (st > 0)? $backToTopEle.show(): $backToTopEle.hide();
	        //IE6下的定位
	        if (!window.XMLHttpRequest) {
	            $backToTopEle.css("top", st + winh - 166);
	        }
	    };
	    $(window).bind("scroll", $backToTopFun);
	    $(function() { $backToTopFun(); });
	})();

	$("#paper").click(function(){
		if($(this).next().is(":visible")){
			$(this).siblings().hide();
		} else{
			$(this).siblings().show();
		}
	});

/*tab切换*/
$(".tabs-title").children("a").hover(
function(){
$(this).parent().children().removeClass("active");
$(this).parent().next().children().hide();
$(this).addClass("active");
var Id=$(this).attr("name");
$(this).parent().next().children("#"+Id).show();
}
	)

/*地区展开/收起*/
$(".show_dq").toggle(
function(){
$(this).children("span").hide();
$(this).children("i").show();
$(this).next().slideDown();
},
function(){
$(this).children("span").show();
$(this).children("i").hide();
$(this).next().hide();
}
	)

/*地区显示(鼠标滑过显示隐藏)
$(".tags-content").children("span").hover(
	function(){
		$(this).parent().children("span").removeClass("active");
		$(this).addClass("active");
		$(".tags_hide").hide();
		$(this).parent().children(".tags_hide").slideDown();
	},
	function(){
	})
$(".tags_hide").hover(
	function(){},
	function(){
		$(this).hide();
	})
*/
/*main标签切换*/
$(".bq_qh").bind('click', function() {
	$(".bq_qh").removeClass("cur");
	$(this).addClass("cur");
	var n=$(this).attr("name");
	$(".qh_con").hide();
	$("#"+n).show();
	})
/*弹出框*/
$(".tck_btn").bind('click',function(){
$(".modal-box").show();
$(".overlay").show();
})

$(".modal-del").bind('click',function(){
$(".modal-box").hide();
$(".overlay").hide();
})
/*查看全部/收起*/
$(".detail_btn").bind('click',function(){
$(this).parent().hide();	
$(this).parent().next(".jb_con").slideDown();
})
$(".sq_btn").bind('click',function(){
$(this).parent().hide();	
$(this).parent().prev("p").show();
})

$(".nav_tj").bind('click',function(){
$(".nav_dhcon").children().children("a").removeClass("cur");
$(this).addClass("cur");
$("iframe").attr("height","950");
})
$(".nav_cl").bind('click',function(){
$(".nav_dhcon").children().children("a").removeClass("cur");
$(this).addClass("cur");
$("iframe").attr("height","685");
})

//$("#gdxw").wrap("<marquee direction="left" scrollAmount="3" onmouseover=stop() onmouseout=start()></marquee>");
var w=$(".sel_hide");
var len=w.length;
for(i=0;i<len;i++){
 var s=$(w[i]).css("width");
 var m=parseInt(s)-16;
 var l=parseInt(m)+35;
 var val=$(w[i]).children().children().first().children().text();
 $(w[i]).prev().children("input").attr("value",val);
 $(w[i]).css("width",l);
 $(w[i]).prev().css("width",l);
 $(w[i]).prev().children("input").css("width",m);
}

$(".sel_con").children(".sel_title").css("width",w);
$(".sel_inp").bind('click',function(){
 $(this).children(".sel_title").attr("value","");
 $(this).next(".sel_hide").slideDown();
})
$(".sel_hide").children().children().children("a").bind('click',function(){
 var val=$(this).text();
 $(this).parent().parent().parent().prev().children(".sel_title").attr("value",val);
 $(this).parent().parent().parent().hide();
 $(this).parent().parent().parent().prev().children(".sel_title").css("color","#333")
})
	});


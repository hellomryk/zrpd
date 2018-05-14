//导航透明
function wdgd(){
        var windowTime = 500;
        $(window).scroll(function(event){
            if($(window).scrollTop()>1){
                $('.head-w-box').css({'background-color':'rgba(255,255,255,0.7)'});
            }else{
                $('.head-w-box').css({'background-color':'#fff'});
            }
        });
    }
    wdgd();
    
//下拉菜单
$(function(){
    $('.nav-home,.nav-down').hover(function(){
        $('.nav-down').stop(true).slideDown();
        },function(){
        $('.nav-down').stop(true).slideUp();
    });
});

//点击变色
$(document).ready(function(){
    $(".head-w-box-nav-ul .clicka").each(function(){
        $this = $(this);
        if($this[0].href==String(window.location)){
            $this.addClass("click-head-nav-blue");
        }
    });
});

// 新加点击出现登陆弹框
$(".newform-group-shutdown").click(function() {
    $(".form-inline-fixedbg").hide();
});
$(".form-inline-fixedbg").click(function() {
    $(this).hide();
});
$(".form-inline-fixed").click(function(event) {
    event.stopPropagation();
});
$(".signin").click(function() {
    $(".form-inline-fixedsignin").show();
});
$(".register").click(function() {
    $(".form-inline-fixedregester").show();
})

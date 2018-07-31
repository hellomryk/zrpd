function resetPage() {
   var htmls = document.getElementsByTagName('html')[0];

    var deviceWidth = document.documentElement.clientWidth;
   htmls.style.fontSize = deviceWidth*0.15625 + 'px';
    var fontZ=parseInt($('html').css('font-size'));
    if(fontZ>100){
        fontZ=100;
        htmls.style.fontSize = fontZ + 'px';
    }
}
window.onload = function(){
   resetPage();
}
window.onresize = function(){
   resetPage();
}
$(function(){
    $('.content li').click(function(){
        var i=$(this).index();
        if(i==0){
            $('.content li').eq(1).css('display','block')
            //$(this).css('background','url("../img/part2_nav2.jpg")')

        }else{
            $('.content li').eq(1).css('display','none')

        }
        if(i==2){
            $('.content li').eq(3).css('display','block')
            //$(this).css('background','url("../img/part2_nav2.jpg")')

        }else{
            $('.content li').eq(3).css('display','none')
        }
        if(i==4){
            $('.content li').eq(5).css('display','block')
            $('.content li').eq(6).css('display','block')
            //$(this).css('background','url("../img/part2_nav2.jpg")')

        }else{
            $('.content li').eq(5).css('display','none')
            $('.content li').eq(6).css('display','none')

        }
    })
})
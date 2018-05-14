$(function(){
    var timer,
        online = $('.js-online'),
        onlineMenu = $('.js-online-menu');
    online.hover(function(){
        $(this).addClass('active')
        onlineMenu.stop().animate({ marginTop: 0 }, 600 ,'swing')
        clearInterval(timer)
    },function(){
        $(this).removeClass('active')
        clearInterval(timer)
        timer = setTimeout(function(){
            onlineMenu.stop().animate({ marginTop: '-278px' }, 600, 'swing')
        },30)
    })
    onlineMenu.hover(function() {
        online.addClass('active')
        clearTimeout(timer);
    }, function() {
        online.removeClass('active')
        $(this).stop().animate({ marginTop: '-278px' }, 600, 'swing') 
    });
})

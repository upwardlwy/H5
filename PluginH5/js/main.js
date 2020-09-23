/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 16-12-29
 * Time: 下午3:36
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    /**
     * fullPage
     */
    $("#fullPage").fullpage({
        continuousVertical: true,
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        menu: '#menu',
        navigation: true,
        afterLoad: function(anchorLink,index){
            $('.section1 img').hide();
            $('.section2 img').hide();
            $('.section3 img').hide();

            if(index == 2){
                $(".section2 .section2-img").show().addClass("section2-fadeInUp");
                $(".section2 .section2-img2").show().addClass("section2-fadeInUp2");
                $(".section2 .section2-img3").show().addClass("section2-fadeInUp3");
            } else {
                $('.section'+index+' img').show();
            }
        }
    });

    $.fn.fullpage.setAutoScrolling(true);

    /**
     *  music
     */
    $("#music").click(function(){
        if($("audio")[0].paused){
            $("audio")[0].play();
            $(this).removeClass("stopped");

        }else {
            $("audio")[0].pause();
            $(this).addClass("stopped");
        }
    });

    //ios 浏览器打开 音频播放
    $(document).one("touchstart", function() {
        $("audio")[0].play();
    });

    /* //ios 微信中音频自动播放 注：结合Weixin JSAPI的WeixinJSBridgeReady才能生效
     document.addEventListener("WeixinJSBridgeReady", function () {
     $("audio")[0].play();
     }, false);  */

});

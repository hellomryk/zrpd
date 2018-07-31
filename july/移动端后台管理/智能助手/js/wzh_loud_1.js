
//创建引用js
 //  function includescript(url) {
 //   var script = document.createElement("script");
 //   script.type = "text/javascript";
 //   script.src = url;
 //   document.getElementsByTagName("head")[0].appendChild(script);
 // }
 // includescript("js/jquery.min.js"); 
  $.post("http://192.168.1.59:8083/api/kapSecretKey/getDataByKey",
      {
          key: tenantId,
      },
      function (data) {
          //加载样式和结构
          var html="<style type='text/css'>#huilan-aikf-show{width:125px;height:50px;padding:0 12px;line-height:50px;position:absolute;z-index:2;right:10px;bottom:10px;color:#fff;font-size:16px;text-align:center;cursor:default;margin:auto}#huilan-aikf-show img{vertical-align:middle}.aikf-min-dialog-style1 i{display:inline-block;background:url(images/shuLine.png)no-repeat 0 0;width:1px;height:22px;vertical-align:middle;margin:0 5px}#background{position:absolute;left:0;top:0}#top_wzh_27{width:70px;height:40px;position:absolute;left:20px;top:110px;z-index:2;opacity:0}#center_wzh_27{width:70px;height:60px;position:absolute;left:15px;top:150px;z-index:2;opacity:0}#bottom_wzh_27{width:70px;height:40px;position:absolute;left:15px;top:210px;z-index:2;opacity:0}.le_ri_wzh_27{width:15px;height:160px;position:absolute;top:110px;z-index:2;opacity:0}.back{width:100px;height:270px;cursor:pointer;background:url(images/cartoon-red.png)0 0 no-repeat;-webkit-animation:'flymove'1s steps(18)infinite;-moz-animation:'flymove'1s steps(18)infinite;-ms-animation:'flymove'1s steps(18)infinite}@-webkit-keyframes flymove{0%{background-position:0 0}100%{background-position:-1800px 0}}@-moz-keyframes flymove{0%{background-position:0 0}100%{background-position:-1800px 0}}@-ms-keyframes flymove{0%{background-position:0 0}100%{background-position:-1800px 0}}.back1{width:100px;height:270px;cursor:pointer;background:url(images/cartoon-red-smile.png)0 0 no-repeat;-webkit-animation:'flymove1'1s steps(13)infinite;-moz-animation:'flymove1'1s steps(13)infinite;-ms-animation:'flymove1'1s steps(13)infinite}@-webkit-keyframes flymove1{0%{background-position:0 0}100%{background-position:-1300px 0}}@-moz-keyframes flymove1{0%{background-position:0 0}100%{background-position:-1300px 0}}@-ms-keyframes flymove1{0%{background-position:0 0}100%{background-position:-1300px 0}}.back2{width:100px;height:270px;cursor:pointer;background:url(images/cartoon-red-moveHand.png)0 0 no-repeat;-webkit-animation:'flymove2'1s steps(14)infinite;-moz-animation:'flymove2'1s steps(14)infinite;-ms-animation:'flymove2'1s steps(14)infinite}@-webkit-keyframes flymove2{0%{background-position:0 0}100%{background-position:-1400px 0}}@-moz-keyframes flymove2{0%{background-position:0 0}100%{background-position:-1400px 0}}@-ms-keyframes flymove2{0%{background-position:0 0}100%{background-position:-1400px 0}}.back3{width:100px;height:270px;cursor:pointer;background:url(images/cartoon-red-jump.png)0 0 no-repeat;-webkit-animation:'flymove3'2s steps(29)infinite;-moz-animation:'flymove3'2s steps(29)infinite;-ms-animation:'flymove3'2s steps(29)infinite}@-webkit-keyframes flymove3{0%{background-position:0 0}100%{background-position:-2900px 0}}@-moz-keyframes flymove3{0%{background-position:0 0}100%{background-position:-2900px 0}}@-ms-keyframes flymove3{0%{background-position:0 0}100%{background-position:-2900px 0}}.back4{width:100px;height:270px;cursor:pointer;background:url(images/cartoon-red-wave.png)0 0 no-repeat;-webkit-animation:'flymove4'1.5s steps(21)infinite;-moz-animation:'flymove4'1.5s steps(21)infinite;-ms-animation:'flymove4'1.5s steps(21)infinite}@-webkit-keyframes flymove4{0%{background-position:0 0}100%{background-position:-2100px 0}}@-moz-keyframes flymove4{0%{background-position:0 0}100%{background-position:-2100px 0}}@-ms-keyframes flymove4{0%{background-position:0 0}100%{background-position:-2100px 0}}#wzh_29_iframe_jqr{width:320px;height:550px;overflow:hidden;position:absolute;left:0;top:0}.wzh_29_box_jqr{width:100px;height:auto;z-index:9999;position:fixed;right:10px;bottom:10px}#wzh_ifra_1{width:320px;height:550px;overflow:hidden;display:none;position:absolute;left:0;top:200px}#wzh_click_1{width:30px;height:30px;position:absolute;right:15px;top:15px;z-index:999;opacity:0}</style><div class='wzh_29_box_jqr'><!--小人儿--><div id='background'class='back huilan-aikf-show'style=''><div id='top_wzh_27'class='click_wzh_7_1'></div><div id='center_wzh_27'class='click_wzh_7_1'></div><div id='bottom_wzh_27'class='click_wzh_7_1'></div><div class='le_ri_wzh_27'style='left:0;'class='click_wzh_7_1'></div><div class='le_ri_wzh_27'style='left:85px;'class='click_wzh_7_1'></div></div><!--按钮--><div class='aikf-min-dialog aikf-min-dialog-style1 huilan-aikf-show' id='huilan-aikf-show' style=' background-color: #e5004a;'><img src='images/kefu-icon.png'id='aikef-mini-icon'><i></i><span id='aikef-mini-dialog-text'>点我咨询</span></div><!--迷你对话框--><div id='wzh_ifra_1'><div id='wzh_click_1'></div><iframe id='wzh_29_iframe_jqr'src='"+ iferame_wzh+"'frameborder='0'></iframe></div></div>";
          $('body').append(html);
          var desktop_but_json=data.desktop_but_json ;//按钮回显数据
          var desktop_win_json=data.desktop_win_json ;//窗体回显数据
         var  iferame_wzh="http://192.168.1.59:8083/robot/win/mini?key="+tenantId;//迷你对话框链接
          $("#wzh_29_iframe_jqr").attr("src",iferame_wzh);//链接到迷你对话框
          desktop_but_json=JSON.parse(desktop_but_json);
          var en=+ desktop_but_json.sideDistanceInput_bstb;
          var end=+ desktop_but_json.belowDistanceInput_bstb;
          console.log(desktop_but_json);
          if(desktop_but_json.btnTypeInput_bstb==0){//0为按钮，1为窗体
              $(".wzh_29_box_jqr").css({width:'125px',height:'50px'});
              $("#background").hide();
              // 按钮样式
             if(desktop_but_json.btnStyleInput_bstb==0){
                 $(".huilan-aikf-show").css({
                     width: "125px",
                     height: "50px",
                     lineHeight: '50px',
                     borderRadius: '0',
                     paddingTop: '0'
                 });
                 $(".huilan-aikf-show span").css({
                     lineHeight: '50px', display: 'inline-block',
                     width: 'auto'
                 });
                 $(".huilan-aikf-show i").css({
                     width: "1px",
                     height: "21px",
                     background: 'url(images/shuLine.png) no-repeat 0 0'
                 });
                 $(".huilan-aikf-show img").css({marginLeft: '0'});
             }else if(desktop_but_json.btnTypeInput_bstb==1){
                 $(".huilan-aikf-show").css({
                     width: "51px",
                     height: "164px",
                     lineHeight: 'inherit',
                     borderRadius: '0',
                     paddingTop: '10px'
                 });
                 $(".huilan-aikf-show span").css({
                     lineHeight: 'inherit', display: 'inline-block',
                     width: 'auto'
                 });
                 $(".huilan-aikf-show i").css({
                     width: "21px",
                     height: "1px",
                     background: 'url(images/hengLine.png) no-repeat 0 0'
                 });
                 $(".huilan-aikf-show img").css({marginLeft: '0'});

             }else if(desktop_but_json.btnTypeInput_bstb==2){
                 $(".huilan-aikf-show").css({
                     width: "86px",
                     height: "86px",
                     lineHeight: 'inherit',
                     borderRadius: '100%',
                     paddingTop: '10px'
                 });
                 $(".huilan-aikf-show span").css({
                     lineHeight: 'inherit', display: 'inline-block',
                     width: '65px'
                 });
                 $(".huilan-aikf-show i").css({
                     width: "0",
                     height: "0",
                     background: 'url() no-repeat 0 0'
                 });
                 $(".huilan-aikf-show img").css({marginLeft: '10px'});
             }
             // 按钮文字
              $('#aikef-mini-dialog-text').val(desktop_but_json.btnTitleInput_bstb) ;
             // 按钮颜色
              $('#wzh_29_box_jqr').css({backgroundColor:desktop_but_json.diy_color});
              // 按钮位置
              if(desktop_but_json.btnPositionInput_bstb==0){
                  $(".wzh_29_box_jqr").css({
                      left: "10px",
                      right: "auto",
                      top: "auto",
                      buttom: "10px"
                  });
                  // 按钮左右偏移
                  $(".wzh_29_box_jqr").css({left: (en+10) + 'px'});
                  // 按钮上下偏移
                  $(".wzh_29_box_jqr").css({bottom: (10+end) + 'px'})
              }else if(desktop_but_json.btnPositionInput_bstb==1){
                  $(".wzh_29_box_jqr").css({
                      left: "auto",
                      right: "10px",
                      top: "auto",
                      buttom: "10px"
                  });
                  // 按钮左右偏移
                  $(".wzh_29_box_jqr").css({right: (en+10) + 'px'});
                  // 按钮上下偏移
                  $(".wzh_29_box_jqr").css({bottom: (10+end) + 'px'})
              }else if(desktop_but_json.btnPositionInput_bstb==2){
                  $(".wzh_29_box_jqr").css({
                      left: "10px",
                      right: "auto",
                      top: 0,
                      buttom: 0
                  });
                  // 按钮左右偏移
                  $(".wzh_29_box_jqr").css({left: (en+10) + 'px'});
                  // 按钮上下偏移
                  $(".wzh_29_box_jqr").css({buttom: (end+($(window).height()/2)) + 'px'})
              }else if(desktop_but_json.btnPositionInput_bstb==3){
                  $(".wzh_29_box_jqr").css({
                      left: "auto",
                      right: "10px",
                      top: 0,
                      buttom: 0
                  });
                  // 按钮左右偏移
                  $(".wzh_29_box_jqr").css({right: (en+10) + 'px'});
                  // 按钮上下偏移
                  $(".wzh_29_box_jqr").css({buttom: (end+($(window).height()/2)) + 'px'})
              }
          }else if(desktop_but_json.btnTypeInput_bstb==1){
              $(".wzh_29_box_jqr").css({width:'100px',height:'270px'});
              $("#huilan-aikf-show").hide();
              // 按钮样式
              if(desktop_but_json.btnStyleCartoonInput_bstb==0){
                  $(".back").css({background: "url(images/cartoon-red.png) 0 0 no-repeat"})

              }else if(desktop_but_json.btnStyleCartoonInput_bstb==1){
                  $(".back").css({background: "url(images/cartoon-blue.png) 0 0 no-repeat"})

              }else if(desktop_but_json.btnStyleCartoonInput_bstb==2){
                  $(".back").css({background: "url(images/cartoon-white.png) 0 0 no-repeat"})

              }else if(desktop_but_json.btnStyleCartoonInput_bstb==3){
                  $(".back").css({background: "url(images/cartoon-redTxt.png) 0 0 no-repeat"})

              }else if(desktop_but_json.btnStyleCartoonInput_bstb==4){
                  $(".back").css({background: "url(images/cartoon-blueTxt.png) 0 0 no-repeat"})

              }else if(desktop_but_json.btnStyleCartoonInput_bstb==5){
                  $(".back").css({background: "url(images/cartoon-whiteTxt.png) 0 0 no-repeat"})

              }
              if(desktop_but_json.btnPositionInput_bstb==0){
                  $(".wzh_29_box_jqr").css({
                      left: "10px",
                      right: "auto",
                      top: "auto",
                      buttom: "10px"
                  });
                  // 按钮左右偏移
                  $(".wzh_29_box_jqr").css({left: (en+10) + 'px'});
                  // 按钮上下偏移
                  $(".wzh_29_box_jqr").css({bottom: (10+end) + 'px'})
              }else if(desktop_but_json.btnPositionInput_bstb==1){
                  $(".wzh_29_box_jqr").css({
                      left: "auto",
                      right: "10px",
                      top: "auto",
                      buttom: "10px"
                  });
                  // 按钮左右偏移
                  $(".wzh_29_box_jqr").css({right: (en+10) + 'px'});
                  // 按钮上下偏移
                  $(".wzh_29_box_jqr").css({bottom: (10+end) + 'px'})
              }else if(desktop_but_json.btnPositionInput_bstb==2){
                  $(".wzh_29_box_jqr").css({
                      left: "10px",
                      right: "auto",
                      top: 0,
                      buttom: 0
                  });
                  // 按钮左右偏移
                  $(".wzh_29_box_jqr").css({left: (en+10) + 'px'});
                  // 按钮上下偏移
                  $(".wzh_29_box_jqr").css({buttom: (end+($(window).height()/2)) + 'px'})
              }else if(desktop_but_json.btnPositionInput_bstb==3){
                  $(".wzh_29_box_jqr").css({
                      left: "auto",
                      right: "10px",
                      top: 0,
                      buttom: 0
                  });
                  // 按钮左右偏移
                  $(".wzh_29_box_jqr").css({right: (en+10) + 'px'});
                  // 按钮上下偏移
                  $(".wzh_29_box_jqr").css({buttom: (end+($(window).height()/2)) + 'px'})
              }
              /*小人儿动画start*/
              var s=desktop_but_json.btnStyleCartoonInput_bstb;
              $("#top_wzh_27").hover(function () {
                  $("#background").attr("class", "back1 huilan-aikf-show");
                  var s=desktop_but_json.btnStyleCartoonInput_bstb;
                  if (s == 0) {
                      $(".back1").css({background: "url(images/cartoon-red-smile.png) 0 0 no-repeat"})
                  } else if (s == 1) {
                      $(".back1").css({background: "url(images/cartoon-blue-smile.png) 0 0 no-repeat"})
                  } else if (s == 2) {
                      $(".back1").css({background: "url(images/cartoon-white-smile.png) 0 0 no-repeat"})
                  } else if (s == 3) {

                  } else if (s == 4) {

                  } else if (s == 5) {

                  }

              }, function () {
                  $("#background").attr("class", "back huilan-aikf-show");
                  var s=desktop_but_json.btnStyleCartoonInput_bstb;
                  if (s == 0) {
                      $(".back").css({background: "url(images/cartoon-red.png) 0 0 no-repeat"})
                  } else if (s == 1) {
                      $(".back").css({background: "url(images/cartoon-blue.png) 0 0 no-repeat"})
                  } else if (s == 2) {
                      $(".back").css({background: "url(images/cartoon-white.png) 0 0 no-repeat"})
                  } else if (s == 3) {

                  } else if (s == 4) {

                  } else if (s == 5) {

                  }

              })
              $("#center_wzh_27").hover(function () {
                  $("#background").attr("class", "back2 huilan-aikf-show");
                  var s=desktop_but_json.btnStyleCartoonInput_bstb;
                  if (s == 0) {
                      $(".back2").css({background: "url(images/cartoon-red-moveHand.png) 0 0 no-repeat"})
                  } else if (s == 1) {
                      $(".back2").css({background: "url(images/cartoon-blue-moveHand.png) 0 0 no-repeat"})
                  } else if (s == 2) {
                      $(".back2").css({background: "url(images/cartoon-white-moveHand.png) 0 0 no-repeat"})
                  } else if (s == 3) {

                  } else if (s == 4) {

                  } else if (s == 5) {

                  }
              }, function () {
                  $("#background").attr("class", "back huilan-aikf-show");
                  var s=desktop_but_json.btnStyleCartoonInput_bstb;
                  if (s == 0) {
                      $(".back").css({background: "url(images/cartoon-red.png) 0 0 no-repeat"})
                  } else if (s == 1) {
                      $(".back").css({background: "url(images/cartoon-blue.png) 0 0 no-repeat"})
                  } else if (s == 2) {
                      $(".back").css({background: "url(images/cartoon-white.png) 0 0 no-repeat"})
                  } else if (s == 3) {

                  } else if (s == 4) {

                  } else if (s == 5) {

                  }
              })
              $("#bottom_wzh_27").hover(function () {
                  $("#background").attr("class", "back3 huilan-aikf-show");
                  var s=desktop_but_json.btnStyleCartoonInput_bstb;
                  if (s == 0) {
                      $(".back3").css({background: "url(images/cartoon-red-jump.png) 0 0 no-repeat"})
                  } else if (s == 1) {
                      $(".back3").css({background: "url(images/cartoon-blue-jump.png) 0 0 no-repeat"})
                  } else if (s == 2) {
                      $(".back3").css({background: "url(images/cartoon-white-jump.png) 0 0 no-repeat"})
                  } else if (s == 3) {

                  } else if (s == 4) {

                  } else if (s == 5) {

                  }
              }, function () {
                  $("#background").attr("class", "back huilan-aikf-show");
                  var s=desktop_but_json.btnStyleCartoonInput_bstb;
                  if (s == 0) {
                      $(".back").css({background: "url(images/cartoon-red.png) 0 0 no-repeat"})
                  } else if (s == 1) {
                      $(".back").css({background: "url(images/cartoon-blue.png) 0 0 no-repeat"})
                  } else if (s == 2) {
                      $(".back").css({background: "url(images/cartoon-white.png) 0 0 no-repeat"})
                  } else if (s == 3) {

                  } else if (s == 4) {

                  } else if (s == 5) {

                  }
              })
              $(".le_ri_wzh_27").hover(function () {
                  $("#background").attr("class", "back4 huilan-aikf-show");
                  var s=desktop_but_json.btnStyleCartoonInput_bstb;
                  if (s == 0) {
                      $(".back4").css({background: "url(images/cartoon-red-wave.png) 0 0 no-repeat"})
                  } else if (s == 1) {
                      $(".back4").css({background: "url(images/cartoon-blue-wave.png) 0 0 no-repeat"})
                  } else if (s == 2) {
                      $(".back4").css({background: "url(images/cartoon-white-wave.png) 0 0 no-repeat"})
                  } else if (s == 3) {

                  } else if (s == 4) {

                  } else if (s == 5) {

                  }
              }, function () {
                  $("#background").attr("class", "back huilan-aikf-show");
                  var s=desktop_but_json.btnStyleCartoonInput_bstb;
                  if (s == 0) {
                      $(".back").css({background: "url(images/cartoon-red.png) 0 0 no-repeat"})
                  } else if (s == 1) {
                      $(".back").css({background: "url(images/cartoon-blue.png) 0 0 no-repeat"})
                  } else if (s == 2) {
                      $(".back").css({background: "url(images/cartoon-white.png) 0 0 no-repeat"})
                  } else if (s == 3) {

                  } else if (s == 4) {

                  } else if (s == 5) {

                  }
              })
          }
          $(".click_wzh_7_1").on("click",function(){
              $("#wzh_ifra_1").show();
              $("#wzh_ifra_1").animate({top:'-240px'},"slow",'swing');
          });
          $("#wzh_click_1").on("click",function(){

              $("#wzh_ifra_1").animate({top:'200px'},"slow",'swing');
              $("#wzh_ifra_1").hide();
          });
      });



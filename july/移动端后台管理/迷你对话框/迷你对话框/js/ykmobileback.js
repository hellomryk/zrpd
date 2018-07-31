$.post(tenantId+"/api/kapSecretKey/getDataByKey",{key:keyId},function(data){
       	    // 小人和对话框来回切换
       var html='<html><head><style type="text/css">#huilan-aikf-show{width:125px;height:50px;padding:0 12px;line-height:50px;position:absolute;z-index:2;right:10px;bottom:10px;color:#fff;font-size:16px;text-align:center;cursor:default;margin:auto}#huilan-aikf-show img{vertical-align:middle}.aikf-min-dialog-style1 i{display:inline-block;background:url('+temp_url+'/images/shuLine.png)no-repeat 0 0;width:1px;height:22px;vertical-align:middle;margin:0 5px}#background{position:fixed;}#top_wzh_27{width:70px;height:40px;position:absolute;left:20px;top:110px;z-index:2;opacity:0}#center_wzh_27{width:70px;height:60px;position:absolute;left:15px;top:150px;z-index:2;opacity:0}#bottom_wzh_27{width:70px;height:40px;position:absolute;left:15px;top:210px;z-index:2;opacity:0}.le_ri_wzh_27{width:15px;height:160px;position:absolute;top:110px;z-index:2;opacity:0}.back{width:100px;height:270px;cursor:pointer;background:url('+temp_url+'/images/cartoon-red.png)0 0 no-repeat;-webkit-animation:"flymove"1s steps(18)infinite;-moz-animation:"flymove"1s steps(18)infinite;-ms-animation:"flymove"1s steps(18)infinite}@-webkit-keyframes flymove{0%{background-position:0 0}100%{background-position:-1800px 0}}@-moz-keyframes flymove{0%{background-position:0 0}100%{background-position:-1800px 0}}@-ms-keyframes flymove{0%{background-position:0 0}100%{background-position:-1800px 0}}.back1{width:100px;height:270px;cursor:pointer;background:url(/'+temp_url+'/images/cartoon-red-smile.png)0 0 no-repeat;-webkit-animation:"flymove1"1s steps(13)infinite;-moz-animation:"flymove1"1s steps(13)infinite;-ms-animation:"flymove1"1s steps(13)infinite}@-webkit-keyframes flymove1{0%{background-position:0 0}100%{background-position:-1300px 0}}@-moz-keyframes flymove1{0%{background-position:0 0}100%{background-position:-1300px 0}}@-ms-keyframes flymove1{0%{background-position:0 0}100%{background-position:-1300px 0}}.back2{width:100px;height:270px;cursor:pointer;background:url('+temp_url+'/images/cartoon-red-moveHand.png)0 0 no-repeat;-webkit-animation:"flymove2"1s steps(14)infinite;-moz-animation:"flymove2"1s steps(14)infinite;-ms-animation:"flymove2"1s steps(14)infinite}@-webkit-keyframes flymove2{0%{background-position:0 0}100%{background-position:-1400px 0}}@-moz-keyframes flymove2{0%{background-position:0 0}100%{background-position:-1400px 0}}@-ms-keyframes flymove2{0%{background-position:0 0}100%{background-position:-1400px 0}}.back3{width:100px;height:270px;cursor:pointer;background:url(/'+temp_url+'/images/cartoon-red-jump.png)0 0 no-repeat;-webkit-animation:"flymove3"2s steps(29)infinite;-moz-animation:"flymove3"2s steps(29)infinite;-ms-animation:"flymove3"2s steps(29)infinite}@-webkit-keyframes flymove3{0%{background-position:0 0}100%{background-position:-2900px 0}}@-moz-keyframes flymove3{0%{background-position:0 0}100%{background-position:-2900px 0}}@-ms-keyframes flymove3{0%{background-position:0 0}100%{background-position:-2900px 0}}.back4{width:100px;height:270px;cursor:pointer;background:url('+temp_url+'/images/cartoon-red-wave.png)0 0 no-repeat;-webkit-animation:"flymove4"1.5s steps(21)infinite;-moz-animation:"flymove4"1.5s steps(21)infinite;-ms-animation:"flymove4"1.5s steps(21)infinite}@-webkit-keyframes flymove4{0%{background-position:0 0}100%{background-position:-2100px 0}}@-moz-keyframes flymove4{0%{background-position:0 0}100%{background-position:-2100px 0}}@-ms-keyframes flymove4{0%{background-position:0 0}100%{background-position:-2100px 0}}#wzh_29_iframe_jqr{width:320px;height:550px;overflow:hidden;position:absolute;left:0;top:0}.wzh_29_box_jqr{width:100px;height:auto;z-index:9999;position:fixed;right:10px;bottom:10px}#wzh_ifra_1{width:320px;height:550px;overflow:hidden;display:none;position:absolute;left:0;top:200px}#wzh_click_1 {width: 105px;height: 102px;position: absolute;right: 32px;top: 36px;z-index: 999;opacity: 0};.cartoonButton_bstb li{width:45px;height:70px}.redCar_bstb{background:url('+temp_url+'/images/cartoonImageMobile.png)no-repeat 0 0}.blueCar_bstb{background:url('+temp_url+'/images/cartoonImageMobile.png)no-repeat-45px 0}.whiteCar_bstb{background:url(/'+temp_url+'/images/cartoonImageMobile.png)no-repeat-90px 0}.ykmobile{width:65px;height:66px;background:url('+temp_url+'/images/cartoon-mobilered.png)0 0 no-repeat;-webkit-animation:"flymove5"1.5s steps(17)infinite;-moz-animation:"flymove5"1.5s steps(17)infinite;-ms-animation:"flymove5"1.5s steps(17)infinite}@-webkit-keyframes flymove5{0%{background-position:0 0}100%{background-position:-1088px 0}}@-moz-keyframes flymove5{0%{background-position:0 0}100%{background-position:-1088px 0}}@-ms-keyframes flymove5{0%{background-position:0 0}100%{background-position:-1088px 0}}#huilan-aikf-show{width:100%;height:50px;padding:0 12px;line-height:50px;position:fixed;z-index:2;right:0;bottom:0;color:#fff;font-size:16px;text-align:center;cursor:default;margin:auto}div.ykmobilephonenum{width:unset}.ykmobilephonenum div{width:unset}.form-controlykphonenum{width:115px}.windowRight.rightBox{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;padding:36px 118px;width:467px;height:441px;margin:0 auto;background:url('+temp_url+'/images/phoneeffect1.png)}.windowRight.windowArticle{width:100%;height:100%;background:#fff;border-radius:3px;overflow:hidden}.windowRight.windowArticle header{width:100%;padding:5px;font-size:16px;color:white;background:red;border-radius:3px 3px 0 0;position:relative;height:38px}#headerName{display:inline-block;width:110px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-top:3px}.windowRight.windowArticle header.phoneNav{position:absolute;top:6px;right:5px;overflow:hidden}.windowRight.windowArticle.phoneNav img{width:25px;height:25px}img{vertical-align:middle}.windowRight.windowArticle article{width:100%;height:293px;background:#eee;border-bottom:1px solid#c2c2c2}.windowRight.windowArticle article img{width:100%;height:100%}.windowRight.windowArticle footer{width:100%;height:39px;padding:5px 0;background:#f6f6f6;overflow:hidden}.windowRight.windowArticle footer div{float:left;margin-right:5px;height:100%}.windowRight.windowArticle.artificial{width:29px;float:left;margin-left:6px}#windowSendBtn{float:left;margin-left:5px;width:40px;height:100%;text-align:center;line-height:29px;color:white;border-radius:4px}.rightBox{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;padding:36px 118px;width:467px;height:441px;margin:0 auto;background:url(/'+temp_url+'/images/phoneeffect1.png)}#huilan-aikf-show{padding:0}.iframeBox_bstbmobile_cen2{position:unset}</style><title></title></head><body><div class="iframeBox_bstbmobile"><div class="iframeBox_bstbmobile_cen"><div class="iframeBox_bstbmobile_cen2"><div id="background"class="ykmobile-fa"style="display:none;"><div class="ykmobile"></div></div><div class="aikf-min-dialog aikf-min-dialog-style1 huilan-aikf-show ykmobile-fa"id="huilan-aikf-show"style=" background-color: #e5004a;"><span id="aikef-mini-dialog-text">点我咨询</span></div></div></div> <div id="wzh_ifra_1" style="width:100%;height:unset;position:fixed;left:0;top:0;overflow:unset;"><div id="wzh_click_1" style=""></div><iframe id="wzh_29_iframe_jqr" src="迷你版对话框.html" style="height:;width:100%;" frameborder="0"></iframe></div></div></body></html>			';
       $('body').append(html);
       // console.log(1)
       // console.log(data)
		var desktop_but_json = data.move_but_json;//按钮回显数据
		var desktop_win_json = data.move_win_json;//窗体回显数据
		// var  iferame_wzh="http://192.168.1.59:8083/robot/win/mini?key="+"tenantId";
		//迷你对话框链接
		var  iferame_wzh="迷你版对话框.html";
		$("#wzh_29_iframe_jqr").attr("src",iferame_wzh);
		//链接设置回显窗体高度
		var heightIframe = document.getElementById("wzh_29_iframe_jqr");
		var deviceHeight = document.documentElement.clientHeight;
	    heightIframe.style.height = (deviceHeight)+"px";
	    //链接到迷你对话框
		desktop_but_json=JSON.parse(desktop_but_json);
		var en=+ desktop_but_json.sideDistanceInput_bstb;
		var end=+ desktop_but_json.belowDistanceInput_bstb;
		console.log(desktop_but_json);
		if(desktop_but_json.btnTypeInput_bstb==0){//0为按钮，1为窗体
			  $(".wzh_29_box_jqr").css({width:'125px',height:'50px'});
			  $("#background").hide();
			  // 按钮样式
			if (desktop_but_json.btnStyleInput_bstb == 0) {
	            $(".huilan-aikf-show").css({
	                width: "100%",
	                height: "50px",
	                lineHeight: '50px',
	                borderRadius: '0',
	                paddingTop: '0',
	                bottom:'0'
	            });
	            $(".huilan-aikf-show span").css({
	                lineHeight: '50px', display: 'inline-block',
	                width: 'auto'
	            });
	        } else if (desktop_but_json.btnStyleInput_bstb == 1) {
	            $(".huilan-aikf-show").css({
	                width: "51px",
	                height: "107px",
	                lineHeight: 'inherit',
	                borderRadius: '0',
	                paddingTop: '10px',
	                // right:'0'
	            });
	            $(".huilan-aikf-show span").css({
	                lineHeight: 'inherit', display: 'inline-block',
	                width: 'auto'
	            });
	        } else if (desktop_but_json.btnStyleInput_bstb == 2) {
	            $(".huilan-aikf-show").css({
	                width: "86px",
	                height: "86px",
	                lineHeight: '66px',
	                borderRadius: '100%',
	                paddingTop: '10px'
	            });
	        }
		 // 按钮文字
		 console.log(desktop_but_json.btnTitleInput_bstb);
		 console.log($('#aikef-mini-dialog-text'))
		  $('#aikef-mini-dialog-text').text(desktop_but_json.btnTitleInput_bstb) ;
		 // 按钮颜色
		  $('#huilan-aikf-show').css({backgroundColor:desktop_but_json.diy_color});
		  // 按钮位置
		   if(desktop_but_json.btnPositionInput_bstb==0){
	            $("#huilan-aikf-show").css({
	                left: "0px",
	                right: "auto",
	                top: "auto",
	                bottom: "0px"
	            })
		      // 按钮左右偏移
		      $("#huilan-aikf-show").css({left: (en+10) + 'px'});
		      // 按钮上下偏移
		      $("#huilan-aikf-show").css({bottom: (10+end) + 'px'})
		  }else if(desktop_but_json.btnPositionInput_bstb==1){
	            $("#huilan-aikf-show").css({
	                left: "auto",
	                right: "0px",
	                top: "auto",
	                bottom: "0px"
	            })
		      // 按钮左右偏移
		      $("#huilan-aikf-show").css({right: (en+10) + 'px'});
		      // 按钮上下偏移
		      $("#huilan-aikf-show").css({bottom: (10+end) + 'px'})
		  }
		}else if(desktop_but_json.btnTypeInput_bstb==1){
		  $(".wzh_29_box_jqr").css({width:'100px',height:'270px'});
		  $("#huilan-aikf-show").hide();
		   $("#background").show();
		  // 按钮样式
		  if(desktop_but_json.btnStyleCartoonInput_bstb==0){
		     $(".ykmobile").css({background: "url("+temp_url+"/images/cartoon-mobilered.png) 0 0 no-repeat"})

		  }else if(desktop_but_json.btnStyleCartoonInput_bstb==1){
		     $(".ykmobile").css({background: "url("+temp_url+"/images/cartoon-mobileblue.png) 0 0 no-repeat"})

		  }else if(desktop_but_json.btnStyleCartoonInput_bstb==2){
		     $(".ykmobile").css({background: "url("+temp_url+"/images/cartoon-mobilewhite.png) 0 0 no-repeat"})

		  }else if(desktop_but_json.btnStyleCartoonInput_bstb==3){
		      $(".back").css({background: "url("+temp_url+"/images/cartoon-redTxt.png) 0 0 no-repeat"})

		  }else if(desktop_but_json.btnStyleCartoonInput_bstb==4){
		      $(".back").css({background: "url("+temp_url+"/images/cartoon-blueTxt.png) 0 0 no-repeat"})

		  }else if(desktop_but_json.btnStyleCartoonInput_bstb==5){
		      $(".back").css({background: "url("+temp_url+"/images/cartoon-whiteTxt.png) 0 0 no-repeat"})
		  }
		  if(desktop_but_json.btnPositionInput_bstb==0){
	            $(".ykmobile-fa").css({
	                left: "0px",
	                right: "auto",
	                top: "auto",
	                bottom: "0px"
	            })
		      // 按钮左右偏移
		      $(".ykmobile-fa").css({left: ((en+10)*10) + 'px'});
		      // 按钮上下偏移
		      $(".ykmobile-fa").css({bottom: ((10+end)*10) + 'px'});
		  }else if(desktop_but_json.btnPositionInput_bstb==1){
	            $(".ykmobile-fa").css({
	                left: "auto",
	                right: "0px",
	                top: "auto",
	                bottom: "0px"
	            })
		      // 按钮左右偏移
		      $(".ykmobile-fa").css({right: ((en+10)*10) + 'px'});
		      // 按钮上下偏移
		      $(".ykmobile-fa").css({bottom: ((10+end)*10) + 'px'});
		  }else if(desktop_but_json.btnPositionInput_bstb==2){
            $(".ykmobile-fa").css({
                left: "10px",
                right: "auto",
                top: 0,
                bottom: 0
            })
		      // 按钮左右偏移
		      $(".ykmobile-fa").css({left: (en+10) + 'px'});
		      // 按钮上下偏移
		      $(".ykmobile-fa").css({buttom: (end+($(window).height()/2)) + 'px'})
		  }else if(desktop_but_json.btnPositionInput_bstb==3){
	            $(".ykmobile-fa").css({
	                left: "auto",
	                right: "10px",
	                top: 0,
	                bottom: 0
	            })
		      // 按钮左右偏移
		      $(".ykmobile-fa").css({right: (en+10) + 'px'});
		      // 按钮上下偏移
		      $(".ykmobile-fa").css({buttom: (end+($(window).height()/2)) + 'px'})
		  }
		  /*小人儿动画start*/
		  var s=desktop_but_json.btnStyleCartoonInput_bstb;
		  $("#top_wzh_27").hover(function () {
		      $("#background").attr("class", "back1 huilan-aikf-show");
		      var s=desktop_but_json.btnStyleCartoonInput_bstb;
		      if (s == 0) {
		          $(".back1").css({background: "url("+temp_url+"/images/cartoon-red-smile.png) 0 0 no-repeat"})
		      } else if (s == 1) {
		          $(".back1").css({background: "url("+temp_url+"/images/cartoon-blue-smile.png) 0 0 no-repeat"})
		      } else if (s == 2) {
		          $(".back1").css({background: "url("+temp_url+"/images/cartoon-white-smile.png) 0 0 no-repeat"})
		      } else if (s == 3) {

		      } else if (s == 4) {

		      } else if (s == 5) {

		      }

		  }, function () {
		      $("#background").attr("class", "back huilan-aikf-show");
		      var s=desktop_but_json.btnStyleCartoonInput_bstb;
		      if (s == 0) {
		          $(".back").css({background: "url("+temp_url+"/images/cartoon-red.png) 0 0 no-repeat"})
		      } else if (s == 1) {
		          $(".back").css({background: "url("+temp_url+"/images/cartoon-blue.png) 0 0 no-repeat"})
		      } else if (s == 2) {
		          $(".back").css({background: "url("+temp_url+"/images/cartoon-white.png) 0 0 no-repeat"})
		      } else if (s == 3) {

		      } else if (s == 4) {

		      } else if (s == 5) {

		      }
		  })
		  $("#center_wzh_27").hover(function () {
		      $("#background").attr("class", "back2 huilan-aikf-show");
		      var s=desktop_but_json.btnStyleCartoonInput_bstb;
		      if (s == 0) {
		          $(".back2").css({background: "url("+temp_url+"/images/cartoon-red-moveHand.png) 0 0 no-repeat"})
		      } else if (s == 1) {
		          $(".back2").css({background: "url("+temp_url+"/images/cartoon-blue-moveHand.png) 0 0 no-repeat"})
		      } else if (s == 2) {
		          $(".back2").css({background: "url("+temp_url+"/images/cartoon-white-moveHand.png) 0 0 no-repeat"})
		      } else if (s == 3) {

		      } else if (s == 4) {

		      } else if (s == 5) {

		      }
		  }, function () {
		      $("#background").attr("class", "back huilan-aikf-show");
		      var s=desktop_but_json.btnStyleCartoonInput_bstb;
		      if (s == 0) {
		          $(".back").css({background: "url("+temp_url+"/images/cartoon-red.png) 0 0 no-repeat"})
		      } else if (s == 1) {
		          $(".back").css({background: "url("+temp_url+"/images/cartoon-blue.png) 0 0 no-repeat"})
		      } else if (s == 2) {
		          $(".back").css({background: "url("+temp_url+"/images/cartoon-white.png) 0 0 no-repeat"})
		      } else if (s == 3) {

		      } else if (s == 4) {

		      } else if (s == 5) {

		      }
		  })
		  $("#bottom_wzh_27").hover(function () {
		      $("#background").attr("class", "back3 huilan-aikf-show");
		      var s=desktop_but_json.btnStyleCartoonInput_bstb;
		      if (s == 0) {
		          $(".back3").css({background: "url("+temp_url+"/images/cartoon-red-jump.png) 0 0 no-repeat"})
		      } else if (s == 1) {
		          $(".back3").css({background: "url("+temp_url+"/images/cartoon-blue-jump.png) 0 0 no-repeat"})
		      } else if (s == 2) {
		          $(".back3").css({background: "url("+temp_url+"/images/cartoon-white-jump.png) 0 0 no-repeat"})
		      } else if (s == 3) {

		      } else if (s == 4) {

		      } else if (s == 5) {

		      }
		  }, function () {
		      $("#background").attr("class", "back huilan-aikf-show");
		      var s=desktop_but_json.btnStyleCartoonInput_bstb;
		      if (s == 0) {
		          $(".back").css({background: "url("+temp_url+"/images/cartoon-red.png) 0 0 no-repeat"})
		      } else if (s == 1) {
		          $(".back").css({background: "url("+temp_url+"/images/cartoon-blue.png) 0 0 no-repeat"})
		      } else if (s == 2) {
		          $(".back").css({background: "url("+temp_url+"/images/cartoon-white.png) 0 0 no-repeat"})
		      } else if (s == 3) {

		      } else if (s == 4) {

		      } else if (s == 5) {

		      }
		  })
		  $(".le_ri_wzh_27").hover(function () {
		      $("#background").attr("class", "back4 huilan-aikf-show");
		      var s=desktop_but_json.btnStyleCartoonInput_bstb;
		      if (s == 0) {
		          $(".back4").css({background: "url("+temp_url+"/images/cartoon-red-wave.png) 0 0 no-repeat"})
		      } else if (s == 1) {
		          $(".back4").css({background: "url("+temp_url+"/images/cartoon-blue-wave.png) 0 0 no-repeat"})
		      } else if (s == 2) {
		          $(".back4").css({background: "url("+temp_url+"/images/cartoon-white-wave.png) 0 0 no-repeat"})
		      } else if (s == 3) {

		      } else if (s == 4) {

		      } else if (s == 5) {

		      }
		  }, function () {
		      $("#background").attr("class", "back huilan-aikf-show");
		      var s=desktop_but_json.btnStyleCartoonInput_bstb;
		      if (s == 0) {
		          $(".back").css({background: "url("+temp_url+"/images/cartoon-red.png) 0 0 no-repeat"})
		      } else if (s == 1) {
		          $(".back").css({background: "url("+temp_url+"/images/cartoon-blue.png) 0 0 no-repeat"})
		      } else if (s == 2) {
		          $(".back").css({background: "url("+temp_url+"/images/cartoon-white.png) 0 0 no-repeat"})
		      } 
		  })
		} 
	    $("#wzh_click_1").on("click",function() {
			$(".iframeBox_bstbmobile_cen").show();
	    	$("#wzh_ifra_1").hide();
		})
		$(".iframeBox_bstbmobile_cen2").on("click",function() {
			$(".iframeBox_bstbmobile_cen").hide();
	    	$("#wzh_ifra_1").show();
		});
		// 对话框企业名称的变化
		// console.log(desktop_win_json)
		// JSON.parse
		// var desktop_win_json = JSON.parse(desktop_win_json);
		// console.log(desktop_win_json)
		// console.log(desktop_win_json.tenantSiteName)
		// console.log($("#lovekfcompanytitle"))
		// console.log($("#lovekfcompanytitle").context)
		// $("#lovekfcompanytitle").text(desktop_win_json.tenantSiteName)
})
// alert(1)

var dataValue_wzh="";
// 大窗口右侧tab切换
function tab_hlpe_27(th){
    var s=$(".y-talk-box-content-right p").index(th);
    $(".y-talk-box-content-right p").removeClass("active");
    $(".y-talk-box-content-right p").eq(s).addClass("active");
    $(".y-talk-box-content-right p").eq(s).css({borderColor:dataValue_wzh});
    $(".y-talk-box-content-rightol").hide();
    $(".y-talk-box-content-rightol").eq(s).show();
}
//$(function(){
//定义一个新的复制对象
// var clip = new ZeroClipboard(document.getElementById("copyBtnZero"), {
// 	moviePath : IKFTool.ctx + "/resources/ZeroClipboard/ZeroClipboard.swf"
// });
//复制内容到剪贴板成功后的操作
// 	clip.on('complete', function(client, args) {
// 		ZENG.msgbox.show("复制成功", 4, IKFTool.sucTime);
// 	});
//
// 	// 定义一个新的复制对象
// 	var clip1 = new ZeroClipboard(document.getElementById("copyBtnZeroSite"), {
// 		moviePath : IKFTool.ctx + "/resources/ZeroClipboard/ZeroClipboard.swf"
// 	});
// 	// 复制内容到剪贴板成功后的操作
// 	clip1.on('complete', function(client, args) {
// 		ZENG.msgbox.show("复制成功", 4, IKFTool.sucTime);
// 	});
//
// });
//窗口提交数据
$("#tenantSiteName").change(function () {
    $("#bigWindowSendBtn1 span").text($("#tenantSiteName").val());
    $("#smallWindowHeader span").text($("#tenantSiteName").val());
})

$("#tenantSlogan").change(function () {
    $("#bigWindowSendBtn1 font").text($("#tenantSlogan").val());
    $("#smallWindowHeader font").text($("#tenantSlogan").val());
})
// $("#add_desktop").click(function () {
//     var windowTabActive= $(".windowTabActive input").val();
//     var wheel_demo = $("#wheel-demo").val();
//     var tenantSiteName = $("#tenantSiteName").val();
//     var tenantLogoUrl = $("#tenantLogoUrl").val();
//     var tenantSlogan = $("#tenantSlogan").val();
//     var serviceSlogan1 = $("#serviceSlogan1").val();

//     var s = {
//         windowTabActive: windowTabActive,
//         wheel_demo: wheel_demo,
//         tenantSiteName: tenantSiteName,
//         tenantLogoUrl: tenantLogoUrl,
//         tenantSlogan: tenantSlogan,
//         serviceSlogan1: serviceSlogan1
//     };
//     s = JSON.stringify(s);
//     $.post("http://192.168.1.59:8080/api/sapSecretKey/update",
//         {
//             dataId: 1,
//             pUserId: 4,
//             field: "desktopWinJson",
//             json: s
//         },
//         function (data, status) {
//             if (data == 1) {
//                 alert("成功")
//             } else {
//                 alert("错误")
//             }
//         });
// });





/*小人儿动画start*/
$("#top_wzh_27").hover(function () {
    $("#background").attr("class", "back1 huilan-aikf-show");
    var s = $("#btnStyleCartoonInput_bstb").val();
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
    var s = $("#btnStyleCartoonInput_bstb").val();
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
    var s = $("#btnStyleCartoonInput_bstb").val();
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
    var s = $("#btnStyleCartoonInput_bstb").val();
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
    var s = $("#btnStyleCartoonInput_bstb").val();
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
    var s = $("#btnStyleCartoonInput_bstb").val();
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
    var s = $("#btnStyleCartoonInput_bstb").val();
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
    var s = $("#btnStyleCartoonInput_bstb").val();
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
/*小人儿动画end*/

var p_user_id = "4";
$(function () {
    var viewWindow = null;
    var viewButton = null;
    var initData = {
        btnPosition: '1' || 1,//按钮位置 0:左下角1:右下角2:左侧居中3:右侧居中
        btnType: '0' || 1,   //按钮类型  0:文字按钮 ,1：卡通形象, 2:自定义按钮
        btnStyle: '0' || 0,    //按钮样式  如果是文字按钮：0:横,1:竖2:圆 //如果是卡通形象按钮：分别用0-5代表各种状态
        windowColor: '#E5004A',//窗口颜色
        btnTitle: '点我咨询',//按钮上文字
        btnUrl: '',    // 自定义按钮的图片url
        sideDistance: '' || 0,// 侧边距
        belowDistance: '' || 0    // 下边距
    }

    //页面初始化函数
    function initPage(initData) {
        $('.settingItem_bstb li').each(function (index, dom) {
            if ($(dom).attr("data-value") == initData.btnType) {
                $(dom).click();
            }
        });
        $("#diy-color").val(initData.windowColor).change();
        if ($('.txtItem_bstb').hasClass('checked')) {
            $('.txtButton_bstb li').each(function (index, dom) {
                if ($(dom).attr("data-value") == initData.btnStyle) {
                    $(dom).click();
                }
            })
            // $("#btnTitleInput_bstb").val(initData.btnTitle);

        } else if ($('.cartoonItem_bstb').hasClass('checked')) {
            $('.cartoonButton_bstb li').each(function (index, dom) {
                if ($(dom).attr("data-value") == initData.btnStyle) {
                    $(dom).click();
                }
            })

        } else if ($('.diyItem_bstb').hasClass('checked')) {
            if (initData.btnUrl == '') {
                $('#imageDiyButton_image').attr('src', '//aikf.oss-cn-beijing.aliyuncs.com/1478832591994default.png');
            } else {
                $('#imageDiyButton_image').attr('src', initData.btnUrl);
                $('#imageDiyButton_input').val(initData.btnUrl);
            }
        };
        $('.btnPosition_bstb li').each(function (index, dom) {
            if ($(dom).attr("data-value") == initData.btnPosition) {
                $(dom).click();
            }
        })
        $("#sideDistanceInput_bstb").val(initData.sideDistance);
        $("#belowDistanceInput_bstb").val(initData.belowDistance);
    }
    // $('.settingItem_bstb li').click(function () {

    //     var $this = $(this);
    //     if ($this.hasClass('checked')) {
    //         return;
    //     }
    //     $this.siblings().removeClass('checked');
    //     $this.addClass('checked');
    //     $(".content_bstb").children().hide();
    //     if ($this.hasClass('cartoonItem_bstb')) {
    //         $("#huilan-aikf-show").hide();
    //         $("#background").show();
    //         $('.cartoonButton_bstb').show();
    //         $('.btnColor_bstb').hide();
    //     } else if ($this.hasClass('txtItem_bstb')) {
    //         $("#background").hide();
    //         $("#huilan-aikf-show").show();
    //         $('.txtButton_bstb').show();
    //         $('.btnColor_bstb').show();
    //     } else if ($this.hasClass('diyItem_bstb')) {
    //         $('.diyButton_bstb').show();
    //         $('.btnColor_bstb').hide();
    //     }
    //     $('#btnTypeInput_bstb').val($this.attr("data-value")).change();
    // })



//按钮偏移
//left
//     $("#sideDistanceInput_bstb").change(function () {
//         var sid = $(this).val();
//         sid = +sid;
//         sid = sid + 10;
//         if (sid < 0) {
//             alert("不能再往左了！亲")
//         } else if (sid > 1400) {
//             alert("不能再往右了！亲")
//         } else {
//             if ($("#btnPositionInput_bstb").val() == 0 || $("#btnPositionInput_bstb").val() == 2) {
//                 $(".huilan-aikf-show").css({left: sid + 'px'})
//             }
//         }
//     });
// //right
//     $("#sideDistanceInput_bstb").change(function () {
//         var sid = $(this).val();
//         sid = +sid;
//         sid = sid + 10;
//         if (sid < 0) {
//             alert("不能再往右了！亲")
//         } else if (sid > 1400) {
//             alert("不能再往左了！亲")
//         } else {
//             if ($("#btnPositionInput_bstb").val() == 1 || $("#btnPositionInput_bstb").val() == 3) {
//                 $(".huilan-aikf-show").css({right: sid + 'px'})
//             }
//         }
//     });
// //下、上
//     $("#belowDistanceInput_bstb").change(function () {
//         var sid = $(this).val();
//         sid = +sid;
//         sid = sid + 10;
//         if (sid < 0) {
//             alert("不能再往下了！亲")
//         } else if (sid > 540) {
//             alert("不能再往上了！亲")
//         } else {
//             if ($("#btnPositionInput_bstb").val() == 1 || $("#btnPositionInput_bstb").val() == 0) {
//                 $(".huilan-aikf-show").css({bottom: sid + 'px'})
//             }
//         }
//     });

// //  中 、上
//     $("#belowDistanceInput_bstb").change(function () {
//         var sid = $(this).val();
//         sid = +sid;
//         sid = sid + 160;
//         if (sid < 0) {
//             alert("不能再往下了！亲")
//         } else if (sid > 540) {
//             alert("不能再往上了！亲")
//         } else {
//             if ($("#btnPositionInput_bstb").val() == 2 || $("#btnPositionInput_bstb").val() == 3) {
//                 $(".huilan-aikf-show").css({bottom: sid + 'px'})
//             }
//         }
//     });


//按钮位置变化
    // $('.btnPosition_bstb li').click(function () {
    //     if ($(this).hasClass('checked')) {
    //         return;
    //     }
    //     $('.btnPosition_bstb li').removeClass('checked');
    //     $(this).addClass('checked');
    //     if ($(this).attr("data-value") == 0) {
    //         $(".huilan-aikf-show").css({
    //             left: "10px",
    //             right: "auto",
    //             top: "auto",
    //             bottom: "10px"
    //         })
    //     } else if ($(this).attr("data-value") == 1) {
    //         $(".huilan-aikf-show").css({
    //             left: "auto",
    //             right: "10px",
    //             top: "auto",
    //             bottom: "10px"
    //         })
    //     } else if ($(this).attr("data-value") == 2) {
    //         $(".huilan-aikf-show").css({
    //             left: "10px",
    //             right: "auto",
    //             top: 0,
    //             bottom: 0
    //         })
    //     } else if ($(this).attr("data-value") == 3) {
    //         $(".huilan-aikf-show").css({
    //             left: "auto",
    //             right: "10px",
    //             top: 0,
    //             bottom: 0
    //         })
    //     }
    //     $('#btnPositionInput_bstb').val($(this).attr("data-value"));
    //     $('.distance_bstb input').val(0);

    // })



    //颜色选择
    $("#diy-color").change(
        function () {
            var value = $(this).val().toLowerCase();
            $('.btnColor_bstb li').removeClass('checked').each(function (index, dom) {
                if ($(dom).attr("data-value") == value) {
                    $(dom).click();
                }
            })
        });
    $("#diy-color").blur(function () {
        $(this).valid();
    });

    // setTimeout(function(){
    // 	$("#diy-color").minicolors({
    // 		control : "wheel",
    // 		inline : false,
    // 		letterCase : "uppercase",
    // 		position : "bottom left",
    // 		change : function(hex, opacity) {
    // 			if (!hex)
    // 				return;
    // 			if (opacity)
    // 				hex += ', ' + opacity;
    // 			try {
    // 				// console.log(hex);
    // 			} catch (e) {
    // 			}
    // 		},
    // 		theme : "bootstrap"
    // 	});
    // },50);

    // 预览内容显示函数
    // var show_url_content = function() {
    // 	var url = $.trim($("#siteInput_bstb").val())||window.location.host+IKFTool.ctx+'/resources/viewDefault.html';
    // 	var reg = new RegExp('^((https|http|ftp|rtsp|mms)?://)'
    // 			+ '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' // ftp的user@
    // 			+ '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184
    // 			+ '|' // 允许IP和DOMAIN（域名）
    // 			+ '([0-9a-z_!~*\'()-]+.)*' // 域名- www.
    // 			+ '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名
    // 			+ '[a-z]{2,6})' // first level domain- .com or .museum
    // 			+ '(:[0-9]{1,4})?' // 端口- :80
    // 			+ '((/?)|' // a slash isn't required if there is no file name
    // 				+ '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$');
    // 	if (!url || !url.length) {
    // 		ZENG.msgbox.show("输入的网站地址为空", 5, IKFTool.errTime);
    // 	} else if (url.length > 200) {
    // 		ZENG.msgbox.show("url地址最大为200个字符", 5, IKFTool.errTime);
    // 	} else if (!reg.test(url)) {
    // 		ZENG.msgbox.show("url地址有误", 5, IKFTool.errTime);
    // 	} else {
    // 		window.initViewButton_bstb = function(){
    // 			viewWindow = $(".iframeBox_bstb").find('iframe')[0].contentWindow;
    // 			var btnTimer = null;
    // 			btnTimer =setInterval(function(){
    // 				viewButton = viewWindow.document&&viewWindow.document.getElementById('huilan-aikf-show');
    // 				if(viewButton&&viewWindow.aikfStyleSettingFunc){
    // 					clearInterval(btnTimer);
    // 					viewWindow.document.getElementById('huilan-aikf-clickHoder').onclick =null;
    // 					setButtonInView();
    // 				}
    // 			},50);
    // 		}
    // 		var str = '<iframe src="interfaceManagement/toGetIframeHtml.htm?urlStr='
    // 		+ url
    // 		+ '" scrolling="yes" frameborder="0" onload="initViewButton_bstb()"></iframe>';
    // 		$(".iframeBox_bstb").empty().append(str);
    // 	}
    // }
    // $("#siteInput_bstb").keyup(function(event) {
    // 	if (event.keyCode == 13) {
    // 		show_url_content();
    // 	}
    // })
    //
    // $("#preViewButton_bstb").click(function() {
    // 	show_url_content();
    // })
    //
    // IKFTool.imgUpload('imageDiyButton', {
    // 	uploader : "system/webasksetting/editorImageUpload.htm",
    // 	fileObjName : "picdata",
    // 	buttonClass : 'uploadBtn_bstb',
    // 	buttonText:"点击上传",
    // 	width:'100%',
    // 	height : 75,
    // 	buttonCursor:'hand'
    // });
    //


    //表单校验
    // $("#Form_bstb").validate(
    // {
    // 	rules : {
    // 		btnTitle : {
    // 			required : true,
    // 			maxlength : 6
    // 		},
    // 		windowColor:{
    // 			required : true
    // 		},
    // 		sideDistance:{
    // 			min :-2000,
    // 			max :2000
    // 		},
    // 		belowDistance:{
    // 			min :-2000,
    // 			max :2000
    // 		}
    // 	},
    // 	messages : {
    // 		btnTitle : {
    // 			required : "按钮文字不能为空",
    // 			maxlength : "按钮文字最长为6个字符"
    // 		},
    // 		windowColor:{
    // 			required : "请选择颜色"
    // 		},
    // 		sideDistance:{
    // 			min :"请输入-2000~2000的值",
    // 			max :"请输入-2000~2000的值"
    // 		},
    // 		belowDistance:{
    // 			min :"请输入-2000~2000的值",
    // 			max :"请输入-2000~2000的值"
    // 		}
    // 	},
    // 	submitHandler : function(form) {
    // 				// 点击完后禁止点击按钮
    // 				$("#saveButton_bstb").attr("disabled", true);
    // 				$(form).ajaxSubmit(
    // 				{
    // 					dataType : "json",
    // 					success : function(data) {
    // 						$("#saveButton_bstb").attr("disabled",
    // 							false);
    // 						if (data=='success') {
    // 											// 恢复点击按钮
    // 											ZENG.msgbox.show("保存成功", 4,
    // 												IKFTool.sucTime);
    // 										} else {
    // 											ZENG.msgbox.show("保存失败", 5,
    // 												IKFTool.errTime);
    // 										}
    // 									},
    // 									error : function() {
    // 										$("#saveButton_bstb").attr("disabled",
    // 											false);
    // 									}
    // 								});
    // 			}
    // 		});

// $("#Form_bstb input").change(function(){
// 	setButtonInView()
// })
    // $('#btnTitleInput_bstb').keyup(function () {
    //     if ($(this).valid()) {
    //         $(this).change();
    //     }
    // })
    $('.distance_bstb input').keyup(function () {
        if ($(this).valid()) {
            $(this).change();
        }
    })
    $('.distance_bstb input').blur(function () {
        if ($(this).val() == 0) {
            $(this).val(0);
            $(this).change();
        }
    })
    // //预览按钮实时设置
    // function setButtonInView(){
    // 	if(viewButton==null){
    // 		return;
    // 	}
    // 	viewButton.removeAttribute("style");
    // 	viewButton.className = "aikf-min-dialog";
    // 	viewButton.innerHTML ='<img src="'+IKFTool.ctx+'/resources/resourcesOfen/images/individuation-sitting/kefu-icon.png" id="aikef-mini-icon"><i></i><span id="aikef-mini-dialog-text">点我咨询</span>';
    // 	var settingData =null;
    // 	settingData = {
    // 		"btnPosition": $('#btnPositionInput_bstb').val(),
    // 		"btnStyle":  $('.txtItem_bstb').hasClass('checked')?$('#btnStyleInput_bstb').val():$('#btnStyleCartoonInput_bstb').val(),
    // 		"btnTitle": $("#btnTitleInput_bstb").val(),
    // 		"btnType": $('#btnTypeInput_bstb').val(),
    // 		"windowColor":$("#diy-color").val(),
    // 		"btnUrl":$('#imageDiyButton_input').val(),
    // 		"sideDistance":$("#sideDistanceInput_bstb").val(),
    // 		"belowDistance":$("#belowDistanceInput_bstb").val()
    // 	}
    // 	viewWindow.aikfStyleSettingFunc(settingData);
    // }


    // initPage(initData);//初始化页面
    // show_url_content();//默认页面显示按钮
})

//初始化函数
var initFn = {
    //预览窗口颜色
    initColor: function (initColors) {
        $("#smallWindowHeader").css({
            "background": initColors
        });
        $("#askWindowBig>header").css({
            "background": initColors
        });
        $("#windowSendBtn").css({
            "background-color": initColors,
            "border-color": initColors
        });
        $("#windowTransBtn").css({
            "color": initColors,
            "border-color": initColors
        });
        $("#bigWindowSendBtn").css({
            "background-color": initColors,
            "border-color": initColors
        });
        $("#bigWindowSendBtn1").css({
            "background-color": initColors,
            "border-color": initColors
        });
        $("#bigWindowTransBtn").css({
            "color": initColors,
            "border-color": initColors
        });
        $(".askWindowBigBody .bigBodyRight h2").css({
            "color": initColors
        });
        $("#tabUl2>li").css({
            "border-color": initColors
        });
        $(".bigBodyRight .tabUl2 li").css({
            "color": initColors
        });
    },
    //企业名称和标语
    initDataName: function (name, title) {
        if (name == "") {
            $("#bigWindowName").html("爱客服");
            $("#smallWindowName").html("爱客服");
        } else {
            name = IKFTool.delScript(name);
            $("#bigWindowName").html(name);
            $("#smallWindowName").html(name);
        }
        ;
        if (title == "") {
            $("#bigWindowSlogan").html("爱客服24小时竭诚为您服务!");
            $("#smallWindowSlogan").html("爱客服24小时竭诚为您服务!");
        } else {
            name = IKFTool.delScript(title);
            $("#bigWindowSlogan").html(title);
            $("#smallWindowSlogan").html(title);
        }
        ;
    },
    //企业LOGO
    initLogo: function (logos) {
        if (logos == "") {
            $("#askWindowBigLogo").attr("src", "images/logo-aikf.png");
            $("#smallWindowLogo>img").attr("src", "images/logo-aikf.png");
        } else {
            $("#askWindowBigLogo").attr("src", logos);
            $("#smallWindowLogo>img").attr("src", logos);
        }
    },
    //右侧功能栏是否开启
    initRight: function (one, two, three) {
        //one常见问题，two公告，three导航
        if (one && two && three) {
            rightShow();
        } else if ((!one) && (!two) && (!three)) {
            //公告，常见问题，导航全关闭状态
            $("#rightImg").attr("src", "/aikfadmin/resources/resourcesOfen/images/individuation-sitting/bigWimdowImg4.png");
            imgTab(false);
            $("#bigBodyLeft").css({
                "width": "100%"
            });
            $("#bigBodyRight").hide();
        } else if (!(one) && !(two) && three) {
            //导航开启,公告栏和常见问题关闭
            $(".topArticle").hide();
            $(".daohangArticle").css({
                "height": "600px"
            });
            rightShow();
            $("#daohangHide").show();
        } else if (one && !(two) && !(three)) {
            //常见问题开启，公告导航关闭
            $(".topArticle").show();
            $("#daohangHide").hide();
            $(".tabUl2Article").css({"height": "600px"});
            $("#tabUl2>li").eq(0).hide();
            $("#tabUl2>li").eq(1).show().css({"width": "100%"});
            $("#tabUlLiArticleOne").hide();
            $("#tabUlLiArticleTwo").show();
            rightShow();
        } else if (!(one) && two && !(three)) {
            //公告开启，导航和问题关闭
            $(".topArticle").show();
            $("#daohangHide").hide();
            $(".tabUl2Article").css({"height": "600px"});
            $("#tabUl2>li").eq(0).show().css({"width": "100%"});
            $("#tabUl2>li").eq(1).hide();
            $("#tabUlLiArticleOne").show();
            $("#tabUlLiArticleTwo").hide();
            rightShow();
        } else if (one && two && !(three)) {
            //只有导航关闭
            rightShow();
            $("#daohangHide").hide();
            $("#tabUl2>li").css({"width": "50%"});
            $("#tabUl2>li").eq(0).show();
            $("#tabUl2>li").eq(1).show();
            $(".tabUl2Article").css({"height": "600px"});
        } else if (!(one) && two && three) {
            //只有常见问题关闭
            rightShow();
            $("#daohangHide").show();
            $(".topArticle").show();
            $(".tabUl2Article").css({"height": "284px"});
            $(".daohangArticle").css({
                "height": "264px"
            });
            $("#tabUl2>li").eq(0).show().css({"width": "100%"});
            $("#tabUl2>li").eq(1).hide();
            $("#tabUlLiArticleOne").show();
            $("#tabUlLiArticleTwo").hide();
        } else if (one && !(two) && three) {
            //只有公告栏关闭
            rightShow();
            $("#daohangHide").show();
            $(".topArticle").show();
            $(".tabUl2Article").css({"height": "284px"});
            $(".daohangArticle").css({
                "height": "264px"
            });
            $("#tabUl2>li").eq(0).hide();
            $("#tabUl2>li").eq(1).show().css({"width": "100%"});
            $("#tabUlLiArticleOne").hide();
            $("#tabUlLiArticleTwo").show();
        }
        ;
        if (one) {
            $("#faqSetting").show();
        } else {
            $("#faqSetting").hide();
        }
        ;
        if (two) {
            $("#noticeSetting").show();
        } else {
            $("#noticeSetting").hide();
        }
        ;
        if (three) {
            $("#navSetting").show();
        } else {
            $("#navSetting").hide();
        }
        ;
    },
    //调教、评价、电话客服功能
    initFunction: function (one, two, three) {
        //one是用户评价，two是调教功能，three是电话客服
        if (one) {
            $(".command-evaluation").show();
        } else {
            $(".command-evaluation").hide();
        }
        ;
        if (two) {
            $("#command-tuning").show();
        } else {
            $("#command-tuning").hide();
        }
        ;
        if (three) {
            $(".command-phone").show();
        } else {
            $(".command-phone").hide();
        }
        ;
    }
};

function mini_25(th) {
   console.log(th)
    $("#windowTabUl li").removeClass("windowTabActive");
    $(th).parent().addClass("windowTabActive");
    //0为迷你窗口,1为标准窗口
    if ($(th).val() == 0) {
        $("#show_site").show();
        $("#askWindowBig").hide();
        $("#leftTabArticleBig").hide();
        $("#serviceSloganDiv").hide();
        $('#minilogoUrl').hide();
        $("#minilogoUrl").hide();
    } else if ($(th).val() == 1) {
        $("#show_site").hide();
        $("#askWindowBig").show();
        $("#leftTabArticleBig").show();
        $("#serviceSloganDiv").show();
        $('#minilogoUrl').show();
        $("#minilogoUrl").show();
    }
    ;

}

//窗体根据颜色在色块上打对勾
$(".windowColor>ul>li").on("click", function () {
    var dataValue = $(this).attr("data-value");
    initFn.initColor(dataValue);
    dataValue_wzh=dataValue;
    $(this).addClass("checked").siblings().removeClass("checked");
    $(".minicolors-swatch-color").css({background: dataValue});
    $("#wheel-demo").val(dataValue);
});


//颜色选择
$("#wheel-demo").change(
    function () {

        var value_wzh = $(this).val().toLowerCase();
        initFn.initColor(value_wzh);
        smallWindowReal.askWindowColor(value_wzh);
        $('.windowColor li').removeClass('checked').each(function (index, dom) {
            if ($(dom).attr("data-value") == value_wzh) {
                $(dom).click();
            }
        })
    });

// $(".windowColor>ul>li").each(function(index,ele){
// 	var dataValue=$(this).attr("data-value");
// 	switch(index){
// 	case 0:if(dataValue==initColorSmall){
// 		$('.windowColor>ul>li').eq(0).addClass("checked");
// 	};
// 	break;
// 	case 1:if(dataValue==initColorSmall){
// 		$('.windowColor>ul>li').eq(1).addClass("checked");
// 	};
// 	break;
// 	case 2:if(dataValue==initColorSmall){
// 		$('.windowColor>ul>li').eq(2).addClass("checked");
// 	};
// 	break;
// 	case 3:if(dataValue==initColorSmall){
// 		$('.windowColor>ul>li').eq(3).addClass("checked");
// 	};
// 	break;
// 	case 4:if(dataValue==initColorSmall){
// 		$('.windowColor>ul>li').eq(4).addClass("checked");
// 	};
// 	break;
// 	case 5:if(dataValue==initColorSmall){
// 		$('.windowColor>ul>li').eq(5).addClass("checked");
// 	};
// 	break;
// 	}
// });
//上传图片划入划出效果
$(".logoFile").hover(function () {
    $(".companyLogo>.logoFile>.logoTitle").css({
        "font-size": "14px"
    });
}, function () {
    $(".companyLogo>.logoFile>.logoTitle").css({
        "font-size": "12px"
    });
});


//小屏幕适配
if ($(window).width() <= 1366) {
    $("#askWindowBig").css({
        "width": "718px",
        "height": "553px"
    });
    $("#bigWindowLogo,.headRight").css({
        "margin-top": "0px"
    });
    $("#askWindowBig .rightImg").css({
        "margin-top": "10px"
    });
    $(".daohangArticle").css({
        "padding": "0px"
    });
    $(".daohangArticle li").css({
        "height": "27.27%",
        "padding-top": "0px"
    });
    $(".daohangArticle li img").css({
        "height": "76.4%"
    });
    $(".bigBodyFoot").css({
        "padding-top": "80px"
    });
    $(".bigBodyRight .tabUl2Article").css({
        "height": "240px"
    });
    $("#askWindowSmall").css({
        "bottom": "110px"
    });
}
;

//判断公告栏是否有内容
var noticeLength = $("#tabUlLiArticleOne").children().length;
if (noticeLength == 0) {
    var nullDOM = '<p style="width:100%;text-align:center;font-size:24px;color:#a2a2a2;line-height:240px;">暂无公告</p>';
    $("#tabUlLiArticleOne").append(nullDOM);
}
;
//右侧预览悬浮滚动
// $(window).scroll(function () {
//     var scrollTop = $(document).scrollTop();
//     if (scrollTop >= 194) {
//         $("#askWindowRight").css({
//             "width": "calc(100% - 347px)",
//             "position": "fixed",
//             "top": "53px",
//             "left": "301px",
//             "z-index": "9"
//         })
//     } else {
//         $("#askWindowRight").css({
//             "position": "static",
//             "width": "calc(100% - 273px)"
//         })
//     }
//     ;
// });
//初始化数据
var initData = {
    colors: $("input[name=windowColor]").val(),//窗口颜色
    names: $("input[name=tenantSiteName]").val(),//企业名称
    titles: $("input[name=tenantSlogan]").val(),//企业标语
    serviceSlogan: $("input[name=serviceSlogan]").val(),//服务标语
    logoImg: $("input[name=tenantSiteLogo]").val(),//企业LOGO
    qusFlag: $("input[name=faqUseStatus]").is(":checked"),//常见问题是否开启
    bulletinFlag: $("input[name=bulletinSettingStatus]").is(":checked"),//公告是否开启
    navFlag: $("input[name=navUseStatus]").is(":checked"),//快捷导航是否开启
    userEvaluate: $("input[name=serviceEvaluateUseStatus]").is(":checked"),//标准窗口用户评价是否开启
    teachStatus: $("input[name=teachUseStatus]").is(":checked"),//调教功能是否开启
    phoneUser: $("input[name=voiceStatus]").is(":checked")//电话客服是否开启
};
var initColorSmall = initData.colors.toLowerCase();//当期颜色色值转换为小写字母


/*	initFn.initColor(initData.colors);//颜色初始化
initFn.initDataName(IKFTool.delScript(initData.names),IKFTool.delScript(initData.titles));//企业名称和标语初始化
initFn.initLogo(initData.logoImg);//企业LOGO初始化
initFn.initRight(initData.qusFlag,initData.bulletinFlag,initData.navFlag);
initFn.initFunction(initData.userEvaluate,initData.teachStatus,initData.phoneUser);*/
//窗口弹出方式初始化
// $("input[name=windowAppearWay]").each(function(){
// 	if($(this).is(":checked")){
// 		$("#windowTabUl>li").removeClass("windowTabActive");
// 		$(this).parent("li").addClass("windowTabActive");
// 		//0为迷你窗口,1为标准窗口
// 		if($(this).val()==0){
// 			$("#show_site").show();
// 			$("#askWindowBig").hide();
// 			$("#leftTabArticleBig").hide();
// 			$("#serviceSloganDiv").hide();
// 			$('#minilogoUrl').hide();
// 			$("#minilogoUrl").hide();
// 		}else if($(this).val()==1){
// 			$("#show_site").hide();
// 			$("#askWindowBig").show();
// 			$("#leftTabArticleBig").show();
// 			$("#serviceSloganDiv").show();
// 			$('#minilogoUrl').show();
// 			$("#minilogoUrl").show();
// 		};
// 	}
// });


// 显示预览
$("#show_site_btn").click(function () {
    $("#show_site").toggle();
});
// 预览内容显示函数
// var show_url_content = function() {
// 	var url = $.trim($("#url_id").val());
// 	var reg = new RegExp('^((https|http|ftp|rtsp|mms)?://)'
// 			+ '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' // ftp的user@
// 			+ '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184
// 			+ '|' // 允许IP和DOMAIN（域名）
// 			+ '([0-9a-z_!~*\'()-]+.)*' // 域名- www.
// 			+ '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名
// 			+ '[a-z]{2,6})' // first level domain- .com or .museum
// 			+ '(:[0-9]{1,4})?' // 端口- :80
// 			+ '((/?)|' // a slash isn't required if there is no file name
// 				+ '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$');
// 	if (!url || !url.length) {
// 		ZENG.msgbox.show("输入的网站地址为空", 5, IKFTool.errTime);
// 	} else if (url.length > 200) {
// 		ZENG.msgbox.show("url地址最大为200个字符", 5, IKFTool.errTime);
// 	} else if (!reg.test(url)) {
// 		ZENG.msgbox.show("url地址有误", 5, IKFTool.errTime);
// 	} else {
// //		var str = '<Iframe src="interfaceManagement/toGetIframeHtml.htm?urlStr='
// //				+ url
// //				+ '" width="100%" height="600px" scrolling="yes" frameborder="0" ></iframe>   ';
// var str='<iframe src="http://'+url+'"width="100%" height="600px" scrolling="yes" frameborder="0" ></iframe>';
// $("#iframe_div_id").empty().append(str);
// }
// };
$("#url_id").keyup(function (event) {
    if (event.keyCode == 13) {
        show_url_content();
    }
})
$("#show_url_content").click(function () {
//	$("#addOrUpdateform").submit();
    show_url_content();
})
$("#reset_url_content").click(function () {
    var url = $("#url_id").val();
    $("#iframe_div_id").empty();
    // 清空对应的url地址
    $("#url_id").val("");
});
//窗口出现样式
$("input[name=windowAppearWay]").on("click", function () {
    switch ($(this).val()) {
        case "0":
            $("#newWinDiv").hide();
            $("#serviceSloganDiv").hide();
            $('#minilogoUrl').hide();
            break;
        case "1":
            $("#newWinDiv").show();
            $("#serviceSloganDiv").show();
            $('#minilogoUrl').show();
            break;
        default:
            break;
    }
});

//常见问题页面
// $("#faqSetting").on("click", function() {
// 	IKFTool.creatModal({
// 		modalEl : $('#modal-remote'),
// 		url : "system/webasksetting/toFAQSetting.htm"
// 	});
// });

/*
* 导航页面
*/
// $("#navSetting").on("click", function() {
// 	IKFTool.creatModal({
// 		modalEl : $("#remoteModal"),
// 		url : "system/webasksetting/toNavSetting.htm"
// 	});
// });

//公告页面
$("#noticeSetting").on('click', function () {
    IKFTool.creatModal({
        modalEl: $("#remoteModal"),
        url: "system/bulletinsetting/toBulletinSetting.htm"
    });
});
//头像LOGO上传
// IKFTool.imgUpload('imageMaterialAddfile', {
// 	uploader : "system/webasksetting/editorImageUpload.htm",
// 	fileObjName : "picdata",
// 	onUploadSuccess : function(file, data, response) {
// 		console.log("返回的数据是："+data);
// 		if(data){
// 			var resp = $.parseJSON(data);
//             $('#'+file.id).parent('.uploadify-queue').hide();//隐藏进度框
//             $("#imageMaterialAddfile"+'_fileName').val(resp.fileName);
//             //$('#'+uploadInput+'_image').attr('src',IKFTool.ctx+(resp.path||resp.relaPath));
//             $('#imageMaterialAddfile'+'_image').attr('src',resp.url);
//             //将图片路径传给对象属性
//             $('#imageMaterialAddfile'+'_input').val(resp.url);
//             $("#headImgUrl").val(resp.url);
//             //控制对应图片下的选中按钮显示
//             $("span[id^='defalut']>i").hide();
//             $("span[id='defalut4Span']>i").show();
//
//             $('#imageMaterialAddfile'+'_imagePath').val(resp.path);
//             $('#imageMaterialAddfile'+'_image_ids').val(resp.ids);
//             smallWindowReal.askWindowLogo(resp.url);//实时更新右侧预览样式LOGO
//         }else{
//            /*  if(confg.special){
//                 $('#imageMaterialAddfile'+'_fileName2').html('不支持此种类型的文件');
//             } */
//         }
//     }
// });


// setTimeout(function(){
// 	$("#wheel-demo").minicolors({
// 		control : "wheel",
// 		inline : false,
// 		letterCase : "uppercase",
// 		position : "bottom left",
// 		change : function(hex, opacity) {
// 			if (!hex)
// 				return;
// 			if (opacity)
// 				hex += ', ' + opacity;
// 			try {
// 				// console.log(hex);
// 			} catch (e) {
// 			}
// 		},
// 		theme : "bootstrap"
// 	});
// },0);
//窗口颜色点击
$('.windowColor li').click(function () {
    var thisColor = $(this).attr("data-value");
    smallWindowReal.askWindowColor(thisColor);
    if ($(this).hasClass('checked')) {
        return;
    }
    $('.windowColor li').removeClass('checked');
    $(this).addClass('checked');
    $("#wheel-demo").val($(this).attr("data-value").toUpperCase()).keyup();
});
//右侧公告常见问题tab切换
$("#tabUl2>li").each(function (index) {
    $(this).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        switch (index) {
            case 0:
                $("#tabUlLiArticleOne").show();
                $("#tabUlLiArticleTwo").hide();
                break;
            case 1:
                $("#tabUlLiArticleOne").hide();
                $("#tabUlLiArticleTwo").show();
                break;
        }
        ;
    });
});

//右侧全显示
function rightShow() {
    $("#rightImg").attr("src", "images/bigWimdowImg2.png");
    imgTab(true);
    $("#bigBodyLeft").css({
        "width": "67.8%"
    });
    $("#bigBodyRight").show();
}

//开启关闭功能按钮
$("input:checkbox").on(
    "click",
    function () {
        var faqFlags = $("input[name=faqUseStatus]").is(":checked");//常见问题是否点击
        var navFlags = $("input[name=navUseStatus]").is(":checked");//导航是否点击
        var bulletinFlags = $("input[name=bulletinSettingStatus]").is(":checked");//公告是否点击
        switch ($(this).attr("name")) {
            case "faqUseStatus":
                if ($(this).is(":checked")) {
                    $("#faqSetting").show();
                } else {
                    $("#faqSetting").hide();
                }
                ;
                break;
            case "navUseStatus":
                if ($(this).is(":checked")) {
                    $("#navSetting").show();
                } else {
                    $("#navSetting").hide();

                }
                ;
                break;
            case "serviceEvaluateUseStatus":
                if ($(this).is(":checked")) {
                    $("input[name='serviceOffUseStatus']").removeAttr(
                        "disabled").parent().removeClass("state-disabled");
                    $(".command-evaluation").show();
                } else {
                    $("input[name='serviceOffUseStatus']").attr("disabled",
                        "disabled").attr("checked", false).parent()
                        .addClass("state-disabled");
                    $(".command-evaluation").hide();
                }
                break;
            case "teachUseStatus":
                if ($(this).is(":checked")) {
                    $("#command-tuning").show();
                } else {
                    $("#command-tuning").hide();
                }
                ;
                break;
            //公告设置
            case "bulletinSettingStatus":
                if ($(this).is(":checked")) {
                    $("#noticeSetting").show();
                } else {
                    $("#noticeSetting").hide();
                }
                ;
                break;
            //电话客服开关
            case "voiceStatus":
                if ($(this).is(":checked")) {
                    $(".command-phone").show();
                } else {
                    $(".command-phone").hide();
                }
                ;
                break;
            default:
                break;
        }
        ;
        //判断右侧功能面板是否显示
        if (faqFlags && bulletinFlags && navFlags) {
            //全显示
            rightShow();
            $(".topArticle").show();
            $("#daohangHide").show();
            $(".daohangArticle").css({
                "height": "264px"
            });
            $(".tabUl2Article").css({"height": "284px"});
            $("#tabUl2>li").css({"width": "50%"});
            $("#tabUl2>li").eq(0).show();
            $("#tabUl2>li").eq(1).show();
        } else if ((!faqFlags) && (!bulletinFlags) && (!navFlags)) {
            //全关闭
            imgTab(false);
            $("#bigBodyLeft").css({
                "width": "100%"
            });
            $("#bigBodyRight").hide();
            $("#rightImg").attr("src", "images/bigWimdowImg4.png");
        } else if (!(faqFlags) && !(bulletinFlags) && navFlags) {
            //导航开启,公告栏和常见问题关闭
            $(".topArticle").hide();
            $(".daohangArticle").css({
                "height": "600px"
            });
            rightShow();
            $("#daohangHide").show();
        } else if (faqFlags && !(bulletinFlags) && !(navFlags)) {
            //常见问题开启，公告导航关闭
            $(".topArticle").show();
            $("#daohangHide").hide();
            $(".tabUl2Article").css({"height": "600px"});
            $("#tabUl2>li").eq(0).hide();
            $("#tabUl2>li").eq(1).show().css({"width": "100%"});
            $("#tabUlLiArticleOne").hide();
            $("#tabUlLiArticleTwo").show();
            rightShow();
        } else if (!(faqFlags) && bulletinFlags && !(navFlags)) {
            //公告开启，导航和问题关闭
            $(".topArticle").show();
            $("#daohangHide").hide();
            $(".tabUl2Article").css({"height": "600px"});
            $("#tabUl2>li").eq(0).show().css({"width": "100%"});
            $("#tabUl2>li").eq(1).hide();
            $("#tabUlLiArticleOne").show();
            $("#tabUlLiArticleTwo").hide();
            rightShow();
        } else if (faqFlags && bulletinFlags && !(navFlags)) {
            //只有导航关闭
            rightShow();
            $("#daohangHide").hide();
            $("#tabUl2>li").css({"width": "50%"});
            $("#tabUl2>li").eq(0).show();
            $("#tabUl2>li").eq(1).show();
            $(".tabUl2Article").css({"height": "600px"});
        } else if (!(faqFlags) && bulletinFlags && navFlags) {
            //只有常见问题关闭
            rightShow();
            $("#daohangHide").show();
            $(".topArticle").show();
            $(".tabUl2Article").css({"height": "284px"});
            $(".daohangArticle").css({
                "height": "264px"
            });
            $("#tabUl2>li").eq(0).show().css({"width": "100%"});
            $("#tabUl2>li").eq(1).hide();
            $("#tabUlLiArticleOne").show();
            $("#tabUlLiArticleTwo").hide();
        } else if (faqFlags && !(bulletinFlags) && navFlags) {
            //只有公告栏关闭
            rightShow();
            $("#daohangHide").show();
            $(".topArticle").show();
            $(".tabUl2Article").css({"height": "284px"});
            $(".daohangArticle").css({
                "height": "264px"
            });
            $("#tabUl2>li").eq(0).hide();
            $("#tabUl2>li").eq(1).show().css({"width": "100%"});
            $("#tabUlLiArticleOne").hide();
            $("#tabUlLiArticleTwo").show();
        }
        ;
        //else{
        //$("#rightImg").attr("src","/aikfadmin/resources/resourcesOfen/images/individuation-sitting/bigWimdowImg2.png");
        //imgTab(true);
        //$("#bigBodyLeft").css({
        //	"width":"67.8%"
        //});
        //$("#bigBodyRight").show();
        //};
    });

//大窗口对话图片切换
function imgTab(flags) {
    if (flags) {
        $("#bigBodyLeft>.bigBodyLeftImg>img").attr("src", "images/smallImgOne.png");
    } else {
        $("#bigBodyLeft>.bigBodyLeftImg>img").attr("src", "images/bigImg_exp.png");
    }
}

/*咨询窗口左侧面板切换*/
var leftWindowEle = {
    tabBtn: $("#windowTabUl li"),//切换按钮
    tabArticleOne: $("#leftTabArticleBig")[0],//切换内容1
    askWindowBig: $("#askWindowBig"),//右侧预览大窗口模式
    show_site: $("#show_site"),//右侧预览小窗口模式
    askWindowSmall: $("#askWindowSmall"),//小窗口
    smallWindowLogo: $("#smallWindowLogo>img"),//LOGO
    EnterpriseName: $("input[name=tenantSiteName]"),//企业名称
    ServiceSlogan: $("input[name=tenantSlogan]"),//服务标语
    tenantLogoUrl: $("input[name=tenantLogoUrl]")//跳转链接

}
// $(leftWindowEle.EnterpriseName).on("keyup", function () {
//     var thisVAL = $(this).val();
//     if (thisVAL == "") {
//         thisVAL = "爱客服";
//     }
//     ;
//     if ($(this).val().length > 20) {
//         $("#tenantSiteNameSpan").show();
//     } else {
//         $("#tenantSiteNameSpan").hide();
//     }
//     ;
//     smallWindowReal.askWindowName(IKFTool.delScript(thisVAL));
// });
$(leftWindowEle.ServiceSlogan).on("keyup", function () {
    var thisVAL = $(this).val();
    if (thisVAL == "") {
        thisVAL = "爱客服24小时竭诚为您服务!";
    }
    ;
    if ($(this).val().length > 50) {
        $("#tenantSloganSpan").show();
    } else {
        $("#tenantSloganSpan").hide();
    }
    smallWindowReal.askWindowSlogan(IKFTool.delScript(thisVAL));
});
$(leftWindowEle.tenantLogoUrl).on("keyup", function () {
    if ($(this).val().length > 50) {
        $("#tenantLogoUrlSpan").show();
    } else {
        $("#tenantLogoUrlSpan").hide();
    }
});
$(leftWindowEle.tabBtn).each(function (index) {
    $(this).on("click", function () {
        $(this).addClass('windowTabActive').siblings().removeClass('windowTabActive');
        switch (index) {
            //大小窗口切换，0为小窗口，1为大窗口
            case 0:
                $(leftWindowEle.tabArticleOne).hide();
                $(leftWindowEle.askWindowBig).hide();
                $(leftWindowEle.show_site).fadeIn("500");
                break;
            case 1:
                $(leftWindowEle.tabArticleOne).show();
                $(leftWindowEle.show_site).hide();
                $(leftWindowEle.askWindowBig).fadeIn("500");
                break;
        }
        ;
    });
});
//咨询窗口实时内容(迷你窗口)
var smallWindowReal = {
    //颜色
    askWindowColor: function (askColor) {
        $("#smallWindowHeader").css({
            "background": askColor
        });
        $("#askWindowBig>header").css({
            "background": askColor
        });
        $("#windowSendBtn").css({
            "background-color": askColor,
            "border-color": askColor
        });
        $("#windowTransBtn").css({
            "color": askColor,
            "border-color": askColor
        });
        $("#bigWindowSendBtn").css({
            "background-color": askColor,
            "border-color": askColor
        });
        $("#bigWindowTransBtn").css({
            "color": askColor,
            "border-color": askColor
        });
        $("#tabUl2 .active").css({
            "border-color": askColor
        });
        $(".bigBodyRight .tabUl2 li").css({
            "color": askColor
        });
        $(".askWindowBigBody .bigBodyRight h2").css({
            "color": askColor
        });
        $("#tabUl2>li").css({
            "border-color": askColor
        });
    },
    //头像
    askWindowLogo: function (windowLogo) {
        $(leftWindowEle.smallWindowLogo).attr("src", windowLogo);
        $("#askWindowBigLogo").attr("src", windowLogo);
    },
    //企业名称
    askWindowName: function (name) {
        $("#smallWindowName").html(name);
        $("#bigWindowName").html(name);
    },
    //服务标语
    askWindowSlogan: function (slogan) {
        $("#smallWindowSlogan").html(slogan);
        $("#bigWindowSlogan").html(slogan);
    }
};
//提交的数据
// $("#addOrUpdateform").validate(
// {
// 	rules : {
// 		btnTitle : {
// 			required : true,
// 			maxlength : 4
// 		},
// 		tenantSiteName : {
// 			maxlength : 100
// 		},
// 		tenantLogoUrl : {
// 			maxlength : 150
// 		},
// 		tenantSlogan : {
// 			maxlength : 200
// 		}
// 	},
// 	messages : {
// 		btnTitle : {
// 			required : "按钮文字不能为空",
// 			maxlength : "按钮文字最长为4个字符"
// 		},
// 		tenantSiteName : {
// 			maxlength : "单位名称最大为100个字符"
// 		},
// 		tenantLogoUrl : {
// 			maxlength : "Logo地址最大为150个字符"
// 		},
// 		tenantSlogan : {
// 			maxlength : "服务标语最大为200个字符",
// 		}
// 	},
// 	submitHandler : function(form) {
// 				// 点击完后禁止点击按钮
// 				$("#add_desktop").attr({
// 					disabled : "disabled"
// 				});
// 				var pattern = /\S+/;
// 				var color = $("#wheel-demo").val();
// 				if (!pattern.test(color)) {
// 					ZENG.msgbox.show("请选择颜色", 5, IKFTool.errTime);
// 					return;
// 				}
// 				$("#add_desktop").attr("disabled", true);
// 				$(form)
// 				.ajaxSubmit(
// 				{
// 					dataType : "json",
// 					success : function(data) {
// 						$("#add_desktop").attr("disabled",
// 							false);
// 						if (data.success) {
// 											// 恢复点击按钮
// 											$("#add_desktop").removeAttr(
// 												"disabled");
// 											currentBtnType = data.btnType;
// 											ZENG.msgbox.show("保存成功", 4,
// 												IKFTool.sucTime);
// 											$("input[name=entId]").val(
// 												data.entId == "" ? ""
// 												: data.entId);
// 											$("input[name=webId]").val(
// 												data.webId == "" ? ""
// 												: data.webId);
// 										} else {
// 											ZENG.msgbox.show("保存失败", 5,
// 												IKFTool.errTime);
// 										}
// 									},
// 									error : function() {
// 										$("#add_desktop").attr("disabled",
// 											false);
// 									}
// 								});
// 			}
// 		});
/* 电话客服按钮 */
// $("input[name=voiceStatus]").on(
// 	"click",
// 	function() {
// 		$this = $(this);
// 		$.ajax({
// 			async : true,
// 			cache : false,
// 			type : "post",
// 			url : "system/webasksetting/updateVoiceStatus.htm",
// 			data : {
// 				id : $("input[name=webId]").val(),
// 				voiceStatus : $this.is(":checked") ? "1" : "0"
// 			},
// 			dataType : "json",
// 			error : function() {
// 				$this.is(":checked") ? $this.prop("checked", false) : $this
// 				.prop("checked", true);
// 			},
// 			success : function(result) {
// 				if (!result.success) {
// 					$this.is(":checked") ? $this.prop("checked", false)
// 					: $this.prop("checked", true);
// 				}
// 			}
// 		});
// 	});
//隐藏用户评价的checkbox
$('#windowTabUl  li:nth-child(1)').click(function () {
    $(".removeLabel").hide();
});
$('#windowTabUl  li:nth-child(2)').click(function () {
    $(".removeLabel").show();
});
function tab_25(th) {
    $('.deskInsertNav li').removeClass('active');
    $(th).addClass('active');
    var s = $('.deskInsertNav li').index(th);
    $("#deskInsertContent .li_25").css({opacity: 0, display: "none"})
    $("#deskInsertContent .li_25").eq(s).css({display: "block"})
    $("#deskInsertContent .li_25").eq(s).animate({opacity: 1});
};
// var url =$(this).attr("data-url");
//    $.ajax({
//  		   cache:false,
//  		   type:"get",
//  		   async:false,
//  		   url:url,
//  		   dataType:"html",
//  		   beforeSend:function(){
//  			  $("#deskInsertContent").css({
//                 opacity: "0"
//             });

//  		   }
//  		}).done(function(data){
//  			$("#deskInsertContent").html(data).delay(15).animate({opacity: "1.0"},300,function(){
//               	if($.browser.msie&&$.browser.version=='8'){
//               		/*页面渲染后 修复ie8 单复选框 :css无法用input:checked的bug*/
//               		$("#deskInsertContent .smart-form input[type=checkbox],.smart-form .radio input[type=radio]").each(function(index,input){
//               			if($(this).is(':checked')){
//               				$(this).next('i').addClass('haschecked');
//               			}else{
//               				$(this).next('i').removeClass('haschecked');
//               			}
//               		});
//               	}
//                 })
//      		}).fail(function(){
//      			$("#deskInsertContent").css({opacity:"1.0"}).html('<h4 class="ajax-loading-error"><i class="fa fa-warning txt-color-orangeDark"></i> Error 404! Page not found.</h4>');
//      		});



/*小人儿颜色start*/
$('.cartoonButton_bstb li').click(function () {
     ykObject.changeCartoonStyle(this)
})
/*小人儿颜色end*/
//按钮位置变化
    $('.btnPosition_bstb li').click(function () {
         ykObject.changeCartoonPosition(this);
    })
    //按钮偏移
//left,right
    $("#sideDistanceInput_bstb").change(function () {
        ykObject.mobileLeft(this,155);
    });
//下、上
    $("#belowDistanceInput_bstb").change(function () {
        ykObject.mobileUpdown(this,289);
    });
    //按无卡通钮样式变化
    $('.txtButton_bstb li').click(function () {
         ykObject.noCartoonBtnStyle(this);
    })
    // 点击换颜色
    $('.btnColor_bstb li').click(function () {
        ykObject.changeCartoonBtnColor(this);
    })
    //点击出现电话开关
    $(".phone-btn-circle").click(function() {
        ykObject.tabShowPhone(this)
    })
    // 手机端咨询窗口保存
    $("#add_desktop").click(function () {
        ykObject.askWindowSave();
    });
    // 咨询按钮设置保存
    $("#saveButton_bstb").click(function () {
        ykObject.mobileAskSetting();
    });
    $("#btnTitleInput_bstb").change(function() {
        // console.log($("#btnTitleInput_bstb").val())
         $("#aikef-mini-dialog-text").text($("#btnTitleInput_bstb").val())
    });
    $('.settingItem_bstb li').click(function () {
        ykObject.changeCartoonOrNormal(this);
    });
var ykObject = {
    //切换卡通还是普通按钮
    changeCartoonOrNormal(str) {
        var $this = $(str);
        if ($this.hasClass('checked')) {
            return;
        }
        $this.siblings().removeClass('checked');
        $this.addClass('checked');
        $(".content_bstb").children().hide();
        if ($this.hasClass('cartoonItem_bstb')) {
            $("#huilan-aikf-show").hide();
            $("#background").show();
            $('.cartoonButton_bstb').show();
            $('.btnColor_bstb').hide();
        } else if ($this.hasClass('txtItem_bstb')) {
            $("#background").hide();
            $("#huilan-aikf-show").show();
            $('.txtButton_bstb').show();
            $('.btnColor_bstb').show();
        } else if ($this.hasClass('diyItem_bstb')) {
            $('.diyButton_bstb').show();
            $('.btnColor_bstb').hide();
        }
        $('#btnTypeInput_bstb').val($this.attr("data-value"));
    },
    //按钮偏移
    //下、上
    mobileUpdown:function(str,num) {
        var sid = $(str).val();
        sid = +sid;
        sid = sid + 10;
        if (sid < 0) {
            alert("不能再往下了！亲")
        } else if (sid > num) {
            alert("不能再往上了！亲")
        } else {
            $(".ykmobile-fa").css({bottom: sid + 'px'})
        }
    },
    //right,left
    mobileLeft:function(str,num){
        var sid = $(str).val();
        sid = +sid;
        sid = sid + 10;
        if (sid < 0) {
            alert("不能再往左了！亲")
        } else if (sid > num) {
            alert("不能再往右了！亲")
        } else {
            if ($("#btnPositionInput_bstb").val() == 0) {
                $(".ykmobile-fa").css({left: sid + 'px'});
            } else if($("#btnPositionInput_bstb").val() == 1) {
                $(".ykmobile-fa").css({right: sid + 'px'});
            }
        }
    },
    /*切换卡通位置*/
    changeCartoonPosition:function(str) {
        if ($(str).hasClass('checked')) {
            return;
        }
        $('.btnPosition_bstb li').removeClass('checked');
        $(str).addClass('checked');
        if ($(str).attr("data-value") == 0) {
            $(".ykmobile-fa").css({
                left: "0px",
                right: "auto",
                top: "auto",
                bottom: "0px"
            });
            $("#btnPositionInput_bstb").val("0");
        } else if ($(str).attr("data-value") == 1) {
            $(".ykmobile-fa").css({
                left: "auto",
                right: "0px",
                top: "auto",
                bottom: "0px"
            })
           $("#btnPositionInput_bstb").val("1");
        }
    },
    // 切换卡通形象
    changeCartoonStyle:function(str) {
        var s = $(str).attr("data-value");
        if ($(str).hasClass('checked')) {
            return;
        }
        $('.cartoonButton_bstb li').removeClass('checked');
        $(str).addClass('checked');
        $('#btnStyleCartoonInput_bstb').val(s);
        if (s == 0) {
            $(".ykmobile").css({background: "url(images/cartoon-mobilered.png) 0 0 no-repeat"})
        } else if (s == 1) {
            $(".ykmobile").css({background: "url(images/cartoon-mobileblue.png) 0 0 no-repeat"})
        } else if (s == 2) {
            $(".ykmobile").css({background: "url(images/cartoon-mobilewhite.png) 0 0 no-repeat"})
        } else if (s == 3) {
            $(".back").css({background: "url(images/cartoon-redTxt.png) 0 0 no-repeat"})
        } else if (s == 4) {
            $(".back").css({background: "url(images/cartoon-blueTxt.png) 0 0 no-repeat"})
        } else if (s == 5) {
            $(".back").css({background: "url(images/cartoon-whiteTxt.png) 0 0 no-repeat"})
        }
    },
    //无卡通形象的按钮样式
    noCartoonBtnStyle:function(str) {
        if ($(str).hasClass('checked')) {
            return;
        }
        $('.txtButton_bstb li').removeClass('checked');
        $(str).addClass('checked');
        $('#btnStyleInput_bstb').val($(str).attr("data-value"));
        if ($(str).attr("data-value") == 0) {
            $(".huilan-aikf-show").css({
                width: "100%",
                height: "50px",
                lineHeight: '50px',
                borderRadius: '0',
                paddingTop: '0',
                // right:'0',
                bottom:'0'
            });
            $(".huilan-aikf-show span").css({
                lineHeight: '50px', display: 'inline-block',
                width: 'auto'
            });
        } else if ($(str).attr("data-value") == 1) {
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
        } else if ($(str).attr("data-value") == 2) {
            $(".huilan-aikf-show").css({
                width: "86px",
                height: "86px",
                lineHeight: '66px',
                borderRadius: '100%',
                paddingTop: '10px'
            });
            $(".huilan-aikf-show span").css({
                lineHeight: 'inherit', display: 'inline-block',
                width: '65px'
            });
        }
    },
    // 点击更换无卡通形象的颜色
    changeCartoonBtnColor:function(str) {
        if ($(str).hasClass('checked')) {
            return;
        }
        $('.btnColor_bstb li').removeClass('checked');
        $(str).addClass('checked');
        var end = $(str).attr("data-value").toUpperCase();
        $("#huilan-aikf-show").css({backgroundColor: end});
        $(".minicolors-swatch-color").css({backgroundColor: end});
        $("#diy-color").val(end).keyup();
    },
    //点击出现电话开关
    tabShowPhone:function(str) {
        if($(str).attr("data-val") == "true") {
            $(str).attr("data-val","false");
            $(".ykmobilephonenum").hide();
            $("#img_phonecall").hide();
            $("#form-controlykphonenumshow").val("0");
        } else {
            $(str).attr("data-val","true");
            $(".ykmobilephonenum").show();
            $("#img_phonecall").show();
            $("#form-controlykphonenumshow").val("1");
        }
    },
// 咨询按钮设置保存
mobileAskSetting:function() {
    var btnTypeInput_bstb = $("#btnTypeInput_bstb").val();//卡通形象按钮还是普通按钮参数
    var btnStyleCartoonInput_bstb = $("#btnStyleCartoonInput_bstb").val();//选的哪个卡通形象参数
    var btnStyleInput_bstb = $("#btnStyleInput_bstb").val();//选普通按钮的参数
    var btnTitleInput_bstb = $("#btnTitleInput_bstb").val();//普通按钮文字内容存储参数
    var diy_color = $("#diy-color").val();//自定义颜色参数
    var btnPositionInput_bstb = $("#btnPositionInput_bstb").val();//按钮位置参数
    var sideDistanceInput_bstb = $("#sideDistanceInput_bstb").val();//按钮左右偏移位置
    var belowDistanceInput_bstb = $("#belowDistanceInput_bstb").val();//按钮上下便宜的位置
    var s = {
        btnTypeInput_bstb: btnTypeInput_bstb,
        btnStyleCartoonInput_bstb: btnStyleCartoonInput_bstb,
        btnStyleInput_bstb: btnStyleInput_bstb,
        btnTitleInput_bstb: btnTitleInput_bstb,
        diy_color: diy_color,
        btnPositionInput_bstb: btnPositionInput_bstb,
        sideDistanceInput_bstb: sideDistanceInput_bstb,
        belowDistanceInput_bstb: belowDistanceInput_bstb
    };
    s = JSON.stringify(s);
    $.post("http://192.168.1.74:8080/api/kapSecretKey/update",
        {
            dataId: 1,
            pUserId: 4,
            field: "moveButJson",
            json: s
        },
        function (data, status) {
            if (data == 1) {
                alert("成功")
            } else {
                alert("错误")
            }
        });
    // $.post("http://192.168.1.59:8083/api/kapSecretKey/getDataByUserId",
    //     {
    //         dataId: 1,
    //         pUserId: 4,
    //     },
    //     function (data, status) {
    //         console.log(data)
    //         JSON.parse()
    //     });
    },
    // 手机端咨询窗口保存
    askWindowSave:function() {
        var wheel_demo = $("#wheel-demo").val();//自定义颜色参数2
        var tenantSiteName = $("#tenantSiteName").val();//企业名称的参数
        var form_controlykphonenumshow = $("#form-controlykphonenumshow").val();//电话显示隐藏
        var form_controlykphonenum = $("#form-controlykphonenum").val();//电话号码
        var s = {
            wheel_demo: wheel_demo,
            tenantSiteName: tenantSiteName,
            form_controlykphonenumshow:form_controlykphonenumshow,
            form_controlykphonenum:form_controlykphonenum
        };
        s = JSON.stringify(s);
        //'move_win_json'
        $.post("http://192.168.1.74:8080/api/kapSecretKey/update",
        {
            dataId: 1,
            pUserId: 4,
            field: "moveWinJson",
            json: s
        },
        function (data, status) {
            if (data == 1) {
                alert("成功")
            } else {
                alert("错误")
            }
        });
    }  
}

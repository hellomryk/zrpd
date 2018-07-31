var aikfCrm;
//oem厂商的域名
var channelDomain = "www.aikf.com";
//www.purvar.net
var aikf_default_img = "//aikf.oss-cn-beijing.aliyuncs.com/1/1502943129973default1.png";
//puhua 头像
//aikf.oss-cn-beijing.aliyuncs.com/1/1502943129973default1.png
//oem 厂商是否需要动画效果改为false
var channelAnimation = true;
var evaluateFlag = true;//是否显示评价
(function () {
    var thisURL = window.location.protocol + "//" + window.location.host;//当前网站域名
    var thisAgreement = window.location.protocol;//当前网站协议
    if (window.document.compatMode == "BackCompat") {//网站怪异模式 则不显示机器人。
        window.console && window.console.log("该网页为'quirk(怪异)'模式，爱客服机器人溜走了,请检查您网页的<!DOCTYPE> 声明正确与否。。")
        return;
    }
    // crm获取客户uid
    aikfCrm = {
        uid: '',
        config: function (obj) {
            this.uid = obj.uid
        },
        getUid: function () {
            if (this.uid == '' || this.uid == undefined || this.uid == null) {
                return '';
            } else {
                return "AIKFCRM_" + this.uid;
            }
        }
    };
    var container, elements, toolFun, moduleFun, serverOpt, htmlStr, dialogSetting, dialogDefaultHeight, thisCTX, talkScroll, hashParam;
    var windowAppearWay;
    //判断和更改http协议
    if (thisAgreement == "https:") {
        thisCTX = "https:";
    } else {
        thisCTX = "http:";
    }
    ;
    var webMainJsCtx = document.getElementById('aikfWebMainJs') ? document.getElementById('aikfWebMainJs').src.split('/ask')[0] : thisCTX + "//" + channelDomain;
    //webMainJsCtx = 'http://172.20.2.243:8081';

    serverOpt = {
        ctx: webMainJsCtx,
        tenantId: tenantId,
        domainName: ""//post请求中赋值
    }
    dialogDefaultHeight = 480;  // 设置默认弹框的高度
    dialogDefaultWidth = 320;
    //style 不能放在最前面，ie8中会报错
    htmlStr = '<div id=aikf-web-js-client><div class="aikf-dialog-outer aikefu-animated" id=huilan-aikf-dialog><ul class=aikf-dialog-close-tool><li class=aikf-minus id=huilan-aikf-minus>&nbsp;<li class=aikf-close id=huilan-aikf-close>&nbsp;</ul><div class="aikf-dialog-frame" id="aikf-dialog-frame"></div><div id="huilan-aikf-dialog-cartoon"></div></div><div class=aikf-web-mask id=huilan-web-mask></div><div class=aikf-web-evaluation id=huilan-web-evaluation><span class=close-btn></span><div class=aikf-pop-cont><img src="' + serverOpt.ctx + '/ask/resources/images/aikf-portrait.png"><p>亲，赏脸给个评价吧！</p></div><div class=aikf-eval-btns><div id="aikf-eval-starList"><a href="javascript:void(0);" class="star1">★</a><a href="javascript:void(0);" class="star2">★</a><a href="javascript:void(0);" class="star3">★</a><a href="javascript:void(0);" class="star4">★</a><a href="javascript:void(0);" class="star5">★</a><span id="starLevel_satisfy">非常满意</span></div><div style="margin-top:10px;"><div id="starLeaveLabelBox"></div><div class="satisfy_Input" style="clear:both;padding-left:5px;padding-top:12px;"><input type="text" placeholder="请输入您的意见，最多50个字..." maxlength="50" class="userComment"></div></div><div style="clear:both;padding-left:77px"><button style="margin-left: 10px; margin-top: 10px;display: block;padding: 4px 12px;margin-bottom: 0;font-size: 14px;font-weight: 400;line-height: 1.42857143;color: #fff;background-color: #E5004A;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 1px solid transparent;border-radius: 4px;" id="starSubmitBtn">提交评价</button></div></div></div><div class="aikf-web-evaluation ai-kf-web-eval-result" id=huilan-eval-result><h2>感谢您的评价</h2><div class=aikf-pop-cont><img src="' + serverOpt.ctx + '/ask/resources/images/aikf-portrait.png"><p id=huilan-eval-result-con>您对服务的满意是我们的荣幸！</p></div></div></div><div class="pop-mask" style="display: none;"></div><div class=aikf-min-dialog id=huilan-aikf-show><img src="' + serverOpt.ctx + '/ask/resources/images/kefu-icon.png" id="aikef-mini-icon"><i></i><span id="aikef-mini-dialog-text">点我咨询</span></div><div id="huilan-aikf-temp-helper" class="aikf-temp-helper"></div><div id="huilan-aikf-clickHoder"></div><style type="text/css">#aikf-web-js-client{position:fixed;right:20px;bottom:0;width:320px;padding:0;margin:0;z-index: 2;height:480px;display: none;}#huilan-aikf-show{position:absolute;/*z-index:2;*/left:0px;bottom:0px;color:#fff;font-size:16px;text-align:center;cursor:default;}#huilan-aikf-show img{vertical-align:middle}.aikf-dialog-outer{width:320px;height:480px;display:none}.aikf-dialog-close-tool{list-style-type:none;position:absolute;right:5px;top:5px;padding:0;margin:0}.aikf-dialog-close-tool li{float:left;width:16px;height:16px;margin:0 5px;cursor:pointer}.aikf-dialog-close-tool .aikf-minus{background:url(' + serverOpt.ctx + '/ask/resources/images/aikf-minus.png) left top no-repeat;_background:url(' + serverOpt.ctx + '/ask/resources/images/aikf-minus-8.png) left top no-repeat}.aikf-dialog-close-tool .aikf-close{background:url(' + serverOpt.ctx + '/ask/resources/images/aikf-close.png) left top no-repeat;_background:url(' + serverOpt.ctx + '/ask/resources/images/aikf-close-8.png) left top no-repeat}.aikf-web-mask{position:absolute;left:0;top:0;right:0;bottom:0;background:black;opacity:.6;filter:Alpha(opacity=60);display:none}.aikf-web-evaluation{position:absolute;left:50%;top:50%;margin:-150px 0 0 -125px;width:250px;background:white;display:none}.aikf-web-evaluation h2{font-size:16px;color:black;text-align:center;padding:20px 0;font-weight:normal;margin:0}.aikf-pop-cont img{display:block;margin:10px auto}.aikf-pop-cont p{font-size:14px;line-height:1.5em;padding:0 30px;text-align:center}#starLeaveLabelBox{margin-left: 18px;font-size: 12px;margin-top: 5px;}.aikf-eval-btns{text-align:center;padding-bottom:15px}.aikf-eval-btns a{text-decoration: none;display: inline-block;width: 27px;text-align: center;margin: 0 2px;font-size: 25px;color: #ccc;}.aikf-eval-btns a.starRed{color:#E5004A}.aikf-eval-satisfaction{background:url(' + serverOpt.ctx + '/ask/resources/images/eval-satisfaction.png) center top no-repeat}.aikf-eval-not-satisfied{background:url(' + serverOpt.ctx + '/ask/resources/images/eval-not-satisfied.png) center top no-repeat}.ai-kf-web-eval-result h2{padding-top:40px}.aikf-dialog-frame{height:100%;position:static;border-radius:5px 5px 0px 0px;box-shadow:rgba(0, 0, 0, 0.0980392) 0px 0px 5px 2px;}.aikf-dialog-frame iframe{width:100%;height:100%}.aikf-min-dialog-style1{width:initial;height:50px;padding:0 12px;background-color:#e5004a;color:#fff;line-height: 50px;font-size: 18px;}.aikf-min-dialog-style1 i{display: inline-block;background: url(' + serverOpt.ctx + '/ask/resources/images/shuLine.png) no-repeat 0 0;width: 1px;height: 22px;vertical-align:middle;margin:0 5px;}#huilan-aikf-show{box-sizing: content-box;}.aikf-min-dialog-style2{width: 27px;background-color: #e5004a;line-height: initial;font-size: 16px;padding: 15px 12px 15px;}.aikf-min-dialog-style2 img{display:inline-block;}.aikf-min-dialog-style2 i{display: inline-block;background: url(' + serverOpt.ctx + '/ask/resources/images/hengLine.png) no-repeat 0 0;height: 1px;width: 22px;margin:5px 0;}.aikf-min-dialog-style3{width: 82px;height: 82px;background-color: #e5004a;line-height: initial;font-size: 16px;border-radius: 50%;text-align: center;overflow: hidden;}.aikf-min-dialog-style3 span{display: inline-block;width: 65px;}.aikf-min-dialog-style1 img{display: inline-block;}.aikf-min-dialog-style3 img{display: block;margin: 4px auto;}.aikefu-animated{-webkit-animation-duration: 1s;-moz-animation-duration: 1s;animation-duration: 1s; -webkit-animation-fill-mode: both;-moz-animation-fill-mode: both;animation-fill-mode: both;}@-webkit-keyframes aikefu-slideInUp {from { -webkit-transform: translate3d(0, 100%, 0); -moz-transform: translate3d(0, 100%, 0);transform: translate3d(0, 100%, 0);visibility: visible;}to { -webkit-transform: translate3d(0, 0, 0); -moz-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}}@keyframes aikefu-slideInUp {from { -webkit-transform: translate3d(0, 100%, 0); -moz-transform: translate3d(0, 100%, 0);transform: translate3d(0, 100%, 0);visibility: visible;}to { -webkit-transform: translate3d(0, 0, 0); -moz-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}}.aikefu-slideInUp {-webkit-animation-name: aikefu-slideInUp; -moz-animation-name: aikefu-slideInUp;animation-name: aikefu-slideInUp;}@-webkit-keyframes aikefu-slideInLeft {0% {opacity: 0; -webkit-transform: translateX(-2000px); -moz-transform: translateX(-2000px);transform: translateX(-2000px);}100% { -webkit-transform: translateX(0); -moz-transform: translateX(0);transform: translateX(0);}}@keyframes aikefu-slideInLeft {0% {opacity: 0; -webkit-transform: translateX(-2000px); -moz-transform: translateX(-2000px); -ms-transform: translateX(-2000px);transform: translateX(-2000px);}100% { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0);transform: translateX(0);}}.aikefu-slideInLeft{-webkit-animation-name: aikefu-slideInLeft;-moz-animation-name: aikefu-slideInLeft;animation-name: aikefu-slideInLeft;}@-webkit-keyframes aikefu-slideInRight {0% {opacity: 0; -webkit-transform: translateX(2000px); -moz-transform: translateX(2000px);transform: translateX(2000px);}100% { -webkit-transform: translateX(0); -moz-transform: translateX(0);transform: translateX(0);}}@keyframes aikefu-slideInRight {0% {opacity: 0; -webkit-transform: translateX(2000px); -moz-transform: translateX(2000px); -ms-transform: translateX(2000px);transform: translateX(2000px);}100% { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0);transform: translateX(0);}}.aikefu-slideInRight { -webkit-animation-name: aikefu-slideInRight;animation-name: aikefu-slideInRight;}'

        + '.aikefu-cartoon-redTxt-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-redTxt.png) left top no-repeat;}'
        + '.aikefu-cartoon-blueTxt-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-blueTxt.png) left top no-repeat;}'
        + '.aikefu-cartoon-whiteTxt-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-whiteTxt.png) left top no-repeat;}'

        + '.aikefu-cartoon-red-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-red.png) left top no-repeat;}'
        + '.aikefu-cartoon-blue-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-blue.png) left top no-repeat;}'
        + '.aikefu-cartoon-white-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-white.png) left top no-repeat;}'
        //jump
        + '.aikefu-cartoon-red-jump-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-red-jump.png) left top no-repeat;}'
        + '.aikefu-cartoon-blue-jump-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-blue-jump.png) left top no-repeat;}'
        + '.aikefu-cartoon-white-jump-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-white-jump.png) left top no-repeat;}'
        //moveHand
        + '.aikefu-cartoon-red-moveHand-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-red-moveHand.png) left top no-repeat;}'
        + '.aikefu-cartoon-blue-moveHand-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-blue-moveHand.png) left top no-repeat;}'
        + '.aikefu-cartoon-white-moveHand-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-white-moveHand.png) left top no-repeat;}'
        //smile
        + '.aikefu-cartoon-red-smile-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-red-smile.png) left top no-repeat;}'
        + '.aikefu-cartoon-blue-smile-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-blue-smile.png) left top no-repeat;}'
        + '.aikefu-cartoon-white-smile-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-white-smile.png) left top no-repeat;}'
        //wave
        + '.aikefu-cartoon-red-wave-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-red-wave.png) left top no-repeat;}'
        + '.aikefu-cartoon-blue-wave-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-blue-wave.png) left top no-repeat;}'
        + '.aikefu-cartoon-white-wave-showBtn{width:100px;height:270px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-white-wave.png) left top no-repeat;}'
        //dialog red left
        + '.aikefu-dialog-cartoon-red-left-smile{position:absolute;left:-53px;top:200px;width:70px;height:100px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/dialog-cartoon-red-left-smile.png) left top no-repeat;}'
        + '.aikefu-dialog-cartoon-red-left-talk{position:absolute;left:-53px;top:200px;width:70px;height:100px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/dialog-cartoon-red-left-talk.png) left top no-repeat;}'
        //dialog red right
        + '.aikefu-dialog-cartoon-red-right-smile{position:absolute;right:-53px;top:200px;width:70px;height:100px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/dialog-cartoon-red-right-smile.png) left top no-repeat;}'
        + '.aikefu-dialog-cartoon-red-right-talk{position:absolute;right:-53px;top:200px;width:70px;height:100px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/dialog-cartoon-red-right-talk.png) left top no-repeat;}'
        //dialog blue left
        + '.aikefu-dialog-cartoon-blue-left-smile{position:absolute;left:-53px;top:200px;width:70px;height:100px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/dialog-cartoon-blue-left-smile.png) left top no-repeat;}'
        + '.aikefu-dialog-cartoon-blue-left-talk{position:absolute;left:-53px;top:200px;width:70px;height:100px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/dialog-cartoon-blue-left-talk.png) left top no-repeat;}'
        //dialog blue right
        + '.aikefu-dialog-cartoon-blue-right-smile{position:absolute;right:-53px;top:200px;width:70px;height:100px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/dialog-cartoon-blue-right-smile.png) left top no-repeat;}'
        + '.aikefu-dialog-cartoon-blue-right-talk{position:absolute;right:-53px;top:200px;width:70px;height:100px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/dialog-cartoon-blue-right-talk.png) left top no-repeat;}'
        //dialog white left
        + '.aikefu-dialog-cartoon-white-left-smile{position:absolute;left:-53px;top:200px;width:70px;height:100px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/dialog-cartoon-white-left-smile.png) left top no-repeat;}'
        + '.aikefu-dialog-cartoon-white-left-talk{position:absolute;left:-53px;top:200px;width:70px;height:100px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/dialog-cartoon-white-left-talk.png) left top no-repeat;}'
        //dialog white right
        + '.aikefu-dialog-cartoon-white-right-smile{position:absolute;right:-53px;top:200px;width:70px;height:100px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/dialog-cartoon-white-right-smile.png) left top no-repeat;}'
        + '.aikefu-dialog-cartoon-white-right-talk{position:absolute;right:-53px;top:200px;width:70px;height:100px;background:url(' + serverOpt.ctx + '/ask/resources/images/robot/dialog-cartoon-white-right-talk.png) left top no-repeat;}'
        + '.aikf-temp-helper{display:none;}'
        + '#aikf-diyImage{vertical-align:top;max-width:150px;max-height:150px;}'
        + '#huilan-aikf-clickHoder{position:absolute;width:100%; height:100%;top:0px;left:0px; cursor:pointer; z-index:1;}'
        + '#huilan-aikf-container{position:fixed;padding:0;margin:0;z-index:2147483647;transform:none;cursor:pointer;}'
        + ".huilan-aikf-yunge-loading:after, .huilan-aikf-yunge-loading:before {   box-sizing: border-box;    position: absolute;    width: 0;    height: 0;    border-width: 10px;    border-style: solid;    border-right-color: transparent;    border-bottom-color: transparent;    border-left-color: transparent;  content: '';    pointer-events: none;}.huilan-aikf-yunge-loading:after {    -webkit-transform: rotate(135deg);    -ms-transform: rotate(135deg);    transform: rotate(135deg);    left: -7px;    bottom: 0;}.huilan-aikf-yunge-loading:before {    -webkit-transform: rotate(-45deg);    -ms-transform: rotate(-45deg);    transform: rotate(-45deg);    right: -7px;    top: 0;}.huilan-aikf-yunge-loading {  animation: huilan-aikf-yunge-spin 800ms infinite linear;  box-sizing: border-box;  padding: 0;  border: 2px solid;    width: 52px;    height: 52px;    border-radius: 50%;    border-right-color: transparent;    border-left-color: transparent;    margin: 4px;    display: inline-block;    vertical-align: middle;    position: relative;    font-style: normal;    color: #ddd;    text-align: left;    text-indent: -9999px;    direction: ltr;position:absolute;left: 50%;top:50%;margin-left:-26px;margin-top:-26px;}@keyframes huilan-aikf-yunge-spin {  0%   { transform: rotate(0deg);}  100% { transform: rotate(360deg); }}"
        + '#starLevel_satisfy {color: #e5004a;display: block;font-size: 13px;} .userComment{width: 210px;height: 32px;outline-style: none;border: 1px solid #BFBFBF;border-radius: 5px;padding: 6px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;color: #000000;font-size: 13px;}.satisfy_label {float: left;width: auto;font-size: 14px;background-color: #f2f2f2;border: 1px solid #bfbfbf;margin: 5px;padding: 3px;border-radius: 3px;color: #000000;cursor: pointer;}.label_active {color: #E5004A;}'
        + '</style>';
    container = document.createElement('div');
    container.id = "huilan-aikf-container";
    document.body.appendChild(container);
    container.innerHTML = htmlStr;
    if (document.documentMode == 7) {
        container.style.position = "";
        container.style.right = "";
        container.style.bottom = "";
    }
    elements = {
        containerDialogElem: document.getElementById("aikf-web-js-client"), //对话框外层容器
        dialogEle: document.getElementById("huilan-aikf-dialog"),//对话框容器
        dialogFrameBox: document.getElementById('aikf-dialog-frame'),
        dialogFrameEle: null,//对话框frame,在show方法里插入iframe然后进行初始化。火狐浏览器中iframe页面的不会影响父页面的后退前进功能。
        dialogCartoon: document.getElementById("huilan-aikf-dialog-cartoon"),//对话框侧面显示的动画
        minDialogText: document.getElementById("aikef-mini-dialog-text"),  // 小按钮中文字的容器
        minus: document.getElementById("huilan-aikf-minus"),//最小化按钮
        close: document.getElementById("huilan-aikf-close"),//关闭按钮
        show: document.getElementById("huilan-aikf-show"),//显示按钮
        mask: document.getElementById("huilan-web-mask"),//遮罩层
        evaluation: document.getElementById("huilan-web-evaluation"),//评价框
        evalStarList: document.getElementById("aikf-eval-starList").children,//评价星星
        satisfaction: document.getElementById("huilan-aikf-eval-satisfaction"),//好评按钮
        starSubmitBtn: document.getElementById("starSubmitBtn"),//好评按钮
        badReview: document.getElementById("huilan-aikf-eval-not-satisfied"),//差评按钮
        evalResult: document.getElementById("huilan-eval-result"),//评价结果
        evalResultCon: document.getElementById("huilan-eval-result-con"),//评价后显示文字
        tempHelper: document.getElementById("huilan-aikf-temp-helper"),//评价后显示文字
        clickHoder: document.getElementById("huilan-aikf-clickHoder")
    }

    toolFun = {
        on: function (element, type, handler) {
            toolFun.on.guid || (toolFun.on.guid = 1)
            //为每一个事件处理函数分派一个唯一的ID
            if (!handler.$$guid) handler.$$guid = toolFun.on.guid++;
            //为元素的事件类型创建一个哈希表
            if (!element.events) element.events = {};
            //为每一个"元素/事件"对创建一个事件处理程序的哈希表
            var handlers = element.events[type];
            if (!handlers) {
                handlers = element.events[type] = {};
                //存储存在的事件处理函数(如果有)
                if (element["on" + type]) {
                    handlers[0] = element["on" + type];
                }
            }
            //将事件处理函数存入哈希表
            handlers[handler.$$guid] = handler;
            //指派一个全局的事件处理函数来做所有的工作
            element["on" + type] = this._handleEvent;
        },
        off: function (element, type, handler) {
            //从哈希表中删除事件处理函数
            if (element.events && element.events[type]) {
                delete element.events[type][handler.$$guid];
            }
        },
        getElementsByClassName:function(className, results) {
            results = results || [];
            // 判断浏览器是否支持 getElementsByClassName
            if(document.getElementsByClassName) {
                // 浏览器支持这个方法
                results.push.apply( results, document.getElementsByClassName(className) );
            } else {
                // 浏览器不支持
                var nodes = document.getElementsByTagName("*");
                // 2 遍历
                for(var i = 0; i < nodes.length; i++) {
                    var cNodes = nodes[i];
                    // 2.1 判断当前元素是否包含 指定的类 className
                    var cNodeClsName = cNodes.className;
                    var clsNames = cNodeClsName.split(" ");
                    for(var j = 0; j < clsNames.length; j++) {
                        if(clsNames[j] === className) {
                            results.push(cNodes);
                        }
                    }

                }
            }

            return results;
        },
        _handleEvent: function (event) {
            var returnValue = true;
            //抓获事件对象(IE使用全局事件对象)
            event = event || toolFun._fixEvent(window.event);
            //取得事件处理函数的哈希表的引用
            var handlers = this.events[event.type];
            //执行每一个处理函数
            for (var i in handlers) {
                this.$$handleEvent = handlers[i];
                if (this.$$handleEvent(event) === false) {
                    returnValue = false;
                }
            }
            return returnValue;
        },
        //为IE的事件对象添加一些“缺失的”函数
        _fixEvent: function (event) {
            //添加标准的W3C方法
            event.preventDefault = function () {
                this.returnValue = false;
            };
            event.stopPropagation = function () {
                this.cancelBubble = true;
            };
            return event;
        },
        //判断ie的版本
        browser: function () {
            var userAgent = window.navigator.userAgent.toLowerCase(),
                msie = /(msie) ([\w.]+)/,
                match;
            match = msie.exec(userAgent) || [];

            return {browser: match[1] || "", version: match[2] || "0"}
        },
        browserTwo:function(){
        	if(navigator.userAgent.indexOf('Firefox') >= 0){
        		return {browser:'',trim_Version:''};
        	}else{
        		var browser = navigator.appName;
            	var b_version = navigator.appVersion;
            	var version = b_version.split(";");
            	var trim_Version =version.length>1?version[1].replace(/[ ]/g, ""):version[0];
            	return {browser:browser || '',trim_Version:trim_Version || ''};
        	}
        },
        trim: (function () {
            var trim = String.prototype.trim;
            return trim ?
                function (text) {
                    return text == null ?
                        "" :
                        trim.call(text);
                } :

                // Otherwise use our own trimming functionality
                function (text) {
                    var trimLeft = /^\s+/,
                        trimRight = /\s+$/;

                    return text == null ?
                        "" :
                        text.toString().replace(trimLeft, "").replace(trimRight, "");
                }
        })(),
        parseJSON: function (data) {
            var rvalidchars = /^[\],:{}\s]*$/,
                rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;

            if (typeof data !== "string" || !data) {
                return null;
            }

            // Make sure leading/trailing whitespace is removed (IE can't handle it)
            data = toolFun.trim(data);

            // Attempt to parse using the native JSON parser first
            if (window.JSON && window.JSON.parse) {
                return window.JSON.parse(data);
            }

            // Make sure the incoming data is actual JSON
            // Logic borrowed from http://json.org/json2.js
            if (rvalidchars.test(data.replace(rvalidescape, "@")
                    .replace(rvalidtokens, "]")
                    .replace(rvalidbraces, ""))) {

                return ( new Function("return " + data) )();

            }
            win.console || win.console.error("Invalid JSON: " + data);
        },
        transUrl: function (url, data) {
            var array = [], key;
            for (key in data) {
                array.push(key + "=" + data[key]);
            }

            return url + (/\?/.test(url) ? "&" : "?") + array.join("&");
        },
        /**
         * jsonp
         * url
         * data
         * success
         */
        post: function (opt) {
            var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                script = document.createElement("script"),
                temp = {},
                now = new Date().getTime(),
                random = Math.random().toString();
            random = random.substring(random.indexOf('.') + 1);
            //script.async = "async";

            temp = opt.data || {};
            temp.Callback = "aikfJsonpCallback" + random;
            temp._ = now;

            window[temp.Callback] = function (str) {

                opt.success && opt.success(toolFun.parseJSON(str));
                window[temp.Callback] = null;
            }
            script.charset = "utf-8";
            script.src = toolFun.transUrl(opt.url, opt.data);

            // Attach handlers for all browsers
            script.onload = script.onreadystatechange = function () {

                if (!script.readyState || /loaded|complete/.test(script.readyState)) {

                    // Handle memory leak in IE
                    script.onload = script.onreadystatechange = null;

                    // Remove the script
                    if (head && script.parentNode) {
                        head.removeChild(script);
                    }

                    // Dereference the script
                    script = undefined;

                    // Callback if not abort
                    //if ( !isAbort ) {
                    //success( 200, "success" );
                    //}
                }
            };
            // Use insertBefore instead of appendChild  to circumvent an IE6 bug.
            // This arises when a base node is used (#2709 and #4378).
            head.insertBefore(script, head.firstChild);

        },
        hasClass: function (obj, cls) {
            return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        },
        addClass: function (obj, cls) {
            if (!toolFun.hasClass(obj, cls)) obj.className += " " + cls;
        },
        removeClass: function (obj, cls) {
            if (toolFun.hasClass(obj, cls)) {
                obj.className = obj.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)', 'g'), ' ');
            }
        },
        myAddEvent: function (obj, ev, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(ev, fn, false);
            } else {
                obj.attachEvent('on' + ev, function () {
                    fn.apply(obj, arguments); // attachEvent方法中，this并不是指向node，所以需要用apply（）方法改变
                });
            }
        },
        //发送URL地址
        sendCurrentURL: function (currentURL) {
            toolFun.post({
                url: serverOpt.ctx + "/ask/custFeedback/getContainPage.htm",
                cache: false,
                data: {
                    tenantId: serverOpt.tenantId,
                    url: currentURL,
                    channel: 1
                },
                success: function () {
                }
            });
        }
    }
    //加载完成向后台发送URL地址
    toolFun.sendCurrentURL(thisURL);
    moduleFun = {
        //显示对话框
        show: function () {
            if (windowAppearWay == 0) {
                if (!elements.dialogFrameEle) {
                    //动态插入iframe标签，避免火狐中iframe影响父页面的前进后退功能
                    elements.dialogFrameBox.innerHTML = '<div id="huilan-aikf-yunge-loading" class="huilan-aikf-yunge-loading"></div><iframe id=huilan-aikfu-dialog src="" frameborder=no scrolling=no marginheight=0 marginwidth=0 allowTransparency=true></iframe>';
                    elements.dialogFrameEle = document.getElementById("huilan-aikfu-dialog");
                }
                ;
                if (elements.dialogFrameEle.getAttribute("src") == "") {
                    toolFun.on(elements.mask, 'click', moduleFun.evaluHide);
                    elements.dialogFrameEle.src = serverOpt.ctx + "/ask/webjs/" + serverOpt.tenantId + ".htm?uid=" + aikfCrm.getUid();
                    //设置对话框卡通
                    if (elements.dialogFrameEle.attachEvent) {//ie8
                        elements.dialogFrameEle.attachEvent("onload", function () {
                            document.getElementById('huilan-aikf-yunge-loading').style.display = 'none';
                            if (dialogSetting.btnType == "Cartoon") {
                                moduleFun.setDialogCartoon();
                            }
                        });
                    } else {//高级浏览器
                        elements.dialogFrameEle.onload = function () {
                            document.getElementById('huilan-aikf-yunge-loading').style.display = 'none';
                            if (dialogSetting.btnType == "Cartoon") {
                                moduleFun.setDialogCartoon();
                            }
                        }
                    }

                } else {
                    if (dialogSetting.btnType == "Cartoon") {
                        moduleFun.setDialogCartoon();
                    }
                }
                container.style.overflow = 'visible';
                elements.containerDialogElem.style.display = 'block';
                elements.show.style.display = "none";
                elements.dialogEle.style.display = "block";
                moduleFun.stopShowBtnAni();
                talkScroll && elements.dialogFrameEle.contentWindow.postMessage(talkScroll, '*');
            } else {
                var screenWidth = window.screen.width;
                var screenHeight = window.screen.height;
                var top = (screenHeight - 740) / 2;
                var left = (screenWidth - 1010) / 2;
                var url = serverOpt.ctx + '/ask/' + serverOpt.domainName + '.htm?uid=' + aikfCrm.getUid();
                window.open(url, 'newwindow', 'height=740,width=1010,top=' + top + ',left=' + left + ',toolbar=no,menubar=no,scrollbars=yes, resizable=yes,location=no, status=no')
            }
        },
        //最小化对话框
        minu: function () {
            elements.containerDialogElem.style.display = 'none';
            elements.dialogEle.style.display = "none";
            elements.show.style.display = "block";
            moduleFun.startShowBtnAni();
        },
        //关闭对话框
        close: function (ifrTrue) {
            var browser = toolFun.browser();
            if (browser.browser && browser.version <= 7) {
                moduleFun.minu();
                return;
            }
            if(!evaluateFlag){
            	moduleFun.minu();
            	return;
            }
            if (serverOpt.serviceEval && !ifrTrue) {
            	moduleFun.evaluation();
                
                //默认显示五星评价
                var starAll = document.getElementById('aikf-eval-starList').children;
                for (var i = 0, l = starAll.length; i < l; i++) {
                    starAll[i].setAttribute('class', 'starRed');
                }
                starAll[5].innerHTML = '非常满意';
                var evaluate_label = toolFun.getElementsByClassName('satisfy_label');
                for (var j = 0, k = evaluate_label.length; j < k; j++) {
                   if(evaluate_label[j].getAttribute('class').split(' ')[1] !== 'fiveStar'){
                       evaluate_label[j].style.display = 'none';
                   }else{
                       evaluate_label[j].style.display = 'inline-block';
                   }
                }

            } else {
                moduleFun.disconnect();
                elements.containerDialogElem.style.display = 'none';
                elements.dialogEle.style.display = "none";
                elements.show.style.display = "block";
                moduleFun.startShowBtnAni();
                moduleFun.setOpenMin(false, true);
                //清空对话列表
                elements.dialogFrameEle.onload = '';
                elements.dialogFrameEle.src = "";
                document.getElementById('huilan-aikf-yunge-loading').style.display = 'block';
                if (dialogSetting.btnType == "Cartoon") {
                    elements.dialogCartoon.className = '';
                    elements.dialogFrameEle.onload = '';
                }
            }
        },
        //show 评价框
        evaluation: function () {

            var starAll = document.getElementById('aikf-eval-starList').children;

            for (var i = 0, l = starAll.length; i < l; i++) {
                starAll[i].setAttribute('class', 'starRed');
            }

            elements.mask.style.display = "block";
            elements.evaluation.style.display = "block";
        },
        //隐藏 评价框
        evaluHide: function () {
            elements.mask.style.display = "none";
            elements.evaluation.style.display = "none";
        },
        /**
         * 显示评价结果
         * text: 显示的内容
         * score: 5：好评，1：差评；
         */
        evalResult: function (text, score) {
            toolFun.off(elements.mask, 'click', moduleFun.evaluHide);
            elements.evaluation.style.display = "none";
            elements.evalResultCon.innerHTML = text;
            elements.evalResult.style.display = "block";
            if (dialogSetting.btnType == "Cartoon") {
                elements.dialogCartoon.className = '';
                elements.dialogFrameEle.onload = '';
            }
            setTimeout(function () {
                //向后台发送评价
                elements.mask.style.display = "none";
                elements.evalResult.style.display = "none";
                moduleFun.minu();
                //清空对话列表
                elements.dialogFrameEle.onload = '';
                elements.dialogFrameEle.src = "";
                document.getElementById('huilan-aikf-yunge-loading').style.display = 'block';
                toolFun.post({
                    url: serverOpt.ctx + "/ask/evaluateSys.htm?hashParam=" + hashParam,
                    data: {
                        param: score,
                        tenantId: serverOpt.tenantId
                    },
                    success: function (data) {
                        moduleFun.disconnect();
                    }
                })
                moduleFun.setOpenMin(false, true);
            }, 1000)

        },
        //好评
        satisfaction: function (score) {
            moduleFun.evalResult("您对服务的满意是我们的荣幸！", score);
        },
        //差评
        badReview: function (score) {
            moduleFun.evalResult("很抱歉没能让您满意，我们会继续改进！", score);
        },
        //断开连接
        disconnect: function () {
            toolFun.post({
                url: serverOpt.ctx + "/ask/getAnswer.htm?hashParam=" + hashParam,
                data: {
                    ques: "",
                    tenantId: serverOpt.tenantId,
                    reqtype: "3"
                }
            })
        },
        //设置弹框的颜色，位置以及样式
        setMiniDialog: function (settings) {
            container.removeAttribute("style");
            var element = elements.show;
            element.timer && clearInterval(element.timer);//配合后台预览切换,需在此清除定时器
            elements.clickHoder.onmouseover = null;
            elements.clickHoder.onmouseout = null;
            if (settings.btnType == "text") {
                element.style.position = "relative";
                elements.show.style.backgroundColor = settings.windowColor;  // 设置背景
                elements.minDialogText = document.getElementById("aikef-mini-dialog-text");
                elements.minDialogText.innerHTML = settings.btnTitle;   // 设置按钮中的文字
                switch (parseInt(settings.btnStyle))  // 按钮显示的样式
                {
                    case 0:   // 横向
                        toolFun.addClass(elements.show, "aikf-min-dialog-style1");
                        break;
                    case 1:    // 竖向
                        toolFun.addClass(elements.show, "aikf-min-dialog-style2");
                        break;
                    case 2:    // 圆形
                        toolFun.addClass(elements.show, "aikf-min-dialog-style3");
                        break;
                }
                ;
            } else if (settings.btnType == "Cartoon") {
                element.style.position = "absolute";
                element.innerHTML = '';
                moduleFun.showBtnMouseOut();
                //预加载数据
                var stringA = stringB = '';
                var type = '';
                if (dialogSetting.cartoonType == 'redTxt') {
                    stringA = '<img src="' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-redTxt.png"/>';
                    type = 'red';
                    container.style.overflow = 'hidden';
                } else if (dialogSetting.cartoonType == 'blueTxt') {
                    stringA = '<img src="' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-blueTxt.png"/>';
                    type = 'blue';
                    container.style.overflow = 'hidden';
                } else if (dialogSetting.cartoonType == 'whiteTxt') {
                    stringA = '<img src="' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-whiteTxt.png"/>';
                    type = 'white';
                    container.style.overflow = 'hidden';
                } else {
                    container.style.overflow = 'visible';
                    stringA = [
                        '<img src="' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-' + (dialogSetting.cartoonType || 'red') + '-jump.png"/>',
                        '<img src="' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-' + (dialogSetting.cartoonType || 'red') + '-moveHand.png"/>',
                        '<img src="' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-' + (dialogSetting.cartoonType || 'red') + '-smile.png"/>',
                        '<img src="' + serverOpt.ctx + '/ask/resources/images/robot/cartoon-' + (dialogSetting.cartoonType || 'red') + '-wave.png"/>'
                    ].join('');
                    type = dialogSetting.cartoonType || 'red';
                    toolFun.on(elements.clickHoder, 'mouseover', moduleFun.showBtnMouseover);
                    toolFun.on(elements.clickHoder, 'mouseout', moduleFun.showBtnMouseOut);
                }
                stringB = [
                    //窗口  dialog-cartoon-red-left-smile.png
                    '<img src="' + serverOpt.ctx + '/ask/resources/images/robot/dialog-cartoon-' + type + (dialogSetting.btnPosition == 0 || dialogSetting.btnPosition == 2 ? '-right' : '-left') + '-smile.png"/>',
                    '<img src="' + serverOpt.ctx + '/ask/resources/images/robot/dialog-cartoon-' + type + (dialogSetting.btnPosition == 0 || dialogSetting.btnPosition == 2 ? '-right' : '-left') + '-talk.png"/>'].join('');

                elements.tempHelper.innerHTML = stringA + stringB;

            } else if (settings.btnType == "diyImage") {
                element.style.position = "absolute";
                element.innerHTML = '<img id="aikf-diyImage"title="点我咨询哦" src="' + settings.btnUrl + '"/>';
                //解决IE9无法点击
                var browserTwo = toolFun.browserTwo();
                if (browserTwo.browser == "Microsoft Internet Explorer" && browserTwo.trim_Version == "MSIE9.0") {
                    document.getElementById("aikf-diyImage").addEventListener('click', function () {
                        moduleFun.setOpenMin(true, false);
                        moduleFun.show();
                    })
                };
                
            }
            if (settings.btnType == "diyImage") { //自定义图片,必须图片下载成功后,再设置父级宽高和位置
                var imgObj = document.getElementById('aikf-diyImage');
                if (imgObj.complete) {
                    setGo();
                } else {
                    imgObj.onload = setGo;
                }
            } else if (settings.btnType == "text") {
                var imgObj = document.getElementById('aikef-mini-icon');
                if (imgObj.complete) {
                    setGo();
                } else {
                    imgObj.onload = setGo;
                }
            } else {
                setGo();
            }
            function setGo() {
                //先渲染样式之后获取位置的设置
                var dialogBtnH = elements.show.clientHeight;   // 按钮的高度
                var dialogBtnW = elements.show.offsetWidth;
                var browser = toolFun.browser();
                var setStyle = function () {
                    moduleFun.setMiniPosStyle(settings, dialogBtnH, dialogBtnW);
                };
                if (browser.browser && browser.version == 8) {
                    elements.clickHoder.style.backgroundImage = 'url(' + serverOpt.ctx + '/ask/resources/images/webJs/transparent.png)';
                }
                if (browser.browser && browser.version <= 6) {
                    moduleFun.isIe6(settings, dialogBtnH);
                } else {
                    setStyle();
                    toolFun.off(window, 'resize', setStyle);
                    toolFun.on(window, 'resize', setStyle);
                }
            }
        },
        // 设置对话框位置
        setMiniPosStyle: function (settings, dialogBtnH, dialogBtnW) {
            //js  兼容各浏览器
            var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var sideDistanceBtn, sideDistanceBtn;
            sideDistanceBtn = sideDistanceWindow = settings.sideDistance || 0;
            sideDistanceBtn = parseInt(sideDistanceBtn * (w - dialogBtnW) / 1000) + 10;
            sideDistanceWindow = parseInt(sideDistanceWindow * (w - dialogDefaultWidth) / 1000) + 10;

            var belowDistanceBtn, belowDistanceBtn;
            belowDistanceBtn = belowDistanceWindow = settings.belowDistance || 0;
            belowDistanceBtn = parseInt(belowDistanceBtn * (h - dialogBtnH) / 1000);
            belowDistanceWindow = parseInt(belowDistanceWindow * (h - dialogDefaultHeight) / 1000);
            if (settings.btnType == "Cartoon") {
                container.style.height = '150px';

            } else {
                container.style.height = dialogBtnH + 'px';
            }
            container.style.width = dialogBtnW + 'px';
            switch (parseInt(settings.btnPosition)) {
                case 0:  // 左下角
                    elements.containerDialogElem.style.left = sideDistanceWindow + "px";
                    elements.containerDialogElem.style.bottom = "10px";
                    toolFun.addClass(elements.dialogEle, "aikefu-slideInUp");  // 动画显示
                    container.style.left = sideDistanceBtn + "px";
                    container.style.bottom = belowDistanceBtn + 10 + "px";
                    break;
                case 1:   // 右下角
                    elements.containerDialogElem.style.right = sideDistanceWindow + "px";
                    elements.containerDialogElem.style.bottom = "10px";
                    toolFun.addClass(elements.dialogEle, "aikefu-slideInUp");  // 动画显示
                    container.style.right = sideDistanceBtn + "px";
                    container.style.bottom = belowDistanceBtn + 10 + "px";
                    break;
                case 2:   //左侧上下居中
                    elements.containerDialogElem.style.left = "10px";
                    elements.containerDialogElem.style.top = "50%";
                    elements.containerDialogElem.style.marginTop = (-(dialogDefaultHeight * 0.5) - belowDistanceWindow) + "px";
                    toolFun.addClass(elements.dialogEle, "aikefu-slideInLeft");  // 动画显示
                    container.style.left = sideDistanceBtn + "px";
                    container.style.top = "50%";
                    container.style.marginTop = (-(dialogBtnH * 0.5)) - belowDistanceBtn + "px";
                    if (settings.btnType == "Cartoon") {
                        container.style.marginTop = (-(dialogBtnH * 0.5)) - belowDistanceBtn + 100 + "px"
                    }
                    break;
                case 3:  // 右侧上下居中
                    elements.containerDialogElem.style.right = "10px";
                    elements.containerDialogElem.style.top = "50%";
                    elements.containerDialogElem.style.marginTop = (-(dialogDefaultHeight * 0.5) - belowDistanceWindow) + "px";
                    toolFun.addClass(elements.dialogEle, "aikefu-slideInRight");  // 动画显示
                    container.style.right = sideDistanceBtn + "px";
                    container.style.top = "50%";
                    container.style.marginTop = (-(dialogBtnH * 0.5)) - belowDistanceBtn + "px";
                    if (settings.btnType == "Cartoon") {
                        container.style.marginTop = (-(dialogBtnH * 0.5)) - belowDistanceBtn + 100 + "px"
                    }
                    break;
            }
            ;
        },
        isIe6: function (settings, dialogBtnH) {
            var winH = document.documentElement.clientHeight,
                docH = document.body.clientHeight,
                miniBtnIcon = document.getElementById("aikef-mini-icon"),  // 设置兼容ie6的图片
                scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            miniBtnIcon.src = serverOpt.ctx + '/ask/resources/images/kefu-icon-8.png';

            // 根据后台设置初始化位置
            moduleFun.ie6Setting(settings, winH, scrollTop, dialogBtnH);

            window.onscroll = function () {
                scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                moduleFun.ie6Setting(settings, winH, scrollTop, dialogBtnH);
            }
        },
        // 兼容ie6的位置设置
        ie6Setting: function (settings, winH, scrollTop, dialogBtnH) {
            var defaultBtnPos, scrollBtnPos;
            switch (parseInt(settings.btnPosition)) {
                case 0:
                    scrollBtnPos = winH + scrollTop - dialogBtnH;
                    scrollDialogPos = winH + scrollTop - dialogDefaultHeight;
                    elements.show.style.top = scrollBtnPos + "px";
                    elements.show.style.left = "10px";
                    elements.containerDialogElem.style.left = "10px";
                    elements.containerDialogElem.style.top = scrollDialogPos + "px";
                    break;
                case 1:
                    scrollBtnPos = winH + scrollTop - dialogBtnH;
                    scrollDialogPos = winH + scrollTop - dialogDefaultHeight;
                    elements.show.style.top = scrollBtnPos + "px";
                    elements.show.style.right = "10px";
                    elements.containerDialogElem.style.right = "10px";
                    elements.containerDialogElem.style.top = scrollDialogPos + "px";
                    break;
                case 2:
                    scrollBtnPos = (winH * 0.5) + scrollTop - (dialogBtnH * 0.5);
                    scrollDialogPos = (winH * 0.5) + scrollTop - (dialogDefaultHeight * 0.5);
                    elements.show.style.top = scrollBtnPos + "px";
                    elements.show.style.left = "10px";
                    elements.containerDialogElem.style.left = "10px";
                    elements.containerDialogElem.style.top = scrollDialogPos + "px";
                    break;
                case 3:
                    scrollBtnPos = (winH * 0.5) + scrollTop - (dialogBtnH * 0.5);
                    scrollDialogPos = (winH * 0.5) + scrollTop - (dialogDefaultHeight * 0.5);
                    elements.show.style.top = scrollBtnPos + "px";
                    elements.show.style.right = "10px";
                    elements.containerDialogElem.style.right = "10px";
                    elements.containerDialogElem.style.top = scrollDialogPos + "px";
                    break;
            }
        },
        showBtnMouseover: function () {
            var element = elements.show,
                animate = [
                    {type: 'jump', len: 28},
                    {type: 'moveHand', len: 13},
                    {type: 'smile', len: 12},
                    {type: 'wave', len: 20}
                ], ain;

            ain = animate[Math.round(3 * Math.random())];
            element.ainmate = ain;

            element.timer && clearInterval(element.timer);
//			判断是否设置动画效果
            if (channelAnimation) {
                element.className = "aikf-min-dialog aikefu-cartoon-" + (dialogSetting.cartoonType || 'red') + '-' + ain.type + "-showBtn";
                element.cartoonIndex = 0;

                element.timer = setInterval(function () {

                    element.cartoonIndex++;
                    if (element.cartoonIndex > ain.len) {
                        element.cartoonIndex = 0;
                    }
                    element.style.backgroundPosition = -element.cartoonIndex * 100 + 'px top';

                }, 100)
            }

        },
        showBtnMouseOut: function () {
            var element = elements.show;
            element.cartoonIndex = 0;
            element.timer && clearInterval(element.timer);

            element.className = "aikf-min-dialog aikefu-cartoon-" + (dialogSetting.cartoonType || 'red') + "-showBtn";
//			判断是否设置动画效果
            if (channelAnimation) {
                element.timer = setInterval(function () {

                    element.cartoonIndex++;
                    if (element.cartoonIndex > 17) {
                        element.cartoonIndex = 0;
                    }
                    element.style.backgroundPosition = -element.cartoonIndex * 100 + 'px top';

                }, 80);
            }
        },
        setDialogCartoon: function () {
//			判断是否设置动画效果
            if (channelAnimation) {
                var element = elements.dialogCartoon,
                    classPre = "aikefu-dialog-cartoon-" + ((dialogSetting.cartoonType).replace('Txt', '') || 'blue') + (dialogSetting.btnPosition == 0 || dialogSetting.btnPosition == 2 ? '-right' : '-left'),
                    classList = [
                        {cls: classPre + "-smile", len: 14},
                        {cls: classPre + "-talk", len: 8}
                    ],
                    animationFun = function () {
                        element.cartoonIndex = 0;
                        element.timer && clearInterval(element.timer);
                        element.timer = setInterval(function () {

                            element.cartoonIndex++;
                            if (element.cartoonIndex > element.animateType.len) {
                                element.cartoonIndex = 0;
                            }
                            element.style.backgroundPosition = -element.cartoonIndex * 70 + 'px top';

                        }, 80);
                    };
                toolFun.addClass(element, classPre + "-smile");
                element.animateType = classList[0];
                animationFun();

                element.changeAnimationTimer && clearInterval(element.changeAnimationTimer);
                element.changeAnimationTimer = setInterval(function () {
                    if (element.className == classList[0].cls) {
                        element.className = classList[1].cls;
                        element.animateType = classList[1];
                    } else {
                        element.className = classList[0].cls;
                        element.animateType = classList[0];
                    }
                    animationFun();

                }, element.animateType.len * 80 * 5)
            }
        },
        stopShowBtnAni: function () {
            if (dialogSetting.btnType == 'Cartoon') {
                clearInterval(elements.show.timer);
            }
        },
        startShowBtnAni: function () {
            if (dialogSetting.btnType == 'Cartoon') {
                moduleFun.showBtnMouseOut();
            }
        },
        setOpenMin: function (open, minus) {
            toolFun.post({
                url: serverOpt.ctx + "/ask/setWindowOpenAndWindowMinus.htm",
                data: {
                    open: open,
                    minus: minus,
                    tenantId: serverOpt.tenantId
                }
            });
        }
    }

    //最小化窗口
    toolFun.on(elements.minus, 'click',
        function () {
            moduleFun.setOpenMin(true, true);
            moduleFun.minu();
        });
    //显示窗口
    toolFun.on(elements.clickHoder, 'click',
        function () {
            moduleFun.setOpenMin(true, false);
            moduleFun.show();
        }
    );
    //兼容IE9
    if(toolFun.browserTwo().browser == "Microsoft Internet Explorer" && toolFun.browserTwo().trim_Version == "MSIE9.0"){
    	elements.minDialogText.style.cursor= 'pointer';
    	toolFun.on(elements.minDialogText, 'click',
    	        function () {
    	            moduleFun.setOpenMin(true, false);
    	            moduleFun.show();
    	        }
    	    );
    };
    //关闭窗口
    toolFun.on(elements.close, 'click', function () {
        moduleFun.close()
    });
    //评价
    for (var i = 0; i < elements.evalStarList.length; i++) {
        starDom = elements.evalStarList[i];
        starDom.index = i;
        // toolFun.on(starDom, 'mouseover', function () {
        //     for (var j = 0; j < elements.evalStarList.length; j++) {
        //         if (elements.evalStarList[j].index <= this.index) {
        //             toolFun.addClass(elements.evalStarList[j], 'starRed')
        //         } else {
        //             toolFun.removeClass(elements.evalStarList[j], 'starRed')
        //         }
        //     }
        // });

        //注释鼠标移出星星全部变灰
//		toolFun.on(starDom,'mouseout',function(){
//			for(var j=0;j<elements.evalStarList.length;j++){
//				toolFun.removeClass(elements.evalStarList[j],'starRed')
//			}
//		});		
        // 点击星星提交评价
//		toolFun.on(starDom,'click',function(){
//			var score = this.index
//			if(score>=2){
//				moduleFun.satisfaction(score+1);
//			}else{
//				moduleFun.badReview(score+1);
//			}
//		});

        // 获取全部星星 ask
        var temporaryStarArr = document.getElementById('aikf-eval-starList').children,
        // 共多少星星变红
            starRedSum;
        for (var i = 0, l = temporaryStarArr.length - 1; i < l; i++) {

            // 为所有星星注册点击事件
            (function indexInit(index) {
            	temporaryStarArr[i].onclick = function (event) {

                    starRedSum = index;

                    //将要展示几星对应文字的盒子 也就是 非常满意 非常不满意什么的
                    var evaluate = document.getElementById('starLevel_satisfy');

                    //删除所有的 class starRed
                    for (var k = 0, j = temporaryStarArr.length; k < j; k++) {
//                        temporaryStarArr[k].classList.remove('starRed');
                        toolFun.removeClass(temporaryStarArr[k],'starRed');
                        
                    }

                    // 点击几星 激活几星
                    for (var f = 0; f < j; f++) {
//                        temporaryStarArr[f].classList.add('starRed');
                        toolFun.addClass(temporaryStarArr[f],'starRed');
                        if (temporaryStarArr[f] === this) break;
                    }

                    var starLeaveBoxLabelBox = document.getElementById('starLeaveLabelBox');

                    function showStarLabel(num) {
                        for (var s = 0; s < starLeaveBoxLabelBox.childNodes.length; s++) {

                            var currentSpan = starLeaveBoxLabelBox.childNodes[s];

//                            currentSpan.classList.remove('label_active');
                            toolFun.removeClass(currentSpan,'label_active');

                            switch (num !== '') {

                                case num === 0:

                                    if (currentSpan.className.indexOf('oneStar') > -1) {
                                        currentSpan.style.display = 'inline';
                                    } else {
                                        currentSpan.style.display = 'none';
                                    }

                                    break;

                                case num === 1:

                                    if (currentSpan.className.indexOf('twoStar') > -1) {
                                        currentSpan.style.display = 'inline';
                                    } else {
                                        currentSpan.style.display = 'none';
                                    }

                                    break;

                                case num === 2:

                                    if (currentSpan.className.indexOf('threeStar') > -1) {
                                        currentSpan.style.display = 'inline';
                                    } else {
                                        currentSpan.style.display = 'none';
                                    }

                                    break;

                                case num === 3:

                                    if (currentSpan.className.indexOf('fourStar') > -1) {
                                        currentSpan.style.display = 'inline';
                                    } else {
                                        currentSpan.style.display = 'none';
                                    }

                                    break;

                                case num === 4:

                                    if (currentSpan.className.indexOf('fiveStar') > -1) {
                                        currentSpan.style.display = 'inline';
                                    } else {
                                        currentSpan.style.display = 'none';
                                    }

                                    break;


                            }

                        }
                    }

                    // 判断点击几星显示什么评价
                    switch (index !== '') {

                        case index === 0 :
                            evaluate.innerText = '非常不满意';
                            showStarLabel(index);
                            break;

                        case index === 1 :
                            evaluate.innerText = '不满意';
                            showStarLabel(index);
                            break;

                        case index === 2 :
                            evaluate.innerText = '一般';
                            showStarLabel(index);
                            break;

                        case index === 3 :
                            evaluate.innerText = '满意';
                            showStarLabel(index);
                            break;

                        case index === 4 :
                            evaluate.innerText = '非常满意';
                            showStarLabel(index);
                            break;
                    }

                }
               /* temporaryStarArr[i].on('click', )*/
            })(i);
        }

        //提交评价按钮
        var submintStarBtn = document.getElementById('starSubmitBtn');
        toolFun.on(submintStarBtn, 'click', function () {
            var starAll = document.getElementById('aikf-eval-starList').children;
            var sum = 0;
            for (var i = 0, l = starAll.length; i < l; i++) {
            	var name = toolFun.trim(starAll[i].className);
                if (name === 'starRed' && starAll[i].localName === 'a') {
                    sum += 1;
                }
            }

            var commentLabel = '', userComment='';

            var commentArr = toolFun.getElementsByClassName('userComment');
            userComment = commentArr[0].value;
            var commentLabels = toolFun.getElementsByClassName('label_active');

            for(var j = 0; j < commentLabels.length; j++){
                if(commentLabel === ''){
                    commentLabel = commentLabel + commentLabels[j].innerText
                }else{
                    commentLabel = commentLabel + ',' + commentLabels[j].innerText
                }
            }

            toolFun.post({
                url: serverOpt.ctx + "/ask/evaluateSys.htm?hashParam=" + hashParam,
                data: {
                    param: sum,
                    commentLabel: commentLabel,
                    userComment: userComment,
                },
                success: function (data) {
                    //console.log(data);
                    // moduleFun.disconnect();
                    moduleFun.evalResult("您对服务的满意是我们的荣幸！",  sum);

                    //还原评价框
                    var eval = toolFun.getElementsByClassName('userComment');
                    eval[0].value = '';
                    var starLeaveLabel = toolFun.getElementsByClassName('satisfy_label');
                    for(var s = 0; s < starLeaveLabel.length; s ++){
//                        starLeaveLabel[s].classList.remove('label_active');
                        toolFun.removeClass( starLeaveLabel[s],'label_active');
                        
                    }
                }
            })

            // if (sum >= 2) {
            //     moduleFun.satisfaction(sum);
            // } else {
            //     moduleFun.badReview(sum);
            // }
        });

    }


    toolFun.on(elements.mask, 'click', moduleFun.evaluHide);

    //(监听iframe信息)留言后关闭窗口.
    toolFun.myAddEvent(window, 'message', function (e) {
        if (e.origin == serverOpt.ctx) {
            if (e.data == "close") {
                moduleFun.close(true);
            } else if (e.data.indexOf('roll-') > 0) {
                talkScroll = e.data;
            }
        }
    })
    //console.log(serverOpt.tenantId);
    toolFun.post({
        url: serverOpt.ctx + "/ask/r/setting.htm",
        data: {
            tid: serverOpt.tenantId
        },
        success: function (data) {
            //console.log(data);

            var box = document.getElementById('starLeaveLabelBox');
            //console.log(box);

            for (var i = 0, l = data.labelSetting.length; i < l; i++) {

                var span = document.createElement('span');

                span.style.display = 'none';
                span.innerText = data.labelSetting[i].labelContent;
                span.onclick = function (event) {
                    if ((this.getAttribute('class')).indexOf('label_active') > 0) {
//                        this.classList.remove('label_active');
                        toolFun.removeClass(this,'label_active');
                        
                    } else {
//                        this.classList.add('label_active');
                        toolFun.addClass(this,'label_active');
                    }
                }
              /*  span.addEventListener('click', )
*/
                switch (data.labelSetting[i].satisfyLevel !== '') {

                    case data.labelSetting[i].satisfyLevel == 1 :
                        span.setAttribute('class', 'satisfy_label oneStar');
                        break;

                    case data.labelSetting[i].satisfyLevel == 2 :
                        span.setAttribute('class', 'satisfy_label twoStar');
                        break;

                    case data.labelSetting[i].satisfyLevel == 3 :
                        span.setAttribute('class', 'satisfy_label threeStar');
                        break;

                    case data.labelSetting[i].satisfyLevel == 4 :
                        span.setAttribute('class', 'satisfy_label fourStar');
                        break;

                    case data.labelSetting[i].satisfyLevel == 5 :
                        span.setAttribute('class', 'satisfy_label fiveStar');
                        //默认显示标签
                        span.style.display = 'inline';
                        break;
                }
                box.appendChild(span);

            }


            serverOpt.serviceEval = data.serviceEval;
            serverOpt.domainName = data.domainName;
            hashParam = data.hashParam;
            windowAppearWay = data.windowAppearWay || 0;
            elements.starSubmitBtn.style.backgroundColor = data.windowColor;
            window.aikfStyleSettingFunc(data);
            var ifViewWindow = window.location.pathname.indexOf('interfaceManagement/toGetIframeHtml.htm') > -1;
            if (data.windowAppearWay == 0 && !ifViewWindow) {
                if (data.windowMinus) { //窗口未展开
                    if (data.windowOpen) { //窗口已初始化
                        moduleFun.show();
                        moduleFun.minu();
                    } else {

                    }
                } else {//窗口展开（已初始化）
                    if (data.windowOpen) {
                        moduleFun.show();
                    }
                }
            }
        }
    });
    window.aikfStyleSettingFunc = function (data) {
        switch (parseInt(data.btnType)) {
            case 0:
                data.btnType = 'text';
                break;
            case 1:
                data.btnType = 'Cartoon';
                break;
            case 3:
                data.btnType = 'diyImage';
                break;
        }
        if (data.btnType == 'Cartoon') {
            switch (parseInt(data.btnStyle)) {
                case 0:
                    data.cartoonType = 'red';
                    break;
                case 1:
                    data.cartoonType = 'white';
                    break;
                case 2:
                    data.cartoonType = 'blue';
                    break;
                case 3:
                    data.cartoonType = 'redTxt';
                    break;
                case 4:
                    data.cartoonType = 'whiteTxt';
                    break;
                case 5:
                    data.cartoonType = 'blueTxt';
                    break;
            }

        }
        //在线咨询窗口设置
        if (data.btnType == 'Cartoon') {
            dialogSetting = {
                btnType: data.btnType || 'Cartoon',
                cartoonType: data.cartoonType || 'red',//red blue white
                btnPosition: data.btnPosition || 1,
                windowAppearWay: data.windowAppearWay || 0,
                sideDistance: data.sideDistance,
                belowDistance: data.belowDistance
            };
        } else if (data.btnType == 'diyImage') {
            dialogSetting = {
                btnType: data.btnType || 'diyImage',
                btnUrl: data.btnUrl || aikf_default_img,
                btnPosition: data.btnPosition || 1,
                windowColor: data.windowColor || '#ea5369',
                windowAppearWay: data.windowAppearWay || 0,
                sideDistance: data.sideDistance,
                belowDistance: data.belowDistance
            };
        } else {
            dialogSetting = {
                btnType: data.btnType || 'Cartoon',
                btnPosition: data.btnPosition || 1,
                btnStyle: data.btnStyle || 0,
                windowColor: data.windowColor || '#ea5369',
                btnTitle: data.btnTitle || '点我咨询',
                windowAppearWay: data.windowAppearWay || 0,
                sideDistance: data.sideDistance,
                belowDistance: data.belowDistance
            };
        }
        moduleFun.setMiniDialog(dialogSetting);
    }
})()
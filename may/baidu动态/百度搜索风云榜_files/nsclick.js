function logrequireparams() {
    var e = {pid: "201",productline: "cun",productsub: "cun",pj: "ext_hl",tab: "query",logactionid: "0100100011"}, n = [];
    for (var t in e)
        n.push(t + "=" + e[t]);
    return n.join("&")
}

function randomlogurl(){
    var t=Math.random()*10|0;
    return "http://dj" + t + ".baidu.com/v.gif"
}

function nsclick(){
    var b=randomlogurl()+"?y=v&"+logrequireparams();
    var a=window["BD_PS_V"+(new Date()).getTime()+"r"+Math.random()]=new Image();
    a.src=b+"&t="+new Date().getTime()+"r"+Math.random()+"&f="+encodeURIComponent(document.referrer);
    a.onload=a.onerror=function(){
        a=null
    }
}
nsclick();
function ClickMonkey(g){
    var c=randomlogurl()+"?y=c&"+logrequireparams();
    var b=function(j,i){
        var h=window["BD_PS_C"+(new Date()).getTime()+"r"+Math.random()]=new Image();
        h.src=c+"&t="+new Date().getTime()+"r"+Math.random()+"&o="+j+"&r="+i;
        h.onload=h.onerror=function(){
            h=null
        }
    };
    
    var a="";
    var f=function(h)
    {
        if(a!=""){
            return
        }
        a=h.monkey||h.getAttribute("monkey")||a;
        if(h.parentNode&&h.parentNode.tagName.toUpperCase()!="BODY")
        {
            f(h.parentNode)
        }
        else
        {
            return
        }
    };

    var e=function(l,k,i,h){
        if(l.addEventListener){
            l.addEventListener(k,i,h);
            return true
        }else{
            if(l.attachEvent){
                var j=l.attachEvent("on"+k,i);
                return j
            }
        }
    };

    e(document.body,"mousedown",function(j){
        var j=window.event||j;
        var i=j.srcElement||j.target;
        if(i.tagName.toUpperCase()!="A"){
            if(i.parentNode.tagName.toUpperCase()=="A"){
                i=i.parentNode
            }else{
                return
            }
        }
        a="";
        if(g){
            f(i)
        }
        var h=i.getAttribute("href",2);
        if(h&&!(/^javascript|#/.test(h))){
            objurl=encodeURIComponent(i.href)
        }else{
            objurl=""
        }
        if(objurl){
            if(a){
                a=encodeURIComponent(a)
            }
            b(objurl,a)
        }
    });
    var d=function(i,h){
        i=encodeURIComponent(i);
        h=encodeURIComponent(h);
        b(i,h)
    };
    
    return{
        log:d
    }
};

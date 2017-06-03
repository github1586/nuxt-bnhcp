/**
 * [check 判断在微信端的提示信息]
 * @param {[string]} oWei [微信提示容器]
 * @param {[string]} oTxt [不同系统浏览器提示语]
 * @param {[string]} oBtn [下载按钮]
 * @param {[string]} oBtnKonw [引导层按钮]
 * @return {[type]} [description]
 */
function check(oWei, oTxt, oBtn, oBtnKonw){
    var oWei = document.getElementById(oWei);
    var oTxt = document.getElementById(oTxt);
    var oBtnLoad = document.getElementById(oBtn);

    oWei.style.display = 'none';

    if(checkUserAgent()){
        oTxt.innerHTML = '"在Safari中打开"';
    }
    // 判定微信客户端交互
    if(isWeiXin()){
        oBtnLoad.setAttribute("href", "javascript:;");
        oBtnLoad.onclick = function(){
            oWei.style.display = '';
        }
        // 我知道了按钮交互
        var oBtn = document.getElementById(oBtnKonw);
        oBtn.onclick = function(){
            oWei.style.display = 'none';
        }
    }
}

/**
 * [setLink 检测手机设备进行按钮赋值]
 * @param {[string]} iosUrl [苹果的链接]
 * @param {[string]} anUrl  [安卓的链接]
 * @param {[string]} oBtn  [下载按钮]
 */
function setLink(iosUrl, anUrl, oBtn){
    var oBtnLoad = document.getElementById(oBtn);
    // 判定手机系统设置下载链接
    if(checkUserAgent()){
        if(!isWeiXin()){
            oBtnLoad.setAttribute("href", iosUrl);
            window.location.href = iosUrl;
        }
        // if(!isGtIos6()){alert('请使用苹果IOS6.0及以上系统机型进行安装');}
    }else{
        oBtnLoad.setAttribute("href", anUrl);
    }
}

/**
 * [setLinkQiYe 检测手机设备进行按钮赋值--企业版(不在appstore中下载的情况)]
 * @param {[string]} iosUrl [苹果的链接]
 * @param {[string]} anUrl  [安卓的链接]
 * @param {[string]} oBtn  [下载按钮]
 */
function setLinkQiYe(iosUrl, anUrl, oBtn){
    var oBtnLoad = document.getElementById(oBtn);
    // 判定手机系统设置下载链接
    if(checkUserAgent()){
        if(!isWeiXin()){
            oBtnLoad.setAttribute("href", iosUrl);
        }
    }else{
        oBtnLoad.setAttribute("href", anUrl);
        // 安卓的下载提示信息
        // oBtnLoad.onclick = function(){
        //     layerM.alert({
        //         content: "正在下载中...<p>详情请到浏览器下载管理中查看</p>",
        //         btn: ["知道了"]
        //     })
        // }
    }
}

/**
 * [setCenter 设置页面主要内容居中]
 * @param {[string]} obj [内容外层]
 */
function setCenter(obj){
    var iHei = getViewPortSize().height;
    var oEle = document.getElementById(obj);
    var iEleHei = oEle.offsetHeight;

    if(iHei > iEleHei){
        oEle.style.paddingTop = (iHei - iEleHei)/2 + "px";
        // oEle.style.paddingBottom = (iHei - iEleHei)/2 + "px";
    }else{
        oEle.style.paddingTop = "35px";
        oEle.style.paddingBottom = "35px";
    }
}

/**
 * [isWeiXin 判断是否是微信客户端打开]
 * @return {Boolean} [description]
 */
function isWeiXin(){ 
    var ua = window.navigator.userAgent.toLowerCase(); 
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
        return true; 
    }else{ 
        return false; 
    } 
}

/**
 * [isGtIos6 判断是否是 ios6 以下系统]
 * @return {Boolean} [description]
 */
function isGtIos6() {
    // 判断是否 iPhone 或者 iPod
    if((navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPadMini/i))) {
        // 判断系统版本号是否大于 6
        return Boolean(navigator.userAgent.match(/OS [6-99]_\d[_\d]* like Mac OS X/i));
    } else {
        return false;
    }
} 

/**
 * [checkUserAgent 检测设备是否为苹果系统]
 * @return {[boolen]} [是苹果系统返回布尔值 true]
 */
function checkUserAgent(){
    var ua = window.navigator.userAgent.toLocaleLowerCase();
    var matchedREApple = /iphone|ipad/i;
    var boole = matchedREApple.test(ua);
    return boole;
}

/**
 * [getViewPortSize 获取浏览器窗口的宽和高]
 * @return {[json]} [宽和高]
 */
function getViewPortSize(){
    var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var scrollL = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    return {"width": winWidth + scrollL, "height":winHeight + scrollT};
}
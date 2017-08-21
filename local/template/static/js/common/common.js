$(document).ready(function(){

})

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
 * [comnBottom 公共底部下载App事件]
 * @return {[null]} [description]
 */
function comnBottom(obj){
	var isIphone = checkUserAgent();
	if(isIphone){
		$(obj).on("tap", function(){
			layerM.confirm({
				content:'<p class="down_txt">确认下载"https://appsto.re/cn/XSlw_.i"？</p>文件大小:9.4M',
				btn: ["下载", "取消"],
				className: "down_load",
				shadeClose: false,
				yes: function(idx){
					window.location.href="https://itunes.apple.com/cn/app/bao-na-hao/id1062779697?l=en&mt=8";
					layer.close(idx);
				}
			});
		})
	}else{
		$(obj).on("tap", function(){
			layerM.confirm({
				content:'<p class="down_txt">确认下载"com.xiaohe.baonahao_parents.apk"？</p>文件大小:5.1M',
				btn: ["下载", "取消"],
				className: "down_load",
				shadeClose: false,
				yes: function(idx){
					window.location.href="http://a5.pc6.com/pc6_soure/2015-12/com.xiaohe.baonahao_parents_1.apk";
					layer.close(idx);
				}
			});
		})
	}
}

/**
 * [clearHis 清除历史记录]
 * @param  {[string]} obj    [事件按钮]
 * @param  {[string]} target [清空对象元素]
 * @return {[null]}
 */
function clearHis(obj, target){
	$(obj).on("tap", function(){
		// $(target).html("");
		$(target).hide();
		$(this).hide();
	})
}

/**
 * [goPage 页面跳转]
 * @param  {[string]} url [要跳转的 url]
 * @return {[null]}
 */
function goPage(url){
	window.location.href = url;
}

/**
 * [sideBar 侧边栏]
 * @param  {[string]} btn   [发生点击事件的元素]
 * @param  {[string]} side  [侧边栏]
 * @param  {[number]} speed [动画速度]
 * @return {[type]}       [description]
 */
// function sideBar(btn, side, speed){
// 	var iSrolL = $(side).width();
// 	$(btn).on("tap", function(){
// 		$("<div class='sidebar_mask'></div>").appendTo($("body"));
// 		$(side).animate({
// 			right: 0
// 		}, speed);
// 		$(".sidebar_mask").on("tap", function(){
// 			$(side).animate({
// 				right: (-iSrolL - 11)
// 			}, speed, function(){
// 				$(".sidebar_mask").remove();
// 			});
// 		})
// 	})
// }

// 侧边栏优化
function sideBar(btn, side, speed){
	var iSrolL = $(side).width();
	$(btn).on("tap", function(){
		$("<div class='sidebar_mask'></div>").appendTo($("body"));
		$(side).animate({
			// "-webkit-transform": "translate("+ (-iSrolL - 11) +"px,0px)"
			"-webkit-transform": "translate(0px,0px)"
		}, speed);
		$(".sidebar_mask").on("tap", function(){
			$(side).animate({
				// right: (-iSrolL - 11)
				"-webkit-transform": "translate("+ iSrolL +"px,0px)"
			}, speed, function(){
				$(".sidebar_mask").remove();
			});
		})
	})
}

/* 搜课搜机构 */
// 普通选项卡函数
/**
 * [tabSwitch 普通选项卡]
 * @param  {[string]} obj [选项卡标题]
 * @param  {[string]} tab [选项卡内容]
 * @return {[type]}     [description]
 */
function tabSwitch(obj, tab){
	$(obj).on("tap", function(){
		var iInd = $(obj).index(this);
		if($(this).parent().attr("data-role") == "drap" && !$(this).hasClass('on')){
			$("#select_menu").show();
			$(obj).removeClass('on');
			$(this).addClass('on');
			$(tab).removeClass('on');
			if(!$(".marsk_opcity").length){
				$("<div class='marsk_opcity'></div>").appendTo($("body"));
			}
		}else if($(this).parent().attr("data-role") == "drap" && $(this).hasClass('on')){
			$("#select_menu").hide();
			$(this).removeClas('on');
			$(".marsk_opcity").remove();
		}
		if(!$(this).hasClass('on') && $(this).parent().attr("data-role") != "drap"){
			$(obj).removeClass('on');
			$(this).addClass('on');
			$(tab).removeClass('on');
			$(tab).eq(iInd).addClass('on');
			$("#select_menu").hide();
			if(!$(".marsk_opcity").length){
				$("<div class='marsk_opcity'></div>").appendTo($("body"));
			}
			disableScroll(0);
		}else if($(this).hasClass('on') && $(this).parent().attr("data-role") != "drap"){
			$(obj).removeClass('on');
			$(tab).removeClass('on');
			$("#select_menu").hide();
			$(".marsk_opcity").remove();
			disableScroll(1);
		}
		$(".marsk_opcity").on("tap", function(){
			$(".search_tab").removeClass('on');
			$(".order_sort_u a").removeClass('on');
			$("#select_menu").hide();
			$(this).remove();
			disableScroll(1);
			// 取消事件穿透
			$(".agent_list_con").css("pointer-events", "none");
			setTimeout(function(){
				$(".agent_list_con").css("pointer-events", "auto");
			}, 1400);
		});
	});
}

// 二级选项卡函数
function secondSwitch(obj, tab){
	$(obj).on("tap", function(){
		var iInd = $(this).parent().find(obj).index(this);
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		$(this).parent().siblings().find(tab).removeClass('on');
		$(this).parent().siblings().find(tab).eq(iInd).addClass('on');
	});
}

// 三级选项卡函数
function thirdSwitch(obj){
	$(obj).on("tap", function(e){
		e.preventDefault();
		if($(this).hasClass('third_menu')){
			if($(this).siblings().hasClass('current')){
				$(this).siblings('.third_menu_con').show();
				$(this).removeClass('on')
				$(this).siblings().removeClass('current');
			}else{
				$(this).siblings('.third_menu_con').hide();
				$(this).addClass('on')
				$(this).siblings().addClass('current');
			}
			
		}
	});
}

/**
 * [checkbox 模拟checkbox样式，没有input框]
 * @param  {[string]} sty [复选框的data-role属性]
 * @param  {[string]} ele [添加样式的目标元素]
 * @return {[type]}     [description]
 */
function checkbox(sty, ele, callback){
	var aCheck = $("[data-role='"+ sty +"'] "+ ele);
	aCheck.on("tap", function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		}
		else{
			$(this).addClass('on');
		}
		if(callback){
			callback($(this).parent());
		}
	})
}

/**
 * [radio 模拟单选框样式]
 * @param  {[string]} sty [单选框的data-role属性]
 * @param  {[string]} ele [添加样式的目标元素]
 * @return {[type]}     [description]
 */
function radio(sty ,ele, callback){
	// var aCheck = $("[data-role='"+ sty +"'][data-group='"+ group +"'] "+ ele);
	var aCheck = $("[data-role='"+ sty +"'] "+ ele);
	aCheck.on("tap", function(){
		if($(this).hasClass('on')){
			if(callback){
				callback();
				return;
			}
			$(this).removeClass('on');
		}
		else{
			aCheck.removeClass('on');
			$(this).addClass('on');
		}
		if(callback){
			callback();
		}
	})

}

function radioNojump(sty ,ele, callback){
	// var aCheck = $("[data-role='"+ sty +"'][data-group='"+ group +"'] "+ ele);
	var aCheck = $("[data-role='"+ sty +"'] "+ ele);
	aCheck.on("tap", function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		}
		else{
			aCheck.removeClass('on');
			$(this).addClass('on');
		}
		if(callback){
			callback($(this).parent());
		}
	})

}

/**
 * [select 模拟选择框样式]
 * @return {[type]} [description]
 */
function select(){
	var aSlec = $("[data-role='select']");
	var aSle = aSlec.find('select');

	aSle.on("change", function(){
		// 第一种取值
		// var sVal = $(this).find('option:checked').html();

		// 第二种取值
		var iInd = $(this).get(0).selectedIndex;
		var sVal = $(this).find('option').eq(iInd).text();

		$(this).siblings('p').find("span").html(sVal);
	})
}

/**
 * [selectSec 模拟选择框样式--没有嵌套关系]
 * @return {[type]} [description]
 */
function selectSec(txt){
	var aSlec = $("[data-role='select']");
	var aSle = aSlec.find('select');

	aSle.on("change", function(){
		// 第一种取值
		// var sVal = $(this).find('option:checked').html();

		// 第二种取值
		var iInd = $(this).get(0).selectedIndex;
		var sVal = $(this).find('option').eq(iInd).text();

		if(iInd == 0){
			var sVal = $(this).find('option').eq(iInd).text();
			$(this).siblings(txt).html(sVal);
		}
		$(this).siblings(txt).html(sVal);
	})
	aSle.on("blur", function(){
		var iInd = $(this).get(0).selectedIndex;
		var sVal = $(this).find('option').eq(iInd).text();

		if(iInd == 0){
			var sVal = $(this).find('option').eq(iInd).text();
			$(this).siblings(txt).html(sVal);
		}
	})
}

/**
 * [selectFang 模仿select行为]
 * @param  {[string]} obj  [description]
 * @param  {[type]} txt  [description]
 * @param  {[type]} list [description]
 * @return {[type]}      [description]
 */
function selectFang(obj, txt, list){
	var oSele = $("[data-role='selectFang']");
	var oSeTxt = oSele.find("[data-role='sel_txt']");
	var oSelList = oSele.find("[data-role='sel_list']");
	var oSelLis = oSelList.find("li");

	oSele.on("tap", function(ev){
		oSelList.show();
		ev.preventDefault();
		return false;
	})
	oSelLis.on("tap", function(ev){
		var sStr = $(this).html();
		oSeTxt.html(sStr);
		$(this).parent().css({"display":"none"});
		ev.preventDefault();
		return false;
	})

	$(document).on("tap", function(){
		if(oSelList.css("display") == "block"){
			oSelList.hide();
		}
	});
}

// 判断函数的定义
/**
 * [isLoad 滚动加载效果]
 * @param  {[string]}  oContainer [父容器]
 * @param  {[string]}  oChild     [子元素]
 * @return {Boolean}            [true 加载]
 */
function isLoad(oContainer, oChild){
		
	// 大容器
	var oReContain = $(oContainer);
	// 单个元素的高度
	var iReHei = oReContain.find(oChild).eq(0).height();

	// 页面的高度
	var iPageHei = $(document).height();

	// 最后一个内容
	var oReLast = oReContain.find(oChild).last();
	// 最后一个元素的相对高度
	var iLaHei = oReLast.offset().top;

	// 页面的滚动距离
	var iSclTop = $(window).scrollTop();
	
	return (iSclTop + iPageHei > iLaHei + iReHei/2) ? true : false;
}

/**
 * [childList 滑动组件]
 * @param  {[string]} obj [列表容器的id]
 * @param  {[string]} btn [多余的添加按钮]
 * @return {[type]}     [description]
 */
function childList(obj, btn){
	var oList = $("#" + obj);
	var aList = oList.find('li');
	var iWid = aList.eq(0).width();
	var iBtn = $("#" + btn).width();
	oList.css({
		width: iWid*aList.length + iBtn
	})
}

// layer prompt层
function layerPrompt(obj, txt, inp ,proTit ,proTxt){
	var aLayPro = $("[data-role='" + obj +"']");
	aLayPro.on("tap", function(){
		var oTxt = $(this).find(txt);
		var oInp = $(this).find(inp);
		layerM.prompt({
			// title: "prompt层",
			promptTit: proTit,
			promptTxt: proTxt,
			promptId: "input",
			isBtn: true,
			shadeClose: false
		},function(data){
			if(data){
				oTxt.html(data);
				oInp.val(data);
			}
		});
	})
} 

// 添加孩子、个人资料--选择日期
function seleDate(txt){
	var aSlec = $("[data-role='select_date']");
	var aSle = aSlec.find('input');

	aSle.on("change", function(){
		// 第一种取值
		// var sVal = $(this).find('option:checked').html();

		// 第二种取值
		var sVal = $(this).val();

		$(this).siblings(txt).html(sVal);
	})
}

/**
 * [set_config jiathis分享配置]
 * @param {[string]} url     [分享的url]
 * @param {[string]} title   [分享的标题]
 * @param {[string]} summary [分享的正文]
 */
function jiathisConfig(url, title, summary){
    jiathis_config = {
        url:url,
        title:title,
        summary:summary
    }
}

/**
 * [statusChange 状态切换函数]
 * @param  {[string]} oPar   [负责代理的父元素]
 * @param  {[string]} oChild [被代理的触发事件的子元素]
 * @return {[null]}        [null]
 */
function statusChange(oPar, oChild){
	$(oPar).delegate(oChild, 'tap', function() {
		$(this).addClass('on').siblings().removeClass('on');
	});
}

/**
 * [showHide 点击消失隐藏]
 * @param  {[string]} obj [目标元素--有同胞关系依赖]
 * @return {[type]}     [description]
 */
function showHide(obj){
    var oObj = $(obj);
    oObj.on("tap", function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).siblings().hide();
        }else{
            $(this).addClass('on');
            $(this).siblings().show();
        }
    })
}

/**
 * [showHideHeight 内容显示隐藏]
 * @param  {[type]} obj     [点击事件的元素 -- data-roel属性]
 * @param  {[type]} sibling [显示、隐藏的元素 -- 和点击事件元素是同胞元素]
 * @param  {[type]} hei     [显示、隐藏的元素 -- 显示部分的高度]
 * @return {[type]}         [description]
 */
function showHideHeight(obj, sibling, hei){
	var aObj = $("[data-role='" + obj + "']");
	aObj.each(function(){
		var oSlibling = $(this).siblings(sibling);
		if (oSlibling.height() <= parseInt(hei,10)) {
			$(this).hide();
		}else{
			oSlibling.height(hei);
			$(this).on("tap", function(){
			    if($(this).hasClass('on')){
			        $(this).removeClass('on');
			        $(this).siblings(sibling).css("height",hei);
			    }else{
			        $(this).addClass('on');
			        $(this).siblings(sibling).css("height","auto");
			    }
			})
		}
	});
}

/**
 * [msgLayer 自定义的layer错误提示窗]
 * @param  {[sStr]} msg  [错误提示信息]
 * @param  {[number]} time [设置自动消失的时间]
 * @return {[null]}      [description]
 */
function msgLayer(msg, time){
	var time = time*1000 || 2000;
	if($("#layer_msg_shade").length > 0)return;
	var oCon = $("<div class='layer_msg_shade' id='layer_msg_shade'><div class='layer_msg_box'><div class='layer_msg_content' id='layer_msg_content'>"+ msg +"</div></div>");
	$("body").append(oCon);
	// 设置自动关闭
	var timer = setTimeout(function(){
		$("#layer_msg_shade").remove();
	}, time);
	// 设置点击关闭
	$("#layer_msg_shade").click(function() {
		$(this).remove();
		window.clearTimeout(timer);
	});
}

/**
 * [allNav 弹窗弹出禁止页面滚动]
 * [bool] true or false
 */
function disableScroll(bool){
	if(bool){
		$('body').removeAttr('style');
		$('html').removeAttr('style');
	}else{
		$("body").css({"height":"100%","overflow":"hidden"});
		$("html").css({"height":"100%","overflow":"hidden"});
	}
}
/**
 * [allNav 全局导航]
 * @return {[null]} [description]
 */
function allNav(){
	$(".right_bar .icon_btn").on("tap",function (){
		var aLis = $(".bar_down li");
		var iHei = aLis.eq(0).height();

		$("<div style='background:transparent;' class='sidebar_mask'></div>").appendTo($("body"));
		$(".sidebar_mask").on("tap",function (){
			$(".bar_down").animate({
				height: 0
			}, 200, function(){
				$(".sidebar_mask").remove();
				disableScroll(true);
			});
		})
		if($(".bar_down").height() == 0)
		{
			$(".bar_down").animate({
				height: aLis.length*iHei + 18
			}, 300);
			disableScroll(false);
		}
		else
		{
			$(".bar_down").animate({
				height: 0
			}, 200, function(){
				$(".sidebar_mask").remove();
			});
		}
	})
}

/**
 * [dropDown 下拉菜单]
 * @return {[null]} [description]
 */
function dropDown(){
	$(".down_drop .cen_con_bg").on("tap",function (){
		if($(".down_drop_zone").height() == 0)
		{
			$(".down_drop_zone").addClass('border');
			$(".down_drop_zone").animate({
				height: 200
			}, 300);
		}
		else
		{
			$(".down_drop_zone").removeClass('border');
			$(".down_drop_zone").animate({
				height: 0
			}, 200);
		}
		$(".down_drop_zone li").on("tap",function (){
			$(".down_drop_zone li").removeClass('on');
			$(this).addClass('on');
			$(".down_drop .cen_con_bg").html($(this).html());
			$(this).parent().animate({
				height: 0
			}, 200);
		})
		// 
		$(document).on("tap" ,function (e){
			// 取消document上面的时间冒泡
			if($(e.target).siblings('.down_drop_zone').height() != 2){
				$(".down_drop_zone").removeClass('border');
				$(".down_drop_zone").animate({
					height: 0
				}, 200);
		    }
			
		});
	})
}

/**
 * [seePassWord 控制密码的显示隐藏]
 * @param  {[type]} obj  [触发事件的按钮]
 * @param  {[type]} oInp [改变的输入框]
 * @return {[null]}      [description]
 */
function seePassWord(obj, oInp){
	$(obj).on("tap", function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			// $(oInp).attr("type", "password");
			$(this).siblings(oInp).attr("type", "password");
		}else{
			$(this).addClass('on');
			// $(oInp).attr("type", "text");
			$(this).siblings(oInp).attr("type", "text");
		}
	});
}

/**
 * [pageLoading 页面加载效果]
 * @param  {[str]} obj [页面加载完要移除的元素]
 * @param  {[str]} tpl [加载元素模板元素]
 * @return {[null]}     [null]
 */
function pageLoading(){
	$("body").append($('<div class="page_ready_load"><img src="img/load_page.gif" width="47" height="50" alt="" /></div>'));
	document.onreadystatechange = function(){
		var sStaus = document.readyState;
		if(sStaus == "complete"){
			$(".page_ready_load").remove();
		}
	}
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

/**
 * [字符串去掉 \n空格 的方法]
 */
String.prototype.trim=function() {
    return this.replace(/(^\s*)|(\s*$)/g,'');
}

/**
 * [getWeek 获取具体某一天是星期几]
 * @param  {[str]} date [时间字符串格式为 2015-01-01]
 * @return {[str]}      [星期一、星期二等等]
 */
function getWeek(date){
	var arr=['星期日', '星期一', '星期二', '星期三', '星期四' , '星期五' , '星期六'];
    var aDate = date.split("-");
    var iYear = aDate[0];
    var iMonth = aDate[1];
    var iDay = aDate[2];
	var oDate=new Date(iYear,iMonth - 1,iDay);
	var w=oDate.getDay();
	return arr[w];
}

/**
 * [setAgentLogo 设置机构详情页面logo尺寸]
 */
function setAgentLogo(){
	window.onload = function(){
	    // 大banner图样式
	    var oBannerBoxHei = $(".agent_logo").eq(0).height() - 2;
	    var oBanner = $(".agent_logo").eq(0).find("img");
	    oBanner.css("margin-top", 0);
	    if(oBanner.height() < oBannerBoxHei){
	        oBanner.css({
	            "margin-top": (oBannerBoxHei - oBanner.height())/2
	        });
	    }
	}
}

/**
 * [collectionFun 收藏交互]
 * @param  {[string]} obj  [发生事件的对象]
 * @param  {[number]} type [事件状态]
 * @param  {[number]} time [关闭时间 单位：秒]
 * @param  {[回调函数]} call [弹窗关闭后的回调函数]
 * @return {[null]}      [null]
 */
function collectionFun(obj, type, time, call){
	var sTpl = "";
	switch(type){
	     case 1:
	         // 收藏成功
	         sTpl = '<div class="jum_collection_zone">'
	                 + '<i class="icon"></i>'
	                 + '<i class="txt">收藏成功！</i>'
	                 '</div>';
	     break;
	     case 2:
	         // 已收藏
	         sTpl = '<div class="jum_collection_zone">'
	                 + '<i class="icon"></i>'
	                 + '<i class="txt">已收藏！</i>'
	                 '</div>';
	     break;
	     case 3:
	         // 取消收藏成功
	         sTpl = '<div class="jum_collection_zone">'
	                 + '<i class="icon"></i>'
	                 + '<i class="txt">取消收藏成功！</i>'
	                 '</div>';
	     break;
	     case 4:
	         // 取消收藏失败
	         sTpl = '<div class="jum_collection_zone">'
	                 + '<i class="icon"></i>'
	                 + '<i class="txt">取消收藏失败</i>'
	                 + '<i class="txt">请检查网络设置</i>'
	                 '</div>';
	     break;
	     case 5:
	         // 收藏失败
	         sTpl = '<div class="jum_collection_zone">'
	                 + '<i class="icon"></i>'
	                 + '<i class="txt">收藏失败</i>'
	                 + '<i class="txt">请检查网络设置</i>'
	                 '</div>';
	     break;
	     default:;
	}
	// 调取弹窗
	layer.open({
	     content: sTpl,
	     className: "jump_collection",
	     shadeClose: false,
	     shade: false,
	     time: time,
	     end: function () {
	         call && call();
	     }
	});
}

/**
 * [timeDao 倒计时--续报页面]
 * @type {Object}
 */
var timeDao = {
    config: function(opt){
        var opt = opt || {};
        this.time_start = $("#" + opt.time_start);  //开始时间
        this.time_end = $("#" + opt.time_end);  //结束时间
        this.time_box = $("#" + opt.time_box);  //时间容器
        this.hour = this.time_box.find("." + opt.hour);  //时容器
        this.minute = this.time_box.find("." + opt.minute);  //分容器
        this.second = this.time_box.find("." + opt.second);  //秒容器
        this.second_hao = this.time_box.find("." + opt.second_hao);  //毫秒容器
        this.timer = null;
    },
    todayCount: function(call){  //倒计时--距离开抢
        var _this = this;
        
        // _this.todayFun();

        this.timer = setInterval(function(){
            _this.todayFun(call);
        }, 1);

    },
    todayFun: function(call){
        var oTodayDate = new Date();  //今天日期对象
        var iTodayTime = oTodayDate.getTime();  //今天毫秒数
        var sTargetTime = this.time_start.val();  //目标日期字符串
        var aTargetTime = sTargetTime.match(/\d+/g);  //目标日期数组
        var oTargetDate = new Date(aTargetTime[0], aTargetTime[1] - 1, aTargetTime[2], aTargetTime[3]);  //目标日期对象
        var iTargetTime = oTargetDate.getTime();  //目标日期毫秒数
        var iDisTime = iTargetTime - iTodayTime;  //目标日期和今天日期时间差
        var iHour = Math.floor(iDisTime/(1000*60*60));
        var iMinute = Math.floor((iDisTime%(1000*60*60))/(1000*60));
        var iSecond = Math.floor((iDisTime%(1000*60))/1000);
        var iSecondHao = (iDisTime%1000 + "").match(/\d{1}/g)[0];
        
        if(iDisTime <= 0){
            // 活动结束
            clearInterval(this.timer);
            this.hour.html("00");
            this.minute.html("00");
            this.second.html("00");
            this.second_hao.html("0");
            // 归零回调
            call && call();
        }else{
            this.hour.html(this.numChange(iHour));
            this.minute.html(this.numChange(iMinute));
            this.second.html(this.numChange(iSecond));
            this.second_hao.html(iSecondHao);
        }
        
    },
    targetCount: function(call){
        var _this = this;
        
        // _this.targetFun();

        this.timer = setInterval(function(){
            _this.targetFun(call);
        }, 1);
    },
    targetFun: function(call){
        var oTodayDate = new Date();  //今天日期对象
        var iTodayTime = oTodayDate.getTime();  //今天毫秒数
        var sTargetTime = this.time_end.val();  //目标日期字符串
        var aTargetTime = sTargetTime.match(/\d+/g);  //目标日期数组
        var oTargetDate = new Date(aTargetTime[0], aTargetTime[1] - 1, aTargetTime[2], aTargetTime[3]);  //目标日期对象
        var iTargetTime = oTargetDate.getTime();  //目标日期毫秒数
        var iDisTime = iTargetTime - iTodayTime;  //目标日期和今天日期时间差
        var iHour = Math.floor(iDisTime/(1000*60*60));
        var iMinute = Math.floor((iDisTime%(1000*60*60))/(1000*60));
        var iSecond = Math.floor((iDisTime%(1000*60))/1000);
        var iSecondHao = (iDisTime%1000 + "").match(/\d{1}/g)[0];
        
        if(iDisTime <= 0){
            // 活动结束
            clearInterval(this.timer);
            this.hour.html("00");
            this.minute.html("00");
            this.second.html("00");
            this.second_hao.html("0");
            // 归零回调
            call && call();
        }else{
            this.hour.html(this.numChange(iHour));
            this.minute.html(this.numChange(iMinute));
            this.second.html(this.numChange(iSecond));
            this.second_hao.html(iSecondHao);
        }
    },
    numChange: function(iNum){  //数字转换
        (iNum < 10) && (iNum = "0" + iNum);
        return iNum;
    }
}

/**
 * [面向对象--倒计时]
 * @description [基于客户端时间]
 */
;(function(win, $){
	var TimeDao = win.TimeDao = function(opt){
		this.config(opt);
	}
	TimeDao.prototype.config = function(opt){
		var opt = opt || {};
		this.time_start = $("#" + opt.time_start);  //开始时间
		this.time_end = $("#" + opt.time_end);  //结束时间
		this.time_box = $("#" + opt.time_box);  //时间容器
		this.hour = this.time_box.find("." + opt.hour);  //时容器
		this.minute = this.time_box.find("." + opt.minute);  //分容器
		this.second = this.time_box.find("." + opt.second);  //秒容器
		this.second_hao = this.time_box.find("." + opt.second_hao);  //毫秒容器
		this.timer = null;
	};
	TimeDao.prototype.todayCount = function(call){
		var _this = this;
		
		_this.todayFun();

		this.timer = setInterval(function(){
		    _this.todayFun(call);
		}, 1000);
	};
	TimeDao.prototype.todayFun = function(call){
		var oTodayDate = new Date();  //今天日期对象
		var iTodayTime = oTodayDate.getTime();  //今天毫秒数
		var sTargetTime = this.time_start.val();  //目标日期字符串
		var aTargetTime = sTargetTime.match(/\d+/g);  //目标日期数组
		var oTargetDate = new Date(aTargetTime[0], aTargetTime[1] - 1, aTargetTime[2], aTargetTime[3], aTargetTime[4]);  //目标日期对象
		var iTargetTime = oTargetDate.getTime();  //目标日期毫秒数
		var iDisTime = iTargetTime - iTodayTime;  //目标日期和今天日期时间差
		var iHour = Math.floor(iDisTime/(1000*60*60));
		var iMinute = Math.floor((iDisTime%(1000*60*60))/(1000*60));
		var iSecond = Math.floor((iDisTime%(1000*60))/1000);
		var iSecondHao = (iDisTime%1000 + "").match(/\d{1}/g)[0];
		
		if(iDisTime <= 0){
		    // 活动结束
		    clearInterval(this.timer);
		    this.hour.html("00");
		    this.minute.html("00");
		    this.second.html("00");
		    this.second_hao.html("0");
		    // 归零回调
		    call && call();
		}else{
		    this.hour.html(this.numChange(iHour));
		    this.minute.html(this.numChange(iMinute));
		    this.second.html(this.numChange(iSecond));
		    this.second_hao.html(iSecondHao);
		}
	};
	TimeDao.prototype.targetCount = function(call){
		var _this = this;
		
		_this.targetFun();

		this.timer = setInterval(function(){
		    _this.targetFun(call);
		}, 1000);
	};
	TimeDao.prototype.targetFun = function(call){
		var oTodayDate = new Date();  //今天日期对象
		var iTodayTime = oTodayDate.getTime();  //今天毫秒数
		var sTargetTime = this.time_end.val();  //目标日期字符串
		var aTargetTime = sTargetTime.match(/\d+/g);  //目标日期数组
		var oTargetDate = new Date(aTargetTime[0], aTargetTime[1] - 1, aTargetTime[2], aTargetTime[3], aTargetTime[4]);  //目标日期对象
		var iTargetTime = oTargetDate.getTime();  //目标日期毫秒数
		var iDisTime = iTargetTime - iTodayTime;  //目标日期和今天日期时间差
		var iHour = Math.floor(iDisTime/(1000*60*60));
		var iMinute = Math.floor((iDisTime%(1000*60*60))/(1000*60));
		var iSecond = Math.floor((iDisTime%(1000*60))/1000);
		var iSecondHao = (iDisTime%1000 + "").match(/\d{1}/g)[0];
		
		if(iDisTime <= 0){
		    // 活动结束
		    clearInterval(this.timer);
		    this.hour.html("00");
		    this.minute.html("00");
		    this.second.html("00");
		    this.second_hao.html("0");
		    // 归零回调
		    call && call();
		}else{
		    this.hour.html(this.numChange(iHour));
		    this.minute.html(this.numChange(iMinute));
		    this.second.html(this.numChange(iSecond));
		    this.second_hao.html(iSecondHao);
		}
	};
	TimeDao.prototype.numChange = function(iNum){
		(iNum < 10) && (iNum = "0" + iNum);
		return iNum;
	};
})(window, Zepto)

/**
 * [面向对象--倒计时--新版]
 * @description [基于服务器端时间]
 */
;(function(win, $){
	var TimeDaoService = win.TimeDaoService = function(opt){
		this.config(opt);
	}
	TimeDaoService.prototype.config = function(opt){
		var opt = opt || {};
		this.time_service = $("#" + opt.time_service);  //服务器时间
		this.time_target = $("#" + opt.time_target);  //目标时间对象
		this.time_box = $("#" + opt.time_box);  //时间容器
		this.hour = this.time_box.find("." + opt.hour);  //时容器
		this.minute = this.time_box.find("." + opt.minute);  //分容器
		this.second = this.time_box.find("." + opt.second);  //秒容器
		this.second_hao = this.time_box.find("." + opt.second_hao);  //毫秒容器
		this.timerNum = opt.timerNum || 1;  //定时器时间间隔
		this.timer = null;  //对象定时器
		this.timeCountStart = this.getTotalTime(this.time_target);  //倒计时总时间
	};
	TimeDaoService.prototype.todayCount = function(call){  //距离开抢倒计时
		var _this = this;
		
		_this.todayFun();

		_this.timer = setInterval(function(){
		    _this.todayFun(call);
		}, _this.timerNum);
	};
	TimeDaoService.prototype.todayFun = function(call){  //距离开抢倒计时函数
		this.timeCountStart -= this.timerNum;
		console.log(this.timeCountStart)
		var iHour = Math.floor(this.timeCountStart/(1000*60*60));
		var iMinute = Math.floor((this.timeCountStart%(1000*60*60))/(1000*60));
		var iSecond = Math.floor((this.timeCountStart%(1000*60))/1000);
		var iSecondHaoBe = this.timeCountStart%1000;
		iSecondHaoBe = this.numChangeThree(iSecondHaoBe);
		var iSecondHao = (iSecondHaoBe + "").match(/\d{1}/g)[0];
		
		if(this.timeCountStart <= 0){
		    // 活动结束
		    clearInterval(this.timer);
		    this.hour.html("00");
		    this.minute.html("00");
		    this.second.html("00");
		    this.second_hao.html("0");
		    // 归零回调
		    call && call();
		}else{
		    this.hour.html(this.numChange(iHour));
		    this.minute.html(this.numChange(iMinute));
		    this.second.html(this.numChange(iSecond));
		    this.second_hao.html(iSecondHao);
		}
	};
	TimeDaoService.prototype.numChange = function(iNum){  //数字自动补零
		(iNum < 10) && (iNum = "0" + iNum);
		return iNum;
	};
	TimeDaoService.prototype.numChangeThree = function(iNum){  //数字自动补零
		if(iNum < 10){
			iNum = "00" + iNum;
		}else if(iNum < 100){
			iNum = "0" + iNum;
		}
		return iNum;
	};
	TimeDaoService.prototype.getTotalTime = function(target){  //获得当前倒计时时间戳
		var sServiceTime = this.time_service.val();
		var aService = sServiceTime.match(/\d+/g);
		var iTimeService = new Date(aService[0],aService[1]-1,aService[2],aService[3], aService[4], aService[5], aService[6]).getTime();

		var sTargetTime = target.val();
		var aTargetTime = sTargetTime.match(/\d+/g);
		var iTargetTime = new Date(aTargetTime[0],aTargetTime[1]-1,aTargetTime[2],aTargetTime[3], aTargetTime[4]).getTime();

		return iTargetTime - iTimeService;
	}
})(window, Zepto)

/**
 * [dateCompare 比较当前时间和目标时间]
 * @param  {[string]} today [服务器时间对象]
 * @param  {[string]} target [目标时间对象]
 * @return {[bollen]}        [服务器时间小于目标时间返回真]
 */
function dateCompare(today, target){
	var sTodayTime = $("#" + today).val();
    var sTargetTime = $("#" + target).val();
    var aToday = sTodayTime.match(/\d+/g);
    var aEnd = sTargetTime.match(/\d+/g);
    var iTimeToday = new Date(aToday[0],aToday[1]-1,aToday[2],aToday[3], aToday[4], aToday[5], aToday[6]).getTime();
    var iTimeEnd = new Date(aEnd[0],aEnd[1]-1,aEnd[2],aEnd[3], aEnd[4]).getTime();

    if(iTimeToday < iTimeEnd){
        return true;
    }
    return false;
}

/**
 * [moveDistance 向上向下运动]
 * @param  {[string]} obj  [运动的元素]
 * @param  {[number]} dis  [移动的距离]
 * @param  {[number]} time [运动时间]
 * @param  {[function]} call [函数]
 * @return {[null]}      [null]
 */
function moveDistance(obj, dis, time, call){
	var time = time || 300;
	$(obj).animate({
	    "-webkit-transform": "translate(0px,"+ (-dis) +"px)"
	}, time, function(){
		call && call();
	});
}

/**
 * [moveDistance 向左向右运动]
 * @param  {[obj]} obj  [运动的元素对象]
 * @param  {[number]} dis  [移动的距离]
 * @param  {[number]} time [运动时间]
 * @param  {[function]} call [函数]
 * @return {[null]}      [null]
 */
function moveDistanceVer(obj, dis, time, call){
	var time = time || 300;
	obj.animate({
	    "-webkit-transform": "translate("+ (-dis) +"px,0px)"
	}, time, function(){
		call && call();
	});
}

/**
 * [isWeiXin 判断是否是微信客户端打开]
 * @return {Boolean} [是返回true]
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
 * [isQQIn 判断是否是qq内置qq浏览器]
 * @return {Boolean} [是返回true]
 */
function isQQIn(){
	var sUa = window.navigator.userAgent.toLowerCase();
	var regCheck = /qq\/\d+\.\d+\.\d+\.\d+|mobile mqqbrowser/ig;
	return regCheck.test(sUa);
}

/**
 * [shareLoad 分享链接方法及我知道按钮]
 * @param  {[string]} obj1 [jiathis的功能区域包裹层]
 * @param  {[string]} obj2 [自己写的功能区域包裹层]
 * @param  {[string]} btn [我知道按钮]
 * @return {[type]}      [description]
 */
function shareLoad(obj1, obj2, btn){
    var aLinksTrue = $(obj1).find("a");
    var aLinksFalse = $(obj2).find("a[data-role='share_link_btn']");

    // 分享渠道链接
    aLinksFalse.on("tap", function(){
    	var iIdx = aLinksFalse.index(this);
    	aLinksTrue.eq(iIdx).click();
    },false);
    // 我知道按钮
    $(btn).on("tap", function(){
    	$(this).parent().parent().parent().hide();
    	eventChuanTou();
    },false);
}

/**
 * [shareShow 团购课程详情--分享显示]
 * @param  {[string]} shareWei [微信端的分享包裹层]
 * @param  {[string]} sharePu  [普通浏览器的分享包裹层]
 * @return {[type]}          [description]
 */
function shareShow(shareWei, sharePu){
	if(isWeiXin() || isQQIn()){
		$(shareWei).show();
	}else{
		$(sharePu).show();
	}
}

/**
 * [shareShow 团购课程详情--分享隐藏]
 * @param  {[string]} shareWei [微信端的分享包裹层]
 * @param  {[string]} sharePu  [普通浏览器的分享包裹层]
 * @return {[type]}          [description]
 */
function shareHide(shareWei, sharePu){
	if(isWeiXin() || isQQIn()){
		$(shareWei).hide();
	}else{
		$(sharePu).hide();
	}
	eventChuanTou();
}

/**
 * [竖直方向无缝滚动]
 * @param  {[type]} win [description]
 * @param  {[type]} $   [description]
 * @return {[type]}     [description]
 */
;(function(win, $){
	$.fn.scrollMoveVer = function(option){
		var defaults = {
			listFolderBox: "no_rec_box",  //列表的包裹层的包裹层--运动的层
			listFolder: "no_rec",  //列表的包裹层--要复制的层
			listEle: "li",  //单个列表元素
			direction: "up",  //运动方向
			disTop: 0,  //列表初始值
			speed: 50  //运动速度
		};
		var config = $.extend({}, defaults, option);
		return this.each(function(i, val){
			var _this = $(val);
			var iSclTop = config.disTop;
			var iTarHei = _this.height();  //包裹层的界限值--超过此值滚动
			var oListFolderBox = _this.find("." + config.listFolderBox);  //列表的包裹层--运动的层
			var olistFolder = _this.find("." + config.listFolder);  //列表包裹层
			var alistEle = _this.find("." + config.listEle);  //列表元素集合
			var iListHei = olistFolder.height();  //列表的高度--超过界限值会滚动
			
			if(iListHei > iTarHei){  //判断要是高度值超过界限值则滚动
				cloneElement();
				move();
			}
			// 复制元素
			function cloneElement(){
				olistFolder.after(olistFolder.clone());
				switch (config.direction){
					case "down":  //如果是向下运动则需要处理初始值
						oListFolderBox.css({"-webkit-transform": "translate(0px,"+ (-iListHei + iSclTop) +"px)"});
						break;
					default:;
				}
			}
			// 运动方法
			function move(){
				setInterval(function(){
					iSclTop+=1;
					switch (config.direction){
						case "up":
							oListFolderBox.css({"-webkit-transform": "translate(0px,"+ -iSclTop +"px)"});
							if(iSclTop >= iListHei){
								oListFolderBox.css({"-webkit-transform": "translate(0px, 0px)"});
								iSclTop = 0;
							}
							break;
						case "down":
							oListFolderBox.css({"-webkit-transform": "translate(0px,"+ (-iListHei + iSclTop) +"px)"});
							if(iSclTop >= iListHei){
								oListFolderBox.css({"-webkit-transform": "translate(0px, "+ -iListHei +"px)"});
								iSclTop = 0;
							}
							break;
						default:;
					}
					
				}, config.speed);
			}
		});
	}
})(window, Zepto)

/**
 * [eventChuanTou 取消事件穿透]
 * @param  {[type]} obj [待取消的元素对象]
 * @return {[null]}     [description]
 */
function eventChuanTou(obj){
	var obj = obj || "body";
	$(obj).css("pointer-events", "none");
	setTimeout(function(){
		$(obj).css("pointer-events", "auto");
	}, 400);
}

/* @郑克芳负责 */
function goTop(back_top){
	var oBtn=document.getElementById('back_top');
	window.onscroll=function(){
		var scrollT=document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollT>0){
			oBtn.style.display='block';
		}else{
			oBtn.style.display='none';
		}
	};
	var timer=null;
	oBtn.onclick=function(){
		var scrollT=document.documentElement.scrollTop || document.body.scrollTop;
		var count=Math.floor(1000/30);
		var start=scrollT;
		var dis=0-start;
		var n=0;
		clearInterval(timer);	
		timer=setInterval(function(){
			n++;
			var a=1-n/count;
			var cur=start+dis*(1-Math.pow(a,3));
			
			document.body.scrollTop=document.documentElement.scrollTop=cur;
			
			if(n==count){
				clearInterval(timer);
			}
		},30);
	};
};

// 评星效果
function stars(obj){
	$(obj).on("tap",function() {
		var oParent=$(this).parent();
		var iIndex=oParent.find("li").index(this);
		oParent.find("li").removeClass('on');
		oParent.find("li").slice(0,iIndex+1).addClass("on");
	});
}

/**
 * [下拉刷新]
 * @param  {[function]} 刷新操作函数
 * @param {[function]}  下拉操作函数
 */
var controlerVar = true;
function loaded(obj) {
	var f1 = obj.f1;
	var f2 = obj.f2;
	var ele = obj.ele;
	var down = obj.down;
	var up = obj.up;
	var myScroll,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset,
	generatedCount = 0;
	
	pullDownEl = document.getElementById(down);
	
	pullDownOffset = pullDownEl.offsetHeight;
	pullDownOffset = 40;
	pullUpEl = document.getElementById(up);	
	pullUpOffset = pullUpEl.offsetHeight;
	
	myScroll = new iScroll(ele, {
		// useTransition: true,
		topOffset: pullDownOffset,
		onRefresh: function () {
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载';
			}
		},
		onScrollMove: function () {
			if(controlerVar){
				myScroll.refresh();
				console.log(0)
				controlerVar = false;
			}
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放刷新';
				this.minScrollY = 0;
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
				this.minScrollY = -pullDownOffset;
			} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载更多';
				this.maxScrollY = this.maxScrollY;
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载';
				this.maxScrollY = pullUpOffset;
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '刷新中，请稍后';				
				f1(myScroll);	
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '正在加载';				
				f2(myScroll);	
			}
		}
	});
	setTimeout(function () { document.getElementById(ele).style.left = '0'; }, 800);
}





















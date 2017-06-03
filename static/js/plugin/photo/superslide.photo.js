/*
*@des: 基于Touchslide实现的移动端相册类
*@author：高同檩
 */
(function(win, $, slide){
    var Photo = win.Photo = function(opt){
        // 定义对象的属性--配置项
        opt = opt || {};
        this.wrap = $("#" + opt.wrap);
        this.data = opt.data;
        this.speed = opt.speed || 200;
        this.shadeBtn = opt.shadeBtn ? true : false;
        this.shadeNumber = opt.shadeNumber ? true : false;

        // 调用 prototype 上面的方法
        this.init();
        this.bindEvent();
        this.resize();
    }

    Photo.prototype.init = function(){
        // 获取窗口宽和高有兼容问题
        // this.winWid = $(window).width();
        // this.winHei = $(window).height();

        // 解决
        this.winWid = this.getViewPortSize().width;
        this.winHei = this.getViewPortSize().height;
        this.scale = this.winWid/this.winHei;
    }
    Photo.prototype.bindEvent = function(){
        var _this = this;
        var aData = _this.data;
        var outers = _this.outers = $("<ul id='outers'></ul>");
        var outer = _this.outer = $("<ul id='outer'></ul>");

        this.wrap.delegate("li[data-role='pic']", "tap", function(){
            outers.html("");
            outer.html("");
            
            for(var i = 0; i < aData.length; i++){
                var tmpLi = $("<li></li>");
                var tmpImg = $("<img src='"+ aData[i].src +"' />");
                _this.setSize(i, tmpImg);
                tmpLi.append(tmpImg);
                
                outer.append(tmpLi);
            }
            // 设置外层容器样式
            outers.css({
                width: _this.winWid,
                height: _this.winHei,
                background: "#333",
                overflow: "hidden",
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: 100000000000
            }).append(outer);
            // 返回按钮
            if(_this.shadeBtn){
                outers.append($("<div class='photo_shut' id='photo_shut'></div>"));
            }
            // 显示数字
            if(_this.shadeNumber){
                outers.append($("<div class='photo_page_num' id='photo_page_num'><span id='photo_num_cur'>1</span>/<span id='photo_num_all'>1</span></div>"));
            }
            $(document.body).append(outers);

            // 添加关闭按钮的事件
            $("#photo_shut").on("tap", function(){
                outers.remove();
            }, false);

            // 设置当前点击的图片
            var iIdx = $("li[data-role='pic']").index(this);

            // 获取相册的页码总数
            var iPageAll = _this.getPageNumber("#outer", "li");

            // 设置页面条目
            $("#photo_num_cur").html(iIdx + 1);
            $("#photo_num_all").html(iPageAll);
            
            // 调用第三方的滑动插件
            slide({
                slideCell:"#outers",
                mainCell:"#outer",
                effect:"leftLoop",
                delayTime:_this.speed,
                defaultIndex:iIdx,
                endFun:function(i,c){
                    $("#photo_num_cur").html(i + 1);
                }
            });
            
        });
        // 点击删除相册层
        if(_this.shadeBtn){
        }else{
            outers.on("tap", function(){
                $(this).remove();
            }, false);
        }
        // 复制浏览器默认事件
        outers.on("touchmove", function(ev){
            ev.preventDefault();
        })
    }
    Photo.prototype.setSize = function(idx, obj){
        var _this = this;
        var aData = _this.data;
        if(obj){
            obj.css({
                "margin-top": 0,
                "margin-left": 0
            });
            if(aData[idx].width/aData[idx].height > _this.scale){
                var iHei = Math.floor(_this.winWid*aData[idx].height/aData[idx].width);
                
                obj.css({
                    width: _this.winWid,
                    height: iHei,
                    "margin-top": (_this.winHei - iHei)/2
                });
            }
            else{
                var iWid = Math.floor(_this.winHei*aData[idx].width/aData[idx].height);
                
                obj.css({
                    width: iWid,
                    height: _this.winHei,
                    "margin-left": (_this.winWid - iWid)/2
                });
            }
        }
    }
    Photo.prototype.resize = function(){
        var _this = this;
        $(window).resize(function() {
            _this.init();
            if(_this.outers){
                _this.outers.css({
                    width: _this.winWid,
                    height: _this.winHei
                });
                for(var i = 0; i< _this.data.length; i++){
                    var oImg = _this.outer.find("li").eq(i).find('img');
                    _this.setSize(i, oImg);
                }
            }
        });
    }
    Photo.prototype.getPageNumber = function(obj, role){
        return $(obj).find(role).length;
    }
    Photo.prototype.getViewPortSize = function(){
        var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
        var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
        var scrollL = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        return {"width": winWidth + scrollL, "height":winHeight + scrollT};
    }

}(window, Zepto, TouchSlide));
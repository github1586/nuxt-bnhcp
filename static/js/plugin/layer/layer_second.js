/*!
 * layer mobile 二次封装
 * @author：高同檩
 *
 * tip: 基于 layer mobile-v1.6 弹层组件移动版 License LGPL http://layer.layui.com/mobile By 贤心
 */
;(function(layer,win){
	var layerM = win.layerM = {
		page: function(opt){
			opt = opt || {};
			opt.type = 1;
			opt.shadeClose = false;
			layer.open(opt);
		},
		alert: function(opt){  //带颜色头部
			opt = opt || {};
			opt.type = 0;
			opt.btn = opt.btn || ["确定"];
			opt.className = opt.className || "align_center";
			// 自定制的弹窗标题
			if(opt.titStyle){
				opt.className += " layer_tit_style";
			}
			opt.className += " alert_style";
			opt.shadeClose = false;
			layer.open(opt);
		},
		alertHeadButton: function(opt){  //带颜色头部并且有按钮
			opt = opt || {};
			opt.type = 0;
			opt.btn = opt.btn;
			opt.className = opt.className;
			// 自定制的弹窗标题
			opt.className += " layer_tit_style show_btn";
			opt.className += " alert_style";
			opt.shadeClose = false;
			layer.open(opt);
		},
		confirm: function(opt){
			opt = opt || {};
			opt.type = 0;
			opt.btn = opt.btn || ["确定","取消"];
			opt.titStyle = opt.titStyle || false;
			opt.className = opt.className || "align_center";
			// 自定制的弹窗标题
			if(opt.titStyle){
				opt.className += " layer_tit_style";
			}
			opt.shadeClose = false;
			layer.open(opt);
		},
		prompt: function(opt, callback){
			opt = opt || {};
			opt.type = 0;
			opt.btn = opt.btn || ["确定","取消"];
			opt.className = opt.className || "layer_prompt_default";
			opt.content = "";
			opt.shadeClose = false;

			var inputID    = 'prompt_id';
			var inputTit = (opt.promptTit ? opt.promptTit : '');
			var inputTitClass = (opt.inputTitClass ? opt.inputTitClass : 'prompt_tit');
			var inputType = (opt.inputType ? opt.inputType : 'text');
			var inputTip   = (opt.promptTxt ? opt.promptTxt : '请输入');
			var promptElse = (opt.promptElse ?　opt.promptElse : "");
			var inputClass = (opt.inputClass ? opt.inputClass : 'prompt_cls');
			opt.content += '<h1 class="'+ inputTitClass +'">'+ inputTit +'</h1>';
			opt.content += '<input id="' + inputID + '" placeholder="' + inputTip + '" class="' + inputClass + '" type="'+ inputType +'" />';
			opt.content += promptElse;
			var inputTip   = (opt.promptTxt ? opt.promptTxt : '请输入');
			opt.yes = function(index){
				var inputObj = document.getElementById(inputID);
				callback(inputObj.value);
				inputObj.value = '';
				layer.close(index);
			};
			layer.open(opt);
		},
		msg: function(opt){
			opt = opt || {};
			opt.type = 0;
			opt.className = opt.className || 'layer_msg_default';
			opt.time = opt.time || 2;
			opt.shadeClose = false;
			layer.open(opt);
		},
		load: function(opt){
			opt = opt || {};
			opt.type = 2;
			opt.shadeClose = false;
			layer.open(opt);
		},
		frame: function(opt){
			opt = opt || {};
			opt.type = 1;
			opt.shadeClose = false;
			// opt.time = opt.time || 2;
			opt.className = opt.className || "layer_frame_tip";
			opt.url = opt.url || "http://www.m.baonahao.com";
			opt.width = opt.width || 100;
			opt.height = opt.height || 100;
			var sContent = '<iframe src="'+ opt.url +'" frameborder="0" width="'+ opt.width +'" height="'+ opt.height +'"></iframe>';
			opt.content = sContent;
			layer.open(opt);
		}
	};
})(layer,window)
/**
 * 通用方法
 *
 * 1、基于Zepto
 * 2、基于layer-v1.9.0
 *
 * @author wangjunjie <1252547929@qq.com>
 * @date 2015-4-26
 */
(function(win, doc){
	//通用方法
	var commFunc = win.commFunc = {
		//标题
		title:'温馨提示',
		/**
		 * 提示
		 * 
		 * @param boolean  success  true成提示，false失败提示
		 * @param string   message  消息内容
		 * @param function callback 回调函数
		 * @param mixed    param    回调函数参数
		 */
		tip:function(success, message, callback, param){
			layer.open({
				type:0, title:commFunc.title, content:message, icon:(success ? 1 : 5), closeBtn:false,
				yes:function(index){
					layer.close(index);
					callback && (typeof(callback)=='function') && callback(param);
				}
			});
		},
		/**
		 * 询问
		 * 
		 * @param  string   lang     询问语
		 * @param  function callback 回调函数
		 */
		ask:function(lang, callback){
			layer.confirm(lang, {icon:4, title:commFunc.title}, function(index){
				layer.close(index);
				callback();
			});
		},
		/**
		 * 弹出层
		 * 
		 * @param  object config 配置
		 */
		open:function(config){
			layer.open({
			    type:2, shade:0.1, title:config.title, content:config.url,
			    area:[config.width ? config.width + 'px' : 'auto', config.height ? config.height + 'px' : 'auto']
			});
		},
		/**
		 * 发送POST请求
		 * 
		 * @param string   url      请求地址
		 * @param object   data     请求数据
		 * @param function callback 回调函数
		 */
		post:function(url, data, callback){
			Zepto.post(url, data, function(responseData){
				commFunc.tip(responseData.success, responseData.msg, callback, responseData);
			}, 'json');
		},
		/**
		 * 删除
		 * 
		 * @param string   url      请求地址
		 * @param object   data     请求数据
		 * @param function callback 回调函数
		 */
		del:function(url, data, callback){
			commFunc.ask('确定要删除？', function(){
				commFunc.post(url, data, callback);
			});
		},
		/**
		 * 退出
		 * 
		 * @param string   url      请求地址
		 * @param function callback 回调函数
		 */
		quit:function(url, callback){
			commFunc.ask('确定要退出？', function(){
				commFunc.post(url, null, callback);
			});
		},
		/**
		 * 设置
		 * 
		 * @param string   url      请求地址
		 * @param mixed    id       数据ID
		 * @param string   field    字段名
		 * @param mixed	   value    字段值
		 * @param function callback 回调函数
		 */
		set:function(url, id, field, value, callback){
			commFunc.post(url, {'id':id, 'field':field, 'value':value}, callback);
		},
		/**
		 * 刷新
		 */
		refresh:function(){
			win.location.reload();
		},
		/**
		 * 搜索
		 *
		 * @param int pageNumber 页码
		 */
		search:function(pageNumber){
			Zepto('#searchForm > #pageNumber').val(pageNumber);
			Zepto('#searchForm').submit();
		},
		/**
		 * 判断是否在数组中
		 * 
		 * @param  array array 数组
		 * @param  mixed value 值
		 * @return boolean true存在，false不存在
		 */
		inArray:function(array, value){
			for(var i in array){
				if(array[i] == value){
					return true;
				}
			}
			return false;
		},
		/**
		 * 设置操作人
		 */
		setOperator:function(){
			var tds = Zepto('td[data-operator="true"]');
			if(!tds.length){
				return false;
			}
			var ids = [];
			Zepto.each(tds, function(i, o){
				var id = Zepto(o).attr('data-operator-id');
				if(!commFunc.inArray(ids, id)){
					ids.push(id);
				}
			});
			Zepto.post('/Ajaxs/readOperator', {'ids':ids.join(',')}, function(data){
				for(var i in data){
					Zepto('td[data-operator-id="' + data[i]['id'] + '"]').text(data[i]['name']);
				}
			}, 'json');
		},
		/**
		 * 图片裁剪
		 * 
		 * @param  string   path     图片路径
		 * @param  object   config   配置
		 * @param  Function callback 回调
		 */
		cutImage:function(path, config, callback){
			commFunc.open({
				width:(config.win_width ? config.win_width : 500),
				height:(config.win_height ? config.win_height : 500),
				title:'图片裁剪',
				url:'/CutImages/index?cut_width=' + config.cut_width + '&cut_height=' + config.cut_height + '&win_width=' + config.win_width + '&win_height=' + config.win_height + '&path=' + encodeURIComponent(path) + '&callback=' + callback
			});
		},
		/**
		 * 图片裁剪 -- 触屏版
		 * 
		 * @param  string   path     图片路径
		 * @param  object   config   配置
		 * @param  Function callback 回调
		 */
		cutImageM:function(path, config, callback){
			layerM.frame({
				width:(config.win_width ? config.win_width : 500),
				height:(config.win_height ? config.win_height : 500),
				url:'/CutImages/mShowImage?cut_width=' + config.cut_width + '&cut_height=' + config.cut_height + '&win_width=' + config.win_width + '&win_height=' + config.win_height + '&path=' + encodeURIComponent(path) + '&callback=' + callback
			});
		},
		/**
		 * 上传图片
		 * 
		 * @param  string   id       元素ID
		 * @param  object   config   配置
		 * @param  Function callback 回调
		 */
		uploadImage:function(id, config, callback){
			Zepto('#' + id).uploadify({
				'removeTimeout':1,
				'fileObjName':'file',
				'fileSizeLimit':'2MB',
				'successTimeout':3600,
				'overrideEvents':['onDialogClose'],
				'swf':'/js/uploadify-v3.2.1/uploadify.swf',
				'width':(config.width ? config.width : 230),
				'height':(config.height ? config.height : 30),
				'fileTypeExts':'*.png; *.gif; *.jpg; *.jpeg',
				'multi':(config.multi ? config.multi : false),
				'formData':(config.formData ? config.formData : {}),
				'uploader':(config.uploader) ? '/js/uploadify-v3.2.1/'+config.uploader : '/js/uploadify-v3.2.1/uploadify-image.php',
				'buttonText':(config.buttonText ? config.buttonText : '请选择'),
				'buttonClass':(config.buttonClass ? config.buttonClass : ''),
				'onFallback':function(){
					commFunc.tip(false, '您未安装FLASH控件，无法上传图片，请安装FLASH控件后再试。');
				},
				'onUploadSuccess':function(file, data, response){
					var data = eval('(' + data + ')');
					if(data.success){
						callback(data, file);
					}else{
						commFunc.tip(data.success, data.msg);
					}
				},
				'onSelectError':function(file, errorCode, errorMsg){
					var msgText = '选择错误，';
					switch (errorCode) {
						case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
							msgText += "每次只能上传" + this.settings.queueSizeLimit + '张图片';
							break;
						case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
							msgText += '图片大小不能超过：' + this.settings.fileSizeLimit;
							break;
						case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
							msgText += "图片大小为：0KB";
							break;
						case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
							msgText += "图片格式只能是：<br />" + this.settings.fileTypeExts;
							break;
						default:
							msgText += "系统忙，请稍后再试";
					}
					commFunc.tip(false, msgText);
				},				
			});
		},
		/**
		 * 上传视频
		 * 
		 * @param  string   id       元素ID
		 * @param  object   config   配置
		 * @param  Function callback 回调
		 */
		uploadVideo:function(id, config, callback){
			Zepto('#' + id).uploadify({
				'removeTimeout':1,
				'fileObjName':'file',
'successTimeout':3600,
				'fileSizeLimit':'20MB',
				'overrideEvents':['onDialogClose'],				'swf':'/js/uploadify-v3.2.1/uploadify.swf',
				'width':(config.width ? config.width : 230),
				'multi':(config.multi ? config.multi : false),
				'formData':(config.formData ? config.formData : {}),
				'uploader':'/js/uploadify-v3.2.1/uploadify-video.php',
				'buttonText':(config.buttonText ? config.buttonText : '请选择'),
				'onFallback':function(){
					commFunc.tip(false, '您未安装FLASH控件，无法上传图片，请安装FLASH控件后再试。');
				},				
					'onUploadSuccess':function(file, data, response){
					var data = eval('(' + data + ')');
					if(data.success){
						callback(data, file);
					}else{
						commFunc.tip(data.success, data.msg);
					}
				},
				'onSelectError':function(file, errorCode, errorMsg){
					var msgText = '选择错误，';
					switch (errorCode) {
						case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
							msgText += "每次只能上传" + this.settings.queueSizeLimit + '个视频';
							break;
						case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
							msgText += '视频大小不能超过：' + this.settings.fileSizeLimit;
							break;
						case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
							msgText += "视频大小为：0KB";
							break;
						case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
							msgText += "视频格式只能是：<br />" + this.settings.fileTypeExts;
							break;
						default:
							msgText += "系统忙，请稍后再试";
					}
					commFunc.tip(false, msgText);				}
			});
		}
	};
})(window, document);

(function(win, doc){
	var Validata = win.Validata = function(config){

		//当前对象
		var obj = this;

		//被验证对象
		obj.vObj = Zepto('#' + config.vid);

		//消息提示对象
		//obj.rObj = Zepto("#" + config.rid);

		//验证规则
		obj.rule = config.rule;

		/**
		 * 获取被验证对象数据
		 *
		 * 1、去除左右两端空格
		 * 
		 * @return string
		 */
		obj.getValue = function(){
			// return Zepto.trim(obj.vObj.val());
			return obj.vObj.val();
		};

		/**
		 * 非空验证
		 * 
		 * @return boolean true通过，false未通过
		 */
		obj.empty = function(){
			return obj.getValue() != '';
		};

		/**
		 * 正则验证
		 * 
		 * @param  string  pattern   正则表达式
		 * @param  string  attribute 可选，值为[g(全局)、i(区分大小写)、m(多行)匹配]
		 * @return boolean true通过，false未通过
		 */
		obj.regExp = function(pattern, attribute){
			var val = obj.getValue();
			if(val.length){
				var regExp = (attribute ? new RegExp(pattern, attribute) : new RegExp(pattern));
				return regExp.test(val);
			}
			return true;
		};

		/**
		 * 邮箱验证
		 *
		 * @return boolean true通过，false未通过
		 */
		obj.email = function(){
			var pattern = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
			return obj.regExp(pattern);
		};

		/**
		 * URL验证
		 *
		 * @return boolean true通过，false未通过
		 */
		obj.url = function(){
			var pattern = /((^http)|(^https)|(^ftp)):\/\/([A-Za-z0-9]+\.[A-Za-z0-9]+)+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/
			return obj.regExp(pattern);
		};

		/**
		 * 英文验证
		 *
		 * @return boolean true通过，false未通过
		 */
		obj.english = function(){
			var pattern = /^[a-zA-Z]*$/;
			return obj.regExp(pattern);
		};

		/**
		 * 密码验证
		 * @return boolean true通过，false未通过
		 */
		obj.pwd = function(){
			var reg1=/^[a-zA-Z]*$/;
			var reg2=/^[0-9]*$/;
			var reg3=/^\W*$/;
			if(obj.regExp(reg1) || obj.regExp(reg2) || obj.regExp(reg3)){
				return false;
			}
			return true;
		};
		
		/**
		 * 中文验证
		 *
		 * @return boolean true通过，false未通过
		 */
		obj.chinese = function(){
			var pattern = /^[\u4E00-\u9FA5]+$/;
			return obj.regExp(pattern);
		};

		/**
		 * 字符串中不能有中文
		 *
		 * @return boolean true未通过，false通过
		 */
		obj.inchinese = function(){
			var pattern = /.*[\u4E00-\u9FA5]+.*$/;
			return !obj.regExp(pattern);
		};

		/**
		 * 空格验证
		 *
		 * @return boolean true未通过，false通过
		 */
		obj.space = function(){
			var pattern = /\s/;
			return !obj.regExp(pattern);
		};
		
		/**
		 * 电话验证[固话、手机]
		 * 
		 * @return boolean true通过，false未通过
		 */
		obj.phone = function(){
			return obj.tel() || obj.mobile();
		};
		
		/**
		 * 固话验证
		 * 
		 * @return boolean true通过，false未通过
		 */
		obj.tel = function(){
			var pattern = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)|(13\d{9}$)|(15[0135-9]\d{8}$)|(18[267]\d{8}$)/;
			return obj.regExp(pattern);
		};
		
		/**
		 * 手机验证
		 * 
		 * @return boolean true通过，false未通过
		 */
		obj.mobile = function(){
			var pattern =  /^[1][0-9]{10}$/;
			return obj.regExp(pattern);
		};
		
		/**
		 * 身份证验证
		 * 
		 * @return boolean true通过，false未通过
		 */
		obj.idCard = function(){
			var pattern = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
			return obj.regExp(pattern);
		};
		
		/**
		 * 金额验证
		 * 
		 * @return boolean true通过，false未通过
		 */
		obj.money = function(){
			var pattern = /^(0|[1-9]\d*)(\.\d{1,2})?$/;
			return obj.regExp(pattern);
		};

		/**
		 * 正整数验证
		 * 
		 * @return boolean true通过，false未通过
		 */
		obj.posInt = function(){
			var pattern = /^[1-9][0-9]*$/;
			return obj.regExp(pattern);
		};

		/**
		 * 最大长度验证
		 *
		 * @param  @int	   length 长度数值
		 * @return boolean true通过，false未通过
		 */
		obj.maxLength = function(length){
			var val = obj.getValue();
			return val.length <= length;
		};

		/**
		 * 最小长度验证
		 *
		 * @param  @int	   length 长度数值
		 * @return boolean true通过，false未通过
		 */
		obj.minLength = function(length){
			var val = obj.getValue();
			return val.length >= length;
		};

		/**
		 * 验证码验证
		 * @return boolean true通过，false未通过
		 */
	 	obj.code = function(){
			var pattern = /\d{6}/;
			return obj.regExp(pattern)
		};

		/**
		 * 比较验证
		 *
		 * @param  string  operator 	 比较操作符，例如：['=='、'>'、'<'、'>='、'<='、'!=']
		 * @param  string  compareValue  要比较的值
		 * @return boolean true通过，false未通过
		 */
		obj.compare = function(operator, compareValue){
			var val = obj.getValue();
			var exp = '';
			if(!isNaN(val) && !isNaN(compareValue)){
				exp = parseFloat(val) + operator + parseFloat(compareValue);
			}else{
				exp = "'" + val + "'" + operator + "'" + compareValue + "'";
			}
			return eval(exp);
		};
		
		/**
		 * 复选框验证
		 *
		 * @param  string  name 元素的name属性
		 * @return boolean true通过，false未通过
		 */
		obj.checkbox = function(name){
			var result = false;
			var checkboxs = Zepto("input[type='checkbox'][name='" + name + "']");
			if(checkboxs && checkboxs.length){
				Zepto.each(checkboxs, function(i, o){
					if(Zepto(o).attr('checked') == 'checked'){
						result = true;
						return false;
					}
				});
			}
			return result;
		};

		/**
		 * 同步验证
		 *
		 * 1、请求方式post
		 * 2、程序通过param值来获取参数
		 * 3、程序返回json格式的数据，success:true(可使用)，false(不可使用)
		 * 4、请求失败弹出错误状态值
		 *
		 * @param  string  url   请求地址
		 * @param  string  param 参数名
		 * @return boolean true通过，false未通过
		 */
		obj.ajax = function(url, param){
			var result = false;
			var data = '{' + param + ':' + "'" + obj.getValue() + "'" + '}';
				data = eval('(' + data + ')');
			Zepto.ajax({
				url:url, type:'post', data:data, async:false, dataType:'json',
				success:function(msg){
					result = msg.success;
				},
				error:function(error){
					alert(error.status);
				}
			});
			return result;
		};

		/**
		 * 信息提示
		 *
		 * 1、设置消息内容和样式
		 * 2、如果样式有变动修改此方法即可
		 *
		 * @param string msg 信息内容
		 * @param string type 提示类型：error_tip，success_tip，notice_tip
		 */
		obj.tip = function(msg, type){
			//obj.rObj.text(msg);
			switch(type){
				case 'notice_tip':
					//obj.rObj.find('i').attr('class', type);
					break;
				case 'success_tip':
					//obj.rObj.hide();
					break;				
				case 'error_tip':
					layerM.msg({
						content: msg,
					});
					break;
				default :
					//obj.rObj.find('i').attr('class', (msg.length ? type : ''));
					break;
			}
		};

		/**
		 * 显示错误信息
		 *
		 * @param string err 信息内容
		 */
		obj.error = function(err){
			obj.tip(err, 'error_tip');
		};

		/**
		 * 验证正确，清除错误信息
		 */
		obj.success = function(){
			var msg = (config.success ? config.success : '');
			obj.tip(msg, 'success_tip');
		};
		
		// //焦点提示信息
		// if(obj.vObj != null){
		// 	obj.vObj.click(function(){
		// 		if(config.tip){
		// 			obj.tip(config.tip, 'notice_tip');	
		// 		}
		// 	}).blur(function(){
		// 		obj.result();
		// 	});
		// }

		/**
		 * 验证结果
		 *
		 * @return boolean true通过，false未通过
		 */
		obj.result = function(){
			var error   = '';
			var vResult = true;
			for(var i in obj.rule){
				//验证函数
				var vFunc = obj[i];
				//验证规则对象
				var ruleItem = obj.rule[i];
				//错误信息
				error = ruleItem['error'] ? ruleItem['error'] : '';
				switch(i){
					case 'regExp': //正则验证
						vResult = vFunc(ruleItem['regExp'], ruleItem['attribute']);
						break;
					case 'maxLength': //长度验证
					case 'minLength':
						vResult = vFunc(ruleItem['length']);
						break;
					case 'compare': //比较验证
						var compareValue = Zepto.trim(Zepto("#" + ruleItem['compareTo']).val()); 
						vResult = vFunc(ruleItem['operator'], compareValue);
						break;
					case 'checkbox': //多选框验证
						vResult = vFunc(ruleItem['name']);
						break;
					case 'ajax': //异步验证
						vResult = vFunc(ruleItem['url'], ruleItem['param']);
						break;
					default:
						vResult = vFunc();
						break;
				}
				if(vResult == false) break;
			}
			vResult ? obj.success() : obj.error(error);
			return vResult;
		};
	};
})(window, document);
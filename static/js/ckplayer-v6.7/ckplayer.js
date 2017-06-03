/*
JavaScript Document
ckplayer5.7,有问题请访问http://www.ckplayer.com,欢迎把您的风格提供给大家分享
*/
function ckcpt() { //自定义加载图片或flash，该类可以自己随意添加多个自定义的图片或者flash,请注意前面的都要在最后一个参数后面加上竖号，做为区隔，最后一个不用加
    var cpt = "";
    cpt += 'sch_lr.png,0,2,14,-36|';
    //分别是图片或flash地址，水平对齐方式，垂直对齐方式，水平偏移量，垂直偏移量
    cpt += 'sch_lr.png,2,2,-15,-36|';
    return cpt;
}
function ckstyle() { //定义总的风格
    var ck = new Object();
    ck.cpath = 'assets/'; //风格总路径
    ck.mylogo = 'logo.swf';
    ck.logo = 'cklogo.png,2,100,10';
    ck.buffer = 'buffer.swf';
    ck.controlbar = 'images_buttom_bg.png';
    ck.cplay = 'images_Play_out.png,images_Play_on.png';
    ck.cpause = 'images_Pause_out.png,images_Pause_on.png';
    ck.pausec = 'images_Pause_Scgedyke.png,images_Pause_Scgedyke_on.png';
    ck.sound = 'images_Sound_out.png,images_Sound_on.png';
    ck.mute = 'images_Mute_out.png,images_Mute_on.png';
    ck.full = 'images_Full_out.png,images_Full_on.png';
    ck.general = 'images_General_out.png,images_General_on.png';
    ck.cvolume = 'images_Volume_back.png,images_Volume_on.png,images_Volume_Float.png';
    ck.schedule = 'images_Schedule_bg.png,images_Schedule_load.png,images_Schedule_play.png,images_Schedule.png';
    ck.fast = 'images_Fashf_out.png,images_Fashf_on.png,images_Fashr_out.png,images_Fashr_on.png';
    ck.advmute = 'images_v_off.png,images_v_on.png';
    ck.advjump = 'images_adv_skip.png';
    ck.advclose = 'images_close_adv.png';
    ck.control_r='"",2,1,-75,-100,1';//右侧调整按钮的文件，坐标(4个参数)，传递的参数(默认是用来判断是否调用开关灯效果的，0是不使用关灯，1是使用，将调用function closelights(){};在站外时这里应该改成0,不使用关灯
	ck.control_c='"",1,1,-180,-100,ckplayer/share.xml?id=[$pat],0';//分享按钮的文件，坐标,相关设置的xml文件,编码0是默认的utf-8,1是gbk2312
	ck.control_c2='"",1,1,-180,-100';//调整大小和颜色按钮的文件，坐标
	ck.control_rel='related.swf,related.xml?id=[$pat],0';
	//视频播放结束后显示相关视频的插件文件（注意，要在视频结束动作设置成3），最大尺寸宽，最大尺寸高，最小尺寸宽，最小尺寸高，相关视频的xml文件,编码0是默认的utf-8,1是gbk2312
    ck.setup = '0,1,1,1,1,1';
    //总体设置：是否使用鼠标手型1是使用手型0是不使用，是否支持单击暂停1是支持0不支持，是否支持双击全屏1是支持0不支持,在播放前置flash广告时是否同时加载视频,logo在播放广告时是否显示1不显示0显示,是否采用http视频直播流0不是1采用
    ck.pm_repc='[]->&';
	//视频地址替换符，当视频地址里包含&这样的符号时请用上面的符号
	ck.pm_spac = '|';
    //视频地址间隔符，默认使用逗号，如果视频地址里本身存在逗号的话需要另外设置一个间隔符，注意，即使只有一个视频也需要设置
    ck.pm_ctbar = '1,2,0,-30,0,30,0,1,5000';
    //控制栏的参数，这里分二种情况,第7个参数是设置定位方式(0：相对定位，1：绝对定位)
    //0：第一种情况的参数说明，默认1:中间对齐，上中下对齐，离左边的距离，Y轴偏移量，离右边的距离，高度，定位方式，隐藏方式(0不隐藏，1全屏时隐藏，2都隐藏)，隐藏时间
    //1：第二种情况的参数说明，左中右对齐，上中下对齐，x偏移量，y偏移，宽度，高度，定位方式，隐藏方式(0不隐藏，1全屏时隐藏，2都隐藏)，隐藏时间
    ck.pm_sch = '1,2,15,-37,15,5,0,14,8';
    //进度条的参数，这里分二种情况，前面7个参数对照控制栏的，第8个参数是拖动按钮的宽，第9个参数是拖动按钮的高
    ck.pm_play = '0,2,0,-30';
    //播放和暂停按钮的坐标
    ck.pm_clock = '0,2,40,-25';
    //已播放时间的坐标和宽度
    ck.pm_clock2 = '0,2,100,-25';
    //总时间的坐标和宽度
    ck.pm_full = '2,2,-35,-30';
    //全屏和取消全屏按钮的坐标
    ck.pm_vol = '2,2,-95,-18,53,4,6,12';
    //音量调节框的坐标，宽度，高度，拖动按钮的宽度,高度
    ck.pm_sound = '2,2,-130,-30';
    //静音和取消静音的坐标
    ck.pm_fastf = '2,2,-13,-39';
    //快进按钮的坐标
    ck.pm_fastr = '0,2,0,-39';
    //快退按钮的坐标
    ck.pm_fasttime = '10';
    //快进和快退的秒数
    ck.pm_video_bottom = '35,35';
    //视频离底部的距离，广告的底部参考距离-该参数的作用请到网站查看
    ck.pm_video_bo = '200,1';
    //视频缓冲时间-默认200毫秒,是否优化视频-默认为1优化
    ck.pm_pa = '0,30';
    //是否自动调整中间暂停按钮的位置-默认0自动调整1是不自动调整，中间暂停按钮的透明度
    ck.pm_buffer_wh = '30,30';
    //缓冲图片的宽和度
    ck.pm_pr = '0x000000,0xfdfdfd,0xffffff,6,50,80,18,5';
    //提示框背景颜色,边框颜色,文字的颜色,边框的弧度,提示框透明度,文字透明度,提示框的高度,离按钮的距离
    ck.pm_advmaskap = '100';
    //播放前置广告时底部透明度0-100,只对flash有效，视频时将自动隐藏控制栏，图片时将自动设置成0，做为链接用
    ck.pm_advstatus = '1,3,280,30';
    //前置广告是否显示静音按钮(0/1),位置(0/1/2/3),x,y
    ck.pm_advjp = '1,0,3,190,30';
    //前置广告是否显示跳过广告按钮,跳过按钮触发对象(值0/1,0是直接跳转,1是触发js:function ckadjump(){}),对齐方式,x,y
    ck.pm_advtime = '100,3,100,30';
    //前置广告倒计时文本宽,对齐方式,x,y
    ck.pm_advmarquee = '0,1,2,50,-60,50,18,0,0,15,3000,1,20,0x000000';
    //滚动广告的参数，这里分二种情况,第8个参数是设置定位方式(0：相对定位，1：绝对定位)
    //0：第一种情况的参数说明，是否显示，默认1:中间对齐，上中下对齐，离左边的距离，Y轴偏移量，离右边的距离，高度，定位方式，滚动方向（0向左1向上），滚动行距，移动单位像素，移动单位时长，向上滚动时每次停留时间，背景颜色
    //1：第二种情况的参数说明，左中右对齐，上中下对齐，x偏移量，y偏移，宽度，高度，定位方式，滚动方向（0向左1向上），向上时的高度，滚动行距，移动单位像素，移动单位时长，向上滚动时每次停留时间，背景颜色
    //是否显示底部广告(0/1),背景颜色,高度,左边的距离,右边的距离,离下面的距离,滚动的距离(0静止),间隙时间(越小越快,建议不小于20),如果开启广告需要有function ckmarqueeadv(){return '广告内容'}
    ck.advmarquee = '{a href="http://www.ckplayer.com" target="_blank"}{font color="#FFFFFF" size="12"}JS风格文件配置中的广告.这里可以放文字广告，{font color="#ff3300" size="12"}你也可以加上链接，设置字体、颜色，也可以把内容分成几段，想怎么弄，就怎么弄。{/font}为什么要在这里放呢，是因为如果你想在站外调用视频并且有文字广告的话，就得在这里才能被加载，在js里是不被加载的，默认使用这里的广告，如果不想在这里使用可以清空这里的内容{/font}{/a}';
    ck.pm_advms = '1,3,40,55';
    //滚动广告是否显示关闭按钮(0/1),位置(0/1/2/3),x,y
    ck.pm_load = '70,20,0,40,{font color="#FFFFFF"}已加载[$prtage]%{/font},{font color="#FFFFFF"}加载失败{/font}';
    //加载视频百分比的位置默认距中，参数说明：宽度,高度,右偏移（正/负），下偏移(正/负),字符[$prtage]将被自动替换成百分比的数字,加载失败的提示
    ck.pm_buffer = '25,20,0,0,{font color="#FFFFFF"}[$buffer]%{/font}';
    //视频缓冲百分比的位置默认距中，参数说明：宽度,高度,右偏移（正/负），下偏移(正/负),只显示百分比数据
    ck.statustrue =3;
    ck.pr_play = '点击播放';
    ck.pr_pause = '点击暂停';
    ck.pr_mute = '点击静音';
    ck.pr_nomute = '取消静音';
    ck.pr_full = '点击全屏';
    ck.pr_nofull = '退出全屏';
    ck.pr_fastf = '快进';
    ck.pr_fastr = '快退';
    ck.pr_time = '[$Time]';
    //[$Time]会自动替换目前进度提示
    ck.pr_volume = '[$Volume]';
    //[$Volume]会自动替换音量
    ck.pr_clock = '{font color="#FFFFFF" size="12"}[$Time] | [$TimeAll]{/font}';
    //这里定义进度时间的显示，并且同时会替换二个参数，[$Time]会被替换成已播放时间，[$TimeAll]会被替换成总时间
    ck.pr_clock2 = '';
    //同pr_clock,这二个是相等的，主要是为了方便在不同的地方调用已播放时间和总时间
    ck.pr_adv = '{font color="#FFFFFF" size="12"}广告剩余：{font color="#FF0000" size="14"}{b}[$Second]{/b}{/font} 秒{/font}';
    ck.myweb = '"",""';
    ck.cpt_list = ckcpt();
    return ck;
}
function ckplayer_hqurl(str){
    var webagreement=document.location.protocol;
    var dqljurl=unescape(window.location.href).replace("file:///","");
    var port=document.location.port;var hostname=document.location.hostname;
    if(port){
        hostname+=':'+port}var dqweburl=document.location.protocol+'//'+hostname;var lagree='';
        var iswb=0;var geturl='';
        var geturlt='';
        var strs=new Array();
        strs=str.split('//');
        if(strs.length>0){
            lagree=strs[0]+'//'
        }
        var httpgreenall="http|https|ftp|rtsp|mms|ftp|rtmp";
        var httparray=new Array();httparray=httpgreenall.split('|');
        for(i=0;i<httparray.length;i++){
            if((httparray[i]+'://')==lagree){
                iswb=1;break}
            }
            if(iswb==0){
                if(str.substr(0,1)=='/'){
                    geturlt=dqweburl+str
                }else{
                    geturl=dqljurl.substring(0,dqljurl.lastIndexOf("/")+1).replace("\\","/");
                    strt=str.replace('../','./');var str2=new Array();
                    str2=strt.split('./');var str2length=str2.length;
                    var strs=strt.replace('./','');
                    var urlt=new Array();urlt=geturl.split('/');
                    var jqcd=urlt.length-str2length;
                    for(i=0;i<(jqcd);i++){
                        geturlt+=urlt[i]+'/'
                    }
                    geturlt+=strs
                }
            }else{
                geturlt=str}return geturlt
            }
function swfupload() {
    this.ckplayer_url = '';
    this.ckplayer_flv = '';
    this.ckplayer_pat = '';
    this.ckplayer_style = 1;
    this.ckplayer_default = 0;
    this.ckplayer_xml = '';
    this.ckplayer_volume = 50;
    this.ckplayer_play = 1;
    this.ckplayer_width = 600;
    this.ckplayer_height = 400;
    this.ckplayer_bgcolor = '#000000';
    this.ckplayer_allowFullScreen = false;
    this.ckplayer_loadimg = '';
    this.ckplayer_pauseflash = '';
    this.ckplayer_pauseurl = '';
    this.ckplayer_loadadv = '';
    this.ckplayer_loadurl = '';
    this.ckplayer_loadtime = 0;
    this.ckplayer_endstatus = 0;
	this.ckplayer_http = 0;
	this.ckplayer_load =0;
	this.ckplayer_start=0;
	this.ckplayer_ending=0;
    this.swfwrite = function(str) {
        if (this.ckplayer_url) {
            this.ckplayer_url = ckplayer_hqurl(this.ckplayer_url)
        }
        if (this.ckplayer_flv) {
            this.ckplayer_flv = ckplayer_hqurl(this.ckplayer_flv)
        }
        var swfhtml = '';
        swfhtml += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + this.ckplayer_width + '" height="' + this.ckplayer_height + '" id="ckplayer_' + str + '"  align="middle">';
        swfhtml += '	<param name="movie" value="' + this.ckplayer_url + '" />';
        swfhtml += '	<param name="quality" value="high" />';
        swfhtml += '	<param name="bgcolor" value="' + this.ckplayer_bgcolor + '" />';
        swfhtml += '	<param name="wmode" value="transparent" />';
        swfhtml += '	<param name="allowScriptAccess" value="sameDomain" />';
        swfhtml += '    <param name="allowFullScreen" value="' + this.ckplayer_allowFullScreen + '" />';
        swfhtml += '    <param name="Flashvars" value="v=' + this.ckplayer_volume + '&p=' + this.ckplayer_play + '&f=' + this.ckplayer_flv + '&i=' + this.ckplayer_loadimg + '&d=' + this.ckplayer_pauseflash + '&u=' + this.ckplayer_pauseurl + '&l=' + this.ckplayer_loadadv + '&r=' + this.ckplayer_loadurl + '&t=' + this.ckplayer_loadtime + '&e=' + this.ckplayer_endstatus + '&a=' + this.ckplayer_pat + '&s=' + this.ckplayer_style + '&x=' + this.ckplayer_xml + '&c=' + this.ckplayer_default + '&b='+this.ckplayer_bgcolor+'&h='+this.ckplayer_http+'&m='+this.ckplayer_load+'&g='+this.ckplayer_start+'&j='+this.ckplayer_ending+'" />';
        swfhtml += '    <embed src="' + this.ckplayer_url + '" flashvars="v=' + this.ckplayer_volume + '&p=' + this.ckplayer_play + '&f=' + this.ckplayer_flv + '&i=' + this.ckplayer_loadimg + '&d=' + this.ckplayer_pauseflash + '&u=' + this.ckplayer_pauseurl + '&l=' + this.ckplayer_loadadv + '&r=' + this.ckplayer_loadurl + '&t=' + this.ckplayer_loadtime + '&e=' + this.ckplayer_endstatus + '&a=' + this.ckplayer_pat + '&s=' + this.ckplayer_style + '&x=' + this.ckplayer_xml + '&c=' + this.ckplayer_default + '&b='+this.ckplayer_bgcolor+'&h='+this.ckplayer_http+'&m='+this.ckplayer_load+'&g='+this.ckplayer_start+'&j='+this.ckplayer_ending+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + this.ckplayer_width + '" height="' + this.ckplayer_height + '" allowFullScreen="' + this.ckplayer_allowFullScreen + '"'
		if (navigator.appName.indexOf("Microsoft") != -1) {
			swfhtml += '></embed>';
		}
		else{
			swfhtml += ' name="ckplayer_' + str + '"></embed>';
		}
        swfhtml += '</object>';
        document.getElementById(str).style.width = this.ckplayer_width + 'px';
        document.getElementById(str).style.height = this.ckplayer_height + 'px';
        document.getElementById(str).style.backgroundColor = this.ckplayer_bgcolor;
        document.getElementById(str).innerHTML = swfhtml;
    }
}

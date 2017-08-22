import { Router } from 'express'

var router = Router()
// index router
router.get('/', (req, res, next) => {
  var obj = {"allparentinfo":[{"headinfo":{"before":"更多课程","after":"中小学","imgurl":"img/icon_middle.png"},"course":{"classList":[{"classname":"精品钢琴课","imgurl":"img/cls_mid1.jpg"},{"classname":"精品数学课","imgurl":"img/cls_mid2.jpg"}],"classMoreList":[{"classname":"高中语文","imgurl":"img/cls_icon_chaness.png"},{"classname":"小学英语","imgurl":"img/cls_icon_english.png"},{"classname":"初中物理","imgurl":"img/cls_icon_wuli.png"},{"classname":"高中数学","imgurl":"img/cls_icon_math.png"}]}},{"headinfo":{"before":"更多课程","after":"艺术/体育","imgurl":"img/icon_art.png"},"course":{"classList":[{"classname":"精品语文课","imgurl":"img/cls_mid3.jpg"},{"classname":"精品生物课","imgurl":"img/cls_mid4.jpg"}],"classMoreList":[{"classname":"钢琴","imgurl":"img/cls_icon_gangqin.png"},{"classname":"古筝","imgurl":"img/cls_icon_guzheng.png"},{"classname":"吉他","imgurl":"img/cls_icon_jita.png"},{"classname":"小提琴","imgurl":"img/cls_icon_tiqin.png"}]}},{"headinfo":{"before":"更多课程","after":"语言/留学","imgurl":"img/icon_liuxue.png"},"course":{"classList":[{"classname":"精品体育课","imgurl":"img/cls_mid5.jpg"},{"classname":"精品麻将课","imgurl":"img/cls_mid6.jpg"}],"classMoreList":[{"classname":"葡萄牙语","imgurl":"img/cls_icon_putao.png"},{"classname":"外教口语","imgurl":"img/cls_icon_waijiao.png"},{"classname":"新概念英语","imgurl":"img/cls_icon_xingainian.png"},{"classname":"剑桥英语","imgurl":"img/cls_icon_jianqiao.png"}]}},{"headinfo":{"before":"更多课程","after":"拓展训练","imgurl":"img/icon_tuozhan.png"},"course":{"classList":[{"classname":"精品出游课","imgurl":"img/cls_mid7.jpg"},{"classname":"精品玩耍课","imgurl":"img/cls_mid8.jpg"}],"classMoreList":[{"classname":"冬夏令营","imgurl":"img/cls_icon_dongxia.png"},{"classname":"亲子出游","imgurl":"img/cls_icon_qinzi.png"},{"classname":"儿童乐园","imgurl":"img/cls_icon_ertong.png"},{"classname":"拓展培训","imgurl":"img/cls_icon_tuozhanpei.png"}]}}],"indexClass":[{"showClassImg":"img/class_art_icon.png","showClassName":"艺术","classPid":"15963587"},{"showClassImg":"img/class_tiyu_icon.png","showClassName":"体育","classPid":"15963588"},{"showClassImg":"img/class_yuyan_icon.png","showClassName":"语言","classPid":"15963589"},{"showClassImg":"img/class_liuxue_icon.png","showClassName":"留学","classPid":"15963590"},{"showClassImg":"img/class_xiao_icon.png","showClassName":"小学","classPid":"15963591"},{"showClassImg":"img/class_sheng_icon.png","showClassName":"小升初","classPid":"15963592"},{"showClassImg":"img/class_chuzhong_icon.png","showClassName":"初中","classPid":"15963593"},{"showClassImg":"img/class_zhongkao_icon.png","showClassName":"中考","classPid":"15963594"},{"showClassImg":"img/class_gao_icon.png","showClassName":"高中","classPid":"15963595"},{"showClassImg":"img/class_sheng_icon.png","showClassName":"更多","classPid":"all"}]}
  res.json(obj)
})
// 页面初始化加载一级分类第一个
router.get('/listhome',(reqq, res, next) => {
  var obj = {"gradeOne":[{"gradeId":15963587,"class_name":"艺术"},{"gradeId":15963588,"class_name":"体育"},{"gradeId":15963589,"class_name":"语言"},{"gradeId":15963590,"class_name":"留学"},{"gradeId":15963591,"class_name":"小学"},{"gradeId":15963592,"class_name":"小升初"},{"gradeId":15963593,"class_name":"初中"},{"gradeId":15963594,"class_name":"中考"},{"gradeId":15963595,"class_name":"高中"},{"gradeId":15963596,"class_name":"益智"},{"gradeId":15963597,"class_name":"高考"},{"gradeId":15963598,"class_name":"学前"},{"gradeId":15963599,"class_name":"营地"},{"gradeId":15963600,"class_name":"其它"}],"gradeTwo":[{"gradeTwoId":25963587,"twoClass_name":"乐器","pid":"15963587"},{"gradeTwoId":25963588,"twoClass_name":"声乐","pid":"15963587"},{"gradeTwoId":25963589,"twoClass_name":"舞蹈","pid":"15963587"},{"gradeTwoId":25963590,"twoClass_name":"绘画","pid":"15963587"},{"gradeTwoId":25963591,"twoClass_name":"书法","pid":"15963587"},{"gradeTwoId":25963592,"twoClass_name":"媒体艺术","pid":"15963587"},{"gradeTwoId":25963593,"twoClass_name":"雕塑","pid":"15963587"},{"gradeTwoId":25963594,"twoClass_name":"设计","pid":"15963587"},{"gradeTwoId":25963595,"twoClass_name":"戏剧","pid":"15963587"}],"gradeThree":[[{"gradeThreeId":35963587,"threeClass_name":"钢琴","pid":"25963587"},{"gradeThreeId":35963588,"threeClass_name":"小提琴","pid":"25963587"},{"gradeThreeId":35963589,"threeClass_name":"大提琴","pid":"25963587"},{"gradeThreeId":35963590,"threeClass_name":"电子琴","pid":"25963587"},{"gradeThreeId":35963591,"threeClass_name":"琵琶","pid":"25963587"},{"gradeThreeId":35963592,"threeClass_name":"二胡","pid":"25963587"},{"gradeThreeId":35963593,"threeClass_name":"萨克斯","pid":"25963587"},{"gradeThreeId":35963594,"threeClass_name":"吉他","pid":"25963587"},{"gradeThreeId":35963595,"threeClass_name":"电吉他","pid":"25963587"},{"gradeThreeId":35963596,"threeClass_name":"圆号","pid":"25963587"},{"gradeThreeId":35963597,"threeClass_name":"葫芦四","pid":"25963587"},{"gradeThreeId":35963598,"threeClass_name":"锁呐","pid":"25963587"},{"gradeThreeId":35963599,"threeClass_name":"杨琴","pid":"25963587"},{"gradeThreeId":35963600,"threeClass_name":"长笛","pid":"25963587"},{"gradeThreeId":35963601,"threeClass_name":"码头琴","pid":"25963587"},{"gradeThreeId":35963602,"threeClass_name":"手风琴","pid":"25963587"},{"gradeThreeId":35963603,"threeClass_name":"古筝","pid":"25963587"},{"gradeThreeId":35963604,"threeClass_name":"巴杨琴","pid":"25963587"},{"gradeThreeId":35963605,"threeClass_name":"黑管","pid":"25963587"},{"gradeThreeId":35963606,"threeClass_name":"阮","pid":"25963587"},{"gradeThreeId":35963607,"threeClass_name":"单簧管","pid":"25963587"},{"gradeThreeId":35963608,"threeClass_name":"双簧管","pid":"25963587"},{"gradeThreeId":35963609,"threeClass_name":"打击乐","pid":"25963587"},{"gradeThreeId":35963610,"threeClass_name":"小号","pid":"25963587"},{"gradeThreeId":35963611,"threeClass_name":"坚琴","pid":"25963587"},{"gradeThreeId":35963612,"threeClass_name":"尤克里里","pid":"25963587"},{"gradeThreeId":35963613,"threeClass_name":"电贝斯","pid":"25963587"},{"gradeThreeId":35963614,"threeClass_name":"马林巴","pid":"25963587"},{"gradeThreeId":35963615,"threeClass_name":"架子鼓","pid":"25963587"},{"gradeThreeId":35963616,"threeClass_name":"竹笛","pid":"25963587"},{"gradeThreeId":35963617,"threeClass_name":"竖笛","pid":"25963587"}],[{"gradeThreeId":35963618,"threeClass_name":"美声","pid":"25963588"},{"gradeThreeId":35963619,"threeClass_name":"民族","pid":"25963588"},{"gradeThreeId":35963620,"threeClass_name":"流行","pid":"25963588"},{"gradeThreeId":35963621,"threeClass_name":"卡拉OK","pid":"25963588"},{"gradeThreeId":35963622,"threeClass_name":"原生态","pid":"25963588"},{"gradeThreeId":35963623,"threeClass_name":"音乐基础","pid":"25963588"}],[{"gradeThreeId":35963624,"threeClass_name":"芭蕾舞","pid":"25963589"},{"gradeThreeId":35963625,"threeClass_name":"拉丁舞","pid":"25963589"},{"gradeThreeId":35963626,"threeClass_name":"街舞","pid":"25963589"},{"gradeThreeId":35963627,"threeClass_name":"现代舞","pid":"25963589"},{"gradeThreeId":35963628,"threeClass_name":"爵士舞","pid":"25963589"},{"gradeThreeId":35963629,"threeClass_name":"古舞蹈","pid":"25963589"},{"gradeThreeId":35963630,"threeClass_name":"民族舞","pid":"25963589"},{"gradeThreeId":35963631,"threeClass_name":"健美操","pid":"25963589"},{"gradeThreeId":35963632,"threeClass_name":"民间舞","pid":"25963589"},{"gradeThreeId":35963633,"threeClass_name":"国际舞","pid":"25963589"},{"gradeThreeId":35963634,"threeClass_name":"迪斯科","pid":"25963589"},{"gradeThreeId":35963635,"threeClass_name":"拉拉操","pid":"25963589"},{"gradeThreeId":35963636,"threeClass_name":"HipHop","pid":"25963589"},{"gradeThreeId":35963637,"threeClass_name":"摩登舞","pid":"25963589"}],[{"gradeThreeId":35963638,"threeClass_name":"素描","pid":"25963590"},{"gradeThreeId":35963639,"threeClass_name":"水粉","pid":"25963590"},{"gradeThreeId":35963640,"threeClass_name":"水彩","pid":"25963590"},{"gradeThreeId":35963641,"threeClass_name":"国画","pid":"25963590"},{"gradeThreeId":35963642,"threeClass_name":"油画","pid":"25963590"},{"gradeThreeId":35963643,"threeClass_name":"沙画","pid":"25963590"},{"gradeThreeId":35963644,"threeClass_name":"插画","pid":"25963590"},{"gradeThreeId":35963645,"threeClass_name":"速写","pid":"25963590"},{"gradeThreeId":35963646,"threeClass_name":"创意画","pid":"25963590"},{"gradeThreeId":35963647,"threeClass_name":"简笔画","pid":"25963590"},{"gradeThreeId":35963648,"threeClass_name":"幼儿绘画","pid":"25963590"},{"gradeThreeId":35963649,"threeClass_name":"卡通画","pid":"25963590"},{"gradeThreeId":35963650,"threeClass_name":"漫画","pid":"25963590"},{"gradeThreeId":35963651,"threeClass_name":"线描","pid":"25963590"}],[{"gradeThreeId":35963652,"threeClass_name":"硬笔书法","pid":"25963591"},{"gradeThreeId":35963653,"threeClass_name":"软笔书法","pid":"25963591"}],[{"gradeThreeId":35963654,"threeClass_name":"播音主持","pid":"25963592"},{"gradeThreeId":35963655,"threeClass_name":"影视表演","pid":"25963592"},{"gradeThreeId":35963656,"threeClass_name":"摄影培训","pid":"25963592"},{"gradeThreeId":35963657,"threeClass_name":"编导培训","pid":"25963592"},{"gradeThreeId":35963658,"threeClass_name":"电视报装","pid":"25963592"},{"gradeThreeId":35963659,"threeClass_name":"DJ培训","pid":"25963592"},{"gradeThreeId":35963660,"threeClass_name":"模特培训","pid":"25963592"},{"gradeThreeId":35963661,"threeClass_name":"舞台表演","pid":"25963592"}],[{"gradeThreeId":35963662,"threeClass_name":"陶艺","pid":"25963593"}],[{"gradeThreeId":35963663,"threeClass_name":"3D游戏设计","pid":"25963594"},{"gradeThreeId":35963664,"threeClass_name":"插画","pid":"25963594"},{"gradeThreeId":35963665,"threeClass_name":"泥塑","pid":"25963594"},{"gradeThreeId":35963666,"threeClass_name":"装置","pid":"25963594"},{"gradeThreeId":35963667,"threeClass_name":"装饰","pid":"25963594"},{"gradeThreeId":35963668,"threeClass_name":"手工","pid":"25963594"},{"gradeThreeId":35963669,"threeClass_name":"拼贴","pid":"25963594"},{"gradeThreeId":35963670,"threeClass_name":"石膏","pid":"25963594"}],[{"gradeThreeId":35963671,"threeClass_name":"戏剧教育","pid":"25963595"},{"gradeThreeId":35963672,"threeClass_name":"戏剧表演","pid":"25963595"},{"gradeThreeId":35963673,"threeClass_name":"京剧","pid":"25963595"}]]}
  res.json(obj)
})
// 点击对应一级 给出三级响应
router.get('/listhome/:id', (req, res, next) => {
  req.params.id === '15963588'&&res.json({"gradeOne":[{"gradeId":15963587,"class_name":"艺术"},{"gradeId":15963588,"class_name":"体育"},{"gradeId":15963589,"class_name":"语言"},{"gradeId":15963590,"class_name":"留学"},{"gradeId":15963591,"class_name":"小学"},{"gradeId":15963592,"class_name":"小升初"},{"gradeId":15963593,"class_name":"初中"},{"gradeId":15963594,"class_name":"中考"},{"gradeId":15963595,"class_name":"高中"},{"gradeId":15963596,"class_name":"益智"},{"gradeId":15963597,"class_name":"高考"},{"gradeId":15963598,"class_name":"学前"},{"gradeId":15963599,"class_name":"营地"},{"gradeId":15963600,"class_name":"其它"}],"gradeTwo":[{"gradeTwoId":25963596,"twoClass_name":"运动","pid":"15963588"},{"gradeTwoId":25963597,"twoClass_name":"武术","pid":"15963588"},{"gradeTwoId":25963598,"twoClass_name":"棋牌","pid":"15963588"}],"gradeThree":[[{"gradeThreeId":35963674,"threeClass_name":"游泳","pid":"25963596"},{"gradeThreeId":35963675,"threeClass_name":"羽毛球","pid":"25963596"},{"gradeThreeId":35963676,"threeClass_name":"篮球","pid":"25963596"},{"gradeThreeId":35963677,"threeClass_name":"网球","pid":"25963596"},{"gradeThreeId":35963678,"threeClass_name":"足球","pid":"25963596"},{"gradeThreeId":35963679,"threeClass_name":"排球","pid":"25963596"},{"gradeThreeId":35963680,"threeClass_name":"瑜伽","pid":"25963596"},{"gradeThreeId":35963681,"threeClass_name":"台球","pid":"25963596"},{"gradeThreeId":35963682,"threeClass_name":"跑库","pid":"25963596"},{"gradeThreeId":35963683,"threeClass_name":"轮滑","pid":"25963596"},{"gradeThreeId":35963684,"threeClass_name":"滑板","pid":"25963596"},{"gradeThreeId":35963685,"threeClass_name":"骑行","pid":"25963596"},{"gradeThreeId":35963686,"threeClass_name":"普拉提","pid":"25963596"},{"gradeThreeId":35963687,"threeClass_name":"高尔夫","pid":"25963596"},{"gradeThreeId":35963688,"threeClass_name":"耐力跑","pid":"25963596"},{"gradeThreeId":35963689,"threeClass_name":"橄榄球","pid":"25963596"},{"gradeThreeId":35963690,"threeClass_name":"体操","pid":"25963596"},{"gradeThreeId":35963691,"threeClass_name":"单双杠","pid":"25963596"},{"gradeThreeId":35963692,"threeClass_name":"吊环","pid":"25963596"},{"gradeThreeId":35963693,"threeClass_name":"体始能","pid":"25963596"}],[{"gradeThreeId":35963694,"threeClass_name":"跆拳道","pid":"25963597"},{"gradeThreeId":35963695,"threeClass_name":"太极拳","pid":"25963597"},{"gradeThreeId":35963696,"threeClass_name":"空手道","pid":"25963597"},{"gradeThreeId":35963697,"threeClass_name":"柔道","pid":"25963597"},{"gradeThreeId":35963698,"threeClass_name":"散打","pid":"25963597"},{"gradeThreeId":35963699,"threeClass_name":"剑道","pid":"25963597"},{"gradeThreeId":35963700,"threeClass_name":"击剑","pid":"25963597"},{"gradeThreeId":35963701,"threeClass_name":"传统武术","pid":"25963597"},{"gradeThreeId":35963702,"threeClass_name":"自由搏击","pid":"25963597"},{"gradeThreeId":35963703,"threeClass_name":"永春拳","pid":"25963597"},{"gradeThreeId":35963704,"threeClass_name":"少林拳","pid":"25963597"}],[{"gradeThreeId":35963705,"threeClass_name":"围棋","pid":"25963598"},{"gradeThreeId":35963706,"threeClass_name":"象棋","pid":"25963598"},{"gradeThreeId":35963707,"threeClass_name":"国际象棋","pid":"25963598"},{"gradeThreeId":35963708,"threeClass_name":"五子棋","pid":"25963598"},{"gradeThreeId":35963709,"threeClass_name":"桥牌","pid":"25963598"}]]})
  req.params.id === '15963589'&&res.json({"gradeOne":[{"gradeId":15963587,"class_name":"艺术"},{"gradeId":15963588,"class_name":"体育"},{"gradeId":15963589,"class_name":"语言"},{"gradeId":15963590,"class_name":"留学"},{"gradeId":15963591,"class_name":"小学"},{"gradeId":15963592,"class_name":"小升初"},{"gradeId":15963593,"class_name":"初中"},{"gradeId":15963594,"class_name":"中考"},{"gradeId":15963595,"class_name":"高中"},{"gradeId":15963596,"class_name":"益智"},{"gradeId":15963597,"class_name":"高考"},{"gradeId":15963598,"class_name":"学前"},{"gradeId":15963599,"class_name":"营地"},{"gradeId":15963600,"class_name":"其它"}],"gradeTwo":[{"gradeTwoId":25963599,"twoClass_name":"英语","pid":"15963589"},{"gradeTwoId":25963600,"twoClass_name":"多语","pid":"15963589"}],"gradeThree":[[{"gradeThreeId":35963710,"threeClass_name":"剑桥英语","pid":"25963599"},{"gradeThreeId":35963711,"threeClass_name":"外教英语","pid":"25963599"},{"gradeThreeId":35963712,"threeClass_name":"新概念英语","pid":"25963599"},{"gradeThreeId":35963713,"threeClass_name":"雅思","pid":"25963599"},{"gradeThreeId":35963714,"threeClass_name":"新托福","pid":"25963599"},{"gradeThreeId":35963715,"threeClass_name":"实用英语","pid":"25963599"},{"gradeThreeId":35963716,"threeClass_name":"SAT考试","pid":"25963599"},{"gradeThreeId":35963717,"threeClass_name":"SSAT考试","pid":"25963599"},{"gradeThreeId":35963718,"threeClass_name":"GRE考试","pid":"25963599"},{"gradeThreeId":35963719,"threeClass_name":"GMAT","pid":"25963599"},{"gradeThreeId":35963720,"threeClass_name":"少儿英语","pid":"25963599"}],[{"gradeThreeId":35963721,"threeClass_name":"法语","pid":"25963600"},{"gradeThreeId":35963722,"threeClass_name":"德语","pid":"25963600"},{"gradeThreeId":35963723,"threeClass_name":"意大利语","pid":"25963600"},{"gradeThreeId":35963724,"threeClass_name":"葡萄牙语","pid":"25963600"},{"gradeThreeId":35963725,"threeClass_name":"韩语","pid":"25963600"},{"gradeThreeId":35963726,"threeClass_name":"西班牙语","pid":"25963600"},{"gradeThreeId":35963727,"threeClass_name":"日语","pid":"25963600"}]]})
  req.params.id === '15963590'&&res.json({"gradeOne":[{"gradeId":15963587,"class_name":"艺术"},{"gradeId":15963588,"class_name":"体育"},{"gradeId":15963589,"class_name":"语言"},{"gradeId":15963590,"class_name":"留学"},{"gradeId":15963591,"class_name":"小学"},{"gradeId":15963592,"class_name":"小升初"},{"gradeId":15963593,"class_name":"初中"},{"gradeId":15963594,"class_name":"中考"},{"gradeId":15963595,"class_name":"高中"},{"gradeId":15963596,"class_name":"益智"},{"gradeId":15963597,"class_name":"高考"},{"gradeId":15963598,"class_name":"学前"},{"gradeId":15963599,"class_name":"营地"},{"gradeId":15963600,"class_name":"其它"}],"gradeTwo":[{"gradeTwoId":25963601,"twoClass_name":"留学考试","pid":"15963590"}],"gradeThree":[[{"gradeThreeId":35963728,"threeClass_name":"托福","pid":"25963601"},{"gradeThreeId":35963729,"threeClass_name":"雅思","pid":"25963601"}]]})
  req.params.id === '15963591'&&res.json({"gradeOne":[{"gradeId":15963587,"class_name":"艺术"},{"gradeId":15963588,"class_name":"体育"},{"gradeId":15963589,"class_name":"语言"},{"gradeId":15963590,"class_name":"留学"},{"gradeId":15963591,"class_name":"小学"},{"gradeId":15963592,"class_name":"小升初"},{"gradeId":15963593,"class_name":"初中"},{"gradeId":15963594,"class_name":"中考"},{"gradeId":15963595,"class_name":"高中"},{"gradeId":15963596,"class_name":"益智"},{"gradeId":15963597,"class_name":"高考"},{"gradeId":15963598,"class_name":"学前"},{"gradeId":15963599,"class_name":"营地"},{"gradeId":15963600,"class_name":"其它"}],"gradeTwo":[{"gradeTwoId":25963602,"twoClass_name":"一年级","pid":"15963591"},{"gradeTwoId":25963603,"twoClass_name":"二年级","pid":"15963591"},{"gradeTwoId":25963604,"twoClass_name":"三年级","pid":"15963591"},{"gradeTwoId":25963605,"twoClass_name":"四年级","pid":"15963591"},{"gradeTwoId":25963606,"twoClass_name":"五年级","pid":"15963591"},{"gradeTwoId":25963607,"twoClass_name":"六年级","pid":"15963591"}],"gradeThree":[[{"gradeThreeId":35963730,"threeClass_name":"数学","pid":"25963602"},{"gradeThreeId":35963731,"threeClass_name":"语文","pid":"25963602"},{"gradeThreeId":35963732,"threeClass_name":"英语","pid":"25963602"},{"gradeThreeId":35963733,"threeClass_name":"作文","pid":"25963602"},{"gradeThreeId":35963734,"threeClass_name":"奥数","pid":"25963602"},{"gradeThreeId":35963735,"threeClass_name":"全科辅导","pid":"25963602"}],[{"gradeThreeId":35963736,"threeClass_name":"数学","pid":"25963603"},{"gradeThreeId":35963737,"threeClass_name":"语文","pid":"25963603"},{"gradeThreeId":35963738,"threeClass_name":"英语","pid":"25963603"},{"gradeThreeId":35963739,"threeClass_name":"作文","pid":"25963603"},{"gradeThreeId":35963740,"threeClass_name":"奥数","pid":"25963603"},{"gradeThreeId":35963741,"threeClass_name":"全科辅导","pid":"25963603"}],[{"gradeThreeId":35963742,"threeClass_name":"数学","pid":"25963604"},{"gradeThreeId":35963743,"threeClass_name":"语文","pid":"25963604"},{"gradeThreeId":35963744,"threeClass_name":"英语","pid":"25963604"},{"gradeThreeId":35963745,"threeClass_name":"作文","pid":"25963604"},{"gradeThreeId":35963746,"threeClass_name":"奥数","pid":"25963604"},{"gradeThreeId":35963747,"threeClass_name":"全科辅导","pid":"25963604"}],[{"gradeThreeId":35963748,"threeClass_name":"数学","pid":"25963605"},{"gradeThreeId":35963749,"threeClass_name":"语文","pid":"25963605"},{"gradeThreeId":35963750,"threeClass_name":"英语","pid":"25963605"},{"gradeThreeId":35963751,"threeClass_name":"作文","pid":"25963605"},{"gradeThreeId":35963752,"threeClass_name":"奥数","pid":"25963605"},{"gradeThreeId":35963753,"threeClass_name":"全科辅导","pid":"25963605"}],[{"gradeThreeId":35963754,"threeClass_name":"数学","pid":"25963606"},{"gradeThreeId":35963755,"threeClass_name":"语文","pid":"25963606"},{"gradeThreeId":35963756,"threeClass_name":"英语","pid":"25963606"},{"gradeThreeId":35963757,"threeClass_name":"作文","pid":"25963606"},{"gradeThreeId":35963758,"threeClass_name":"奥数","pid":"25963606"},{"gradeThreeId":35963759,"threeClass_name":"全科辅导","pid":"25963606"}],[{"gradeThreeId":35963760,"threeClass_name":"数学","pid":"25963607"},{"gradeThreeId":35963761,"threeClass_name":"语文","pid":"25963607"},{"gradeThreeId":35963762,"threeClass_name":"英语","pid":"25963607"},{"gradeThreeId":35963763,"threeClass_name":"作文","pid":"25963607"},{"gradeThreeId":35963764,"threeClass_name":"奥数","pid":"25963607"},{"gradeThreeId":35963765,"threeClass_name":"全科辅导","pid":"25963607"}]]})
  req.params.id === '15963592'&&res.json({"gradeOne":[{"gradeId":15963587,"class_name":"艺术"},{"gradeId":15963588,"class_name":"体育"},{"gradeId":15963589,"class_name":"语言"},{"gradeId":15963590,"class_name":"留学"},{"gradeId":15963591,"class_name":"小学"},{"gradeId":15963592,"class_name":"小升初"},{"gradeId":15963593,"class_name":"初中"},{"gradeId":15963594,"class_name":"中考"},{"gradeId":15963595,"class_name":"高中"},{"gradeId":15963596,"class_name":"益智"},{"gradeId":15963597,"class_name":"高考"},{"gradeId":15963598,"class_name":"学前"},{"gradeId":15963599,"class_name":"营地"},{"gradeId":15963600,"class_name":"其它"}],"gradeTwo":[{"gradeTwoId":25963608,"twoClass_name":"小升初","pid":"15963592"},{"gradeTwoId":25963609,"twoClass_name":"全科辅导","pid":"15963592"}],"gradeThree":[[{"gradeThreeId":35963766,"threeClass_name":"数学","pid":"25963608"},{"gradeThreeId":35963767,"threeClass_name":"语文","pid":"25963608"},{"gradeThreeId":35963768,"threeClass_name":"英语","pid":"25963608"},{"gradeThreeId":35963769,"threeClass_name":"作文","pid":"25963608"},{"gradeThreeId":35963770,"threeClass_name":"奥数","pid":"25963608"},{"gradeThreeId":35963771,"threeClass_name":"小升初择校","pid":"25963608"},{"gradeThreeId":35963772,"threeClass_name":"全科辅导","pid":"25963608"}],[{"gradeThreeId":35963773,"threeClass_name":"全科辅导","pid":"25963609"}]]})
  req.params.id === '15963593'&&res.json({"gradeOne":[{"gradeId":15963587,"class_name":"艺术"},{"gradeId":15963588,"class_name":"体育"},{"gradeId":15963589,"class_name":"语言"},{"gradeId":15963590,"class_name":"留学"},{"gradeId":15963591,"class_name":"小学"},{"gradeId":15963592,"class_name":"小升初"},{"gradeId":15963593,"class_name":"初中"},{"gradeId":15963594,"class_name":"中考"},{"gradeId":15963595,"class_name":"高中"},{"gradeId":15963596,"class_name":"益智"},{"gradeId":15963597,"class_name":"高考"},{"gradeId":15963598,"class_name":"学前"},{"gradeId":15963599,"class_name":"营地"},{"gradeId":15963600,"class_name":"其它"}],"gradeTwo":[{"gradeTwoId":25963610,"twoClass_name":"初一","pid":"15963593"},{"gradeTwoId":25963611,"twoClass_name":"初二","pid":"15963593"},{"gradeTwoId":25963612,"twoClass_name":"初三","pid":"15963593"}],"gradeThree":[[{"gradeThreeId":35963774,"threeClass_name":"数学","pid":"25963610"},{"gradeThreeId":35963775,"threeClass_name":"语文","pid":"25963610"},{"gradeThreeId":35963776,"threeClass_name":"英语","pid":"25963610"},{"gradeThreeId":35963777,"threeClass_name":"政治","pid":"25963610"},{"gradeThreeId":35963778,"threeClass_name":"物理","pid":"25963610"},{"gradeThreeId":35963779,"threeClass_name":"化学","pid":"25963610"},{"gradeThreeId":35963780,"threeClass_name":"地理","pid":"25963610"},{"gradeThreeId":35963781,"threeClass_name":"历史","pid":"25963610"},{"gradeThreeId":35963782,"threeClass_name":"生物","pid":"25963610"},{"gradeThreeId":35963783,"threeClass_name":"奥数","pid":"25963610"},{"gradeThreeId":35963784,"threeClass_name":"全科辅导","pid":"25963610"}],[{"gradeThreeId":35963785,"threeClass_name":"数学","pid":"25963611"},{"gradeThreeId":35963786,"threeClass_name":"语文","pid":"25963611"},{"gradeThreeId":35963787,"threeClass_name":"英语","pid":"25963611"},{"gradeThreeId":35963788,"threeClass_name":"政治","pid":"25963611"},{"gradeThreeId":35963789,"threeClass_name":"物理","pid":"25963611"},{"gradeThreeId":35963790,"threeClass_name":"化学","pid":"25963611"},{"gradeThreeId":35963791,"threeClass_name":"地理","pid":"25963611"},{"gradeThreeId":35963792,"threeClass_name":"历史","pid":"25963611"},{"gradeThreeId":35963793,"threeClass_name":"生物","pid":"25963611"},{"gradeThreeId":35963794,"threeClass_name":"奥数","pid":"25963611"},{"gradeThreeId":35963795,"threeClass_name":"全科辅导","pid":"25963611"}],[{"gradeThreeId":35963796,"threeClass_name":"数学","pid":"25963612"},{"gradeThreeId":35963797,"threeClass_name":"语文","pid":"25963612"},{"gradeThreeId":35963798,"threeClass_name":"英语","pid":"25963612"},{"gradeThreeId":35963799,"threeClass_name":"政治","pid":"25963612"},{"gradeThreeId":35963800,"threeClass_name":"物理","pid":"25963612"},{"gradeThreeId":35963801,"threeClass_name":"化学","pid":"25963612"},{"gradeThreeId":35963802,"threeClass_name":"地理","pid":"25963612"},{"gradeThreeId":35963803,"threeClass_name":"历史","pid":"25963612"},{"gradeThreeId":35963804,"threeClass_name":"生物","pid":"25963612"},{"gradeThreeId":35963805,"threeClass_name":"奥数","pid":"25963612"},{"gradeThreeId":35963806,"threeClass_name":"全科辅导","pid":"25963612"}]]})
  req.params.id === '15963594'&&res.json({"gradeOne":[{"gradeId":15963587,"class_name":"艺术"},{"gradeId":15963588,"class_name":"体育"},{"gradeId":15963589,"class_name":"语言"},{"gradeId":15963590,"class_name":"留学"},{"gradeId":15963591,"class_name":"小学"},{"gradeId":15963592,"class_name":"小升初"},{"gradeId":15963593,"class_name":"初中"},{"gradeId":15963594,"class_name":"中考"},{"gradeId":15963595,"class_name":"高中"},{"gradeId":15963596,"class_name":"益智"},{"gradeId":15963597,"class_name":"高考"},{"gradeId":15963598,"class_name":"学前"},{"gradeId":15963599,"class_name":"营地"},{"gradeId":15963600,"class_name":"其它"}],"gradeTwo":[{"gradeTwoId":25963613,"twoClass_name":"中考","pid":"15963594"},{"gradeTwoId":25963614,"twoClass_name":"全科辅导","pid":"15963594"}],"gradeThree":[[{"gradeThreeId":35963807,"threeClass_name":"数学","pid":"25963613"},{"gradeThreeId":35963808,"threeClass_name":"语文","pid":"25963613"},{"gradeThreeId":35963809,"threeClass_name":"英语","pid":"25963613"},{"gradeThreeId":35963810,"threeClass_name":"政治","pid":"25963613"},{"gradeThreeId":35963811,"threeClass_name":"物理","pid":"25963613"},{"gradeThreeId":35963812,"threeClass_name":"化学","pid":"25963613"},{"gradeThreeId":35963813,"threeClass_name":"地理","pid":"25963613"},{"gradeThreeId":35963814,"threeClass_name":"历史","pid":"25963613"},{"gradeThreeId":35963815,"threeClass_name":"生物","pid":"25963613"},{"gradeThreeId":35963816,"threeClass_name":"奥数","pid":"25963613"},{"gradeThreeId":35963817,"threeClass_name":"理宗","pid":"25963613"},{"gradeThreeId":35963818,"threeClass_name":"文宗","pid":"25963613"},{"gradeThreeId":35963819,"threeClass_name":"全科辅导","pid":"25963613"}],[{"gradeThreeId":35963820,"threeClass_name":"全科辅导","pid":"25963614"}]]})
  req.params.id === '15963595'&&res.json({"gradeOne":[{"gradeId":15963587,"class_name":"艺术"},{"gradeId":15963588,"class_name":"体育"},{"gradeId":15963589,"class_name":"语言"},{"gradeId":15963590,"class_name":"留学"},{"gradeId":15963591,"class_name":"小学"},{"gradeId":15963592,"class_name":"小升初"},{"gradeId":15963593,"class_name":"初中"},{"gradeId":15963594,"class_name":"中考"},{"gradeId":15963595,"class_name":"高中"},{"gradeId":15963596,"class_name":"益智"},{"gradeId":15963597,"class_name":"高考"},{"gradeId":15963598,"class_name":"学前"},{"gradeId":15963599,"class_name":"营地"},{"gradeId":15963600,"class_name":"其它"}],"gradeTwo":[{"gradeTwoId":25963615,"twoClass_name":"高一","pid":"15963595"},{"gradeTwoId":25963616,"twoClass_name":"高二","pid":"15963595"},{"gradeTwoId":25963617,"twoClass_name":"高三","pid":"15963595"}],"gradeThree":[[{"gradeThreeId":35963821,"threeClass_name":"数学","pid":"25963615"},{"gradeThreeId":35963822,"threeClass_name":"语文","pid":"25963615"},{"gradeThreeId":35963823,"threeClass_name":"英语","pid":"25963615"},{"gradeThreeId":35963824,"threeClass_name":"政治","pid":"25963615"},{"gradeThreeId":35963825,"threeClass_name":"物理","pid":"25963615"},{"gradeThreeId":35963826,"threeClass_name":"化学","pid":"25963615"},{"gradeThreeId":35963827,"threeClass_name":"地理","pid":"25963615"},{"gradeThreeId":35963828,"threeClass_name":"历史","pid":"25963615"},{"gradeThreeId":35963829,"threeClass_name":"生物","pid":"25963615"},{"gradeThreeId":35963830,"threeClass_name":"奥数","pid":"25963615"},{"gradeThreeId":35963831,"threeClass_name":"全科辅导","pid":"25963615"},{"gradeThreeId":35963832,"threeClass_name":"信息技术","pid":"25963615"},{"gradeThreeId":35963833,"threeClass_name":"生命科学","pid":"25963615"}],[{"gradeThreeId":35963834,"threeClass_name":"数学","pid":"25963616"},{"gradeThreeId":35963835,"threeClass_name":"语文","pid":"25963616"},{"gradeThreeId":35963836,"threeClass_name":"英语","pid":"25963616"},{"gradeThreeId":35963837,"threeClass_name":"政治","pid":"25963616"},{"gradeThreeId":35963838,"threeClass_name":"物理","pid":"25963616"},{"gradeThreeId":35963839,"threeClass_name":"化学","pid":"25963616"},{"gradeThreeId":35963840,"threeClass_name":"地理","pid":"25963616"},{"gradeThreeId":35963841,"threeClass_name":"历史","pid":"25963616"},{"gradeThreeId":35963842,"threeClass_name":"生物","pid":"25963616"},{"gradeThreeId":35963843,"threeClass_name":"奥数","pid":"25963616"},{"gradeThreeId":35963844,"threeClass_name":"全科辅导","pid":"25963616"},{"gradeThreeId":35963845,"threeClass_name":"信息技术","pid":"25963616"},{"gradeThreeId":35963846,"threeClass_name":"生命科学","pid":"25963616"}],[{"gradeThreeId":35963847,"threeClass_name":"数学","pid":"25963617"},{"gradeThreeId":35963848,"threeClass_name":"语文","pid":"25963617"},{"gradeThreeId":35963849,"threeClass_name":"英语","pid":"25963617"},{"gradeThreeId":35963850,"threeClass_name":"政治","pid":"25963617"},{"gradeThreeId":35963851,"threeClass_name":"物理","pid":"25963617"},{"gradeThreeId":35963852,"threeClass_name":"化学","pid":"25963617"},{"gradeThreeId":35963853,"threeClass_name":"地理","pid":"25963617"},{"gradeThreeId":35963854,"threeClass_name":"历史","pid":"25963617"},{"gradeThreeId":35963855,"threeClass_name":"生物","pid":"25963617"},{"gradeThreeId":35963856,"threeClass_name":"奥数","pid":"25963617"},{"gradeThreeId":35963857,"threeClass_name":"全科辅导","pid":"25963617"},{"gradeThreeId":35963858,"threeClass_name":"信息技术","pid":"25963617"},{"gradeThreeId":35963859,"threeClass_name":"生命科学","pid":"25963617"}]]})
  req.params.id === '15963596'&&res.json({"gradeOne":[{"gradeId":15963587,"class_name":"艺术"},{"gradeId":15963588,"class_name":"体育"},{"gradeId":15963589,"class_name":"语言"},{"gradeId":15963590,"class_name":"留学"},{"gradeId":15963591,"class_name":"小学"},{"gradeId":15963592,"class_name":"小升初"},{"gradeId":15963593,"class_name":"初中"},{"gradeId":15963594,"class_name":"中考"},{"gradeId":15963595,"class_name":"高中"},{"gradeId":15963596,"class_name":"益智"},{"gradeId":15963597,"class_name":"高考"},{"gradeId":15963598,"class_name":"学前"},{"gradeId":15963599,"class_name":"营地"},{"gradeId":15963600,"class_name":"其它"}],"gradeTwo":[{"gradeTwoId":25963618,"twoClass_name":"机器人","pid":"15963596"},{"gradeTwoId":25963619,"twoClass_name":"思维","pid":"15963596"}],"gradeThree":[[{"gradeThreeId":35963860,"threeClass_name":"机器人","pid":"25963618"},{"gradeThreeId":35963861,"threeClass_name":"单片机","pid":"25963618"},{"gradeThreeId":35963862,"threeClass_name":"机器人编程","pid":"25963618"}],[{"gradeThreeId":35963863,"threeClass_name":"注意力","pid":"25963619"},{"gradeThreeId":35963864,"threeClass_name":"记忆力","pid":"25963619"},{"gradeThreeId":35963865,"threeClass_name":"快速记忆","pid":"25963619"},{"gradeThreeId":35963866,"threeClass_name":"思维导图","pid":"25963619"},{"gradeThreeId":35963867,"threeClass_name":"专注力训练","pid":"25963619"},{"gradeThreeId":35963868,"threeClass_name":"珠心算","pid":"25963619"},{"gradeThreeId":35963869,"threeClass_name":"照相记忆","pid":"25963619"},{"gradeThreeId":35963870,"threeClass_name":"波动速度","pid":"25963619"},{"gradeThreeId":35963871,"threeClass_name":"ESP超感课程","pid":"25963619"}]]})
  req.params.id === '15963597'&&res.json({"gradeOne":[{"gradeId":15963587,"class_name":"艺术"},{"gradeId":15963588,"class_name":"体育"},{"gradeId":15963589,"class_name":"语言"},{"gradeId":15963590,"class_name":"留学"},{"gradeId":15963591,"class_name":"小学"},{"gradeId":15963592,"class_name":"小升初"},{"gradeId":15963593,"class_name":"初中"},{"gradeId":15963594,"class_name":"中考"},{"gradeId":15963595,"class_name":"高中"},{"gradeId":15963596,"class_name":"益智"},{"gradeId":15963597,"class_name":"高考"},{"gradeId":15963598,"class_name":"学前"},{"gradeId":15963599,"class_name":"营地"},{"gradeId":15963600,"class_name":"其它"}],"gradeTwo":[{"gradeTwoId":25963620,"twoClass_name":"高考","pid":"15963597"},{"gradeTwoId":25963621,"twoClass_name":"全科辅导","pid":"15963597"}],"gradeThree":[[{"gradeThreeId":35963872,"threeClass_name":"数学","pid":"25963620"},{"gradeThreeId":35963873,"threeClass_name":"语文","pid":"25963620"},{"gradeThreeId":35963874,"threeClass_name":"英语","pid":"25963620"},{"gradeThreeId":35963875,"threeClass_name":"政治","pid":"25963620"},{"gradeThreeId":35963876,"threeClass_name":"物理","pid":"25963620"},{"gradeThreeId":35963877,"threeClass_name":"化学","pid":"25963620"},{"gradeThreeId":35963878,"threeClass_name":"地理","pid":"25963620"},{"gradeThreeId":35963879,"threeClass_name":"历史","pid":"25963620"},{"gradeThreeId":35963880,"threeClass_name":"生物","pid":"25963620"},{"gradeThreeId":35963881,"threeClass_name":"文宗","pid":"25963620"},{"gradeThreeId":35963882,"threeClass_name":"理宗","pid":"25963620"},{"gradeThreeId":35963883,"threeClass_name":"全科辅导","pid":"25963620"},{"gradeThreeId":35963884,"threeClass_name":"心理辅导","pid":"25963620"},{"gradeThreeId":35963885,"threeClass_name":"志愿指导","pid":"25963620"},{"gradeThreeId":35963886,"threeClass_name":"艺考文化课","pid":"25963620"}],[{"gradeThreeId":35963887,"threeClass_name":"全科辅导","pid":"25963621"}]]})
  req.params.id === '15963598'&&res.json({"gradeOne":[{"gradeId":15963587,"class_name":"艺术"},{"gradeId":15963588,"class_name":"体育"},{"gradeId":15963589,"class_name":"语言"},{"gradeId":15963590,"class_name":"留学"},{"gradeId":15963591,"class_name":"小学"},{"gradeId":15963592,"class_name":"小升初"},{"gradeId":15963593,"class_name":"初中"},{"gradeId":15963594,"class_name":"中考"},{"gradeId":15963595,"class_name":"高中"},{"gradeId":15963596,"class_name":"益智"},{"gradeId":15963597,"class_name":"高考"},{"gradeId":15963598,"class_name":"学前"},{"gradeId":15963599,"class_name":"营地"},{"gradeId":15963600,"class_name":"其它"}],"gradeTwo":[{"gradeTwoId":25963622,"twoClass_name":"早教","pid":"15963598"},{"gradeTwoId":25963623,"twoClass_name":"幼儿园","pid":"15963598"},{"gradeTwoId":25963624,"twoClass_name":"学前艺术","pid":"15963598"},{"gradeTwoId":25963625,"twoClass_name":"幼升小","pid":"15963598"}],"gradeThree":[[{"gradeThreeId":35963888,"threeClass_name":"趣味游戏","pid":"25963622"},{"gradeThreeId":35963889,"threeClass_name":"潜能开发","pid":"25963622"},{"gradeThreeId":35963890,"threeClass_name":"感统训练","pid":"25963622"},{"gradeThreeId":35963891,"threeClass_name":"亲子","pid":"25963622"},{"gradeThreeId":35963892,"threeClass_name":"启蒙","pid":"25963622"},{"gradeThreeId":35963893,"threeClass_name":"早教（语言）","pid":"25963622"},{"gradeThreeId":35963894,"threeClass_name":"早教（艺术）","pid":"25963622"},{"gradeThreeId":35963895,"threeClass_name":"早教（体育）","pid":"25963622"},{"gradeThreeId":35963896,"threeClass_name":"早教（科学）","pid":"25963622"},{"gradeThreeId":35963897,"threeClass_name":"手工","pid":"25963622"},{"gradeThreeId":35963898,"threeClass_name":"创意","pid":"25963622"}],[{"gradeThreeId":35963899,"threeClass_name":"宝宝班（2-3岁）","pid":"25963623"},{"gradeThreeId":35963900,"threeClass_name":"小班（3-4岁）","pid":"25963623"},{"gradeThreeId":35963901,"threeClass_name":"中班（4-5岁）","pid":"25963623"},{"gradeThreeId":35963902,"threeClass_name":"大班（5-6岁）","pid":"25963623"}],[{"gradeThreeId":35963903,"threeClass_name":"奥尔夫音乐","pid":"25963624"},{"gradeThreeId":35963904,"threeClass_name":"学前艺术","pid":"25963624"},{"gradeThreeId":35963905,"threeClass_name":"蒙式教育","pid":"25963624"}],[{"gradeThreeId":35963906,"threeClass_name":"英语","pid":"25963625"},{"gradeThreeId":35963907,"threeClass_name":"语文","pid":"25963625"},{"gradeThreeId":35963908,"threeClass_name":"数学","pid":"25963625"},{"gradeThreeId":35963909,"threeClass_name":"才艺","pid":"25963625"},{"gradeThreeId":35963910,"threeClass_name":"体育","pid":"25963625"}]]})
  req.params.id === '15963599'&&res.json({"gradeOne":[{"gradeId":15963587,"class_name":"艺术"},{"gradeId":15963588,"class_name":"体育"},{"gradeId":15963589,"class_name":"语言"},{"gradeId":15963590,"class_name":"留学"},{"gradeId":15963591,"class_name":"小学"},{"gradeId":15963592,"class_name":"小升初"},{"gradeId":15963593,"class_name":"初中"},{"gradeId":15963594,"class_name":"中考"},{"gradeId":15963595,"class_name":"高中"},{"gradeId":15963596,"class_name":"益智"},{"gradeId":15963597,"class_name":"高考"},{"gradeId":15963598,"class_name":"学前"},{"gradeId":15963599,"class_name":"营地"},{"gradeId":15963600,"class_name":"其它"}],"gradeTwo":[{"gradeTwoId":25963626,"twoClass_name":"乐园","pid":"15963599"},{"gradeTwoId":25963627,"twoClass_name":"摄影","pid":"15963599"},{"gradeTwoId":25963628,"twoClass_name":"活动","pid":"15963599"}],"gradeThree":[[{"gradeThreeId":35963911,"threeClass_name":"滑雪","pid":"25963626"},{"gradeThreeId":35963912,"threeClass_name":"室内场馆","pid":"25963626"},{"gradeThreeId":35963913,"threeClass_name":"儿童乐园","pid":"25963626"},{"gradeThreeId":35963914,"threeClass_name":"户外公园","pid":"25963626"},{"gradeThreeId":35963915,"threeClass_name":"近郊景点","pid":"25963626"},{"gradeThreeId":35963916,"threeClass_name":"采摘农家","pid":"25963626"},{"gradeThreeId":35963917,"threeClass_name":"演出赛事","pid":"25963626"},{"gradeThreeId":35963918,"threeClass_name":"运动健身","pid":"25963626"}],[{"gradeThreeId":35963919,"threeClass_name":"摄影场馆","pid":"25963627"}],[{"gradeThreeId":35963920,"threeClass_name":"冬夏令营","pid":"25963628"},{"gradeThreeId":35963921,"threeClass_name":"拓展培训","pid":"25963628"},{"gradeThreeId":35963922,"threeClass_name":"亲子出游","pid":"25963628"}]]})
  req.params.id === '15963600'&&res.json({"gradeOne":[{"gradeId":15963587,"class_name":"艺术"},{"gradeId":15963588,"class_name":"体育"},{"gradeId":15963589,"class_name":"语言"},{"gradeId":15963590,"class_name":"留学"},{"gradeId":15963591,"class_name":"小学"},{"gradeId":15963592,"class_name":"小升初"},{"gradeId":15963593,"class_name":"初中"},{"gradeId":15963594,"class_name":"中考"},{"gradeId":15963595,"class_name":"高中"},{"gradeId":15963596,"class_name":"益智"},{"gradeId":15963597,"class_name":"高考"},{"gradeId":15963598,"class_name":"学前"},{"gradeId":15963599,"class_name":"营地"},{"gradeId":15963600,"class_name":"其它"}],"gradeTwo":[{"gradeTwoId":25963629,"twoClass_name":"其它","pid":"15963600"}],"gradeThree":[[{"gradeThreeId":35963923,"threeClass_name":"其它","pid":"25963629"}]]})
})


// 点击筛选请求展示内容
router.get('/listhome/filter/data', (req, res, next) => {
  var obj = [{"title":"班级类型","classlist":[{"name":"免费试听","id":"classType-1"},{"name":"随时插班","id":"classType-2"},{"name":"随时退班","id":"classType-3"},{"name":"未开课","id":"classType-4"}]},{"title":"活动优惠","classlist":[{"name":"连报优惠","id":"discount-1"},{"name":"限时团购","id":"discount-2"},{"name":"折扣","id":"discount-3"},{"name":"立减","id":"discount-4"}]},{"title":"上课时间","classlist":[{"name":"周一","id":"week-1"},{"name":"周二","id":"week-2"},{"name":"周三","id":"week-3"},{"name":"周四","id":"week-4"},{"name":"周五","id":"week-5"},{"name":"周六","id":"week-6"},{"name":"周日","id":"week-7"}]},{"title":"具体时间","classlist":[{"name":"上午","id":"AM-1"},{"name":"下午","id":"PM-2"},{"name":"晚上","id":"NM-3"}]},{"title":"价格区间","classlist":[{"name":"0～1000","id":"price-1"},{"name":"1000～3000","id":"price-2"},{"name":"3000～5000","id":"price-3"},{"name":"5000～7000","id":"price-4"},{"name":"7000～9000","id":"price-5"},{"name":"9000以上","id":"price-6"}]}]
  res.json(obj)
})

router.get('/courselist', function (req, res, next) {
  var obj = {
    'total': 13,
    'total_page': 2,
    'data': [
      {
        'id': '23c73ec2e8784ca9bf50f289a5bed210',
        'goods_id': '23c73ec2e8784ca9bf50f289a5bed210',
        'name': '\u5fb7\u80b2\u4e8c\u73ed',
        'total': 60,
        'saled': 11,
        'pre_saled': '10',
        'cost': '20000.00',
        'mall_cost': '20000.00',
        'lesson_total': '10',
        'class_time_names': '06:30-07:30',
        'open_date': '2017-05-20',
        'end_date': '2017-07-22',
        'teacher_id': '2277b916162d4e3789b6a9d818ec4453',
        'is_enforce': '1',
        'retreat_rule': '1',
        'is_audition': '1',
        'is_transfer': '1',
        'lat': '39.938574',
        'lng': '116.421885',
        'address': '\u5317\u4eac\u5e02\u5317\u4eac\u5e02\u4e1c\u57ce\u533a',
        'campus_name': '\u5fb7\u7f8e\u5317\u4eac\u4e1c\u57ce\u5206\u6821',
        'district': '\u4e1c\u57ce\u533a',
        'merchant_name': '\u5fb7\u7f8e\u6559\u80b2\u673a\u6784',
        'short': '\u7f8e\u5fb7\u6559\u80b2',
        'teacher_name': '\u9ad8\u8001\u5e08',
        'teacher_photo': 'img/kechen_t.png',
        'minutes': '60',
        'together_discount': 2,
        'goods_week': '\u6bcf\u5468\u516d\u4e0a\u8bfe',
        'privileges': [],
        'panic_buy_existing': 2,
        'group_buy_existing': 2,
        'shortName': '\u7f8e\u5fb7\u6559\u80b2',
        'is_hide': 1
      },
      {
        'id': '51ee2d62629f4d598bea9500efa323f6',
        'goods_id': '51ee2d62629f4d598bea9500efa323f6',
        'name': '\u827a\u672f\u94a2\u7434123\u73ed',
        'total': 50,
        'saled': 0,
        'pre_saled': '0',
        'cost': '1000.00',
        'mall_cost': '1000.00',
        'lesson_total': '10',
        'class_time_names': '09:30-10:30',
        'open_date': '2017-05-25',
        'end_date': '2017-07-27',
        'teacher_id': '78b7b5539c5745b0aed696c3fa88d5e8',
        'is_enforce': '1',
        'retreat_rule': '1',
        'is_audition': '1',
        'is_transfer': '0',
        'lat': '39.938574',
        'lng': '116.421885',
        'address': '\u5317\u4eac\u5e02\u5317\u4eac\u5e02\u4e1c\u57ce\u533a',
        'campus_name': '\u5fb7\u7f8e\u5317\u4eac\u4e1c\u57ce\u5206\u6821',
        'district': '\u4e1c\u57ce\u533a',
        'merchant_name': '\u5fb7\u7f8e\u6559\u80b2\u673a\u6784',
        'short': '\u7f8e\u5fb7\u6559\u80b2',
        'teacher_name': '\u5de2\u8001\u5e08',
        'teacher_photo': 'img/kechen_tp.jpg',
        'minutes': '60',
        'together_discount': 2,
        'goods_week': '\u6bcf\u5468\u56db\u4e0a\u8bfe',
        'privileges': [],
        'panic_buy_existing': 2,
        'group_buy_existing': 2,
        'shortName': '\u7f8e\u5fb7\u6559\u80b2',
        'is_hide': 1
      },
      {
        'id': 'a91be860cf044a87bca10f166c765426',
        'goods_id': 'a91be860cf044a87bca10f166c765426',
        'name': '\u5fb7\u80b2\u4e00\u73ed',
        'total': 50,
        'saled': 1,
        'pre_saled': '0',
        'cost': '8000.00',
        'mall_cost': '8000.00',
        'lesson_total': '10',
        'class_time_names': '09:30-10:30',
        'open_date': '2017-05-20',
        'end_date': '2017-07-22',
        'teacher_id': '2277b916162d4e3789b6a9d818ec4453',
        'is_enforce': '1',
        'retreat_rule': '1',
        'is_audition': '1',
        'is_transfer': '1',
        'lat': '39.938574',
        'lng': '116.421885',
        'address': '\u5317\u4eac\u5e02\u5317\u4eac\u5e02\u4e1c\u57ce\u533a',
        'campus_name': '\u5fb7\u7f8e\u5317\u4eac\u4e1c\u57ce\u5206\u6821',
        'district': '\u4e1c\u57ce\u533a',
        'merchant_name': '\u5fb7\u7f8e\u6559\u80b2\u673a\u6784',
        'short': '\u7f8e\u5fb7\u6559\u80b2',
        'teacher_name': '\u9ad8\u8001\u5e08',
        'teacher_photo': 'img/kechen_t.png',
        'minutes': '60',
        'together_discount': 2,
        'goods_week': '\u6bcf\u5468\u516d\u4e0a\u8bfe',
        'privileges': [],
        'panic_buy_existing': 2,
        'group_buy_existing': 2,
        'shortName': '\u7f8e\u5fb7\u6559\u80b2',
        'is_hide': 1
      },
      {
        'id': 'a91be860cf044a87bca10f166c765426',
        'goods_id': 'a91be860cf044a87bca10f166c765426',
        'name': '\u5fb7\u80b2\u4e00\u73ed',
        'total': 50,
        'saled': 1,
        'pre_saled': '0',
        'cost': '8000.00',
        'mall_cost': '8000.00',
        'lesson_total': '10',
        'class_time_names': '09:30-10:30',
        'open_date': '2017-05-20',
        'end_date': '2017-07-22',
        'teacher_id': '2277b916162d4e3789b6a9d818ec4453',
        'is_enforce': '0',
        'retreat_rule': '1',
        'is_audition': '1',
        'is_transfer': '1',
        'lat': '39.938574',
        'lng': '116.421885',
        'address': '\u5317\u4eac\u5e02\u5317\u4eac\u5e02\u4e1c\u57ce\u533a',
        'campus_name': '\u5fb7\u7f8e\u5317\u4eac\u4e1c\u57ce\u5206\u6821',
        'district': '\u4e1c\u57ce\u533a',
        'merchant_name': '\u5fb7\u7f8e\u6559\u80b2\u673a\u6784',
        'short': '\u7f8e\u5fb7\u6559\u80b2',
        'teacher_name': '\u9ad8\u8001\u5e08',
        'teacher_photo': 'img/kechen_t.png',
        'minutes': '60',
        'together_discount': 2,
        'goods_week': '\u6bcf\u5468\u516d\u4e0a\u8bfe',
        'privileges': [],
        'panic_buy_existing': 2,
        'group_buy_existing': 2,
        'shortName': '\u7f8e\u5fb7\u6559\u80b2',
        'is_hide': 1
      },
      {
        'id': 'a91be860cf044a87bca10f166c765426',
        'goods_id': 'a91be860cf044a87bca10f166c765426',
        'name': '\u5fb7\u80b2\u4e00\u73ed',
        'total': 50,
        'saled': 1,
        'pre_saled': '0',
        'cost': '8000.00',
        'mall_cost': '8000.00',
        'lesson_total': '10',
        'class_time_names': '09:30-10:30',
        'open_date': '2017-05-20',
        'end_date': '2017-07-22',
        'teacher_id': '2277b916162d4e3789b6a9d818ec4453',
        'is_enforce': '1',
        'retreat_rule': '1',
        'is_audition': '1',
        'is_transfer': '1',
        'lat': '39.938574',
        'lng': '116.421885',
        'address': '\u5317\u4eac\u5e02\u5317\u4eac\u5e02\u4e1c\u57ce\u533a',
        'campus_name': '\u5fb7\u7f8e\u5317\u4eac\u4e1c\u57ce\u5206\u6821',
        'district': '\u4e1c\u57ce\u533a',
        'merchant_name': '\u5fb7\u7f8e\u6559\u80b2\u673a\u6784',
        'short': '\u7f8e\u5fb7\u6559\u80b2',
        'teacher_name': '\u9ad8\u8001\u5e08',
        'teacher_photo': 'img/kechen_tp.jpg',
        'minutes': '60',
        'together_discount': 2,
        'goods_week': '\u6bcf\u5468\u516d\u4e0a\u8bfe',
        'privileges': [],
        'panic_buy_existing': 2,
        'group_buy_existing': 2,
        'shortName': '\u7f8e\u5fb7\u6559\u80b2',
        'is_hide': 1
      }
    ],
    'page': 2
  }
  setTimeout(function () {
    res.json(obj)
  }, 1000)
})
export default router

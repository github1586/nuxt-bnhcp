/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50635
Source Host           : 192.168.1.110:3306
Source Database       : bnhcp

Date: 2017-06-19 16:42:31
*/

SET NAMES UTF8;
DROP DATABASE IF EXISTS bnhcp;
CREATE DATABASE bnhcp CHARSET=UTF8;
USE bnhcp;
-- ----------------------------
-- Table structure for `gradeOne`
-- ----------------------------
CREATE TABLE `gradeOne`(
	gradeId INT PRIMARY KEY AUTO_INCREMENT,
	class_name VARCHAR(32)
)ENGINE=InnoDB AUTO_INCREMENT=15963587 DEFAULT CHARSET=utf8;  
INSERT INTO `gradeOne`(gradeId, class_name) VALUES(NULL, "艺术");
INSERT INTO `gradeOne`(gradeId, class_name) VALUES(NULL, "体育");
INSERT INTO `gradeOne`(gradeId, class_name) VALUES(NULL, "语言");
INSERT INTO `gradeOne`(gradeId, class_name) VALUES(NULL, "留学");
INSERT INTO `gradeOne`(gradeId, class_name) VALUES(NULL, "小学");
INSERT INTO `gradeOne`(gradeId, class_name) VALUES(NULL, "小升初");
INSERT INTO `gradeOne`(gradeId, class_name) VALUES(NULL, "初中");
INSERT INTO `gradeOne`(gradeId, class_name) VALUES(NULL, "中考");
INSERT INTO `gradeOne`(gradeId, class_name) VALUES(NULL, "高中");
INSERT INTO `gradeOne`(gradeId, class_name) VALUES(NULL, "益智");
INSERT INTO `gradeOne`(gradeId, class_name) VALUES(NULL, "高考");
INSERT INTO `gradeOne`(gradeId, class_name) VALUES(NULL, "学前");
INSERT INTO `gradeOne`(gradeId, class_name) VALUES(NULL, "营地");
INSERT INTO `gradeOne`(gradeId, class_name) VALUES(NULL, "其它");
-- ----------------------------
-- Table structure for `gradeTwo`
-- ----------------------------
CREATE TABLE gradeTwo(
	`gradeTwoId` INT PRIMARY KEY AUTO_INCREMENT,
	`twoClass_name` VARCHAR(20),
	`pid` VARCHAR(36)
)ENGINE=InnoDB AUTO_INCREMENT=25963587 DEFAULT CHARSET=utf8;

INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "乐器", "15963587");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "声乐", "15963587");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "舞蹈", "15963587");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "绘画", "15963587");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "书法", "15963587");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "媒体艺术", "15963587");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "雕塑", "15963587");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "设计", "15963587");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "戏剧", "15963587");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "运动", "15963588");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "武术", "15963588");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "棋牌", "15963588");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "英语", "15963589");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "多语", "15963589");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "留学考试", "15963590");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "一年级", "15963591");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "二年级", "15963591");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "三年级", "15963591");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "四年级", "15963591");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "五年级", "15963591");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "六年级", "15963591");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "小升初", "15963592");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "全科辅导", "15963592");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "初一", "15963593");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "初二", "15963593");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "初三", "15963593");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "中考", "15963594");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "全科辅导", "15963594");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "高一", "15963595");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "高二", "15963595");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "高三", "15963595");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "机器人", "15963596");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "思维", "15963596");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "高考", "15963597");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "全科辅导", "15963597");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "早教", "15963598");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "幼儿园", "15963598");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "学前艺术", "15963598");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "幼升小", "15963598");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "乐园", "15963599");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "摄影", "15963599");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "活动", "15963599");
INSERT INTO `gradeTwo`(gradeTwoId, twoclass_name, pid) VALUES(NULL, "其它", "15963600");
-- ----------------------------
-- Table structure for `gradeThree`
-- ----------------------------
CREATE TABLE gradeThree(
	gradeThreeId INT PRIMARY KEY AUTO_INCREMENT,
	threeClass_name VARCHAR(20),
	pid VARCHAR(36)
)ENGINE=InnoDB AUTO_INCREMENT=35963587 DEFAULT CHARSET=UTF8;

INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "钢琴", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "小提琴", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "大提琴", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "电子琴", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "琵琶", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "二胡", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "萨克斯", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "吉他", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "电吉他", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "圆号", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "葫芦四", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "锁呐", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "杨琴", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "长笛", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "码头琴", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "手风琴", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "古筝", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "巴杨琴", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "黑管", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "阮", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "单簧管", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "双簧管", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "打击乐", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "小号", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "坚琴", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "尤克里里", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "电贝斯", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "马林巴", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "架子鼓", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "竹笛", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "竖笛", "25963587");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "美声", "25963588");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "民族", "25963588");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "流行", "25963588");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "卡拉OK", "25963588");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "原生态", "25963588");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "音乐基础", "25963588");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "芭蕾舞", "25963589");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "拉丁舞", "25963589");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "街舞", "25963589");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "现代舞", "25963589");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "爵士舞", "25963589");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "古舞蹈", "25963589");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "民族舞", "25963589");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "健美操", "25963589");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "民间舞", "25963589");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "国际舞", "25963589");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "迪斯科", "25963589");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "拉拉操", "25963589");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "HipHop", "25963589");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "摩登舞", "25963589");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "素描", "25963590");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "水粉", "25963590");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "水彩", "25963590");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "国画", "25963590");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "油画", "25963590");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "沙画", "25963590");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "插画", "25963590");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "速写", "25963590");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "创意画", "25963590");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "简笔画", "25963590");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "幼儿绘画", "25963590");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "卡通画", "25963590");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "漫画", "25963590");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "线描", "25963590");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "硬笔书法", "25963591");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "软笔书法", "25963591");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "播音主持", "25963592");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "影视表演", "25963592");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "摄影培训", "25963592");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "编导培训", "25963592");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "电视报装", "25963592");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "DJ培训", "25963592");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "模特培训", "25963592");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "舞台表演", "25963592");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "陶艺", "25963593");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "3D游戏设计", "25963594");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "插画", "25963594");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "泥塑", "25963594");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "装置", "25963594");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "装饰", "25963594");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "手工", "25963594");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "拼贴", "25963594");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "石膏", "25963594");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "戏剧教育", "25963595");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "戏剧表演", "25963595");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "京剧", "25963595");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "游泳", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "羽毛球", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "篮球", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "网球", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "足球", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "排球", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "瑜伽", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "台球", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "跑库", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "轮滑", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "滑板", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "骑行", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "普拉提", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "高尔夫", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "耐力跑", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "橄榄球", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "体操", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "单双杠", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "吊环", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "体始能", "25963596");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "跆拳道", "25963597");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "太极拳", "25963597");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "空手道", "25963597");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "柔道", "25963597");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "散打", "25963597");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "剑道", "25963597");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "击剑", "25963597");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "传统武术", "25963597");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "自由搏击", "25963597");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "永春拳", "25963597");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "少林拳", "25963597");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "围棋", "25963598");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "象棋", "25963598");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "国际象棋", "25963598");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "五子棋", "25963598");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "桥牌", "25963598");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "剑桥英语", "25963599");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "外教英语", "25963599");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "新概念英语", "25963599");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "雅思", "25963599");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "新托福", "25963599");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "实用英语", "25963599");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "SAT考试", "25963599");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "SSAT考试", "25963599");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "GRE考试", "25963599");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "GMAT", "25963599");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "少儿英语", "25963599");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "法语", "25963600");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "德语", "25963600");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "意大利语", "25963600");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "葡萄牙语", "25963600");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "韩语", "25963600");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "西班牙语", "25963600");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "日语", "25963600");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "托福", "25963601");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "雅思", "25963601");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963602");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963602");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963602");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "作文", "25963602");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥数", "25963602");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963602");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963603");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963603");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963603");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "作文", "25963603");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥数", "25963603");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963603");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963604");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963604");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963604");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "作文", "25963604");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥数", "25963604");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963604");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963605");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963605");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963605");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "作文", "25963605");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥数", "25963605");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963605");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963606");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963606");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963606");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "作文", "25963606");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥数", "25963606");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963606");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963607");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963607");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963607");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "作文", "25963607");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥数", "25963607");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963607");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963608");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963608");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963608");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "作文", "25963608");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥数", "25963608");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "小升初择校", "25963608");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963608");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963609");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963610");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963610");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963610");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "政治", "25963610");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "物理", "25963610");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "化学", "25963610");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "地理", "25963610");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "历史", "25963610");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "生物", "25963610");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥数", "25963610");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963610");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963611");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963611");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963611");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "政治", "25963611");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "物理", "25963611");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "化学", "25963611");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "地理", "25963611");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "历史", "25963611");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "生物", "25963611");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥数", "25963611");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963611");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963612");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963612");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963612");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "政治", "25963612");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "物理", "25963612");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "化学", "25963612");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "地理", "25963612");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "历史", "25963612");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "生物", "25963612");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥数", "25963612");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963612");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963613");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963613");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963613");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "政治", "25963613");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "物理", "25963613");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "化学", "25963613");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "地理", "25963613");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "历史", "25963613");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "生物", "25963613");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥数", "25963613");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "理宗", "25963613");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "文宗", "25963613");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963613");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963614");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963615");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963615");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963615");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "政治", "25963615");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "物理", "25963615");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "化学", "25963615");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "地理", "25963615");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "历史", "25963615");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "生物", "25963615");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥数", "25963615");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963615");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "信息技术", "25963615");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "生命科学", "25963615");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963616");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963616");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963616");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "政治", "25963616");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "物理", "25963616");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "化学", "25963616");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "地理", "25963616");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "历史", "25963616");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "生物", "25963616");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥数", "25963616");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963616");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "信息技术", "25963616");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "生命科学", "25963616");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963617");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963617");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963617");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "政治", "25963617");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "物理", "25963617");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "化学", "25963617");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "地理", "25963617");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "历史", "25963617");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "生物", "25963617");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥数", "25963617");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963617");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "信息技术", "25963617");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "生命科学", "25963617");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "机器人", "25963618");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "单片机", "25963618");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "机器人编程", "25963618");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "注意力", "25963619");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "记忆力", "25963619");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "快速记忆", "25963619");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "思维导图", "25963619");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "专注力训练", "25963619");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "珠心算", "25963619");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "照相记忆", "25963619");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "波动速度", "25963619");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "ESP超感课程", "25963619");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "政治", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "物理", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "化学", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "地理", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "历史", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "生物", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "文宗", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "理宗", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "心理辅导", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "志愿指导", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "艺考文化课", "25963620");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "全科辅导", "25963621");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "趣味游戏", "25963622");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "潜能开发", "25963622");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "感统训练", "25963622");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "亲子", "25963622");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "启蒙", "25963622");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "早教（语言）", "25963622");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "早教（艺术）", "25963622");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "早教（体育）", "25963622");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "早教（科学）", "25963622");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "手工", "25963622");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "创意", "25963622");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "宝宝班（2-3岁）", "25963623");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "小班（3-4岁）", "25963623");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "中班（4-5岁）", "25963623");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "大班（5-6岁）", "25963623");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "奥尔夫音乐", "25963624");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "学前艺术", "25963624");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "蒙式教育", "25963624");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "英语", "25963625");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "语文", "25963625");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "数学", "25963625");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "才艺", "25963625");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "体育", "25963625");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "滑雪", "25963626");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "室内场馆", "25963626");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "儿童乐园", "25963626");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "户外公园", "25963626");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "近郊景点", "25963626");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "采摘农家", "25963626");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "演出赛事", "25963626");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "运动健身", "25963626");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "摄影场馆", "25963627");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "冬夏令营", "25963628");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "拓展培训", "25963628");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "亲子出游", "25963628");
INSERT INTO gradeThree(gradeThreeId, threeClass_name, pid) VALUES(NULL, "其它", "25963629");
-- ----------------------------
-- Table structure for `institutions` 机构表
-- ----------------------------
CREATE TABLE institutions(
	institutionsId INT PRIMARY KEY AUTO_INCREMENT,
	institutionsName VARCHAR(20),
	institutionsAddress VARCHAR(110)
)ENGINE=InnoDB AUTO_INCREMENT=45963587 DEFAULT CHARSET=UTF8;

INSERT INTO institutions(institutionsId, institutionsName, institutionsAddress) VALUES(NULL, "红黄蓝", "中关村大厦705");
INSERT INTO institutions(institutionsId, institutionsName, institutionsAddress) VALUES(NULL, "佳一教育", "中关村大街和盛嘉业大厦903");
INSERT INTO institutions(institutionsId, institutionsName, institutionsAddress) VALUES(NULL, "爱斯创", "中关村大厦709");
INSERT INTO institutions(institutionsId, institutionsName, institutionsAddress) VALUES(NULL, "爱校教育", "中关村大厦995");
INSERT INTO institutions(institutionsId, institutionsName, institutionsAddress) VALUES(NULL, "校管家教育", "中关村大厦666");
INSERT INTO institutions(institutionsId, institutionsName, institutionsAddress) VALUES(NULL, "巨人教育", "中关村大厦999");
INSERT INTO institutions(institutionsId, institutionsName, institutionsAddress) VALUES(NULL, "阿里巴巴教育", "中关村大厦2263");
INSERT INTO institutions(institutionsId, institutionsName, institutionsAddress) VALUES(NULL, "杰睿教育", "中关村大厦785");
INSERT INTO institutions(institutionsId, institutionsName, institutionsAddress) VALUES(NULL, "学而思教育", "中关村大厦9635");
INSERT INTO institutions(institutionsId, institutionsName, institutionsAddress) VALUES(NULL, "新东方教育", "中关村大厦895");
INSERT INTO institutions(institutionsId, institutionsName, institutionsAddress) VALUES(NULL, "山东蓝翔", "中关村大厦6354");
INSERT INTO institutions(institutionsId, institutionsName, institutionsAddress) VALUES(NULL, "腾百万教育", "宇宙系地球村666号");
-- ----------------------------
-- Table structure for `campuses` 分校
-- ----------------------------
CREATE TABLE campuses(
	`campusesId` INT PRIMARY KEY AUTO_INCREMENT COMMENT '主键ID',
	`campusesName` VARCHAR(20) COMMENT '名称',
	`campusesAddress` VARCHAR(110) COMMENT '地址',
	`lng` varchar(128) DEFAULT NULL COMMENT '经度',
  `lat` varchar(128) DEFAULT NULL COMMENT '纬度',
	`students` INT(10) COMMENT '学员',
	`teacher` INT(10) COMMENT '老师',
	`coures` INT(10) COMMENT '课程数量',
	`comments` BIGINT(255) COMMENT '评论数量',
	`watchNumber` INT(255) COMMENT '浏览量',
	`distance` SMALLINT(255) COMMENT '距离',
	`classLabel` VARCHAR(50) COMMENT '课程标签',
	`campusesParentId` VARCHAR(36) COMMENT '住校ID'
)ENGINE=InnoDB AUTO_INCREMENT=55963587 DEFAULT CHARSET=UTF8;


INSERT INTO `campuses` VALUES(NULL,'临汾校区',  "北京市海淀区西北旺中关村科技园1",'111.474665', '36.125937',101,15,56,153,956,678,"语文-政治-跆拳道","45963587");
INSERT INTO `campuses` VALUES(NULL,'纽约分校',  '北京市北京市朝阳区', '111.474665', '36.125937',120,15,56,153,224,678,"英语-托福-跆拳道","45963587");
INSERT INTO `campuses` VALUES(NULL,'国土分校',  '北京市海淀区国土分校','111.474665', '36.125937',140,15,56,153,645,678,"数学-语文-跆拳道","45963587");
INSERT INTO `campuses` VALUES(NULL,'游泳分校2',  '北京市北京市海淀区', '111.474665', '36.125937',110,15,56,153,435,678,"武术-流行-跆拳道","45963587");
INSERT INTO `campuses` VALUES(NULL,'中关村分校',  '北京市海淀区中关村分校','111.474665', '36.125937',110,15,56,153,956,678,"民间舞-心理辅导-跆拳道","45963587");
INSERT INTO `campuses` VALUES(NULL,'德美上海徐汇分校',  '北京市北京市海淀区', '111.474665', '36.125937',180,15,56,153,956,678,"全科辅导-奥数-跆拳道","45963587");
INSERT INTO `campuses` VALUES(NULL,'大钟寺分校',  '北京市海淀区大钟寺分校','111.474665', '36.125937',780,15,56,153,956,678,"耐力跑-足球-跆拳道","45963587");
INSERT INTO `campuses` VALUES(NULL,'魏公村分校',  '北京市海淀区魏公村分校','111.474665', '36.125937',540,15,56,153,956,678,"数学-奥数-跆拳道","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京大学',  '北京市北京市朝阳区', '111.474665', '36.125937',540,15,56,153,956,678,"奥数-数学-跆拳道","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京美嘉校区',  '北京市北京市朝阳区', '111.474665', '36.125937',44,15,56,153,956,678,"语文-咏春拳-民间舞","45963587");
INSERT INTO `campuses` VALUES(NULL,'中关村分校',  '北京市北京市海淀区', '111.474665', '36.125937',450,15,56,153,956,678,"历史-咏春拳-民间舞","45963587");
INSERT INTO `campuses` VALUES(NULL,'南京教育学院',  '北京市北京市朝阳区', '111.474665', '36.125937',170,15,56,153,956,678,"一年级-雅思-地理","45963587");
INSERT INTO `campuses` VALUES(NULL,'清华大学',  '北京市海淀区中关村分校','111.474665', '36.125937',140,15,56,153,956,678,"乒乓球-钢琴-地理","45963587");
INSERT INTO `campuses` VALUES(NULL,'中关村分校',  '北京市北京市海淀区', '111.474665', '36.125937',100,15,56,153,956,678,"国际象棋-媒体艺术-地理","45963587");
INSERT INTO `campuses` VALUES(NULL,'天津分校1',  '北京市海淀区中关村分校','111.474665', '36.125937',1025,15,56,153,956,678,"地理-化学-地理","45963587");
INSERT INTO `campuses` VALUES(NULL,'沙河分校',  '北京市北京市昌平区', '111.474665', '36.125937',104,15,56,153,956,678,"生物-摄影-地理","45963587");
INSERT INTO `campuses` VALUES(NULL,'中关村分校',  '北京市北京市昌平区', '111.474665', '36.125937',17,15,56,153,956,678,"初一-武术-地理","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京羽毛球俱乐部',  '北京市北京市昌平区', '111.474665', '36.125937',170,15,56,153,956,678,"英语-国标舞-地理","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京蓝球俱乐部',  '北京市北京市西城区', '111.474665', '36.125937',10,15,56,153,956,678,"高尔夫-插画-地理","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京好孩子教育科技',  '北京市海淀区立水桥分校','111.474665', '36.125937',10,15,56,153,956,678,"全科辅导-阮a-地理","45963587");
INSERT INTO `campuses` VALUES(NULL, '阿斯蒂芬',  '北京市北京市西城区', '111.474665', '36.125937',10,15,56,153,956,678,"作文-化学-地理","45963587");
INSERT INTO `campuses` VALUES(NULL, '南京分校',  '北京市海淀区中关村分校','111.474665', '36.125937',10,15,56,153,956,678,"化学-PHP-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '立水桥分校',  '北京市北京市西城区', '111.474665', '36.125937',10,15,56,153,956,678,"亲子出游-作文-爵士舞","45963587");
INSERT INTO `campuses` VALUES(NULL, '北京昌平分校',  '北京市北京市怀柔区', '111.474665', '36.125937',10,15,56,153,956,678,"语文-民族舞-爵士舞","45963587");
INSERT INTO `campuses` VALUES(NULL,'中关村分校',  '北京市海淀区国家图书馆分','111.474665', '36.125937',10,15,56,153,956,678,"近郊景点-棋牌-爵士舞","45963587");
INSERT INTO `campuses` VALUES(NULL, '密云校区',  '北京市北京市朝阳区', '111.474665', '36.125937',10,15,56,153,956,678,"奥数-语文-爵士舞","45963587");
INSERT INTO `campuses` VALUES(NULL,'国家图书馆分校',  '北京市北京市东城区', '111.474665', '36.125937',10,15,56,153,956,678,"民族舞-围棋-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'朝阳区分校',  '北京市北京市石景山区','111.474665', '36.125937',10,15,56,153,956,678,"初一-奥数-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '东城区',  '北京市北京市西城区', '111.474665', '36.125937',10,15,56,153,956,678,"长笛-游泳-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '千峰石景山校区',  '北京市北京市朝阳区', '111.474665', '36.125937',10,15,56,153,956,678,"注意力-生物-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '撒地方',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"自由搏击-英语-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京懒洋洋婴幼儿英语教育',  '北京市北京市西城区', '111.474665', '36.125937',10,15,56,153,956,678,"阮4-德语-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '西城校区',  '北京市北京市朝阳区', '111.474665', '36.125937',10,15,56,153,956,678,"地理-古筝-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '新西兰分校',  '北京市北京市西城区', '111.474665', '36.125937',10,15,56,153,956,678,"生物-流行-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '东城校区',  '北京市海淀区安贞门分校','111.474665', '36.125937',10,15,56,153,956,678,"声乐-英语-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '上海美智分校',  '北京市海淀区国家图书馆分','111.474665', '36.125937',10,15,56,153,956,678,"物理-记忆力-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'安贞门分校',  '北京市海淀区长春桥分校','111.474665', '36.125937',10,15,56,153,956,678,"生物-全科辅导-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '国家图书馆分校1',  '北京市北京市东城区', '111.474665', '36.125937',10,15,56,153,956,678,"爵士舞-奥数-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'长椿桥分校',  '北京市北京市朝阳区', '111.474665', '36.125937',10,15,56,153,956,678,"政治-自由搏击-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'测试饥饿营销',  '北京市海淀区魏公村分校','111.474665', '36.125937',10,15,56,153,956,678,"历史-中考-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '场',  '北京市海淀区中关村分校','111.474665', '36.125937',10,15,56,153,956,678,"民族舞-全科辅导-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'魏公村分校',  '北京市海淀区立水桥分校','111.474665', '36.125937',10,15,56,153,956,678,"生物-数学-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'中关村分校',  '北京市北京市东城区', '111.474665', '36.125937',10,15,56,153,956,678,"芭蕾舞-政治-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '中关村分校',  '北京市北京市西城区', '111.474665', '36.125937',10,15,56,153,956,678,"化学-记忆力-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '立水桥分校',  '北京市北京市东城区', '111.474665', '36.125937',10,15,56,153,956,678,"数学-物理-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '德美上海黄埔分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"信息技术-围棋-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '德美北京东城分校',  '北京市北京市东城区', '111.474665', '36.125937',10,15,56,153,956,678,"奥数-全科辅导-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '海淀校区',  '北京市海淀区海淀五路居分','111.474665', '36.125937',10,15,56,153,956,678,"钢琴-英语-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '北京海淀分校',  '北京市北京市通州区', '111.474665', '36.125937',10,15,56,153,956,678,"坚琴-语文-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '北京美智分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"作文-语文-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京航空大学',  '北京市北京市海淀区鼎钧大','111.474665', '36.125937',10,15,56,153,956,678,"语文-历史-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '山西好好学习教育',  '北京市海淀区魏公村分校','111.474665', '36.125937',10,15,56,153,956,678,"现代舞-游泳-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '延庆校区',  '北京市北京市西城区', '111.474665', '36.125937',10,15,56,153,956,678,"奥数-跆拳道-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'海淀五路居分校',  '北京市北京市东城区', '111.474665', '36.125937',10,15,56,153,956,678,"高二-政治-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '北京杰睿分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"足球-黑管-爵士舞","45963587");
INSERT INTO `campuses` VALUES(NULL, '海淀校区1',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"语文-全科辅导-爵士舞","45963587");
INSERT INTO `campuses` VALUES(NULL,'魏公村分校',  '北京市北京市西城区', '111.474665', '36.125937',10,15,56,153,956,678,"志愿指导-全科辅导-爵士舞","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京好教育科技',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"健美操-国际象棋-爵士舞","45963587");
INSERT INTO `campuses` VALUES(NULL,'东西分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"初一-单簧管-爵士舞","45963587");
INSERT INTO `campuses` VALUES(NULL, '五道口分校',  '北京市北京市东城区', '111.474665', '36.125937',10,15,56,153,956,678,"外教口语-数学-爵士舞","45963587");
INSERT INTO `campuses` VALUES(NULL, '海淀校区',  '北京市北京市西城区', '111.474665', '36.125937',10,15,56,153,956,678,"武术-创意画-爵士舞","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京海淀',  '北京市北京市昌平区', '111.474665', '36.125937',10,15,56,153,956,678,"英语-近郊景点-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京新华字典',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"台球-全科辅导-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '河北医科大学',  '北京市海淀区大钟寺分校','111.474665', '36.125937',10,15,56,153,956,678,"物理-语文-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '北京喜洋洋',  '北京市北京市东城区', '111.474665', '36.125937',10,15,56,153,956,678,"三年级-全科辅导-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '北京嘉美教育',  '北京市海淀区国土分校','111.474665', '36.125937',10,15,56,153,956,678,"咏春拳-葫芦丝-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '张家口美羊羊教育',  '北京市北京市西城区', '111.474665', '36.125937',10,15,56,153,956,678,"摄影培训-物理-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京玉明实验学校',  '北京市北京市东城区', '111.474665', '36.125937',10,15,56,153,956,678,"数学-幼儿绘画-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'中关村分校002',  '北京市海淀区中关村分校','111.474665', '36.125937',10,15,56,153,956,678,"插画-扬琴-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'大钟寺分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"尤克里里-历史-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '北京经济研究学院',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"全科辅导-生物-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '国土分校',   '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"历史-声乐-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '北京小雨点教育培训',  '北京市北京市怀柔区', '111.474665', '36.125937',10,15,56,153,956,678,"全科辅导-手风琴-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'南北分校',  '北京市北京市朝阳区', '111.474665', '36.125937',10,15,56,153,956,678,"英语-历史-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'中关村分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"奥数-四年级-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"素描-一年级-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'中关村分校001',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"语文-理综-五年级","45963587");
INSERT INTO `campuses` VALUES(NULL,'中关村分校',  '北京市北京市海淀区海淀大','111.474665', '36.125937',10,15,56,153,956,678,"政治-数学-五年级","45963587");
INSERT INTO `campuses` VALUES(NULL,'钢琴3分校',  '北京市海淀区大红门分校','111.474665', '36.125937',10,15,56,153,956,678,"DJ培训-小提琴-五年级","45963587");
INSERT INTO `campuses` VALUES(NULL, '清华一中',  '北京市北京市海淀区中关村','111.474665', '36.125937',10,15,56,153,956,678,"全科辅导-化学-五年级","45963587");
INSERT INTO `campuses` VALUES(NULL, '山西美智分校',  '北京市海淀区苏州街分校','111.474665', '36.125937',10,15,56,153,956,678,"生物-PHP-五年级","45963587");
INSERT INTO `campuses` VALUES(NULL, '魏公村分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"雅思-幼儿绘画-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '南京分校',  '北京市海淀区中关村分校','111.474665', '36.125937',10,15,56,153,956,678,"迪斯科-数学-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '简而明第一分校',  '北京市北京市东城区', '111.474665', '36.125937',10,15,56,153,956,678,"六年级-理综-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'大红门分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"水彩-篮球-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'中关村分校002',  '北京市北京市怀柔区', '111.474665', '36.125937',10,15,56,153,956,678,"钢琴-五年级-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'苏州街分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"托福-围棋-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'东西分校',  '北京市北京市昌平区', '111.474665', '36.125937',10,15,56,153,956,678,"跑酷-物理-生物","45963587");
INSERT INTO `campuses` VALUES(NULL, '北京一中',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"二年级-幼儿绘画-生物","45963587");
INSERT INTO `campuses` VALUES(NULL, '佳佳测试分校',  '北京市北京市朝阳区', '111.474665', '36.125937',10,15,56,153,956,678,"法语-全科辅导-生物","45963587");
INSERT INTO `campuses` VALUES(NULL, '北京新华字典',  '北京市北京市朝阳区', '111.474665', '36.125937',10,15,56,153,956,678,"管理-太极拳-生物","45963587");
INSERT INTO `campuses` VALUES(NULL, '嘎嘎嘎',  '北京市海淀区人民大学分校','111.474665', '36.125937',10,15,56,153,956,678,"全科辅导-油画-生物","45963587");
INSERT INTO `campuses` VALUES(NULL, '燕郊羽毛球俱乐部',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"初二-奥数-生物","45963587");
INSERT INTO `campuses` VALUES(NULL, '海淀黄庄分校',  '北京市北京市海淀区苏州街','111.474665', '36.125937',10,15,56,153,956,678,"全科辅导-声乐-生物","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京篮球俱乐部',  '北京市北京市西城区', '111.474665', '36.125937',10,15,56,153,956,678,"马头琴-小升初-生物","45963587");
INSERT INTO `campuses` VALUES(NULL, '昌平校区',  '北京市北京市东城区', '111.474665', '36.125937',10,15,56,153,956,678,"双簧管-奥数-生物","45963587");
INSERT INTO `campuses` VALUES(NULL, '北京分校',   '北京市北京市朝阳区', '111.474665', '36.125937',10,15,56,153,956,678,"柔道-大提琴-生物","45963587");
INSERT INTO `campuses` VALUES(NULL, '中关村分校',  '北京市海淀区魏公村分校','111.474665', '36.125937',10,15,56,153,956,678,"物理-四年级-瑜伽","45963587");
INSERT INTO `campuses` VALUES(NULL,'魏公村分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"五子棋-政治-瑜伽","45963587");
INSERT INTO `campuses` VALUES(NULL, '南开大学',  '北京市北京市东城区', '111.474665', '36.125937',10,15,56,153,956,678,"物理-爵士舞-瑜伽","45963587");
INSERT INTO `campuses` VALUES(NULL,'人民大学分校',   '北京市北京市朝阳区', '111.474665', '36.125937',10,15,56,153,956,678,"初二-五子棋-瑜伽","45963587");
INSERT INTO `campuses` VALUES(NULL,'艺术分校2',  '北京市北京市昌平区', '111.474665', '36.125937',10,15,56,153,956,678,"硬笔书法-卡通画-瑜伽","45963587");
INSERT INTO `campuses` VALUES(NULL,'招生秀测试机构',  '北京市海淀区中关村分校','111.474665', '36.125937',10,15,56,153,956,678,"生物-全科辅导-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '河北分校',  '北京市海淀区魏公村分校','111.474665', '36.125937',10,15,56,153,956,678,"乒乓球-数学-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '美国圣约翰大学',  '北京市海淀区中关村分校','111.474665', '36.125937',10,15,56,153,956,678,"瑜伽-坚琴-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '魏公村分校',  '北京市海淀区大钟寺分校','111.474665', '36.125937',10,15,56,153,956,678,"奥数-高考-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'国家图书馆分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"物理-语文-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '河北篮球俱乐部',  '北京市北京市东城区', '111.474665', '36.125937',10,15,56,153,956,678,"英语-初一-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京科大学院',  '北京市北京市朝阳区', '111.474665', '36.125937',10,15,56,153,956,678,"数学-意大利语-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '朝阳分校区',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"全科辅导-法语-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'壹线时空',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"语文-插画-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'中关村分校',  '北京市北京市朝阳区', '111.474665', '36.125937',10,15,56,153,956,678,"新概念英语-生物-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'魏公村分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"电视包装-数学-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL, '郑州信息工程职业学院',   '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"奥数-历史-全科辅导","45963587");
INSERT INTO `campuses` VALUES(NULL, '朝阳校区',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"语文-英语-全科辅导","45963587");
INSERT INTO `campuses` VALUES(NULL,'大钟寺分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"电子琴-桥牌-全科辅导","45963587");
INSERT INTO `campuses` VALUES(NULL,'海淀区分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"作文-数学-全科辅导","45963587");
INSERT INTO `campuses` VALUES(NULL,'昌平区分校',  '北京市海淀区西钓鱼台分校','111.474665', '36.125937',10,15,56,153,956,678,"声乐-外教口语-全科辅导","45963587");
INSERT INTO `campuses` VALUES(NULL, '北京台球俱乐部',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"兄弟连-高考-全科辅导","45963587");
INSERT INTO `campuses` VALUES(NULL,'西二旗校区',  '北京市海淀区魏公村分校','111.474665', '36.125937',10,15,56,153,956,678,"作文-英语-全科辅导","45963587");
INSERT INTO `campuses` VALUES(NULL, '北京一中',  '北京市北京市昌平区', '111.474665', '36.125937',10,15,56,153,956,678,"初三-普拉提-全科辅导","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京新华字典教育',  '北京市北京市昌平区', '111.474665', '36.125937',10,15,56,153,956,678,"民族舞-象棋-全科辅导","45963587");
INSERT INTO `campuses` VALUES(NULL, '德美北京海淀分校',  '北京市北京市海淀区', '111.474665', '36.125937',10,15,56,153,956,678,"语文-生物-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'北京分校',  '北京市北京市怀柔区', '111.474665', '36.125937',10,15,56,153,956,678,"沙画-钢琴-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'魏公村分校',  '北京市北京市朝阳区', '111.474665', '36.125937',10,15,56,153,956,678,"语文-奥数-手风琴","45963587");
INSERT INTO `campuses` VALUES(NULL,'中关村分校',  '北京市北京市昌平区珠江摩','111.474665', '36.125937',10,15,56,153,956,678,"托福-全科辅导-跆拳道","45963587");

-- ----------------------------
-- Table structure for `indexShowCourse` 
-- ----------------------------
CREATE TABLE indexShowCourse(
	showCourseId INT PRIMARY KEY AUTO_INCREMENT,
	showCourseName VARCHAR(20),
	showCourseMore VARCHAR(36),
	showCourseIcon VARCHAR(110),
	showMainName VARCHAR(45),
	showSmallName  VARCHAR(255)
)ENGINE=InnoDB AUTO_INCREMENT=9658536 DEFAULT CHARSET=UTF8;

INSERT INTO `indexShowCourse`(showCourseId, showCourseName, showCourseMore, showCourseIcon, showMainName, showSmallName) 
VALUES(NULL, "中小学", "更多课程","img/icon_middle.png","精品钢琴课@img/cls_mid1.jpg&精品数学课@img/cls_mid2.jpg","高中语文@img/cls_icon_chaness.png&小学英语@img/cls_icon_english.png&初中物理@img/cls_icon_wuli.png&高中数学@img/cls_icon_math.png");
INSERT INTO `indexShowCourse`(showCourseId, showCourseName, showCourseMore, showCourseIcon, showMainName, showSmallName) 
VALUES(NULL, "艺术/体育", "更多课程","img/icon_art.png","精品语文课@img/cls_mid3.jpg&精品生物课@img/cls_mid4.jpg","钢琴@img/cls_icon_gangqin.png&古筝@img/cls_icon_guzheng.png&吉他@img/cls_icon_jita.png&小提琴@img/cls_icon_tiqin.png");
INSERT INTO `indexShowCourse`(showCourseId, showCourseName, showCourseMore, showCourseIcon, showMainName, showSmallName) 
VALUES(NULL, "语言/留学", "更多课程","img/icon_liuxue.png","精品体育课@img/cls_mid5.jpg&精品麻将课@img/cls_mid6.jpg","葡萄牙语@img/cls_icon_putao.png&外教口语@img/cls_icon_waijiao.png&新概念英语@img/cls_icon_xingainian.png&剑桥英语@img/cls_icon_jianqiao.png");
INSERT INTO `indexShowCourse`(showCourseId, showCourseName, showCourseMore, showCourseIcon, showMainName, showSmallName) 
VALUES(NULL, "拓展训练", "更多课程","img/icon_tuozhan.png","精品出游课@img/cls_mid7.jpg&精品玩耍课@img/cls_mid8.jpg","冬夏令营@img/cls_icon_dongxia.png&亲子出游@img/cls_icon_qinzi.png&儿童乐园@img/cls_icon_ertong.png&拓展培训@img/cls_icon_tuozhanpei.png");

-- ----------------------------
-- Table structure for `showClass` 
-- ----------------------------
CREATE TABLE showClass(
	`showClassId` INT PRIMARY KEY AUTO_INCREMENT,
	`showClassImg` VARCHAR(65),
	`showClassName` VARCHAR(32),
	`classPid` VARCHAR(36)
)ENGINE=InnoDB AUTO_INCREMENT=9758536 DEFAULT CHARSET=UTF8;
INSERT INTO `showClass`(showClassId, showClassName, showClassImg, classPid) VALUES(NULL, "艺术", "img/class_art_icon.png", "15963587");
INSERT INTO `showClass`(showClassId, showClassName, showClassImg, classPid) VALUES(NULL, "体育", "img/class_tiyu_icon.png", "15963588");
INSERT INTO `showClass`(showClassId, showClassName, showClassImg, classPid) VALUES(NULL, "语言", "img/class_yuyan_icon.png", "15963589");
INSERT INTO `showClass`(showClassId, showClassName, showClassImg, classPid) VALUES(NULL, "留学", "img/class_liuxue_icon.png", "15963590");
INSERT INTO `showClass`(showClassId, showClassName, showClassImg, classPid) VALUES(NULL, "小学", "img/class_xiao_icon.png", "15963591");
INSERT INTO `showClass`(showClassId, showClassName, showClassImg, classPid) VALUES(NULL, "小升初", "img/class_sheng_icon.png", "15963592");
INSERT INTO `showClass`(showClassId, showClassName, showClassImg, classPid) VALUES(NULL, "初中", "img/class_chuzhong_icon.png", "15963593");
INSERT INTO `showClass`(showClassId, showClassName, showClassImg, classPid) VALUES(NULL, "中考", "img/class_zhongkao_icon.png", "15963594");
INSERT INTO `showClass`(showClassId, showClassName, showClassImg, classPid) VALUES(NULL, "高中", "img/class_gao_icon.png", "15963595");
INSERT INTO `showClass`(showClassId, showClassName, showClassImg, classPid) VALUES(NULL, "更多", "img/class_sheng_icon.png", "all");

-- ----------------------------
-- Table structure for `filter`
-- ----------------------------
DROP TABLE IF EXISTS `filter`;
CREATE TABLE `filter` (
	`filterId` INT PRIMARY KEY AUTO_INCREMENT,
  `filterTitle` varchar(32),
  `ValueOne` varchar(32),
  `ValueTwo` varchar(32),
  `ValueThree` varchar(32),
  `ValueFour` varchar(32),
  `ValueFive` varchar(32),
  `ValueSix` varchar(32),
  `ValueSeven` varchar(32)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

INSERT INTO `filter`(filterId, filterTitle, ValueOne, ValueTwo, ValueThree, ValueFour, ValueFive, ValueSix,ValueSeven)
VALUES(NULL, "班级类型", "免费试听/classType-1", "随时插班/classType-2","随时退班/classType-3","未开课/classType-4","0","0","0");

INSERT INTO `filter`(filterId, filterTitle, ValueOne, ValueTwo, ValueThree, ValueFour, ValueFive, ValueSix,ValueSeven)
VALUES(NULL, "活动优惠", "连报优惠/discount-1", "限时团购/discount-2","折扣/discount-3","立减/discount-4","0","0","0");

INSERT INTO `filter`(filterId, filterTitle, ValueOne, ValueTwo, ValueThree, ValueFour, ValueFive, ValueSix,ValueSeven)
VALUES(NULL, "上课时间", "周一/week-1", "周二/week-2","周三/week-3","周四/week-4","周五/week-5","周六/week-6","周日/week-7");

INSERT INTO `filter`(filterId, filterTitle, ValueOne, ValueTwo, ValueThree, ValueFour, ValueFive, ValueSix,ValueSeven)
VALUES(NULL, "具体时间", "上午/AM-1", "下午/PM-2","晚上/NM-3","0","0","0","0");

INSERT INTO `filter`(filterId, filterTitle, ValueOne, ValueTwo, ValueThree, ValueFour, ValueFive, ValueSix,ValueSeven)
VALUES(NULL, "价格区间", "0～1000/price-1", "1000～3000/price-2","3000～5000/price-3","5000～7000/price-4","7000～9000/price-5","9000以上/price-6","0");





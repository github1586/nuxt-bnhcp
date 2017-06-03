<template>
    <div id="slideBox" class="slideBox">
		<div class="bd">
			<ul>
				<li>
					<a class="pic" href="#"><img src="img/round01.jpg" /></a>
				</li>
				<li>
					<a class="pic" href="#"><img src="img/round01.jpg"/></a> 
				</li>
				<li>
					<a class="pic" href="#"><img src="img/round01.jpg"/></a>
				</li>
				<li>
					<a class="pic" href="#"><img src="img/round01.jpg"/></a>
				</li>
			</ul>
		</div>
		<!-- 圆点切换 -->
		<div class="hd">
			<ul>
				<li class="on"></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	</div>
</template>
<scrict>
    TouchSlide({ 
		slideCell:"#slideBox",
		titCell:".hd ul li",
		mainCell:".bd ul",
		effect:"leftLoop",
		autoPlay:true
	});
</scrict>
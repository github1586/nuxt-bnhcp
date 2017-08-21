 <template>
	<div class="loading_container">
    <div class="load_img" :style="{backgroundPositionY: -(positionY%7)*4 + 'rem'}">
    </div>
    <svg class="load_ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <ellipse cx="26" cy="10" rx="26" ry="10" style="fill:#ddd;stroke:none;"></ellipse>
		</svg>
	</div>
</template>

<script>
export default {
  data () {
    return {
      positionY: 0,
      timer: null
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.positionY ++
    }, 600)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
  @import '~static/common/style';
	@keyframes load{
		0%   {
      transform: translateY(0px);
    }
		50%  {transform: translateY(-50px);}
		100% {transform: translateY(0px);}
	}
  @keyframes ellipse{
		0%   {transform: scale(1);}
		50%  {transform: scale(0.3);}
		100% {transform: scale(1);}
	}
	@-webkit-keyframes ellipse{
		0%   {transform: scale(1);}
		50%  {transform: scale(0.3);}
		100% {transform: scale(1);}
	}
  @-ms-keyframes ellipse{
		0%   {transform: scale(1);}
		50%  {transform: scale(0.3);}
		100% {transform: scale(1);}
	}
  @-o-keyframes ellipse{
		0%   {transform: scale(1);}
		50%  {transform: scale(0.3);}
		100% {transform: scale(1);}
	}
    .loading_container{
    	position: fixed;
    	top: 50%;
    	left: 50%;
    	-webkit-transform: translate(-50%, -50%);
    	-o-transform: translate(-50%, -50%);
    	-ms-transform: translate(-50%, -50%);
    	transform: translate(-50%, -50%);
    	@include wh(5rem, 4rem);
    }
    .load_img{
    	@include wh(100%, 100%);
    	background: url(/img/icon_loading.png) no-repeat 0 0;
    	background-size: 100% auto;
    	transform: translateY(0px);
    	animation: load .6s infinite ease-in-out;
    	position: relative;
    	z-index: 11;
    }
	.load_ellipse{
		position: absolute;
		@include wh(5rem, 5rem);
		top: 2.2rem;
		left: 0.11rem;
		z-index: 10;
		animation: ellipse .6s infinite ease-in-out;
	}
</style>

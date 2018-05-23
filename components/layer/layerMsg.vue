 <template>
	<div class="loading_container">
    <div class="load_msg">
      {{this.msg}}
    </div>
	</div>
</template>
<script>
export default {
  props: ['msg']
}
</script>

<style lang="scss" scoped>
  @import '~static/common/style';
	@-webkit-keyframes load{
		0%   {opacity: 0;}
		10%  {opacity: 0.3;}
		20%  {opacity: 0.6;}
		30%  {opacity: 1;}
		40%  {opacity: 1;}
		50%  {opacity: 1;}
		60%  {opacity: 1;}
		70%  {opacity: 1;}
		80%  {opacity: 0.5;}
		90%  {opacity: 0.2;}
		100%  {opacity: 0;}
	}
	@-ms-keyframes load{
		0%   {opacity: 0;}
		10%  {opacity: 0.3;}
		20%  {opacity: 0.6;}
		30%  {opacity: 1;}
		40%  {opacity: 1;}
		50%  {opacity: 1;}
		60%  {opacity: 1;}
		70%  {opacity: 1;}
		80%  {opacity: 0.5;}
		90%  {opacity: 0.2;}
		100%  {opacity: 0;}
	}
	@-o-keyframes load{
		0%   {opacity: 0;}
		10%  {opacity: 0.3;}
		20%  {opacity: 0.6;}
		30%  {opacity: 1;}
		40%  {opacity: 1;}
		50%  {opacity: 1;}
		60%  {opacity: 1;}
		70%  {opacity: 1;}
		80%  {opacity: 0.5;}
		90%  {opacity: 0.2;}
		100%  {opacity: 0;}
	}
	@keyframes load{
		0%   {opacity: 0;}
		10%  {opacity: 0.5;}
		20%  {opacity: 1;}
		30%  {opacity: 1;}
		40%  {opacity: 1;}
		50%  {opacity: 1;}
		60%  {opacity: 1;}
		70%  {opacity: 1;}
		80%  {opacity: 1;}
		90%  {opacity: 0.2;}
		100%  {opacity: 0;}
	}
	.loading_container{
		position: fixed;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		@include wh(13rem, 3.5rem);
	}
	.load_msg{
		@include wh(100%, 100%);
    line-height: 3.5rem;
    background: #666;
    color: #fff;
    text-align: center;
    font-size: 14px;
    border-radius: 6px;
		// background: url(/img/icon_loading.png) no-repeat 0 0;
		background-size: 100% auto;
		transform: translateY(0px);
		animation: load 4s ease-in-out forwards;
		position: relative;
		z-index: 11;
	}
</style>

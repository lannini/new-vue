<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-input">
			<span class="iconfont">&#xe744;</span>
		  输入城市/景点/游玩主题
		</div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe673;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    export default{
        name:'HomeHeader',
        computed:{
            //['city']={city:'city'}映射什么？把vuex里面的公用数据'city',映射到名字叫city的计算属性里
            ...mapState(['city']), //...三个点是展开运算符 mapState 是指把 vuex里面的数据映射到这个组件computed的计算属性里
            ...mapGetters(['doubleCity'])
        }
    }
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
  .header
    display: flex
    background:$bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
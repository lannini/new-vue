<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-decommend :list="recommendList"></home-decommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
    import { mapState} from 'vuex'
    import  HomeHeader from './components/Header'
    import  HomeSwiper from './components/Swiper'
    import  HomeIcons from './components/Icons'
    import  HomeDecommend from './components/Decommend'
    import  HomeWeekend from './components/Weekend'
    import  axios from 'axios'
    export default{
        name:'Home',
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeDecommend,
            HomeWeekend,
        },
        data(){
            return{
                lastCity:'',
                swiperList:[],
                iconList:[],
                recommendList:[],
                weekendList:[]
            }
        },
        computed:{
            ...mapState(['city'])
        },
        methods:{
            getHomeInfo(){
                axios.get('/api/index.json?city='+this.city)
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                res = res.data
                if( res.ret && res.data ){
                    const data = res.data
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList
                }
            }
        },
        mounted(){  //页面挂载时，一定发一个ajax请求
            this.lastCity = this.city
            this.getHomeInfo()
        },
        activated(){ //页面重新被显示时，会被执行
            if( this.lastCity !== this.city ){
                this.lastCity = this.city
                this.getHomeInfo()
            }
        }
    }
</script>
<style>

</style>
<template>
    <div class="wrapper">
    <swiper :options="swiperOptions">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img
                    class="swiper-img"
                    :src="item.imgUrl"
            />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
    export default{
        name:'HomeSwiper',
        data(){
            return{
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                },
                swiperList:[{
                    id:'0001',
                    imgUrl:'//img1.qunarzz.com/sight/p0/2001/7c/7c46c8ef2938cd2da3.water.jpg_600x330_6920de52.jpg'
                },{
                    id:'0002',
                    imgUrl:'//img1.qunarzz.com/sight/p0/1912/8e/8e363c082affa93da3.water.jpg_600x330_c667e998.jpg'
                },{
                    id:'0003',
                    imgUrl:'//img1.qunarzz.com/sight/p0/1902/f2/f2e0213052717f7ca3.water.jpg_600x330_29ac7bfd.jpg'
                }]
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .wrapper >>>.swiper-pagination-bullet-active
        background:white
    .wrapper
        overflow:hidden
        width:100%
        height:0
        padding-bottom:55%
    .swiper-img
        width: 100%

</style>
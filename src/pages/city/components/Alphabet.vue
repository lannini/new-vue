<template>
        <ul class="list">
            <li
                class="item"
                v-for="item of letters"
                :key="item"
                :ref="item"
                @click="handleLetterClick"
                @touchstart="handelTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd"
            >{{item}}</li>
        </ul>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        props:{
            cities:Object
        },
        computed:{
            letters(){
                const letters = []
                for (let i in this.cities ){
                    letters.push(i)
                }
                return letters //返回：['A','B','C','D'...]
            }
        },
        data(){
            return{
                touchStatus:false,
                startY:0,
                timer:null //函数节流
            }
        },
        updated(){
            this.startY = this.$refs['A'][0].offsetTop
        },
        methods:{
            handleLetterClick(e){
                this.$emit('change',e.target.innerText)
            },
            handelTouchStart(){
                this.touchStatus = true
            },
            handleTouchMove(e){
                if( this.touchStatus ){

                    if( this.timer ){
                        clearTimeout(this.timer) //函数节流
                    }
                    this.timer = setTimeout(()=>{
                        const touchY = e.touches[0].clientY - 79
                        const index = Math.floor((touchY-this.startY)/20)
                        if( index>=0 && index < this.letters.length ){
                            this.$emit('change',this.letters[index])
                        }
                    },8)
                }
            },
            handleTouchEnd(){
                this.touchStatus = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
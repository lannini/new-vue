import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
    state:state,
    mutations:mutations,
    getters:{  //类似于组件里面的computed计算属性
        doubleCity(state){
            return state.city + ' ' + state.city
        }
    }
})
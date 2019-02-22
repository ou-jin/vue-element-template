import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: {},
        sideBarShow:false,
        currentRoute:'系统参数',
    },
    mutations: {
        updateSideBarShow (state, id) {
          state.sideBarShow = id
        },
        updateCurrentRoute (state, id) {
          state.currentRoute = id
        }
      },
      actions: {
        updateSideBarShow: (context, id) => {
          return context.commit('updateSideBarShow', id)
        },
        updateCurrentRoute: (context, id) => {
          return context.commit('updateCurrentRoute', id)
        }
      }
})
export default store
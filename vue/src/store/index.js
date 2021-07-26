import axios from 'axios';
import { createStore } from "vuex";
export default createStore({
  state: { //data
    qnaList: [],
    select: {},
  },
  getters: { //computed
    allQnaCount: state => { //parameter에 사용할 컴포넌트 넣기
      return state.qnaList.length+1
    }
  },
  mutations: { //payload는 파라미터로 넘어오는 값
    addQna: (state, payload) => {
      state.qnaList.push(payload)
    },
    loadQna: (state, payload) => {
      state.qnaList = payload;
    },
    pickQna: (state, payload) => {
      state.qnaList.forEach(item => {
        if (item.pk_idx == payload) state.select = item
      })
      
    }
  },
  actions: {
    addQna: ({ commit }, paylaod) => {
      commit('addQna', paylaod)
    },
    loadQna: ({ commit }) => {
      axios.get('http://localhost:8088/temp/api/qna/question')
        .then(payload => {
          commit('loadQna', payload.data)
      })
    },
    pickQna: ({ commit }, payload) => {
      commit('pickQna', payload) 
    }
  },
  modules: {}
});

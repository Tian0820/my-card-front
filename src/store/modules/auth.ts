import * as authApi from '../../api/auth'

const state = {
    currentName: '1111'
}

// actions 可异步
const actions = {

    fetchInfo({commit}, {name, onSuccess, onError}) {
        authApi.fetchInfo((data => {

        }), name)
    },
};

// mutations 必须同步
const mutations = {
    'saveCurrentName'(state, currentName) {
        state.currentName = currentName
    }
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
}
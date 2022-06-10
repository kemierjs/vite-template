import {createStore} from "vuex";


let store = createStore({
    state: {
        user: {
            name:'zs'
        }
    },
    getters: {
        user: function () {
            return function () {

            };
        }
    },
    mutations: {
        dataList(prop, {id, list}) {
            console.log(prop)
            // user[id] = list
            // console.log(id, list)
        }
    },
    actions: {
        fetchDate({commit}, {id, name}) {
            // let list = [{id, name}]
            commit('changeList', {
            })
        }
    },
});
export {store}

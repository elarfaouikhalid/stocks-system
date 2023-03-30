import axios from "axios";
import swal from 'sweetalert';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
export default {
    namespaced: true,
    state: {
        products: [],
        last_page: 0,
        currentPage: 1,
        Pagenumber: 0,
        Startpaginate: 1,
        maxPage: 7
    },
    mutations: {
        setProducts(state, products) {
            state.products = products
        },
        addProduct(state, product) {
            state.products.push(product);
        },
        setlastpage(state, last_page) {
            state.last_page = last_page;
        },
        setCurrentpage(state, currentPage) {
            state.currentPage = currentPage
        },
        setNumberpage(state, Pagenumber) {
            state.Pagenumber = Pagenumber
        },
        setStartpage(state, Startpaginate) {
            state.Startpaginate = Startpaginate
        },
        setMaxpage(state, maxPage) {
            state.maxPage = maxPage
        }
    },
    getters: {
        products(state) {
            return state.products
        },
        lastPage(state) {
            return state.last_page
        },
        currentPage(state) {
            return state.currentPage
        },
        Pagenumber(state) {
            return state.Pagenumber
        },
        startPaginates(state) {
            return state.Startpaginate
        },
        maxPages(state) {
            return state.maxPage
        }
    },
    actions: {
        async createproduct(_, productdata) {
            try {

                const response = await axios.post("auth/store", productdata);
                console.log(response);
                swal({
                    title: "Success!",
                    text: response.data.success,
                    icon: "success",
                    button: "OK",
                    timer: 2000
                });
                
            } catch (error) {
                console.log(error);
                swal({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                    button: "OK",
                });
            }
        },
        async getproducts({ commit }) {
            try {
                const response = await axios.get("auth/products");
                // console.log(response.data.products.total);
                commit('setProducts', response.data.products.data);
                commit('setlastpage', response.data.products.last_page);
                commit("setNumberpage", response.data.products.total)
            } catch (error) {
                
            }
            // console.log(this.state.lastPage)
        },
        async getpaginate({ commit }, page) {
            try {
                const response = await axios.get(`auth/products?page=${page}`);
                // console.log(response.data);
                commit('setProducts', response.data.products.data);
                commit('setlastpage', response.data.products.last_page);
                commit('setCurrentpage', response.data.products.current_page);
            } catch (error) {
                
            }
        },
        async destroy(_, id) {
            try {
                const response = await axios.delete(`auth/delete/${id}`)
                // console.log(response);  
                console.log("yes");  
                // dispatch("getproducts")
            } catch (error) {
                console.log(error)
            }
        },
        async next({ commit, state }) {
            const response = await axios.get("auth/products");
            console.log(response.data.products.last_page)
            let first = state.Startpaginate + 7;// current page + 1
            let second = first + 7; // current page + 7
            if(second > response.data.products.last_page) {
                second = response.data.products.last_page;
            }
            if(first <= response.data.products.last_page) {
                second = response.data.products.last_page;
            }
            if(first > response.data.products.last_page) {
                second = response.data.products.last_page;
                first = state.Startpaginate
                console.log("next can't work anymore")
                commit('setCurrentpage', first);
                commit('setStartpage', first);
                commit('setMaxpage', second);
                return;
            }
            // if(second response.data.products.last_page)
            commit('setCurrentpage', first);
            commit('setStartpage', first);
            commit('setMaxpage', second);
        },
        async prev({ commit, state }) {
            const response = await axios.get("auth/products");
            console.log(response.data.products.last_page)
            let first = state.Startpaginate - 7;// current page + 1
            let second = state.setMaxpage - 7; // current page + 7
            // if(first > response.data.products.last_page) {
            //     second = response.data.products.last_page;
            //     first = state.Startpaginate
            //     console.log("next can't work anymore")
            //     commit('setCurrentpage', first);
            //     commit('setStartpage', first);
            //     commit('setMaxpage', second);
            //     return;
            // }
            if(first < 1) {
                first = 1;
                second = 7;
                commit('setCurrentpage', first);
                commit('setStartpage', first);
                commit('setMaxpage', second);
                console.log("prev can't work anymore")
                return;
            }
            commit('setCurrentpage', first);
            commit('setStartpage', first);
            commit('setMaxpage', second);
        },
        async paginatecontrol({ commit, state }) {
            const response = await axios.get("auth/products");
            console.log(response.data.products.last_page)
            let first = state.Startpaginate; // current page + 1
            let second = state.maxPage; // current page + 7
            if(state.maxPage > response.data.products.last_page) {
                second = response.data.products.last_page;
            }
            console.log(first)
            console.log(second)
            commit('setCurrentpage', first);
            commit('setStartpage', first);
            commit('setMaxpage', second);
        }
        // async startPagination(_, )
        // setupRealtime({ commit }) {
        //     window.Echo = new Echo({
        //       broadcaster: 'pusher',
        //       key: '742862e3b1227f0bddeb',
        //       cluster: 'eu',
        //       encrypted: true,
        //     });
        //     window.Echo.channel('product-created').listen('ProductCreated', (data) => {
        //       console.log(data);
        //       console.log("this is websocket");
        //       commit('addProduct', data.product);
        //     });
        // }
    }
}
import axios from 'axios';
import swal from 'sweetalert';

export default {
    namespaced: true,
    state: {
        orders: [],
        orderId: null,
        hasInvoice: false
    },
    mutations: {
        setOrders(state, order) {
            state.order = order
        },
        addOrder(state, order) {
            state.orders.push(order)
        },
        setOrderId(state, orderId) {
            state.orderId = orderId
        },
        sethasInvoice(state, hasInvoice) {
            this.hasInvoice = hasInvoice
        }
    },
    getters: {
        orders(state) {
            return state.orders
        },
        getorderId(state) {
            return state.orderId
        },
        getifhasInvoice(state) {
            return state.hasInvoice
        }
    },
    actions: {
        async createOrder({ commit }, orderData) {
            try {
                const response = await axios.post("store/order", orderData)
                commit('setOrderId', response.data.order_id)
                swal({
                    title: "Success!",
                    text: response.data.success,
                    icon: "success",
                    button: "OK",
                    timer: 2000
                });
                return Promise.resolve(response.data);
            } catch (error) {
                console.log(error);
                swal({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                    button: "OK",
                });
                return Promise.reject(error);
            }
        }, 
        async storeOrderdata({ commit }, orderId) {
            try {
                commit('setOrderId', orderId);
            } catch (error) {
                
            }
        },
        async GetifhasInvoice({ commit }, customerid) {
            const response = await axios.get("order/hasInvoice", customerid)
            console.log(response)
            commit('sethasInvoice', response.data.IsHasInvois);
        }
        // async getorders({ commit }) {
        //     try {
        //         const response = await axios.get("auth/orders")
        //         console.log(response.data.orders);
        //         commit('setorders', response.data.orders);
        //     } catch (error) {
                
        //     }
        // }
    },
}
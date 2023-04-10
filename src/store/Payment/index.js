import axios from 'axios';
import swal from 'sweetalert';

export default {
    namespaced: true,
    state: {
        customers: []
    },
    mutations: {
        setCustomers(state, customer) {
            state.customers.push(customer)
        }
    },
    getters: {
        customers(state) {
            return state.customers
        }
    },
    actions: {
        async Createpayment({ commit }) {
            const response = await axios.get("payment/customer");
            response.data.clients.map((client) => {
                commit("setCustomers", client)
            })
        }
    },
}
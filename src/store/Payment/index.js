import axios from 'axios';
import swal from 'sweetalert';

export default {
    namespaced: true,
    state: {
        
    },
    mutations: {
        
    },
    getters: {

    },
    actions: {
        Createpayment() {
            const response = axios.get("payment/customer");
            
        }
    },
}
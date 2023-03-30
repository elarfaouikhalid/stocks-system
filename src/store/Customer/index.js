import axios from 'axios';
import swal from 'sweetalert';

export default {
    namespaced: true,
    state: {
        customers: [],
        customerName: '',
        customerId: null,
        customerAnalytic: '',
        percent: '',
        classchart: '',
        // customerData: {
        //     labels: [],
        //     counts: [],
        // },
        days: 7,
        customerChartData: [],
    },
    mutations: {
        setCustomers(state, customers) {
            state.customers = customers
        },
        setCustomerName(state, customerName) {
            state.customerName = customerName
        },
        setCustomerId(state, customerId) {
            state.customerId = customerId
        },
        addCustomer(state, customer) {
            state.customers.push(customer)
        },
        setcustomerAnalytic(state, customerAnalytic) {
            state.customerAnalytic = customerAnalytic
        },
        setcustomerPercent(state, percent) {
            state.percent = percent
        },
        setclassChart(state, classchart) {
            state.classchart = classchart
        },
        setCustomerData(state, data) {
            state.customerData = data;
        },
        setDays(state, days) {
            state.days = days;
        },
        setCustomerChartData(state, data) {
            state.customerChartData = data;
        },
    },
    getters: {
        customers(state) {
            return state.customers
        },
        getcustomerName(state) {
            return state.customerName
        },
        getcustomerId(state) {
            return state.customerId
        },
        getAnalyticCustomer(state) {
            return state.customerAnalytic
        },
        getPercentCustomer(state) {
            return state.percent
        },
        getclass(state) {
            return state.classchart
        },
        getDay(state) {
            return state.days   
        },
        getCustomerChartData(customerChartData) {
            state.customerChartData = customerChartData
        } 

    },
    actions: {
        async creatcustomer(_, customerData) {
            try {
                const response = await axios.post("store/customer", customerData)
                swal({
                    title: "Success!",
                    text: response.data.success,
                    icon: "success",
                    button: "OK",
                    timer: 2000
                })
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
        async getcustomers({ commit }) {
            try {
                const response = await axios.get("auth/customers")
                console.log(response.data.customers);
                commit('setCustomers', response.data.customers);
            } catch (error) {
                
            }
        },
        async storeCustomerdata({ commit }, { customerName, customerId }) {
            try {
                commit('setCustomerName', customerName);
                commit('setCustomerId', customerId);
            } catch (error) {
                
            }
        },
        async searchCustomer({ commit }, customerSearch) {
            try {
              const response = await axios.get("customer/search", { params: { customerSearch: customerSearch } })
              commit('setCustomers', response.data.customers);
            } catch (error) {
              // handle error
            }
        },
        async customerAnalytics({ commit }, Days) {
            const response = await axios.get("customer/analytic", { params: { Days: Days } })
            console.log(response.data.percent)
            commit("setDays", Days)
            commit("setcustomerAnalytic", response.data.lastCustomer)
            commit("setcustomerPercent", response.data.percent)
            commit("setclassChart", response.data.class)
        },
        fetchCustomerData({ commit }, Days) {
            return axios.get("customer/analytic", { params: { Days: Days } })
              .then(response => {
                commit('setCustomerData', response.data);
              })
              .catch(error => {
                console.log(error);
              });
        },
        fetchCustomerChartData({ commit }, days) {
            return new Promise((resolve, reject) => {
              axios.get("customer/chart", { params: { Days: days } })
                .then(response => {
                  commit('setCustomerChartData', response.data);
                  resolve(response.data);
                })
                .catch(error => {
                  console.error(error);
                  reject(error);
                });
            });
        }
    },
}
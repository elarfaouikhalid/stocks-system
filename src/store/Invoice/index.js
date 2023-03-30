import axios from 'axios';
import swal from 'sweetalert';

export default {
    namespaced: true,
    state: {
        invoices: [],
        searchResults: []
    },
    mutations: {
        setInvoices(state, invoice) {
            state.invoice = invoice
        },
        addInvoice(state, invoice) {
            state.invoices.push(order)
        },
        setSearchResults(state, searchResults) {
            state.searchResults = searchResults;
            // console.log(state.searchResults);
        }
    },
    getters: {
        orders(state) {
            return state.orders
        },
        SearchResult(state) {
            return state.searchResults
        }
    },
    actions: {
        async createInvoice({ commit }, { InvoiceData, ProductData }) {
            try {
                const response = await axios.post("store/invoice", {
                    ...InvoiceData,
                    invoices: ProductData,
                  }, {
                    headers: {
                      "Content-Type": "application/json"
                    }
                  });
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
        // async searchProducts({ commit }, dataSearch) {
        //     try {
        //         commit('setSearchResults', null);
        //         const response = await axios.get("product/search", { params: { dataSearch: dataSearch } })
        //         // console.log(response.data.products)
        //         response.data.products.map(product => {
        //             commit('setSearchResults', [...state.searchResults, product.name]);
        //         });
        //         console.log(state.setSearchResults);
        //         // debugger
        //     } catch (error) {
                
        //     }
        // },
        async searchProducts({ commit }, dataSearch) {
            try {
              const response = await axios.get("product/search", { params: { dataSearch: dataSearch } })
              const searchResults = response.data.products.map(product => ({ id: product.id, name: product.name, price: product.price }));
              commit('setSearchResults', searchResults);
            } catch (error) {
              // handle error
            }
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
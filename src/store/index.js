import { createStore } from 'vuex';
import auth from './auth/index';
import product from './product/index';
import customer from './Customer/index'
import order from './Order/index'
import invoice from './Invoice/index'

export default createStore({
  state: {

  },
  mutations: {

  },
  actions: {
  },
  modules: {
    auth,
    product,
    customer,
    order,
    invoice,
  }
})

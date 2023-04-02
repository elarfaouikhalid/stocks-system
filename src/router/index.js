import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import Signin from '../views/Signin.vue'
import NotFound from '@/views/NotFound.vue'
import Profile from "@/views/Profile.vue"
import Customers from "@/views/Customers"
import Invoice from "@/views/Invoice"
import Logs from "@/views/Logs"
import Payment from "@/views/Payment"
import swal from 'sweetalert';

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  // },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      // console.log(store.getters['auth/authenticated'])
      if(!store.getters['auth/authenticated']) {
        return next({ name: 'Signin' })
      }

      next()
    }
  },
  {
    path: '/admin/logs',
    name: 'Logs',
    component: Logs,
    beforeEnter: (to, from, next) => {
      // console.log(store.getters['auth/authenticated'])
      if(!store.getters['auth/authenticated']) {
        return next({ name: 'Signin' })
      }

      next()
    }
  },
  {
    path: '/Customers',
    name: 'Customers',
    component: Customers,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']) {
        return next({ name: 'Signin' })
      }
      // Show the modal here
      swal({
        title: "",
        text: "make sure to select customer you would like to create an order for",
        icon: "warning",
        button: "OK"
      }).then((result) => {
          next();
      });
      document.body.style.overflow = 'auto';
      const modalBackdrop = document.querySelector('.modal-backdrop.fade.show');
        if (modalBackdrop) {
          modalBackdrop.parentNode.removeChild(modalBackdrop);
        }
      next();
    
    }
    
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
    beforeEnter: (to, from, next) => {
      // console.log(store.getters['auth/authenticated'])
      if(!store.getters['auth/authenticated']) {
        return next({ name: 'Signin' })
      }

      next()
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      // console.log(store.getters['auth/authenticated'])
      if(!store.getters['auth/authenticated']) {
        return next({ name: 'Signin' })
      }

      next()
    }
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component: Invoice,
    beforeEnter: (to, from, next) => {
      // console.log(store.getters['auth/authenticated'])
      if(!store.getters['auth/authenticated']) {
        return next({ name: 'Signin' })
      }

      next()
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    beforeEnter: (to, from, next) => {
      // console.log(store.getters['auth/authenticated'])
      if(store.getters['auth/authenticated']) {
        return next({ name: 'Dashboard' })
      }
      
      next()
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    beforeEnter: (to, from, next) => {
      if(!store.getters["auth/authenticated"]) {
        return next({ name: 'Signin' })
      }

      next()
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

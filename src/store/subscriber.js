import axios from 'axios';
import store from '@/store';

store.subscribe((mutation, state) => {

    if(mutation.type === 'auth/setToken') {

        // console.log(state.auth.logs)
        if(mutation.payload) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
            localStorage.setItem('token', mutation.payload);
        }
        else {
            axios.defaults.headers.common['Authorization'] = null
            localStorage.removeItem('token');
            store.dispatch('auth/signOut');
        }

    }

})


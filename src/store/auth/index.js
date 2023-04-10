import axios from "axios";
import swal from 'sweetalert';  

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    logs: [],
    profileImage: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUser(state, data) {
      state.user = data
    },
    setLogs(state, log) {
      state.logs.push(log)
    },
    setProfileImage(state, image) { // new mutation to update the profile image
      state.profileImage = image
    }
  },
  getters: {
    authenticated(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user
    },
    logs(state) {
      return state.logs
    },
    profileImage(state) { // new getter to retrieve the profile image
      return state.profileImage
    }
  },
  actions: {
    async signin({ dispatch, commit }, credentials) {
      try {
        if(credentials) {
            const response = await axios.post('login', credentials);
            // console.log(response.data.token);
            // commit('setLogs', credentials)
            return dispatch("attempt", response.data.token)
        }
        // Handle successful login
      } catch (error) {
          console.log("failed");
        swal({
          title: "Error!",
          text: error.response.data.errors,
          icon: "error",
          button: "OK",
        });
      }
    },
    async attempt({ commit, state }, token) {
      try {
        // console.log(state.user);
        // debugger
        if(token) {
          commit('setToken', token)
          console.log(token)
        }
        if(!state.token) { 
          return;
        }
        if(token) {
          const response = await axios.get("auth/user-profile")
          commit('setUser', response.data)
          console.log(response.data)

          console.log("all good keep going");
        }

      } catch (error) {
        commit('setUser', null)
        commit('setToken', null)
      }
    },
    async changeProfile({ commit }, UserData) {
      const response = await axios.post("auth/profile", UserData)
      console.log(response);
      swal({
        title: "Success!",
        text: response.data.success,
        icon: "success",
        button: "OK",
        timer: 2000
      });
    },
    async getProfileData({ commit }, userId) {
        try {
          const response = await axios.get("data/profile", { params: { user_id: userId } })
          console.log(response.data.profiledata[0].profile_image)
          commit("setProfileImage", response.data.profiledata[0].profile_image)
        } catch (error) {
          // handle error
        }
    },
    signOut({ commit }) {
      return axios.post('auth/logout').then(() => {
        commit('setUser', null)
        commit('setToken', null)
        store.dispatch('auth/attempt', mutation.payload);
        // this.$router.replace({ name: 'Signin' })
      })
    },
    async logs({ commit, state }) {  
      state.logs = [];
      const response = await axios.get('user/logs')
      response.data.logs.map((log) => {
        commit("setLogs", log)
      })
    },
    async creatcompany(_, companyData) {
      try {
          const response = await axios.post("Admin/company", companyData)
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
  }
}

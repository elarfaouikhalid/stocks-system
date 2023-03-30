<template lang="">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" rel="stylesheet" />
    <!-- <script src="https://cldup.com/S6Ptkwu_qA.js"></script> -->
<body id="particles-js"></body>
<div class="animated bounceInDown">
  <div class="container">
    <span class="error animated tada" id="msg"></span>
    <form name="form1" class="box" @submit.prevent="submit()">
      <h4><span>Inventory Management for Your Business</span></h4>
      <h5>Sign In</h5>
        <input type="text" v-model="user.email" name="email" id="email" placeholder="Email">
        <i class="typcn typcn-eye" id="eye" @click="toggleShowPassword"></i>
        <input :type="passwordVisible ? 'text' : 'password'" v-model="user.password" id="password" name="password" placeholder="Passsword">
        <label>
          <input type="checkbox">
          <span></span>
          <small class="rmb">Remember me</small>
        </label>
        <a href="#" class="forgetpass">Forget Password?</a>
        <!-- <input type="submit" value="Sign in" > -->
        <button class="btn1">Sign in</button>
      </form>
        <!-- <a href="#" class="dnthave">Don’t have an account? Sign up</a> -->
      </div> 
       <!-- <div class="footer">
      <span>Made with <i class="fa fa-heart pulse"></i> <a href="https://codepen.io/lordgamer2354">By Anees Khan</a></span>
    </div> -->
</div>

<!-- <Loading v-if="loading" /> -->
<div class="page page-center" v-if="loading">
    <div class="container-slim py-4">
        <div class="text-center">
            <div class="mb-3">
            <a href="." class="navbar-brand navbar-brand-autodark"><img :src="require('@/static/logo.jpg')" height="36" alt=""></a>
            </div>
            <div class="text-muted mb-3">Preparing application</div>
            <div class="progress progress-sm">
            <div class="progress-bar progress-bar-indeterminate"></div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import { mapActions } from 'vuex';
import Loading from "@/components/Loading.vue";

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      loading: false,
      passwordVisible: false
    }
  },
  components: {Loading},
  methods: {
    ...mapActions({
      'signIn': 'auth/signin'
    }),
    submit() {
      this.loading = true;
      this.signIn(this.user).then(() => {
        this.$router.replace({name: 'Dashboard'}) 
      })
      .finally(() => {
        this.loading = false; // set loading state to false when login process is completed
      });
    },
    toggleShowPassword() {
      this.passwordVisible = !this.passwordVisible;
    }
  }
}

</script>
<style scoped>
    /* CSS Libraries Used 

*Animate.css by Daniel Eden.
*FontAwesome 4.7.0
*Typicons

*/

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');

body, html {
  font-family: 'stockmanagmentFont', sans-serif !important;
  background-color: #000000;
  padding: 0;
  margin: 0;
}
* {
  font-family: 'stockmanagmentFont', sans-serif !important;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
}

.container{
  margin: 0;
    top: 50px;
    left: 50%;
    position: absolute;
    text-align: center;
    transform: translateX(-50%);
    background-color: rgb( 33, 41, 66 );
    border-radius: 9px;
    /* border-top: 10px solid #ffffff; */
    /* border-right: 10px solid #ffffff; */
    width: 400px;
    height: 500px;
    /* box-shadow: 1px 1px 108.8px 19.2px rgb(25 31 53); */
    /* border-left: 10px solid #ffffff; */
    /* box-shadow: 1px 1px 108.8px 19.2px rgb(25 31 53); */
    /* box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px; */
    box-shadow: rgb(0 0 255 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px;
}

.box h4 {
  font-family: 'stockmanagmentFont', sans-serif;
  color: #5c6bc0; 
  font-size: 18px;
  margin-top:72px;
}

.box h4 span {
  color: #dfdeee;
  font-weight: lighter;
}

.box h5 {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 13px;
  color: #a1a4ad;
  letter-spacing: 1.5px;
  /* margin-top: -15px; */
  margin-bottom: 70px;
}

.box input[type = "text"],.box #password {
  display: block;
  margin: 20px auto;
  background: #262e49;
  border: 0;
  border-radius: 5px;
  padding: 14px 10px;
  width: 320px;
  outline: none;
  color: #d6d6d6;
      -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out;
  
}
::-webkit-input-placeholder {
  color: #565f79;
}

.box input[type = "text"]:focus,.box input[type = "password"]:focus {
  border: 1px solid #79A6FE;
  
}

a{
  color: #5c7fda;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

 label input[type = "checkbox"] {
  display: none; /* hide the default checkbox */
}

/* style the artificial checkbox */
label span {
  height: 17px;
    width: 15px;
    border: 2px solid #464d64;
    border-radius: 2px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    float: left;
    left: 170%;
}

.btn1 {
    border: 0;
    background: #7f5feb;
    color: #000000;
    border-radius: 100px;
    width: 340px;
    height: 49px;
    font-size: 16px;
    position: relative;
    /* top: 104%; */
    /* left: 8%; */
    transition: 0.3s;
    cursor: pointer;
    margin-top: 2rem;
}

.btn1:hover {
  background: #5d33e6;
}

.rmb {
  position: absolute;
  margin-left: -24%;
  margin-top: 0px;
  color: #dfdeee;
  font-size: 13px;
}

.forgetpass {
  position: relative;
  float: right;
  right: 28px;
}

.dnthave{
    position: absolute;
    top: 92%;
    left: 24%;
}

[type=checkbox]:checked + span:before {/* <-- style its checked state */
    font-family: FontAwesome;
    font-size: 16px;
    content: "\f00c";
    position: absolute;
    top: -4px;
    color: #896cec;
    left: -1px;
    width: 13px;
}

.typcn {
  position: absolute;
  left: 324px;
  top: 282px;
  color: #3b476b;
  font-size: 22px;
  cursor: pointer;
}      

.typcn.active {
  color: #7f60eb;
}

.error {
  background: #ff3333;
  text-align: center;
  width: 337px;
  height: 20px;
  padding: 2px;
  border: 0;
  border-radius: 5px;
  margin: 10px auto 10px;
  position: absolute;
  top: 31%;
  left: 7.2%;
  color: white;
  display: none;
}

.footer {
    position: relative;
    left: 0;
    bottom: 0;
    top: 605px;
    width: 100%;
    color: #78797d;
    font-size: 14px;
    text-align: center;
}

.footer .fa {
  color: #7f5feb;;
}
.page-center {
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
}
.container-slim{
  background-color: #1d243d;
}
</style>
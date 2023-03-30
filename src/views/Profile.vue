<template lang="">
  <div class="page">
<!-- Navbar -->
<Navbar />
    <div class="page-wrapper">
  <!-- Page header -->
  <div class="page-header d-print-none">
    <div class="container-xl">
      <div class="row g-2 align-items-center">
        <div class="col">
          <h2 class="page-title">
            Account Settings
          </h2>
        </div>
      </div>
    </div>
  </div>
  <!-- Page body -->
  <div class="page-body">
    <div class="container-xl">
      <div class="card">
        <div class="row g-0">
          <div class="col-3 d-none d-md-block border-end">
            <div class="card-body">
              <h4 class="subheader">Business settings</h4>
              <div class="list-group list-group-transparent">
                <a href="./settings.html" class="list-group-item list-group-item-action d-flex align-items-center active">My Account</a>
                <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">My Notifications</a>
                <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">Connected Apps</a>
                <router-link class="list-group-item list-group-item-action d-flex align-items-center" :to="{name: 'Logs'}">User Logs</router-link>
                <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">Billing & Invoices</a>
              </div>
              <h4 class="subheader mt-4">Experience</h4>
              <div class="list-group list-group-transparent">
                <a href="#" class="list-group-item list-group-item-action">Give Feedback</a>
              </div>
            </div>
          </div>
          <div class="col d-flex flex-column">
            <div class="card-body">
              <h2 class="mb-4">{{ user.name }}</h2>
              <h3 class="card-title" style="font-weight:bold;">Details</h3>
              <div class="row align-items-center">
                <div class="col-auto"><span class="avatar avatar-xl">
                  <img :src="profileImage ?? require('@/static/avatars/1648638378950.jpg')" alt="Profile Image">
                </span>
                </div>
                <form @submit.prevent="updateprofile()" enctype="multipart/form-data">
                  <div class="col-auto"> 
                    <input @change="handleFileUpload" id="profile_image" type="file" name="profile_image" />
                    <button type="submit" class="btn btn-success ms-auto">
                      <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                      Update Your Profile
                    </button>
                  </div>
                </form>
              </div>
              <h3 class="card-title mt-4" style="font-weight:bold;">Company Info</h3>
              <br/>
              <form @submit.prevent="CreatCompanyData()">
                <div class="row g-6">
                  <div class="col-md">
                    <div class="form-label">Company Name</div>
                    <input v-model="companyData.name" name="name" type="text" class="form-control">
                  </div>
                  <div class="col-md">
                    <div class="form-label">Company address</div>
                    <input v-model="companyData.adress" name="adress" type="text" class="form-control">
                  </div>
                </div>
                <br/>
                <div class="row g-6">
                  <div class="col-md">
                    <div class="form-label">Company email</div>
                    <input v-model="companyData.email" name="email" type="text" class="form-control">
                  </div>
                  <div class="col-md">
                    <div class="form-label">Postal Code</div>
                    <input v-model="companyData.postal_code" name="postal_code" type="text" class="form-control">
                  </div>
                </div>
                <div class="row g-6">
                  <div class="col-md">
                    <div class="form-label">Company Phone</div>
                    <input v-model="companyData.phone" name="phone" type="text" class="form-control">
                  </div>
                  <div class="col-md">
                    <div class="form-label">Location</div>
                    <input v-model="companyData.city" name="city" type="text" class="form-control">
                  </div>
                </div>
                <div class="row g-6">
                  <div class="col-md">
                    <div class="form-label">Company RIB</div>
                    <input v-model="companyData.rib" name="RIB" type="text" class="form-control">
                  </div>
                </div>
                <div class="card-footer bg-transparent mt-auto">
              <div class="btn-list justify-content-end">
                <a href="#" class="btn">
                  Cancel
                </a>
                <button type="submit" class="btn btn-primary ms-auto">
                      <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                      Update Your Profile
                    </button>
              </div>
            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer footer-transparent d-print-none">
    <div class="container-xl">
      <div class="row text-center align-items-center flex-row-reverse">
        <div class="col-lg-auto ms-lg-auto">
          <ul class="list-inline list-inline-dots mb-0">
            <li class="list-inline-item"><a href="./docs/" class="link-secondary">Documentation</a></li>
            <li class="list-inline-item"><a href="./license.html" class="link-secondary">License</a></li>
            <li class="list-inline-item"><a href="https://github.com/tabler/tabler" target="_blank" class="link-secondary" rel="noopener">Source code</a></li>
            <li class="list-inline-item">
              <a href="https://github.com/sponsors/codecalm" target="_blank" class="link-secondary" rel="noopener">
                <!-- Download SVG icon from http://tabler-icons.io/i/heart -->
                <svg xmlns="http://www.w3.org/2000/svg" class="icon text-pink icon-filled icon-inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                Sponsor
              </a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-auto mt-3 mt-lg-0">
          <ul class="list-inline list-inline-dots mb-0">
            <li class="list-inline-item">
              Copyright &copy; 2023
              <a href="." class="link-secondary">Tabler</a>.
              All rights reserved.
            </li>
            <li class="list-inline-item">
              <a href="./changelog.html" class="link-secondary" rel="noopener">
                v1.0.0-beta17
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>
</div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { Navbar },
  data() {
    return {
      userdata: {
        'profile_image': '',
        'user_id': null
      },
      companyData: {
        'name': '',
        'adress': '',
        'rib': '',
        'email': '',
        'phone': '',
        'postal_code': '',
        'city': ''
      },
      file: null
    }
  },
  computed: {
    ...mapGetters({
      'user': 'auth/user',
      "profileImage": "auth/profileImage"
    })
  },
  mounted() {
    this.getUserDataProfile(this.user.id)
    console.log(this.profileImage)
  },
  methods: {
    ...mapActions({
      "changeProfile": "auth/changeProfile",
      "getProfileData": "auth/getProfileData",
      "CreatCompany": "auth/creatcompany",
    }),
    handleFileUpload(event) {
      this.file = event.target.files[0];
      this.userdata.profile_image = this.file;
    },
    updateprofile() {
      const formData = new FormData();
      formData.append('user_id', this.user.id);
      formData.append('profile_image', this.file);
      console.log(formData)
      this.changeProfile(formData)
      .then(() => this.getProfileData(this.user.id))
    },
    getUserDataProfile(userID) {
      this.getProfileData(userID)
    },
    CreatCompanyData() {
        this.CreatCompany(this.companyData)
        console.log(this.companyData)
    }
  }

}
</script>
<style lang="">

</style>
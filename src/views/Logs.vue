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
                    Security log
                </h2>
              </div>
            </div>
          </div>
        </div>
        <!-- Page body -->
        <div class="page-body">
          <div class="container-xl">
            <div class="card">
              <div class="card-body">
                <h4>Recent events</h4>
                <div v-for="log in Userlogs">
                  <pre>{{ log }}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Navbar },
  mounted() {
        this.Logs();
        
  },
  computed: {
    ...mapGetters({
      'user': 'auth/user',
      "Userlogs": 'auth/logs'
    })
  },
  methods: {
    ...mapActions({
           'Logs': 'auth/logs',
        }),
  }
    
}
</script>
<style lang="">
    
</style>
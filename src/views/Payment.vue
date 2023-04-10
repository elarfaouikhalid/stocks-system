<template lang="">
        <div class="page page-center">
      <div class="container container-tight py-4">
        <div class="card card-md">
          <div class="hr-text hr-text-center hr-text-spaceless">your data</div>
          <div class="card-body">
            <div>
              <label class="form-label">Clients</label>
                <input class="form-select mb-0" type="text" v-model="customerName" name="dataSearch" id="name" placeholder="Search..." @input="handleInput"/>
                <ul v-if="showSuggestions">
                    <li v-for="customer in customers" :key="customer" @click="addName(customer.name)">
                        {{ customer.name }}
                    </li>
                </ul>
            </div>
            <div class="mt-3">
              <label class="form-label">Amount Total</label>
                <input class="form-control" type="text" v-model="dataSearch" name="dataSearch" id="name" placeholder="Search..." @input="handleInput"/>
            </div>
            <div class="mt-3">
              <label class="form-label">Unpaid Amount</label>
                <input class="form-control" type="text" v-model="dataSearch" name="dataSearch" id="name" placeholder="Search..." @input="handleInput"/>
            </div>
          </div>
        </div>
        <div class="row align-items-center mt-3">
          <div class="col-4">
            <div class="progress">
              <div class="progress-bar" :style="{ width: width }" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" aria-label="25% Complete">
                <span class="visually-hidden">25% Complete</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="btn-list justify-content-end">
              <a href="#" class="btn btn-link link-secondary">
                Set up later
              </a>
              <a href="#" class="btn btn-primary">
                Continue
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            showSuggestions: true,
            width: "",
            customerName: ''
        }
    },
    computed: {
      ...mapGetters({
        'customers': 'payment/customers',
      })
    },
    created() {
      this.createpayment()
    },
    methods: {
      ...mapActions({
           'createpayment': 'payment/Createpayment',
        }),
      addName(name) {
        this.customerName = name
        this.width = "25%G"
        this.width += "25%"
      }
    }
}
</script>
<style scoped>
    ul {
        /* position: absolute; */
        top: 100%;
        left: 0;
        right: 0;
        margin: 0;
        padding: 0;
        /* background-color: #fff; */
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        z-index: 10;
        max-height: 300px;
        overflow-y: auto;
        }

        li {
        list-style-type: none;
        padding: 10px;
        font-size: 16px;
        line-height: 1.5;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
        }

        li:hover {
            background-color: #f5f5f5;
        }
        li:hover a {
            color: #000000;
        }
</style>
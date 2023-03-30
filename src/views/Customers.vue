<template lang="en">
  <div class="page">
    <!-- Navbar -->
    <Navbar />
       <!-- Page body -->
       <div class="page-body">
         <div class="container-xl">
           <div class="row row-cards">
             <div class="col-12">
               <div class="card">
                 <div class="card-header">
                   <h3 class="card-title">Invoices</h3>
                 </div>
                 <div class="card-body border-bottom py-3">
                   <div class="d-flex">
                     <div class="text-muted">
                       Show
                       <div class="mx-2 d-inline-block">
                         <input type="text" class="form-control form-control-sm" value="8" size="3" aria-label="Invoices count">
                       </div>
                       entries
                     </div>
                     <div class="ms-auto text-muted">
                       Search:
                       <div class="ms-2 d-inline-block">
                         <input v-model="customerSearch" type="text" class="form-control form-control-sm" aria-label="Search invoice">
                       </div>
                     </div>
                   </div>
                 </div>
                 <div class="table-responsive">
                   <table class="table card-table table-vcenter text-nowrap datatable">
                     <thead>
                       <tr> 
                         <th>Customer Name</th>
                         <th>Email</th>
                         <th>Phone</th>
                         <th>Adress</th>
                         <th>City</th>
                         <th></th>
                         <th></th>
                       </tr>
                     </thead>
                     <tbody>
                      <tr>
                        <div>
                          no data was found
                        </div>
                      </tr>
                       <tr v-for="(customer, index) in customers" :key="index">
                         <td>
                           <span class="flag flag-country-us"></span>
                           {{ customer.name }}
                         </td>
                         <td>
                            {{ customer.email }}
                         </td>
                         <td>
                            {{ customer.phone }}
                         </td>
                         <td>
                            {{ customer.address }}
                         </td>
                         <td>{{ customer.city }}</td>
                         <td class="text-end">
                           <button class="btn btn-primary" @click="showCreateOrderModal(customer.id, customer.name)">
                            create Order
                           </button>
                         </td>
                         <td>
                          <button class="btn btn-success">
                            create Invoice
                           </button>
                         </td>
                       </tr>
                  
                     </tbody>
                   </table>
                 </div>
                 <div class="card-footer d-flex align-items-center">
                   <p class="m-0 text-muted">Showing <span>1</span> to <span>8</span> of <span>16</span> entries</p>
                   <ul class="pagination m-0 ms-auto">
                     <li class="page-item disabled">
                       <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                         <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
                         <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                         prev
                       </a>
                     </li>
                     <li class="page-item"><a class="page-link" href="#">1</a></li>
                     <li class="page-item active"><a class="page-link" href="#">2</a></li>
                     <li class="page-item"><a class="page-link" href="#">3</a></li>
                     <li class="page-item"><a class="page-link" href="#">4</a></li>
                     <li class="page-item"><a class="page-link" href="#">5</a></li>
                     <li class="page-item">
                       <a class="page-link" href="#">
                         next <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
                         <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
    </div>

    <div class="modal modal-blur fade" id="createOrderModal" tabindex="-1" role="dialog" aria-hidden="true" :class="{ show: showOrderModal }">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create an Order for Customer #{{ selectedCustomerName }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form @submit.prevent="storeOrder()">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Name</label>
              <p class="form-control">{{ selectedCustomerName }}</p>
            </div>
          </div>
          <div class="modal-body">
            <p hidden>{{ selectedCustomerId }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-link link-danger" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-success ms-auto">
              <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
              Confirm
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            selectedCustomerId: null,
            selectedCustomerName: null,
            order: {
                'customer_id': ''
            },
            selectedifhasInvoice: false,
            orderId: '',
            customerSearch: ''
        }
    },
    components: { Navbar },
    created() {
        this.GetCustomers();        
    },
    mounted() {
    },
    methods: {
        ...mapActions({
            "GetCustomers": "customer/getcustomers",
            "CreateOrder": "order/createOrder",
            "StoreCustomerdata": "customer/storeCustomerdata",
            "StoreOrderdata": "order/storeOrderdata",
            "searchCustomer": "customer/searchCustomer",
            
        }),
        showCreateOrderModal(customerId, customerName) {
            this.selectedCustomerId = customerId;
            this.selectedCustomerName = customerName;
            this.order.customer_id = customerId;
            this.StoreCustomerdata({customerName, customerId})
            console.log(this.GetcustomerId)
            console.log(this.GetcustomerName)
            const createOrderModal = new bootstrap.Modal(document.getElementById('createOrderModal'), {});
            createOrderModal.show();
        },
        async storeOrder() {
          try {
            // this.showOrderModal = true;
            const orderData = await this.CreateOrder(this.order)
            .then((responseData) => {
              const orderId = responseData.order_id;
              console.log(`this is id ${orderId}`)
              this.StoreOrderdata(orderId);
              this.orderId = orderId
              console.log(this.GetorderId)
              this.$router.push('/Invoice');
            // Do something with the order ID
            });
            // this.showOrderModal = false;
            // this.showInvoiceModal = true;
            // Do something with the order data (e.g., display it in the second modal)
          } catch (error) {
            // Handle the error
          }
        },
        async searchForCustomer() {
            try {
                if(this.customerSearch) {
                  this.searchCustomer(this.customerSearch)
                } else {
                  this.GetCustomers()
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    computed: {
        ...mapGetters({
           'customers': "customer/customers",
           'GetorderId': "order/getorderId",
           'GetcustomerName': "customer/getcustomerName",
           'GetcustomerId': "customer/getcustomerId",
        })
    },
    watch: {
      customerSearch() {
        // Call a method to update the search suggestions based on the new query
          this.searchForCustomer();
      },
    }
}
</script>
<style scoped>
:root {
--text-color: #fff; /* set the default text color to black */
}

/* set the text color to white in dark mode */
.theme-dark:not(body) {
--text-color: #fff;
}

/* set the text color to black when body has the theme-dark class */
body.theme-dark {
--text-color: #fff !important;
}

/* apply the text color to all elements */
body.theme-dark * {
color: #fff;
}
</style>